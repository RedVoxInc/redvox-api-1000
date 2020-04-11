## Enabling End-to-End encryption

API M supports end-to-end encryption through the `EncryptedRedvoxPacket1000` message type.

Four pieces of metadata are required for properly routing encrypted data:

1. The station ID
2. The station UUID
3. The authentication token
4. The authentication email

The station ID abd UUID are required for identifying and routing data for the particular station while the authentication information is required for verifying the authenticity of the data.

As such, these four pieces of metadata are stored separately from the rest of the encrypted payload in an embedded `Header` message.

The `EncryptedRedvoxPacket1000` message contains two fields:

1. header (bytes)
2. packet (bytes)

#### Encrypting and serializing the data

The [Pretty Good Privacy](https://en.wikipedia.org/wiki/Pretty_Good_Privacy) (PGP) encryption standard is to be used. The modern standard is described through [OpenPGP](https://www.openpgp.org/). The [GNU Privacy Guard](https://gnupg.org/) (GPG) provides a modern open source implementation of PGP.

Each user utilizing E2E encryption will be required to generate a public/private key pair. The public key must be provided to RedVox. RedVox will also make available its public key. Then:

1. The station builds a RedVox packet in memory as normal
2. When the packet is ready to be sent, the station id, uuid, authentication token, and authentication email are stored to a separate `Header` message.
3. The packet is serialized to bytes, compressed, and then encrypted using the __user's__ public key. 
4. The header is serialized to bytes, compressed, and then encrypted using __RedVox's__ public key.

or more succinctly:

* header bytes = `encrypt_redvox(compress(serialize(header)))`
* packet bytes = `encrypt_user(compress(serialize(packet)))`

The `EncryptedRedvoxPacket1000` is serialized and sent to the acquisition server at a separate endpoint specifically for E2E.  

#### Routing the encrypted data

The acquisition server receives the serialized encrypted message and then:

1. Deserializes the message
2. Decrypts only the `Header` message using RedVox's private key
3. Authenticates the message
    1. On failure, responds to client with failure message
    2. On success, the compressed and then encrypted packet contents are routed to the user
4. Only the user will be able to decrypt the packet using their private key

## Local Station Storage
