/**
 * @fileoverview
 * @enhanceable
 * @suppress {messageConventions} JS Compiler reports an error if a variable or
 *     field starts with 'MSG_' and isn't a translatable message.
 * @public
 */
// GENERATED CODE -- DO NOT EDIT!

goog.provide('proto.LocationChannel');
goog.provide('proto.LocationChannel.LocationProvider');

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
proto.LocationChannel = function(opt_data) {
  jspb.Message.initialize(this, opt_data, 0, -1, proto.LocationChannel.repeatedFields_, null);
};
goog.inherits(proto.LocationChannel, jspb.Message);
if (goog.DEBUG && !COMPILED) {
  proto.LocationChannel.displayName = 'proto.LocationChannel';
}
/**
 * List of repeated fields within this message type.
 * @private {!Array<number>}
 * @const
 */
proto.LocationChannel.repeatedFields_ = [3,4,5,6,7,8];



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
proto.LocationChannel.prototype.toObject = function(opt_includeInstance) {
  return proto.LocationChannel.toObject(opt_includeInstance, this);
};


/**
 * Static version of the {@see toObject} method.
 * @param {boolean|undefined} includeInstance Whether to include the JSPB
 *     instance for transitional soy proto support:
 *     http://goto/soy-param-migration
 * @param {!proto.LocationChannel} msg The msg instance to transform.
 * @return {!Object}
 * @suppress {unusedLocalVariables} f is only used for nested messages
 */
