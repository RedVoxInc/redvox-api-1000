/**
 * @fileoverview
 * @enhanceable
 * @suppress {messageConventions} JS Compiler reports an error if a variable or
 *     field starts with 'MSG_' and isn't a translatable message.
 * @public
 */
// GENERATED CODE -- DO NOT EDIT!

goog.provide('proto.ImageChannel');

goog.require('jspb.BinaryReader');
goog.require('jspb.BinaryWriter');
goog.require('jspb.Map');
goog.require('jspb.Message');
goog.require('proto.SummaryStatistics');


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
proto.ImageChannel = function(opt_data) {
  jspb.Message.initialize(this, opt_data, 0, -1, proto.ImageChannel.repeatedFields_, null);
};
goog.inherits(proto.ImageChannel, jspb.Message);
if (goog.DEBUG && !COMPILED) {
  proto.ImageChannel.displayName = 'proto.ImageChannel';
}
/**
 * List of repeated fields within this message type.
 * @private {!Array<number>}
 * @const
 */
proto.ImageChannel.repeatedFields_ = [3,4];



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
proto.ImageChannel.prototype.toObject = function(opt_includeInstance) {
  return proto.ImageChannel.toObject(opt_includeInstance, this);
};


/**
 * Static version of the {@see toObject} method.
 * @param {boolean|undefined} includeInstance Whether to include the JSPB
 *     instance for transitional soy proto support:
 *     http://goto/soy-param-migration
 * @param {!proto.ImageChannel} msg The msg instance to transform.
 * @return {!Object}
 * @suppress {unusedLocalVariables} f is only used for nested messages
 */
