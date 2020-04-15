/**
 * @fileoverview
 * @enhanceable
 * @suppress {messageConventions} JS Compiler reports an error if a variable or
 *     field starts with 'MSG_' and isn't a translatable message.
 * @public
 */
// GENERATED CODE -- DO NOT EDIT!

goog.provide('proto.redvox_api1000.AcquisitionRequest');

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
proto.redvox_api1000.AcquisitionRequest = function(opt_data) {
  jspb.Message.initialize(this, opt_data, 0, -1, null, null);
};
goog.inherits(proto.redvox_api1000.AcquisitionRequest, jspb.Message);
if (goog.DEBUG && !COMPILED) {
  proto.redvox_api1000.AcquisitionRequest.displayName = 'proto.redvox_api1000.AcquisitionRequest';
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
proto.redvox_api1000.AcquisitionRequest.prototype.toObject = function(opt_includeInstance) {
  return proto.redvox_api1000.AcquisitionRequest.toObject(opt_includeInstance, this);
};


/**
 * Static version of the {@see toObject} method.
 * @param {boolean|undefined} includeInstance Whether to include the JSPB
 *     instance for transitional soy proto support:
 *     http://goto/soy-param-migration
 * @param {!proto.redvox_api1000.AcquisitionRequest} msg The msg instance to transform.
 * @return {!Object}
 * @suppress {unusedLocalVariables} f is only used for nested messages
 */
proto.redvox_api1000.AcquisitionRequest.toObject = function(includeInstance, msg) {
  var f, obj = {
    payload: msg.getPayload_asB64(),
    isEncrypted: jspb.Message.getFieldWithDefault(msg, 2, false),
    checksum: jspb.Message.getFieldWithDefault(msg, 3, 0)
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
 * @return {!proto.redvox_api1000.AcquisitionRequest}
 */
proto.redvox_api1000.AcquisitionRequest.deserializeBinary = function(bytes) {
  var reader = new jspb.BinaryReader(bytes);
  var msg = new proto.redvox_api1000.AcquisitionRequest;
  return proto.redvox_api1000.AcquisitionRequest.deserializeBinaryFromReader(msg, reader);
};


/**
 * Deserializes binary data (in protobuf wire format) from the
 * given reader into the given message object.
 * @param {!proto.redvox_api1000.AcquisitionRequest} msg The message object to deserialize into.
 * @param {!jspb.BinaryReader} reader The BinaryReader to use.
 * @return {!proto.redvox_api1000.AcquisitionRequest}
 */
proto.redvox_api1000.AcquisitionRequest.deserializeBinaryFromReader = function(msg, reader) {
  while (reader.nextField()) {
    if (reader.isEndGroup()) {
      break;
    }
    var field = reader.getFieldNumber();
    switch (field) {
    case 1:
      var value = /** @type {!Uint8Array} */ (reader.readBytes());
      msg.setPayload(value);
      break;
    case 2:
      var value = /** @type {boolean} */ (reader.readBool());
      msg.setIsEncrypted(value);
      break;
    case 3:
      var value = /** @type {number} */ (reader.readInt64());
      msg.setChecksum(value);
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
proto.redvox_api1000.AcquisitionRequest.prototype.serializeBinary = function() {
  var writer = new jspb.BinaryWriter();
  proto.redvox_api1000.AcquisitionRequest.serializeBinaryToWriter(this, writer);
  return writer.getResultBuffer();
};


/**
 * Serializes the given message to binary data (in protobuf wire
 * format), writing to the given BinaryWriter.
 * @param {!proto.redvox_api1000.AcquisitionRequest} message
 * @param {!jspb.BinaryWriter} writer
 * @suppress {unusedLocalVariables} f is only used for nested messages
 */
proto.redvox_api1000.AcquisitionRequest.serializeBinaryToWriter = function(message, writer) {
  var f = undefined;
  f = message.getPayload_asU8();
  if (f.length > 0) {
    writer.writeBytes(
      1,
      f
    );
  }
  f = message.getIsEncrypted();
  if (f) {
    writer.writeBool(
      2,
      f
    );
  }
  f = message.getChecksum();
  if (f !== 0) {
    writer.writeInt64(
      3,
      f
    );
  }
};


/**
 * optional bytes payload = 1;
 * @return {string}
 */
proto.redvox_api1000.AcquisitionRequest.prototype.getPayload = function() {
  return /** @type {string} */ (jspb.Message.getFieldWithDefault(this, 1, ""));
};


/**
 * optional bytes payload = 1;
 * This is a type-conversion wrapper around `getPayload()`
 * @return {string}
 */
proto.redvox_api1000.AcquisitionRequest.prototype.getPayload_asB64 = function() {
  return /** @type {string} */ (jspb.Message.bytesAsB64(
      this.getPayload()));
};


/**
 * optional bytes payload = 1;
 * Note that Uint8Array is not supported on all browsers.
 * @see http://caniuse.com/Uint8Array
 * This is a type-conversion wrapper around `getPayload()`
 * @return {!Uint8Array}
 */
proto.redvox_api1000.AcquisitionRequest.prototype.getPayload_asU8 = function() {
  return /** @type {!Uint8Array} */ (jspb.Message.bytesAsU8(
      this.getPayload()));
};


/** @param {!(string|Uint8Array)} value */
proto.redvox_api1000.AcquisitionRequest.prototype.setPayload = function(value) {
  jspb.Message.setProto3BytesField(this, 1, value);
};


/**
 * optional bool is_encrypted = 2;
 * Note that Boolean fields may be set to 0/1 when serialized from a Java server.
 * You should avoid comparisons like {@code val === true/false} in those cases.
 * @return {boolean}
 */
proto.redvox_api1000.AcquisitionRequest.prototype.getIsEncrypted = function() {
  return /** @type {boolean} */ (jspb.Message.getFieldWithDefault(this, 2, false));
};


/** @param {boolean} value */
proto.redvox_api1000.AcquisitionRequest.prototype.setIsEncrypted = function(value) {
  jspb.Message.setProto3BooleanField(this, 2, value);
};


/**
 * optional int64 checksum = 3;
 * @return {number}
 */
proto.redvox_api1000.AcquisitionRequest.prototype.getChecksum = function() {
  return /** @type {number} */ (jspb.Message.getFieldWithDefault(this, 3, 0));
};


/** @param {number} value */
proto.redvox_api1000.AcquisitionRequest.prototype.setChecksum = function(value) {
  jspb.Message.setProto3IntField(this, 3, value);
};


