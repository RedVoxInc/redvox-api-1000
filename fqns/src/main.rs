use protobuf_parser::{Field, FieldType, Message};
use std::collections::HashSet;
use std::io::{self, Read, Write};

fn find_messages(msg: &Message) -> Vec<&Message> {
    if msg.messages.is_empty() {
        vec![msg]
    } else {
        let mut msgs = vec![msg];

        for child_msg in &msg.messages {
            msgs.extend_from_slice(find_messages(&child_msg).as_slice())
        }

        msgs
    }
}

fn msg_names<'a>(msgs: &[&'a Message]) -> HashSet<&'a String> {
    msgs.iter().map(|msg| &msg.name).collect()
}

fn is_msg<'a>(
    field: &Field,
    msgs: &[&'a Message],
    msg_names: &HashSet<&String>,
) -> Option<&'a Message> {
    match field.typ {
        FieldType::MessageOrEnum(ref val) => {
            if msg_names.contains(val) {
                Some(*msgs.iter().find(|msg| msg.name == *val).unwrap())
            } else {
                None
            }
        }
        _ => None,
    }
}

fn qualify_field(field: &Field, msgs: &[&Message], msg_names: &HashSet<&String>) -> Vec<String> {
    match is_msg(field, msgs, msg_names) {
        None => vec![field.name.to_string()],
        Some(msg) => {
            let mut qualified_names: Vec<String> = qualify_message(msg, msgs, msg_names)
                .iter()
                .map(|m| format!("{}.{}", field.name, m))
                .collect();

            qualified_names.insert(0, field.name.to_string());

            qualified_names
        }
    }
}

fn qualify_message(msg: &Message, msgs: &[&Message], msg_names: &HashSet<&String>) -> Vec<String> {
    msg.fields
        .iter()
        .map(|f| qualify_field(f, msgs, msg_names))
        .flatten()
        .collect()
}

fn main() {
    let mut buf = String::new();
    io::stdin().read_to_string(&mut buf).unwrap();
    let file_desc = protobuf_parser::FileDescriptor::parse(&buf.as_bytes()).unwrap();
    let root_msg = file_desc
        .messages
        .iter()
        .find(|msg| msg.name == "RedvoxPacketM")
        .unwrap();

    let msgs = find_messages(&root_msg);
    let msg_names = msg_names(&msgs);

    let fully_qualified_names = qualify_message(&root_msg, &msgs, &msg_names);

    std::fs::write("api_m_fqns.txt", &fully_qualified_names.join("\n")).unwrap();

    let as_consts: Vec<String> = fully_qualified_names
        .iter()
        .map(|fqn| fqn.replace(".", "_").to_uppercase())
        .collect();

    // Code generation
    let mut rout = std::fs::File::create("api_m_fqns.rs").unwrap();
    let mut pout = std::fs::File::create("api_m_fqns.py").unwrap();
    for i in 0..fully_qualified_names.len() {
        let constant = &as_consts[i];
        let fqn = &fully_qualified_names[i];
        rout.write_all(format!("pub const {}: &str = \"{}\";\n", constant, fqn).as_bytes())
            .unwrap();
        pout.write_all(format!("{}: str = \"{}\"\n", constant, fqn).as_bytes())
            .unwrap();
    }
}