proto.ImageChannel.toObject = function(includeInstance, msg) {
  var f, obj = {
    sensorDescription: jspb.Message.getFieldWithDefault(msg, 1, ""),
    meanSampleRateHz: +jspb.Message.getFieldWithDefault(msg, 2, 0.0),
    sampleTsUsList: jspb.Message.getRepeatedFloatingPointField(msg, 3),
    samplesList: msg.getSamplesList_asB64(),
    sampleRateStatistics: (f = msg.getSampleRateStatistics()) && proto.SummaryStatistics.toObject(includeInstance, f),
    metadataMap: (f = msg.getMetadataMap()) ? f.toObject(includeInstance, undefined) : []
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
 * @return {!proto.ImageChannel}
 */
proto.ImageChannel.deserializeBinary = function(bytes) {
  var reader = new jspb.BinaryReader(bytes);
  var msg = new proto.ImageChannel;
  return proto.ImageChannel.deserializeBinaryFromReader(msg, reader);
};


/**
 * Deserializes binary data (in protobuf wire format) from the
 * given reader into the given message object.
 * @param {!proto.ImageChannel} msg The message object to deserialize into.
 * @param {!jspb.BinaryReader} reader The BinaryReader to use.
 * @return {!proto.ImageChannel}
 */
proto.ImageChannel.deserializeBinaryFromReader = function(msg, reader) {
  while (reader.nextField()) {
    if (reader.isEndGroup()) {
      break;
    }
    var field = reader.getFieldNumber();
    switch (field) {
    case 1:
      var value = /** @type {string} */ (reader.readString());
      msg.setSensorDescription(value);
      break;
    case 2:
      var value = /** @type {number} */ (reader.readDouble());
      msg.setMeanSampleRateHz(value);
      break;
    case 3:
      var value = /** @type {!Array<number>} */ (reader.readPackedDouble());
      msg.setSampleTsUsList(value);
      break;
    case 4:
      var value = /** @type {!Uint8Array} */ (reader.readBytes());
      msg.addSamples(value);
      break;
    case 5:
      var value = new proto.SummaryStatistics;
      reader.readMessage(value,proto.SummaryStatistics.deserializeBinaryFromReader);
      msg.setSampleRateStatistics(value);
      break;
    case 6:
      var value = msg.getMetadataMap();
      reader.readMessage(value, function(message, reader) {
        jspb.Map.deserializeBinary(message, reader, jspb.BinaryReader.prototype.readString, jspb.BinaryReader.prototype.readString, null, "");
         });
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
proto.ImageChannel.prototype.serializeBinary = function() {
  var writer = new jspb.BinaryWriter();
  proto.ImageChannel.serializeBinaryToWriter(this, writer);
  return writer.getResultBuffer();
};


/**
 * Serializes the given message to binary data (in protobuf wire
 * format), writing to the given BinaryWriter.
 * @param {!proto.ImageChannel} message
 * @param {!jspb.BinaryWriter} writer
 * @suppress {unusedLocalVariables} f is only used for nested messages
 */
proto.ImageChannel.serializeBinaryToWriter = function(message, writer) {
  var f = undefined;
  f = message.getSensorDescription();
  if (f.length > 0) {
    writer.writeString(
      1,
      f
    );
  }
  f = message.getMeanSampleRateHz();
  if (f !== 0.0) {
    writer.writeDouble(
      2,
      f
    );
  }
  f = message.getSampleTsUsList();
  if (f.length > 0) {
    writer.writePackedDouble(
      3,
      f
    );
  }
  f = message.getSamplesList_asU8();
  if (f.length > 0) {
    writer.writeRepeatedBytes(
      4,
      f
    );
  }
  f = message.getSampleRateStatistics();
  if (f != null) {
    writer.writeMessage(
      5,
      f,
      proto.SummaryStatistics.serializeBinaryToWriter
    );
  }
  f = message.getMetadataMap(true);
  if (f && f.getLength() > 0) {
    f.serializeBinary(6, writer, jspb.BinaryWriter.prototype.writeString, jspb.BinaryWriter.prototype.writeString);
  }
};


/**
 * optional string sensor_description = 1;
 * @return {string}
 */
proto.ImageChannel.prototype.getSensorDescription = function() {
  return /** @type {string} */ (jspb.Message.getFieldWithDefault(this, 1, ""));
};


/** @param {string} value */
proto.ImageChannel.prototype.setSensorDescription = function(value) {
  jspb.Message.setProto3StringField(this, 1, value);
};


/**
 * optional double mean_sample_rate_hz = 2;
 * @return {number}
 */
proto.ImageChannel.prototype.getMeanSampleRateHz = function() {
  return /** @type {number} */ (+jspb.Message.getFieldWithDefault(this, 2, 0.0));
};


/** @param {number} value */
proto.ImageChannel.prototype.setMeanSampleRateHz = function(value) {
  jspb.Message.setProto3FloatField(this, 2, value);
};


/**
 * repeated double sample_ts_us = 3;
 * @return {!Array<number>}
 */
proto.ImageChannel.prototype.getSampleTsUsList = function() {
  return /** @type {!Array<number>} */ (jspb.Message.getRepeatedFloatingPointField(this, 3));
};


/** @param {!Array<number>} value */
proto.ImageChannel.prototype.setSampleTsUsList = function(value) {
  jspb.Message.setField(this, 3, value || []);
};


/**
 * @param {!number} value
 * @param {number=} opt_index
 */
proto.ImageChannel.prototype.addSampleTsUs = function(value, opt_index) {
  jspb.Message.addToRepeatedField(this, 3, value, opt_index);
};


proto.ImageChannel.prototype.clearSampleTsUsList = function() {
  this.setSampleTsUsList([]);
};


/**
 * repeated bytes samples = 4;
 * @return {!Array<string>}
 */
proto.ImageChannel.prototype.getSamplesList = function() {
  return /** @type {!Array<string>} */ (jspb.Message.getRepeatedField(this, 4));
};


/**
 * repeated bytes samples = 4;
 * This is a type-conversion wrapper around `getSamplesList()`
 * @return {!Array<string>}
 */
proto.ImageChannel.prototype.getSamplesList_asB64 = function() {
  return /** @type {!Array<string>} */ (jspb.Message.bytesListAsB64(
      this.getSamplesList()));
};


/**
 * repeated bytes samples = 4;
 * Note that Uint8Array is not supported on all browsers.
 * @see http://caniuse.com/Uint8Array
 * This is a type-conversion wrapper around `getSamplesList()`
 * @return {!Array<!Uint8Array>}
 */
proto.ImageChannel.prototype.getSamplesList_asU8 = function() {
  return /** @type {!Array<!Uint8Array>} */ (jspb.Message.bytesListAsU8(
      this.getSamplesList()));
};


/** @param {!(Array<!Uint8Array>|Array<string>)} value */
proto.ImageChannel.prototype.setSamplesList = function(value) {
  jspb.Message.setField(this, 4, value || []);
};


/**
 * @param {!(string|Uint8Array)} value
 * @param {number=} opt_index
 */
proto.ImageChannel.prototype.addSamples = function(value, opt_index) {
  jspb.Message.addToRepeatedField(this, 4, value, opt_index);
};


proto.ImageChannel.prototype.clearSamplesList = function() {
  this.setSamplesList([]);
};


/**
 * optional SummaryStatistics sample_rate_statistics = 5;
 * @return {?proto.SummaryStatistics}
 */
proto.ImageChannel.prototype.getSampleRateStatistics = function() {
  return /** @type{?proto.SummaryStatistics} */ (
    jspb.Message.getWrapperField(this, proto.SummaryStatistics, 5));
};


/** @param {?proto.SummaryStatistics|undefined} value */
proto.ImageChannel.prototype.setSampleRateStatistics = function(value) {
  jspb.Message.setWrapperField(this, 5, value);
};


proto.ImageChannel.prototype.clearSampleRateStatistics = function() {
  this.setSampleRateStatistics(undefined);
};


/**
 * Returns whether this field is set.
 * @return {!boolean}
 */
proto.ImageChannel.prototype.hasSampleRateStatistics = function() {
  return jspb.Message.getField(this, 5) != null;
};


/**
 * map<string, string> metadata = 6;
 * @param {boolean=} opt_noLazyCreate Do not create the map if
 * empty, instead returning `undefined`
 * @return {!jspb.Map<string,string>}
 */
proto.ImageChannel.prototype.getMetadataMap = function(opt_noLazyCreate) {
  return /** @type {!jspb.Map<string,string>} */ (
      jspb.Message.getMapField(this, 6, opt_noLazyCreate,
      null));
};


proto.ImageChannel.prototype.clearMetadataMap = function() {
  this.getMetadataMap().clear();
};