proto.LocationChannel.toObject = function(includeInstance, msg) {
  var f, obj = {
    sensorDescription: jspb.Message.getFieldWithDefault(msg, 1, ""),
    meanSampleRateHz: +jspb.Message.getFieldWithDefault(msg, 2, 0.0),
    sampleTsUsList: jspb.Message.getRepeatedFloatingPointField(msg, 3),
    latitudeSamplesList: jspb.Message.getRepeatedFloatingPointField(msg, 4),
    longitudeSamplesList: jspb.Message.getRepeatedFloatingPointField(msg, 5),
    altitudeSamplesList: jspb.Message.getRepeatedFloatingPointField(msg, 6),
    speedSamplesList: jspb.Message.getRepeatedFloatingPointField(msg, 7),
    accuracySamplesList: jspb.Message.getRepeatedFloatingPointField(msg, 8),
    locationPermissionsGranted: jspb.Message.getFieldWithDefault(msg, 9, false),
    locationServicesRequested: jspb.Message.getFieldWithDefault(msg, 10, false),
    locationServicesEnabled: jspb.Message.getFieldWithDefault(msg, 11, false),
    locationProvider: jspb.Message.getFieldWithDefault(msg, 12, 0),
    sampleRateStatistics: (f = msg.getSampleRateStatistics()) && proto.SummaryStatistics.toObject(includeInstance, f),
    latitudeSampleStatistics: (f = msg.getLatitudeSampleStatistics()) && proto.SummaryStatistics.toObject(includeInstance, f),
    longitudeSampleStatistics: (f = msg.getLongitudeSampleStatistics()) && proto.SummaryStatistics.toObject(includeInstance, f),
    altitudeSampleStatistics: (f = msg.getAltitudeSampleStatistics()) && proto.SummaryStatistics.toObject(includeInstance, f),
    speedSampleStatistics: (f = msg.getSpeedSampleStatistics()) && proto.SummaryStatistics.toObject(includeInstance, f),
    accuracySampleStatistics: (f = msg.getAccuracySampleStatistics()) && proto.SummaryStatistics.toObject(includeInstance, f),
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
 * @return {!proto.LocationChannel}
 */
proto.LocationChannel.deserializeBinary = function(bytes) {
  var reader = new jspb.BinaryReader(bytes);
  var msg = new proto.LocationChannel;
  return proto.LocationChannel.deserializeBinaryFromReader(msg, reader);
};


/**
 * Deserializes binary data (in protobuf wire format) from the
 * given reader into the given message object.
 * @param {!proto.LocationChannel} msg The message object to deserialize into.
 * @param {!jspb.BinaryReader} reader The BinaryReader to use.
 * @return {!proto.LocationChannel}
 */
proto.LocationChannel.deserializeBinaryFromReader = function(msg, reader) {
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
      var value = /** @type {!Array<number>} */ (reader.readPackedDouble());
      msg.setLatitudeSamplesList(value);
      break;
    case 5:
      var value = /** @type {!Array<number>} */ (reader.readPackedDouble());
      msg.setLongitudeSamplesList(value);
      break;
    case 6:
      var value = /** @type {!Array<number>} */ (reader.readPackedDouble());
      msg.setAltitudeSamplesList(value);
      break;
    case 7:
      var value = /** @type {!Array<number>} */ (reader.readPackedDouble());
      msg.setSpeedSamplesList(value);
      break;
    case 8:
      var value = /** @type {!Array<number>} */ (reader.readPackedDouble());
      msg.setAccuracySamplesList(value);
      break;
    case 9:
      var value = /** @type {boolean} */ (reader.readBool());
      msg.setLocationPermissionsGranted(value);
      break;
    case 10:
      var value = /** @type {boolean} */ (reader.readBool());
      msg.setLocationServicesRequested(value);
      break;
    case 11:
      var value = /** @type {boolean} */ (reader.readBool());
      msg.setLocationServicesEnabled(value);
      break;
    case 12:
      var value = /** @type {!proto.LocationChannel.LocationProvider} */ (reader.readEnum());
      msg.setLocationProvider(value);
      break;
    case 13:
      var value = new proto.SummaryStatistics;
      reader.readMessage(value,proto.SummaryStatistics.deserializeBinaryFromReader);
      msg.setSampleRateStatistics(value);
      break;
    case 14:
      var value = new proto.SummaryStatistics;
      reader.readMessage(value,proto.SummaryStatistics.deserializeBinaryFromReader);
      msg.setLatitudeSampleStatistics(value);
      break;
    case 15:
      var value = new proto.SummaryStatistics;
      reader.readMessage(value,proto.SummaryStatistics.deserializeBinaryFromReader);
      msg.setLongitudeSampleStatistics(value);
      break;
    case 16:
      var value = new proto.SummaryStatistics;
      reader.readMessage(value,proto.SummaryStatistics.deserializeBinaryFromReader);
      msg.setAltitudeSampleStatistics(value);
      break;
    case 17:
      var value = new proto.SummaryStatistics;
      reader.readMessage(value,proto.SummaryStatistics.deserializeBinaryFromReader);
      msg.setSpeedSampleStatistics(value);
      break;
    case 18:
      var value = new proto.SummaryStatistics;
      reader.readMessage(value,proto.SummaryStatistics.deserializeBinaryFromReader);
      msg.setAccuracySampleStatistics(value);
      break;
    case 19:
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
proto.LocationChannel.prototype.serializeBinary = function() {
  var writer = new jspb.BinaryWriter();
  proto.LocationChannel.serializeBinaryToWriter(this, writer);
  return writer.getResultBuffer();
};


/**
 * Serializes the given message to binary data (in protobuf wire
 * format), writing to the given BinaryWriter.
 * @param {!proto.LocationChannel} message
 * @param {!jspb.BinaryWriter} writer
 * @suppress {unusedLocalVariables} f is only used for nested messages
 */
proto.LocationChannel.serializeBinaryToWriter = function(message, writer) {
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
  f = message.getLatitudeSamplesList();
  if (f.length > 0) {
    writer.writePackedDouble(
      4,
      f
    );
  }
  f = message.getLongitudeSamplesList();
  if (f.length > 0) {
    writer.writePackedDouble(
      5,
      f
    );
  }
  f = message.getAltitudeSamplesList();
  if (f.length > 0) {
    writer.writePackedDouble(
      6,
      f
    );
  }
  f = message.getSpeedSamplesList();
  if (f.length > 0) {
    writer.writePackedDouble(
      7,
      f
    );
  }
  f = message.getAccuracySamplesList();
  if (f.length > 0) {
    writer.writePackedDouble(
      8,
      f
    );
  }
  f = message.getLocationPermissionsGranted();
  if (f) {
    writer.writeBool(
      9,
      f
    );
  }
  f = message.getLocationServicesRequested();
  if (f) {
    writer.writeBool(
      10,
      f
    );
  }
  f = message.getLocationServicesEnabled();
  if (f) {
    writer.writeBool(
      11,
      f
    );
  }
  f = message.getLocationProvider();
  if (f !== 0.0) {
    writer.writeEnum(
      12,
      f
    );
  }
  f = message.getSampleRateStatistics();
  if (f != null) {
    writer.writeMessage(
      13,
      f,
      proto.SummaryStatistics.serializeBinaryToWriter
    );
  }
  f = message.getLatitudeSampleStatistics();
  if (f != null) {
    writer.writeMessage(
      14,
      f,
      proto.SummaryStatistics.serializeBinaryToWriter
    );
  }
  f = message.getLongitudeSampleStatistics();
  if (f != null) {
    writer.writeMessage(
      15,
      f,
      proto.SummaryStatistics.serializeBinaryToWriter
    );
  }
  f = message.getAltitudeSampleStatistics();
  if (f != null) {
    writer.writeMessage(
      16,
      f,
      proto.SummaryStatistics.serializeBinaryToWriter
    );
  }
  f = message.getSpeedSampleStatistics();
  if (f != null) {
    writer.writeMessage(
      17,
      f,
      proto.SummaryStatistics.serializeBinaryToWriter
    );
  }
  f = message.getAccuracySampleStatistics();
  if (f != null) {
    writer.writeMessage(
      18,
      f,
      proto.SummaryStatistics.serializeBinaryToWriter
    );
  }
  f = message.getMetadataMap(true);
  if (f && f.getLength() > 0) {
    f.serializeBinary(19, writer, jspb.BinaryWriter.prototype.writeString, jspb.BinaryWriter.prototype.writeString);
  }
};


/**
 * @enum {number}
 */
proto.LocationChannel.LocationProvider = {
  NONE: 0,
  USER: 1,
  GPS: 2,
  NETWORK: 3
};

/**
 * optional string sensor_description = 1;
 * @return {string}
 */
proto.LocationChannel.prototype.getSensorDescription = function() {
  return /** @type {string} */ (jspb.Message.getFieldWithDefault(this, 1, ""));
};


/** @param {string} value */
proto.LocationChannel.prototype.setSensorDescription = function(value) {
  jspb.Message.setProto3StringField(this, 1, value);
};


/**
 * optional double mean_sample_rate_hz = 2;
 * @return {number}
 */
proto.LocationChannel.prototype.getMeanSampleRateHz = function() {
  return /** @type {number} */ (+jspb.Message.getFieldWithDefault(this, 2, 0.0));
};


/** @param {number} value */
proto.LocationChannel.prototype.setMeanSampleRateHz = function(value) {
  jspb.Message.setProto3FloatField(this, 2, value);
};


/**
 * repeated double sample_ts_us = 3;
 * @return {!Array<number>}
 */
proto.LocationChannel.prototype.getSampleTsUsList = function() {
  return /** @type {!Array<number>} */ (jspb.Message.getRepeatedFloatingPointField(this, 3));
};


/** @param {!Array<number>} value */
proto.LocationChannel.prototype.setSampleTsUsList = function(value) {
  jspb.Message.setField(this, 3, value || []);
};


/**
 * @param {!number} value
 * @param {number=} opt_index
 */
proto.LocationChannel.prototype.addSampleTsUs = function(value, opt_index) {
  jspb.Message.addToRepeatedField(this, 3, value, opt_index);
};


proto.LocationChannel.prototype.clearSampleTsUsList = function() {
  this.setSampleTsUsList([]);
};


/**
 * repeated double latitude_samples = 4;
 * @return {!Array<number>}
 */
proto.LocationChannel.prototype.getLatitudeSamplesList = function() {
  return /** @type {!Array<number>} */ (jspb.Message.getRepeatedFloatingPointField(this, 4));
};


/** @param {!Array<number>} value */
proto.LocationChannel.prototype.setLatitudeSamplesList = function(value) {
  jspb.Message.setField(this, 4, value || []);
};


/**
 * @param {!number} value
 * @param {number=} opt_index
 */
proto.LocationChannel.prototype.addLatitudeSamples = function(value, opt_index) {
  jspb.Message.addToRepeatedField(this, 4, value, opt_index);
};


proto.LocationChannel.prototype.clearLatitudeSamplesList = function() {
  this.setLatitudeSamplesList([]);
};


/**
 * repeated double longitude_samples = 5;
 * @return {!Array<number>}
 */
proto.LocationChannel.prototype.getLongitudeSamplesList = function() {
  return /** @type {!Array<number>} */ (jspb.Message.getRepeatedFloatingPointField(this, 5));
};


/** @param {!Array<number>} value */
proto.LocationChannel.prototype.setLongitudeSamplesList = function(value) {
  jspb.Message.setField(this, 5, value || []);
};


/**
 * @param {!number} value
 * @param {number=} opt_index
 */
proto.LocationChannel.prototype.addLongitudeSamples = function(value, opt_index) {
  jspb.Message.addToRepeatedField(this, 5, value, opt_index);
};


proto.LocationChannel.prototype.clearLongitudeSamplesList = function() {
  this.setLongitudeSamplesList([]);
};


/**
 * repeated double altitude_samples = 6;
 * @return {!Array<number>}
 */
proto.LocationChannel.prototype.getAltitudeSamplesList = function() {
  return /** @type {!Array<number>} */ (jspb.Message.getRepeatedFloatingPointField(this, 6));
};


/** @param {!Array<number>} value */
proto.LocationChannel.prototype.setAltitudeSamplesList = function(value) {
  jspb.Message.setField(this, 6, value || []);
};


/**
 * @param {!number} value
 * @param {number=} opt_index
 */
proto.LocationChannel.prototype.addAltitudeSamples = function(value, opt_index) {
  jspb.Message.addToRepeatedField(this, 6, value, opt_index);
};


proto.LocationChannel.prototype.clearAltitudeSamplesList = function() {
  this.setAltitudeSamplesList([]);
};


/**
 * repeated double speed_samples = 7;
 * @return {!Array<number>}
 */
proto.LocationChannel.prototype.getSpeedSamplesList = function() {
  return /** @type {!Array<number>} */ (jspb.Message.getRepeatedFloatingPointField(this, 7));
};


/** @param {!Array<number>} value */
proto.LocationChannel.prototype.setSpeedSamplesList = function(value) {
  jspb.Message.setField(this, 7, value || []);
};


/**
 * @param {!number} value
 * @param {number=} opt_index
 */
proto.LocationChannel.prototype.addSpeedSamples = function(value, opt_index) {
  jspb.Message.addToRepeatedField(this, 7, value, opt_index);
};


proto.LocationChannel.prototype.clearSpeedSamplesList = function() {
  this.setSpeedSamplesList([]);
};


/**
 * repeated double accuracy_samples = 8;
 * @return {!Array<number>}
 */
proto.LocationChannel.prototype.getAccuracySamplesList = function() {
  return /** @type {!Array<number>} */ (jspb.Message.getRepeatedFloatingPointField(this, 8));
};


/** @param {!Array<number>} value */
proto.LocationChannel.prototype.setAccuracySamplesList = function(value) {
  jspb.Message.setField(this, 8, value || []);
};


/**
 * @param {!number} value
 * @param {number=} opt_index
 */
proto.LocationChannel.prototype.addAccuracySamples = function(value, opt_index) {
  jspb.Message.addToRepeatedField(this, 8, value, opt_index);
};


proto.LocationChannel.prototype.clearAccuracySamplesList = function() {
  this.setAccuracySamplesList([]);
};


/**
 * optional bool location_permissions_granted = 9;
 * Note that Boolean fields may be set to 0/1 when serialized from a Java server.
 * You should avoid comparisons like {@code val === true/false} in those cases.
 * @return {boolean}
 */
proto.LocationChannel.prototype.getLocationPermissionsGranted = function() {
  return /** @type {boolean} */ (jspb.Message.getFieldWithDefault(this, 9, false));
};


/** @param {boolean} value */
proto.LocationChannel.prototype.setLocationPermissionsGranted = function(value) {
  jspb.Message.setProto3BooleanField(this, 9, value);
};


/**
 * optional bool location_services_requested = 10;
 * Note that Boolean fields may be set to 0/1 when serialized from a Java server.
 * You should avoid comparisons like {@code val === true/false} in those cases.
 * @return {boolean}
 */
proto.LocationChannel.prototype.getLocationServicesRequested = function() {
  return /** @type {boolean} */ (jspb.Message.getFieldWithDefault(this, 10, false));
};


/** @param {boolean} value */
proto.LocationChannel.prototype.setLocationServicesRequested = function(value) {
  jspb.Message.setProto3BooleanField(this, 10, value);
};


/**
 * optional bool location_services_enabled = 11;
 * Note that Boolean fields may be set to 0/1 when serialized from a Java server.
 * You should avoid comparisons like {@code val === true/false} in those cases.
 * @return {boolean}
 */
proto.LocationChannel.prototype.getLocationServicesEnabled = function() {
  return /** @type {boolean} */ (jspb.Message.getFieldWithDefault(this, 11, false));
};


/** @param {boolean} value */
proto.LocationChannel.prototype.setLocationServicesEnabled = function(value) {
  jspb.Message.setProto3BooleanField(this, 11, value);
};


/**
 * optional LocationProvider location_provider = 12;
 * @return {!proto.LocationChannel.LocationProvider}
 */
proto.LocationChannel.prototype.getLocationProvider = function() {
  return /** @type {!proto.LocationChannel.LocationProvider} */ (jspb.Message.getFieldWithDefault(this, 12, 0));
};


/** @param {!proto.LocationChannel.LocationProvider} value */
proto.LocationChannel.prototype.setLocationProvider = function(value) {
  jspb.Message.setProto3EnumField(this, 12, value);
};


/**
 * optional SummaryStatistics sample_rate_statistics = 13;
 * @return {?proto.SummaryStatistics}
 */
proto.LocationChannel.prototype.getSampleRateStatistics = function() {
  return /** @type{?proto.SummaryStatistics} */ (
    jspb.Message.getWrapperField(this, proto.SummaryStatistics, 13));
};


/** @param {?proto.SummaryStatistics|undefined} value */
proto.LocationChannel.prototype.setSampleRateStatistics = function(value) {
  jspb.Message.setWrapperField(this, 13, value);
};


proto.LocationChannel.prototype.clearSampleRateStatistics = function() {
  this.setSampleRateStatistics(undefined);
};


/**
 * Returns whether this field is set.
 * @return {!boolean}
 */
proto.LocationChannel.prototype.hasSampleRateStatistics = function() {
  return jspb.Message.getField(this, 13) != null;
};


/**
 * optional SummaryStatistics latitude_sample_statistics = 14;
 * @return {?proto.SummaryStatistics}
 */
proto.LocationChannel.prototype.getLatitudeSampleStatistics = function() {
  return /** @type{?proto.SummaryStatistics} */ (
    jspb.Message.getWrapperField(this, proto.SummaryStatistics, 14));
};


/** @param {?proto.SummaryStatistics|undefined} value */
proto.LocationChannel.prototype.setLatitudeSampleStatistics = function(value) {
  jspb.Message.setWrapperField(this, 14, value);
};


proto.LocationChannel.prototype.clearLatitudeSampleStatistics = function() {
  this.setLatitudeSampleStatistics(undefined);
};


/**
 * Returns whether this field is set.
 * @return {!boolean}
 */
proto.LocationChannel.prototype.hasLatitudeSampleStatistics = function() {
  return jspb.Message.getField(this, 14) != null;
};


/**
 * optional SummaryStatistics longitude_sample_statistics = 15;
 * @return {?proto.SummaryStatistics}
 */
proto.LocationChannel.prototype.getLongitudeSampleStatistics = function() {
  return /** @type{?proto.SummaryStatistics} */ (
    jspb.Message.getWrapperField(this, proto.SummaryStatistics, 15));
};


/** @param {?proto.SummaryStatistics|undefined} value */
proto.LocationChannel.prototype.setLongitudeSampleStatistics = function(value) {
  jspb.Message.setWrapperField(this, 15, value);
};


proto.LocationChannel.prototype.clearLongitudeSampleStatistics = function() {
  this.setLongitudeSampleStatistics(undefined);
};


/**
 * Returns whether this field is set.
 * @return {!boolean}
 */
proto.LocationChannel.prototype.hasLongitudeSampleStatistics = function() {
  return jspb.Message.getField(this, 15) != null;
};


/**
 * optional SummaryStatistics altitude_sample_statistics = 16;
 * @return {?proto.SummaryStatistics}
 */
proto.LocationChannel.prototype.getAltitudeSampleStatistics = function() {
  return /** @type{?proto.SummaryStatistics} */ (
    jspb.Message.getWrapperField(this, proto.SummaryStatistics, 16));
};


/** @param {?proto.SummaryStatistics|undefined} value */
proto.LocationChannel.prototype.setAltitudeSampleStatistics = function(value) {
  jspb.Message.setWrapperField(this, 16, value);
};


proto.LocationChannel.prototype.clearAltitudeSampleStatistics = function() {
  this.setAltitudeSampleStatistics(undefined);
};


/**
 * Returns whether this field is set.
 * @return {!boolean}
 */
proto.LocationChannel.prototype.hasAltitudeSampleStatistics = function() {
  return jspb.Message.getField(this, 16) != null;
};


/**
 * optional SummaryStatistics speed_sample_statistics = 17;
 * @return {?proto.SummaryStatistics}
 */
proto.LocationChannel.prototype.getSpeedSampleStatistics = function() {
  return /** @type{?proto.SummaryStatistics} */ (
    jspb.Message.getWrapperField(this, proto.SummaryStatistics, 17));
};


/** @param {?proto.SummaryStatistics|undefined} value */
proto.LocationChannel.prototype.setSpeedSampleStatistics = function(value) {
  jspb.Message.setWrapperField(this, 17, value);
};


proto.LocationChannel.prototype.clearSpeedSampleStatistics = function() {
  this.setSpeedSampleStatistics(undefined);
};


/**
 * Returns whether this field is set.
 * @return {!boolean}
 */
proto.LocationChannel.prototype.hasSpeedSampleStatistics = function() {
  return jspb.Message.getField(this, 17) != null;
};


/**
 * optional SummaryStatistics accuracy_sample_statistics = 18;
 * @return {?proto.SummaryStatistics}
 */
proto.LocationChannel.prototype.getAccuracySampleStatistics = function() {
  return /** @type{?proto.SummaryStatistics} */ (
    jspb.Message.getWrapperField(this, proto.SummaryStatistics, 18));
};


/** @param {?proto.SummaryStatistics|undefined} value */
proto.LocationChannel.prototype.setAccuracySampleStatistics = function(value) {
  jspb.Message.setWrapperField(this, 18, value);
};


proto.LocationChannel.prototype.clearAccuracySampleStatistics = function() {
  this.setAccuracySampleStatistics(undefined);
};


/**
 * Returns whether this field is set.
 * @return {!boolean}
 */
proto.LocationChannel.prototype.hasAccuracySampleStatistics = function() {
  return jspb.Message.getField(this, 18) != null;
};


/**
 * map<string, string> metadata = 19;
 * @param {boolean=} opt_noLazyCreate Do not create the map if
 * empty, instead returning `undefined`
 * @return {!jspb.Map<string,string>}
 */
proto.LocationChannel.prototype.getMetadataMap = function(opt_noLazyCreate) {
  return /** @type {!jspb.Map<string,string>} */ (
      jspb.Message.getMapField(this, 19, opt_noLazyCreate,
      null));
};


proto.LocationChannel.prototype.clearMetadataMap = function() {
  this.getMetadataMap().clear();
};


