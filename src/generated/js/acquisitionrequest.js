// source: src/redvox_api_m/redvox_api_m.proto
/**
 * @fileoverview
 * @enhanceable
 * @suppress {messageConventions} JS Compiler reports an error if a variable or
 *     field starts with 'MSG_' and isn't a translatable message.
 * @public
 */
// GENERATED CODE -- DO NOT EDIT!

goog.provide('proto.redvox_api_m.AcquisitionRequest');

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
proto.redvox_api_m.AcquisitionRequest = function(opt_data) {
  jspb.Message.initialize(this, opt_data, 0, -1, null, null);
};
goog.inherits(proto.redvox_api_m.AcquisitionRequest, jspb.Message);
if (goog.DEBUG && !COMPILED) {
  /**
   * @public
   * @override
   */
  proto.redvox_api_m.AcquisitionRequest.displayName = 'proto.redvox_api_m.AcquisitionRequest';
}



if (jspb.Message.GENERATE_TO_OBJECT) {
/**
 * Creates an object representation of this proto.
 * Field names that are reserved in JavaScript and will be renamed to pb_name.
 * Optional fields that are not set will be set to undefined.
 * To access a reserved field use, foo.pb_<name>, eg, foo.pb_default.
 * For the list of reserved names please see:
 *     net/proto2/compiler/js/internal/generator.cc#kKeyword.
 * @param {boolean=} opt_includeInstance Deprecated. whether to include the
 *     JSPB instance for transitional soy proto support:
 *     http://goto/soy-param-migration
 * @return {!Object}
 */
proto.redvox_api_m.AcquisitionRequest.prototype.toObject = function(opt_includeInstance) {
  return proto.redvox_api_m.AcquisitionRequest.toObject(opt_includeInstance, this);
};


/**
 * Static version of the {@see toObject} method.
 * @param {boolean|undefined} includeInstance Deprecated. Whether to include
 *     the JSPB instance for transitional soy proto support:
 *     http://goto/soy-param-migration
 * @param {!proto.redvox_api_m.AcquisitionRequest} msg The msg instance to transform.
 * @return {!Object}
 * @suppress {unusedLocalVariables} f is only used for nested messages
 */
proto.redvox_api_m.AcquisitionRequest.toObject = function(includeInstance, msg) {
  var f, obj = {
    authToken: jspb.Message.getFieldWithDefault(msg, 1, ""),
    firebaseToken: jspb.Message.getFieldWithDefault(msg, 2, ""),
    checksum: jspb.Message.getFieldWithDefault(msg, 3, 0),
    isEncrypted: jspb.Message.getBooleanFieldWithDefault(msg, 4, false),
    payload: msg.getPayload_asB64(),
    seqId: jspb.Message.getFieldWithDefault(msg, 6, 0)
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
 * @return {!proto.redvox_api_m.AcquisitionRequest}
 */
proto.redvox_api_m.AcquisitionRequest.deserializeBinary = function(bytes) {
  var reader = new jspb.BinaryReader(bytes);
  var msg = new proto.redvox_api_m.AcquisitionRequest;
  return proto.redvox_api_m.AcquisitionRequest.deserializeBinaryFromReader(msg, reader);
};


/**
 * Deserializes binary data (in protobuf wire format) from the
 * given reader into the given message object.
 * @param {!proto.redvox_api_m.AcquisitionRequest} msg The message object to deserialize into.
 * @param {!jspb.BinaryReader} reader The BinaryReader to use.
 * @return {!proto.redvox_api_m.AcquisitionRequest}
 */
proto.redvox_api_m.AcquisitionRequest.deserializeBinaryFromReader = function(msg, reader) {
  while (reader.nextField()) {
    if (reader.isEndGroup()) {
      break;
    }
    var field = reader.getFieldNumber();
    switch (field) {
    case 1:
      var value = /** @type {string} */ (reader.readString());
      msg.setAuthToken(value);
      break;
    case 2:
      var value = /** @type {string} */ (reader.readString());
      msg.setFirebaseToken(value);
      break;
    case 3:
      var value = /** @type {number} */ (reader.readInt64());
      msg.setChecksum(value);
      break;
    case 4:
      var value = /** @type {boolean} */ (reader.readBool());
      msg.setIsEncrypted(value);
      break;
    case 5:
      var value = /** @type {!Uint8Array} */ (reader.readBytes());
      msg.setPayload(value);
      break;
    case 6:
      var value = /** @type {number} */ (reader.readInt64());
      msg.setSeqId(value);
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
proto.redvox_api_m.AcquisitionRequest.prototype.serializeBinary = function() {
  var writer = new jspb.BinaryWriter();
  proto.redvox_api_m.AcquisitionRequest.serializeBinaryToWriter(this, writer);
  return writer.getResultBuffer();
};


/**
 * Serializes the given message to binary data (in protobuf wire
 * format), writing to the given BinaryWriter.
 * @param {!proto.redvox_api_m.AcquisitionRequest} message
 * @param {!jspb.BinaryWriter} writer
 * @suppress {unusedLocalVariables} f is only used for nested messages
 */
proto.redvox_api_m.AcquisitionRequest.serializeBinaryToWriter = function(message, writer) {
  var f = undefined;
  f = message.getAuthToken();
  if (f.length > 0) {
    writer.writeString(
      1,
      f
    );
  }
  f = message.getFirebaseToken();
  if (f.length > 0) {
    writer.writeString(
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
  f = message.getIsEncrypted();
  if (f) {
    writer.writeBool(
      4,
      f
    );
  }
  f = message.getPayload_asU8();
  if (f.length > 0) {
    writer.writeBytes(
      5,
      f
    );
  }
  f = message.getSeqId();
  if (f !== 0) {
    writer.writeInt64(
      6,
      f
    );
  }
};


/**
 * optional string auth_token = 1;
 * @return {string}
 */
proto.redvox_api_m.AcquisitionRequest.prototype.getAuthToken = function() {
  return /** @type {string} */ (jspb.Message.getFieldWithDefault(this, 1, ""));
};


/**
 * @param {string} value
 * @return {!proto.redvox_api_m.AcquisitionRequest} returns this
 */
proto.redvox_api_m.AcquisitionRequest.prototype.setAuthToken = function(value) {
  return jspb.Message.setProto3StringField(this, 1, value);
};


/**
 * optional string firebase_token = 2;
 * @return {string}
 */
proto.redvox_api_m.AcquisitionRequest.prototype.getFirebaseToken = function() {
  return /** @type {string} */ (jspb.Message.getFieldWithDefault(this, 2, ""));
};


/**
 * @param {string} value
 * @return {!proto.redvox_api_m.AcquisitionRequest} returns this
 */
proto.redvox_api_m.AcquisitionRequest.prototype.setFirebaseToken = function(value) {
  return jspb.Message.setProto3StringField(this, 2, value);
};


/**
 * optional int64 checksum = 3;
 * @return {number}
 */
proto.redvox_api_m.AcquisitionRequest.prototype.getChecksum = function() {
  return /** @type {number} */ (jspb.Message.getFieldWithDefault(this, 3, 0));
};


/**
 * @param {number} value
 * @return {!proto.redvox_api_m.AcquisitionRequest} returns this
 */
proto.redvox_api_m.AcquisitionRequest.prototype.setChecksum = function(value) {
  return jspb.Message.setProto3IntField(this, 3, value);
};


/**
 * optional bool is_encrypted = 4;
 * @return {boolean}
 */
proto.redvox_api_m.AcquisitionRequest.prototype.getIsEncrypted = function() {
  return /** @type {boolean} */ (jspb.Message.getBooleanFieldWithDefault(this, 4, false));
};


/**
 * @param {boolean} value
 * @return {!proto.redvox_api_m.AcquisitionRequest} returns this
 */
proto.redvox_api_m.AcquisitionRequest.prototype.setIsEncrypted = function(value) {
  return jspb.Message.setProto3BooleanField(this, 4, value);
};


/**
 * optional bytes payload = 5;
 * @return {string}
 */
proto.redvox_api_m.AcquisitionRequest.prototype.getPayload = function() {
  return /** @type {string} */ (jspb.Message.getFieldWithDefault(this, 5, ""));
};


/**
 * optional bytes payload = 5;
 * This is a type-conversion wrapper around `getPayload()`
 * @return {string}
 */
proto.redvox_api_m.AcquisitionRequest.prototype.getPayload_asB64 = function() {
  return /** @type {string} */ (jspb.Message.bytesAsB64(
      this.getPayload()));
};


/**
 * optional bytes payload = 5;
 * Note that Uint8Array is not supported on all browsers.
 * @see http://caniuse.com/Uint8Array
 * This is a type-conversion wrapper around `getPayload()`
 * @return {!Uint8Array}
 */
proto.redvox_api_m.AcquisitionRequest.prototype.getPayload_asU8 = function() {
  return /** @type {!Uint8Array} */ (jspb.Message.bytesAsU8(
      this.getPayload()));
};


/**
 * @param {!(string|Uint8Array)} value
 * @return {!proto.redvox_api_m.AcquisitionRequest} returns this
 */
proto.redvox_api_m.AcquisitionRequest.prototype.setPayload = function(value) {
  return jspb.Message.setProto3BytesField(this, 5, value);
};


/**
 * optional int64 seq_id = 6;
 * @return {number}
 */
proto.redvox_api_m.AcquisitionRequest.prototype.getSeqId = function() {
  return /** @type {number} */ (jspb.Message.getFieldWithDefault(this, 6, 0));
};


/**
 * @param {number} value
 * @return {!proto.redvox_api_m.AcquisitionRequest} returns this
 */
proto.redvox_api_m.AcquisitionRequest.prototype.setSeqId = function(value) {
  return jspb.Message.setProto3IntField(this, 6, value);
};


