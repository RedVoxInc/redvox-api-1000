/**
 * @fileoverview
 * @enhanceable
 * @suppress {messageConventions} JS Compiler reports an error if a variable or
 *     field starts with 'MSG_' and isn't a translatable message.
 * @public
 */
// GENERATED CODE -- DO NOT EDIT!

goog.provide('proto.redvox_api1000.SynchResponse');

goog.require('jspb.BinaryReader');
goog.require('jspb.BinaryWriter');
goog.require('jspb.Message');


/**
 * Generated by JsPbCodeGenerator.
 * @param {Array=} opt_data Optional initial data array, typically from a
 * server response, or constructed directly in Javascript. The array is used
 * in place and becomes part of the constructed object. It is not cloned.
 * If no data is provided, the constructed object will be empty, but still
 * valid.
 * @extends {jspb.Message}
 * @constructor
 */
proto.redvox_api1000.SynchResponse = function(opt_data) {
  jspb.Message.initialize(this, opt_data, 0, -1, null, null);
};
goog.inherits(proto.redvox_api1000.SynchResponse, jspb.Message);
if (goog.DEBUG && !COMPILED) {
  proto.redvox_api1000.SynchResponse.displayName = 'proto.redvox_api1000.SynchResponse';
}


if (jspb.Message.GENERATE_TO_OBJECT) {
/**
 * Creates an object representation of this proto suitable for use in Soy templates.
 * Field names that are reserved in JavaScript and will be renamed to pb_name.
 * To access a reserved field use, foo.pb_<name>, eg, foo.pb_default.
 * For the list of reserved names please see:
 *     com.google.apps.jspb.JsClassTemplate.JS_RESERVED_WORDS.
 * @param {boolean=} opt_includeInstance Whether to include the JSPB instance
 *     for transitional soy proto support: http://goto/soy-param-migration
 * @return {!Object}
 */
proto.redvox_api1000.SynchResponse.prototype.toObject = function(opt_includeInstance) {
  return proto.redvox_api1000.SynchResponse.toObject(opt_includeInstance, this);
};


/**
 * Static version of the {@see toObject} method.
 * @param {boolean|undefined} includeInstance Whether to include the JSPB
 *     instance for transitional soy proto support:
 *     http://goto/soy-param-migration
 * @param {!proto.redvox_api1000.SynchResponse} msg The msg instance to transform.
 * @return {!Object}
 * @suppress {unusedLocalVariables} f is only used for nested messages
 */
proto.redvox_api1000.SynchResponse.toObject = function(includeInstance, msg) {
  var f, obj = {
    seqId: jspb.Message.getFieldWithDefault(msg, 1, 0),
    subSeqId: jspb.Message.getFieldWithDefault(msg, 2, 0),
    recvTsUs: jspb.Message.getFieldWithDefault(msg, 3, 0),
    sendTsUs: jspb.Message.getFieldWithDefault(msg, 4, 0)
  };

  if (includeInstance) {
    obj.$jspbMessageInstance = msg;
  }
  return obj;
};
}


/**
 * Deserializes binary data (in protobuf wire format).
 * @param {jspb.ByteSource} bytes The bytes to deserialize.
 * @return {!proto.redvox_api1000.SynchResponse}
 */
proto.redvox_api1000.SynchResponse.deserializeBinary = function(bytes) {
  var reader = new jspb.BinaryReader(bytes);
  var msg = new proto.redvox_api1000.SynchResponse;
  return proto.redvox_api1000.SynchResponse.deserializeBinaryFromReader(msg, reader);
};


/**
 * Deserializes binary data (in protobuf wire format) from the
 * given reader into the given message object.
 * @param {!proto.redvox_api1000.SynchResponse} msg The message object to deserialize into.
 * @param {!jspb.BinaryReader} reader The BinaryReader to use.
 * @return {!proto.redvox_api1000.SynchResponse}
 */
