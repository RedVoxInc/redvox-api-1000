// source: src/redvox_api_m/redvox_api_m.proto
/**
 * @fileoverview
 * @enhanceable
 * @suppress {messageConventions} JS Compiler reports an error if a variable or
 *     field starts with 'MSG_' and isn't a translatable message.
 * @public
 */
// GENERATED CODE -- DO NOT EDIT!

goog.provide('proto.redvox_api_m.AcquisitionResponse');
goog.provide('proto.redvox_api_m.AcquisitionResponse.ResponseType');

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
proto.redvox_api_m.AcquisitionResponse = function(opt_data) {
  jspb.Message.initialize(this, opt_data, 0, -1, null, null);
};
goog.inherits(proto.redvox_api_m.AcquisitionResponse, jspb.Message);
if (goog.DEBUG && !COMPILED) {
  /**
   * @public
   * @override
   */
  proto.redvox_api_m.AcquisitionResponse.displayName = 'proto.redvox_api_m.AcquisitionResponse';
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
proto.redvox_api_m.AcquisitionResponse.prototype.toObject = function(opt_includeInstance) {
  return proto.redvox_api_m.AcquisitionResponse.toObject(opt_includeInstance, this);
};


/**
 * Static version of the {@see toObject} method.
 * @param {boolean|undefined} includeInstance Deprecated. Whether to include
 *     the JSPB instance for transitional soy proto support:
 *     http://goto/soy-param-migration
 * @param {!proto.redvox_api_m.AcquisitionResponse} msg The msg instance to transform.
 * @return {!Object}
 * @suppress {unusedLocalVariables} f is only used for nested messages
 */
proto.redvox_api_m.AcquisitionResponse.toObject = function(includeInstance, msg) {
  var f, obj = {
    responseType: jspb.Message.getFieldWithDefault(msg, 1, 0),
    checksum: jspb.Message.getFieldWithDefault(msg, 2, 0),
    details: jspb.Message.getFieldWithDefault(msg, 3, ""),
    resend: jspb.Message.getBooleanFieldWithDefault(msg, 4, false),
    seqId: jspb.Message.getFieldWithDefault(msg, 5, 0)
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
 * @return {!proto.redvox_api_m.AcquisitionResponse}
 */
proto.redvox_api_m.AcquisitionResponse.deserializeBinary = function(bytes) {
  var reader = new jspb.BinaryReader(bytes);
  var msg = new proto.redvox_api_m.AcquisitionResponse;
  return proto.redvox_api_m.AcquisitionResponse.deserializeBinaryFromReader(msg, reader);
};


/**
 * Deserializes binary data (in protobuf wire format) from the
 * given reader into the given message object.
 * @param {!proto.redvox_api_m.AcquisitionResponse} msg The message object to deserialize into.
 * @param {!jspb.BinaryReader} reader The BinaryReader to use.
 * @return {!proto.redvox_api_m.AcquisitionResponse}
 */
proto.redvox_api_m.AcquisitionResponse.deserializeBinaryFromReader = function(msg, reader) {
  while (reader.nextField()) {
    if (reader.isEndGroup()) {
      break;
    }
    var field = reader.getFieldNumber();
    switch (field) {
    case 1:
      var value = /** @type {!proto.redvox_api_m.AcquisitionResponse.ResponseType} */ (reader.readEnum());
      msg.setResponseType(value);
      break;
    case 2:
      var value = /** @type {number} */ (reader.readInt64());
      msg.setChecksum(value);
      break;
    case 3:
      var value = /** @type {string} */ (reader.readString());
      msg.setDetails(value);
      break;
    case 4:
      var value = /** @type {boolean} */ (reader.readBool());
      msg.setResend(value);
      break;
    case 5:
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
proto.redvox_api_m.AcquisitionResponse.prototype.serializeBinary = function() {
  var writer = new jspb.BinaryWriter();
  proto.redvox_api_m.AcquisitionResponse.serializeBinaryToWriter(this, writer);
  return writer.getResultBuffer();
};


/**
 * Serializes the given message to binary data (in protobuf wire
 * format), writing to the given BinaryWriter.
 * @param {!proto.redvox_api_m.AcquisitionResponse} message
 * @param {!jspb.BinaryWriter} writer
 * @suppress {unusedLocalVariables} f is only used for nested messages
 */
proto.redvox_api_m.AcquisitionResponse.serializeBinaryToWriter = function(message, writer) {
  var f = undefined;
  f = message.getResponseType();
  if (f !== 0.0) {
    writer.writeEnum(
      1,
      f
    );
  }
  f = message.getChecksum();
  if (f !== 0) {
    writer.writeInt64(
      2,
      f
    );
  }
  f = message.getDetails();
  if (f.length > 0) {
    writer.writeString(
      3,
      f
    );
  }
  f = message.getResend();
  if (f) {
    writer.writeBool(
      4,
      f
    );
  }
  f = message.getSeqId();
  if (f !== 0) {
    writer.writeInt64(
      5,
      f
    );
  }
};


/**
 * @enum {number}
 */
proto.redvox_api_m.AcquisitionResponse.ResponseType = {
  UNKNOWN: 0,
  OK: 1,
  AUTH_ERROR: 2,
  DATA_ERROR: 3,
  OTHER_ERROR: 4
};

/**
 * optional ResponseType response_type = 1;
 * @return {!proto.redvox_api_m.AcquisitionResponse.ResponseType}
 */
proto.redvox_api_m.AcquisitionResponse.prototype.getResponseType = function() {
  return /** @type {!proto.redvox_api_m.AcquisitionResponse.ResponseType} */ (jspb.Message.getFieldWithDefault(this, 1, 0));
};


/**
 * @param {!proto.redvox_api_m.AcquisitionResponse.ResponseType} value
 * @return {!proto.redvox_api_m.AcquisitionResponse} returns this
 */
proto.redvox_api_m.AcquisitionResponse.prototype.setResponseType = function(value) {
  return jspb.Message.setProto3EnumField(this, 1, value);
};


/**
 * optional int64 checksum = 2;
 * @return {number}
 */
proto.redvox_api_m.AcquisitionResponse.prototype.getChecksum = function() {
  return /** @type {number} */ (jspb.Message.getFieldWithDefault(this, 2, 0));
};


/**
 * @param {number} value
 * @return {!proto.redvox_api_m.AcquisitionResponse} returns this
 */
proto.redvox_api_m.AcquisitionResponse.prototype.setChecksum = function(value) {
  return jspb.Message.setProto3IntField(this, 2, value);
};


/**
 * optional string details = 3;
 * @return {string}
 */
proto.redvox_api_m.AcquisitionResponse.prototype.getDetails = function() {
  return /** @type {string} */ (jspb.Message.getFieldWithDefault(this, 3, ""));
};


/**
 * @param {string} value
 * @return {!proto.redvox_api_m.AcquisitionResponse} returns this
 */
proto.redvox_api_m.AcquisitionResponse.prototype.setDetails = function(value) {
  return jspb.Message.setProto3StringField(this, 3, value);
};


/**
 * optional bool resend = 4;
 * @return {boolean}
 */
proto.redvox_api_m.AcquisitionResponse.prototype.getResend = function() {
  return /** @type {boolean} */ (jspb.Message.getBooleanFieldWithDefault(this, 4, false));
};


/**
 * @param {boolean} value
 * @return {!proto.redvox_api_m.AcquisitionResponse} returns this
 */
proto.redvox_api_m.AcquisitionResponse.prototype.setResend = function(value) {
  return jspb.Message.setProto3BooleanField(this, 4, value);
};


/**
 * optional int64 seq_id = 5;
 * @return {number}
 */
proto.redvox_api_m.AcquisitionResponse.prototype.getSeqId = function() {
  return /** @type {number} */ (jspb.Message.getFieldWithDefault(this, 5, 0));
};


/**
 * @param {number} value
 * @return {!proto.redvox_api_m.AcquisitionResponse} returns this
 */
proto.redvox_api_m.AcquisitionResponse.prototype.setSeqId = function(value) {
  return jspb.Message.setProto3IntField(this, 5, value);
};