proto.redvox_api1000.SynchResponse.deserializeBinaryFromReader = function(msg, reader) {
  while (reader.nextField()) {
    if (reader.isEndGroup()) {
      break;
    }
    var field = reader.getFieldNumber();
    switch (field) {
    case 1:
      var value = /** @type {number} */ (reader.readUint64());
      msg.setSeqId(value);
      break;
    case 2:
      var value = /** @type {number} */ (reader.readUint32());
      msg.setSubSeqId(value);
      break;
    case 3:
      var value = /** @type {number} */ (reader.readUint64());
      msg.setRecvTsUs(value);
      break;
    case 4:
      var value = /** @type {number} */ (reader.readUint64());
      msg.setSendTsUs(value);
      break;
    default:
      reader.skipField();
      break;
    }
  }
  return msg;
};


/**
 * Serializes the message to binary data (in protobuf wire format).
 * @return {!Uint8Array}
 */
proto.redvox_api1000.SynchResponse.prototype.serializeBinary = function() {
  var writer = new jspb.BinaryWriter();
  proto.redvox_api1000.SynchResponse.serializeBinaryToWriter(this, writer);
  return writer.getResultBuffer();
};


/**
 * Serializes the given message to binary data (in protobuf wire
 * format), writing to the given BinaryWriter.
 * @param {!proto.redvox_api1000.SynchResponse} message
 * @param {!jspb.BinaryWriter} writer
 * @suppress {unusedLocalVariables} f is only used for nested messages
 */
proto.redvox_api1000.SynchResponse.serializeBinaryToWriter = function(message, writer) {
  var f = undefined;
  f = message.getSeqId();
  if (f !== 0) {
    writer.writeUint64(
      1,
      f
    );
  }
  f = message.getSubSeqId();
  if (f !== 0) {
    writer.writeUint32(
      2,
      f
    );
  }
  f = message.getRecvTsUs();
  if (f !== 0) {
    writer.writeUint64(
      3,
      f
    );
  }
  f = message.getSendTsUs();
  if (f !== 0) {
    writer.writeUint64(
      4,
      f
    );
  }
};


/**
 * optional uint64 seq_id = 1;
 * @return {number}
 */
proto.redvox_api1000.SynchResponse.prototype.getSeqId = function() {
  return /** @type {number} */ (jspb.Message.getFieldWithDefault(this, 1, 0));
};


/** @param {number} value */
proto.redvox_api1000.SynchResponse.prototype.setSeqId = function(value) {
  jspb.Message.setProto3IntField(this, 1, value);
};


/**
 * optional uint32 sub_seq_id = 2;
 * @return {number}
 */
proto.redvox_api1000.SynchResponse.prototype.getSubSeqId = function() {
  return /** @type {number} */ (jspb.Message.getFieldWithDefault(this, 2, 0));
};


/** @param {number} value */
proto.redvox_api1000.SynchResponse.prototype.setSubSeqId = function(value) {
  jspb.Message.setProto3IntField(this, 2, value);
};


/**
 * optional uint64 recv_ts_us = 3;
 * @return {number}
 */
proto.redvox_api1000.SynchResponse.prototype.getRecvTsUs = function() {
  return /** @type {number} */ (jspb.Message.getFieldWithDefault(this, 3, 0));
};


/** @param {number} value */
proto.redvox_api1000.SynchResponse.prototype.setRecvTsUs = function(value) {
  jspb.Message.setProto3IntField(this, 3, value);
};


/**
 * optional uint64 send_ts_us = 4;
 * @return {number}
 */
proto.redvox_api1000.SynchResponse.prototype.getSendTsUs = function() {
  return /** @type {number} */ (jspb.Message.getFieldWithDefault(this, 4, 0));
};


/** @param {number} value */
proto.redvox_api1000.SynchResponse.prototype.setSendTsUs = function(value) {
  jspb.Message.setProto3IntField(this, 4, value);
};


