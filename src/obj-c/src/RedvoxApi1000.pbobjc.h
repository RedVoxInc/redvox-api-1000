// Generated by the protocol buffer compiler.  DO NOT EDIT!
// source: src/redvox-api-1000.proto

// This CPP symbol can be defined to use imports that match up to the framework
// imports needed when using CocoaPods.
#if !defined(GPB_USE_PROTOBUF_FRAMEWORK_IMPORTS)
 #define GPB_USE_PROTOBUF_FRAMEWORK_IMPORTS 0
#endif

#if GPB_USE_PROTOBUF_FRAMEWORK_IMPORTS
 #import <Protobuf/GPBProtocolBuffers.h>
#else
 #import "GPBProtocolBuffers.h"
#endif

#if GOOGLE_PROTOBUF_OBJC_VERSION < 30002
#error This file was generated by a newer version of protoc which is incompatible with your Protocol Buffer library sources.
#endif
#if 30002 < GOOGLE_PROTOBUF_OBJC_MIN_SUPPORTED_VERSION
#error This file was generated by an older version of protoc which is incompatible with your Protocol Buffer library sources.
#endif

// @@protoc_insertion_point(imports)

#pragma clang diagnostic push
#pragma clang diagnostic ignored "-Wdeprecated-declarations"

CF_EXTERN_C_BEGIN

@class ImageChannel;
@class LocationChannel;
@class MicrophoneChannel;
@class SingleChannel;
@class SummaryStatistics;
@class XyzChannel;

NS_ASSUME_NONNULL_BEGIN

#pragma mark - Enum RedvoxPacket1000_NetworkType

/** An enumeration for type safe network types */
typedef GPB_ENUM(RedvoxPacket1000_NetworkType) {
  /**
   * Value used if any message's field encounters a value that is not defined
   * by this enum. The message will also have C functions to get/set the rawValue
   * of the field.
   **/
  RedvoxPacket1000_NetworkType_GPBUnrecognizedEnumeratorValue = kGPBUnrecognizedEnumeratorValue,
  RedvoxPacket1000_NetworkType_Wifi = 0,
  RedvoxPacket1000_NetworkType_Cellular = 1,
  RedvoxPacket1000_NetworkType_None = 2,
};

GPBEnumDescriptor *RedvoxPacket1000_NetworkType_EnumDescriptor(void);

/**
 * Checks to see if the given value is defined by the enum or was not known at
 * the time this source was generated.
 **/
BOOL RedvoxPacket1000_NetworkType_IsValidValue(int32_t value);

#pragma mark - Enum RedvoxPacket1000_OsType

/** An enumeration for type sage OS types */
typedef GPB_ENUM(RedvoxPacket1000_OsType) {
  /**
   * Value used if any message's field encounters a value that is not defined
   * by this enum. The message will also have C functions to get/set the rawValue
   * of the field.
   **/
  RedvoxPacket1000_OsType_GPBUnrecognizedEnumeratorValue = kGPBUnrecognizedEnumeratorValue,
  RedvoxPacket1000_OsType_Android = 0,
  RedvoxPacket1000_OsType_Ios = 1,
  RedvoxPacket1000_OsType_Linux = 2,
  RedvoxPacket1000_OsType_Windows = 3,
};

GPBEnumDescriptor *RedvoxPacket1000_OsType_EnumDescriptor(void);

/**
 * Checks to see if the given value is defined by the enum or was not known at
 * the time this source was generated.
 **/
BOOL RedvoxPacket1000_OsType_IsValidValue(int32_t value);

#pragma mark - Enum LocationChannel_LocationProvider

typedef GPB_ENUM(LocationChannel_LocationProvider) {
  /**
   * Value used if any message's field encounters a value that is not defined
   * by this enum. The message will also have C functions to get/set the rawValue
   * of the field.
   **/
  LocationChannel_LocationProvider_GPBUnrecognizedEnumeratorValue = kGPBUnrecognizedEnumeratorValue,
  LocationChannel_LocationProvider_None = 0,
  LocationChannel_LocationProvider_User = 1,
  LocationChannel_LocationProvider_Gps = 2,
  LocationChannel_LocationProvider_Network = 3,
};

GPBEnumDescriptor *LocationChannel_LocationProvider_EnumDescriptor(void);

/**
 * Checks to see if the given value is defined by the enum or was not known at
 * the time this source was generated.
 **/
BOOL LocationChannel_LocationProvider_IsValidValue(int32_t value);

#pragma mark - RedvoxApi1000Root

/**
 * Exposes the extension registry for this file.
 *
 * The base class provides:
 * @code
 *   + (GPBExtensionRegistry *)extensionRegistry;
 * @endcode
 * which is a @c GPBExtensionRegistry that includes all the extensions defined by
 * this file and all files that it depends on.
 **/
@interface RedvoxApi1000Root : GPBRootObject
@end

#pragma mark - RedvoxPacket1000

typedef GPB_ENUM(RedvoxPacket1000_FieldNumber) {
  RedvoxPacket1000_FieldNumber_Api = 1,
  RedvoxPacket1000_FieldNumber_AuthEmail = 2,
  RedvoxPacket1000_FieldNumber_AuthToken = 3,
  RedvoxPacket1000_FieldNumber_FirebaseToken = 4,
  RedvoxPacket1000_FieldNumber_DeviceId = 5,
  RedvoxPacket1000_FieldNumber_DeviceUuid = 6,
  RedvoxPacket1000_FieldNumber_DeviceMake = 7,
  RedvoxPacket1000_FieldNumber_DeviceModel = 8,
  RedvoxPacket1000_FieldNumber_DeviceOs = 9,
  RedvoxPacket1000_FieldNumber_DeviceOsVersion = 10,
  RedvoxPacket1000_FieldNumber_DeviceAppVersion = 11,
  RedvoxPacket1000_FieldNumber_DeviceTempC = 12,
  RedvoxPacket1000_FieldNumber_DeviceBatteryPercent = 13,
  RedvoxPacket1000_FieldNumber_NetworkType = 14,
  RedvoxPacket1000_FieldNumber_NetworkStrengthDb = 15,
  RedvoxPacket1000_FieldNumber_IsBackfilled = 16,
  RedvoxPacket1000_FieldNumber_IsPrivate = 17,
  RedvoxPacket1000_FieldNumber_IsMicScrambled = 18,
  RedvoxPacket1000_FieldNumber_UncompressedSizeBytes = 19,
  RedvoxPacket1000_FieldNumber_CompressedSizeBytes = 20,
  RedvoxPacket1000_FieldNumber_AuthServerURL = 21,
  RedvoxPacket1000_FieldNumber_SynchServerURL = 22,
  RedvoxPacket1000_FieldNumber_AcquisitionServerURL = 23,
  RedvoxPacket1000_FieldNumber_PacketStartTsUsWall = 24,
  RedvoxPacket1000_FieldNumber_PacketStartTsUsMach = 25,
  RedvoxPacket1000_FieldNumber_PacketEndTsUsWall = 26,
  RedvoxPacket1000_FieldNumber_PacketEndTsUsMach = 27,
  RedvoxPacket1000_FieldNumber_ServerAcquisitionArrivalTsUs = 28,
  RedvoxPacket1000_FieldNumber_AppStartTsUsMach = 29,
  RedvoxPacket1000_FieldNumber_SynchParamsArray = 30,
  RedvoxPacket1000_FieldNumber_BestLatencyUs = 31,
  RedvoxPacket1000_FieldNumber_BestOffsetUs = 32,
  RedvoxPacket1000_FieldNumber_MicrophoneChannel = 33,
  RedvoxPacket1000_FieldNumber_BarometerChannel = 34,
  RedvoxPacket1000_FieldNumber_LocationChannel = 35,
  RedvoxPacket1000_FieldNumber_AccelerometerChannel = 36,
  RedvoxPacket1000_FieldNumber_GyroscopeChannel = 37,
  RedvoxPacket1000_FieldNumber_MagnetometerChannel = 38,
  RedvoxPacket1000_FieldNumber_LightChannel = 39,
  RedvoxPacket1000_FieldNumber_InfraredChannel = 40,
  RedvoxPacket1000_FieldNumber_ImageChannel = 41,
  RedvoxPacket1000_FieldNumber_Metadata = 42,
};

/**
 * Message type for encoding API 1000 RedVox packets.
 **/
@interface RedvoxPacket1000 : GPBMessage

/** API Version */
@property(nonatomic, readwrite) uint32_t api;

/** User information */
@property(nonatomic, readwrite, copy, null_resettable) NSString *authEmail;

/** The JWT token used for authentication */
@property(nonatomic, readwrite, copy, null_resettable) NSString *authToken;

/** The assigned firebase token */
@property(nonatomic, readwrite, copy, null_resettable) NSString *firebaseToken;

/** Device information */
@property(nonatomic, readwrite, copy, null_resettable) NSString *deviceId;

/** The app provided UUID */
@property(nonatomic, readwrite, copy, null_resettable) NSString *deviceUuid;

/** Make of the device */
@property(nonatomic, readwrite, copy, null_resettable) NSString *deviceMake;

/** Model of the device */
@property(nonatomic, readwrite, copy, null_resettable) NSString *deviceModel;

/** OS of the device */
@property(nonatomic, readwrite) RedvoxPacket1000_OsType deviceOs;

/** OS version of the device */
@property(nonatomic, readwrite, copy, null_resettable) NSString *deviceOsVersion;

/** App version on the device */
@property(nonatomic, readwrite, copy, null_resettable) NSString *deviceAppVersion;

/** Temperature of the device in degrees centigrade */
@property(nonatomic, readwrite) double deviceTempC;

/** Device battery level as a percentage between 0% and 100% */
@property(nonatomic, readwrite) double deviceBatteryPercent;

/** Type of network connection */
@property(nonatomic, readwrite) RedvoxPacket1000_NetworkType networkType;

/** A value representing the strength of the network connection */
@property(nonatomic, readwrite) double networkStrengthDb;

/** Packet information */
@property(nonatomic, readwrite) BOOL isBackfilled;

/** Field for if this packet is private to the user or not */
@property(nonatomic, readwrite) BOOL isPrivate;

/** Field that determines if the microphone data is scrambled or not (should be True for 8000Hz data) */
@property(nonatomic, readwrite) BOOL isMicScrambled;

/** Size of the uncompressed packet */
@property(nonatomic, readwrite) double uncompressedSizeBytes;

/** Size of the compressed packet */
@property(nonatomic, readwrite) double compressedSizeBytes;

/** Server information */
@property(nonatomic, readwrite, copy, null_resettable) NSString *authServerURL;

/** URL of server used for time synchronization */
@property(nonatomic, readwrite, copy, null_resettable) NSString *synchServerURL;

/** URL or server used for data acquisition */
@property(nonatomic, readwrite, copy, null_resettable) NSString *acquisitionServerURL;

/** Timing */
@property(nonatomic, readwrite) double packetStartTsUsWall;

/** Start timestamp of the packet using machine time (corresponding to the first microphone sample) */
@property(nonatomic, readwrite) double packetStartTsUsMach;

/** End timestamp of the packet using the wall clock (corresponding to the last microphone sample) */
@property(nonatomic, readwrite) double packetEndTsUsWall;

/** End timestamp of the packet using machine time (corresponding to the last microphone sample) */
@property(nonatomic, readwrite) double packetEndTsUsMach;

/** Timestamp that the packet arrived at the acquisition server */
@property(nonatomic, readwrite) double serverAcquisitionArrivalTsUs;

/** The start of the app as machine time */
@property(nonatomic, readwrite) double appStartTsUsMach;

/** An array of synchronization params from the synch server */
@property(nonatomic, readwrite, strong, null_resettable) GPBDoubleArray *synchParamsArray;
/** The number of items in @c synchParamsArray without causing the array to be created. */
@property(nonatomic, readonly) NSUInteger synchParamsArray_Count;

/** The best latency as determined from the synch params */
@property(nonatomic, readwrite) double bestLatencyUs;

/** The best offset as determined from the synch params */
@property(nonatomic, readwrite) double bestOffsetUs;

/** Channels */
@property(nonatomic, readwrite, strong, null_resettable) MicrophoneChannel *microphoneChannel;
/** Test to see if @c microphoneChannel has been set. */
@property(nonatomic, readwrite) BOOL hasMicrophoneChannel;

/** The barometer channel */
@property(nonatomic, readwrite, strong, null_resettable) SingleChannel *barometerChannel;
/** Test to see if @c barometerChannel has been set. */
@property(nonatomic, readwrite) BOOL hasBarometerChannel;

/** The location channel */
@property(nonatomic, readwrite, strong, null_resettable) LocationChannel *locationChannel;
/** Test to see if @c locationChannel has been set. */
@property(nonatomic, readwrite) BOOL hasLocationChannel;

/** The accelerometer channel */
@property(nonatomic, readwrite, strong, null_resettable) XyzChannel *accelerometerChannel;
/** Test to see if @c accelerometerChannel has been set. */
@property(nonatomic, readwrite) BOOL hasAccelerometerChannel;

/** The gyroscope channel */
@property(nonatomic, readwrite, strong, null_resettable) XyzChannel *gyroscopeChannel;
/** Test to see if @c gyroscopeChannel has been set. */
@property(nonatomic, readwrite) BOOL hasGyroscopeChannel;

/** The magnetometer channel */
@property(nonatomic, readwrite, strong, null_resettable) XyzChannel *magnetometerChannel;
/** Test to see if @c magnetometerChannel has been set. */
@property(nonatomic, readwrite) BOOL hasMagnetometerChannel;

/** The light channel */
@property(nonatomic, readwrite, strong, null_resettable) SingleChannel *lightChannel;
/** Test to see if @c lightChannel has been set. */
@property(nonatomic, readwrite) BOOL hasLightChannel;

/** The infrared channel */
@property(nonatomic, readwrite, strong, null_resettable) SingleChannel *infraredChannel;
/** Test to see if @c infraredChannel has been set. */
@property(nonatomic, readwrite) BOOL hasInfraredChannel;

/** The image channel */
@property(nonatomic, readwrite, strong, null_resettable) ImageChannel *imageChannel;
/** Test to see if @c imageChannel has been set. */
@property(nonatomic, readwrite) BOOL hasImageChannel;

/** Metadata */
@property(nonatomic, readwrite, strong, null_resettable) NSMutableDictionary<NSString*, NSString*> *metadata;
/** The number of items in @c metadata without causing the array to be created. */
@property(nonatomic, readonly) NSUInteger metadata_Count;

@end

/**
 * Fetches the raw value of a @c RedvoxPacket1000's @c deviceOs property, even
 * if the value was not defined by the enum at the time the code was generated.
 **/
int32_t RedvoxPacket1000_DeviceOs_RawValue(RedvoxPacket1000 *message);
/**
 * Sets the raw value of an @c RedvoxPacket1000's @c deviceOs property, allowing
 * it to be set to a value that was not defined by the enum at the time the code
 * was generated.
 **/
void SetRedvoxPacket1000_DeviceOs_RawValue(RedvoxPacket1000 *message, int32_t value);

/**
 * Fetches the raw value of a @c RedvoxPacket1000's @c networkType property, even
 * if the value was not defined by the enum at the time the code was generated.
 **/
int32_t RedvoxPacket1000_NetworkType_RawValue(RedvoxPacket1000 *message);
/**
 * Sets the raw value of an @c RedvoxPacket1000's @c networkType property, allowing
 * it to be set to a value that was not defined by the enum at the time the code
 * was generated.
 **/
void SetRedvoxPacket1000_NetworkType_RawValue(RedvoxPacket1000 *message, int32_t value);

#pragma mark - MicrophoneChannel

typedef GPB_ENUM(MicrophoneChannel_FieldNumber) {
  MicrophoneChannel_FieldNumber_SensorDescription = 1,
  MicrophoneChannel_FieldNumber_FirstSampleTsUs = 2,
  MicrophoneChannel_FieldNumber_SampleRateHz = 3,
  MicrophoneChannel_FieldNumber_SamplesArray = 4,
  MicrophoneChannel_FieldNumber_SampleStatistics = 5,
  MicrophoneChannel_FieldNumber_Metadata = 6,
};

/**
 * Message type for microphone channels
 **/
@interface MicrophoneChannel : GPBMessage

/** The name or description of the microphone sensor */
@property(nonatomic, readwrite, copy, null_resettable) NSString *sensorDescription;

/** Timestamp of the first microphone sample */
@property(nonatomic, readwrite) double firstSampleTsUs;

/** Microphone sample rate in Hz */
@property(nonatomic, readwrite) double sampleRateHz;

/** List of microphone samples */
@property(nonatomic, readwrite, strong, null_resettable) GPBDoubleArray *samplesArray;
/** The number of items in @c samplesArray without causing the array to be created. */
@property(nonatomic, readonly) NSUInteger samplesArray_Count;

/** Statistics for microphone samples */
@property(nonatomic, readwrite, strong, null_resettable) SummaryStatistics *sampleStatistics;
/** Test to see if @c sampleStatistics has been set. */
@property(nonatomic, readwrite) BOOL hasSampleStatistics;

/** A map from string to string for including untyped metadata */
@property(nonatomic, readwrite, strong, null_resettable) NSMutableDictionary<NSString*, NSString*> *metadata;
/** The number of items in @c metadata without causing the array to be created. */
@property(nonatomic, readonly) NSUInteger metadata_Count;

@end

#pragma mark - SingleChannel

typedef GPB_ENUM(SingleChannel_FieldNumber) {
  SingleChannel_FieldNumber_SensorDescription = 1,
  SingleChannel_FieldNumber_MeanSampleRateHz = 2,
  SingleChannel_FieldNumber_SampleTsUsArray = 3,
  SingleChannel_FieldNumber_SamplesArray = 4,
  SingleChannel_FieldNumber_SampleRateStatistics = 5,
  SingleChannel_FieldNumber_SampleStatistics = 6,
  SingleChannel_FieldNumber_Metadata = 7,
};

/**
 * Message type for non-microphone single channel sensors (barometer, light, infrared)
 **/
@interface SingleChannel : GPBMessage

/** The name or description of the sensor */
@property(nonatomic, readwrite, copy, null_resettable) NSString *sensorDescription;

/** The mean sample rate in Hz */
@property(nonatomic, readwrite) double meanSampleRateHz;

/** A list of timestamps, one for each sample */
@property(nonatomic, readwrite, strong, null_resettable) GPBDoubleArray *sampleTsUsArray;
/** The number of items in @c sampleTsUsArray without causing the array to be created. */
@property(nonatomic, readonly) NSUInteger sampleTsUsArray_Count;

/** A list of samples */
@property(nonatomic, readwrite, strong, null_resettable) GPBDoubleArray *samplesArray;
/** The number of items in @c samplesArray without causing the array to be created. */
@property(nonatomic, readonly) NSUInteger samplesArray_Count;

/** Statistics for sample timestamps */
@property(nonatomic, readwrite, strong, null_resettable) SummaryStatistics *sampleRateStatistics;
/** Test to see if @c sampleRateStatistics has been set. */
@property(nonatomic, readwrite) BOOL hasSampleRateStatistics;

/** Statistics for samples */
@property(nonatomic, readwrite, strong, null_resettable) SummaryStatistics *sampleStatistics;
/** Test to see if @c sampleStatistics has been set. */
@property(nonatomic, readwrite) BOOL hasSampleStatistics;

/** A map from string to string for including untyped metadata */
@property(nonatomic, readwrite, strong, null_resettable) NSMutableDictionary<NSString*, NSString*> *metadata;
/** The number of items in @c metadata without causing the array to be created. */
@property(nonatomic, readonly) NSUInteger metadata_Count;

@end

#pragma mark - XyzChannel

typedef GPB_ENUM(XyzChannel_FieldNumber) {
  XyzChannel_FieldNumber_SensorDescription = 1,
  XyzChannel_FieldNumber_MeanSampleRateHz = 2,
  XyzChannel_FieldNumber_SampleTsUsArray = 3,
  XyzChannel_FieldNumber_XSamplesArray = 4,
  XyzChannel_FieldNumber_YSamplesArray = 5,
  XyzChannel_FieldNumber_ZSamplesArray = 6,
  XyzChannel_FieldNumber_SampleRateStatistics = 7,
  XyzChannel_FieldNumber_XSampleStatistics = 8,
  XyzChannel_FieldNumber_YSampleStatistics = 9,
  XyzChannel_FieldNumber_ZSampleStatistics = 10,
  XyzChannel_FieldNumber_Metadata = 11,
};

/**
 * Message type for channels that include x, y, and z samples (accelerometer, magnetometer, gyroscope)
 **/
@interface XyzChannel : GPBMessage

/** The name or description of the sensor */
@property(nonatomic, readwrite, copy, null_resettable) NSString *sensorDescription;

/** The mean sample rate in Hz */
@property(nonatomic, readwrite) double meanSampleRateHz;

/** A list of timestamps, one for each sample */
@property(nonatomic, readwrite, strong, null_resettable) GPBDoubleArray *sampleTsUsArray;
/** The number of items in @c sampleTsUsArray without causing the array to be created. */
@property(nonatomic, readonly) NSUInteger sampleTsUsArray_Count;

/** A list of samples for the X-channel */
@property(nonatomic, readwrite, strong, null_resettable) GPBDoubleArray *xSamplesArray;
/** The number of items in @c xSamplesArray without causing the array to be created. */
@property(nonatomic, readonly) NSUInteger xSamplesArray_Count;

/** A list of samples for the Y-channel */
@property(nonatomic, readwrite, strong, null_resettable) GPBDoubleArray *ySamplesArray;
/** The number of items in @c ySamplesArray without causing the array to be created. */
@property(nonatomic, readonly) NSUInteger ySamplesArray_Count;

/** A list of samples for the Z-channel */
@property(nonatomic, readwrite, strong, null_resettable) GPBDoubleArray *zSamplesArray;
/** The number of items in @c zSamplesArray without causing the array to be created. */
@property(nonatomic, readonly) NSUInteger zSamplesArray_Count;

/** Statistics for sample timestamps */
@property(nonatomic, readwrite, strong, null_resettable) SummaryStatistics *sampleRateStatistics;
/** Test to see if @c sampleRateStatistics has been set. */
@property(nonatomic, readwrite) BOOL hasSampleRateStatistics;

/** Statistics for X-channel */
@property(nonatomic, readwrite, strong, null_resettable) SummaryStatistics *xSampleStatistics;
/** Test to see if @c xSampleStatistics has been set. */
@property(nonatomic, readwrite) BOOL hasXSampleStatistics;

/** Statistics for Y-channel */
@property(nonatomic, readwrite, strong, null_resettable) SummaryStatistics *ySampleStatistics;
/** Test to see if @c ySampleStatistics has been set. */
@property(nonatomic, readwrite) BOOL hasYSampleStatistics;

/** Statistics for Z-channel */
@property(nonatomic, readwrite, strong, null_resettable) SummaryStatistics *zSampleStatistics;
/** Test to see if @c zSampleStatistics has been set. */
@property(nonatomic, readwrite) BOOL hasZSampleStatistics;

/** A map from string to string for including untyped metadata */
@property(nonatomic, readwrite, strong, null_resettable) NSMutableDictionary<NSString*, NSString*> *metadata;
/** The number of items in @c metadata without causing the array to be created. */
@property(nonatomic, readonly) NSUInteger metadata_Count;

@end

#pragma mark - LocationChannel

typedef GPB_ENUM(LocationChannel_FieldNumber) {
  LocationChannel_FieldNumber_SensorDescription = 1,
  LocationChannel_FieldNumber_MeanSampleRateHz = 2,
  LocationChannel_FieldNumber_SampleTsUsArray = 3,
  LocationChannel_FieldNumber_LatitudeSamplesArray = 4,
  LocationChannel_FieldNumber_LongitudeSamplesArray = 5,
  LocationChannel_FieldNumber_AltitudeSamplesArray = 6,
  LocationChannel_FieldNumber_SpeedSamplesArray = 7,
  LocationChannel_FieldNumber_AccuracySamplesArray = 8,
  LocationChannel_FieldNumber_LocationPermissionsGranted = 9,
  LocationChannel_FieldNumber_LocationServicesRequested = 10,
  LocationChannel_FieldNumber_LocationServicesEnabled = 11,
  LocationChannel_FieldNumber_LocationProvider = 12,
  LocationChannel_FieldNumber_SampleRateStatistics = 13,
  LocationChannel_FieldNumber_LatitudeSampleStatistics = 14,
  LocationChannel_FieldNumber_LongitudeSampleStatistics = 15,
  LocationChannel_FieldNumber_AltitudeSampleStatistics = 16,
  LocationChannel_FieldNumber_SpeedSampleStatistics = 17,
  LocationChannel_FieldNumber_AccuracySampleStatistics = 18,
  LocationChannel_FieldNumber_Metadata = 19,
};

/**
 * Message type for the location channel
 **/
@interface LocationChannel : GPBMessage

/** The name or description of the sensor */
@property(nonatomic, readwrite, copy, null_resettable) NSString *sensorDescription;

/** The mean sample rate in Hz */
@property(nonatomic, readwrite) double meanSampleRateHz;

/** A list of timestamps, one for each sample */
@property(nonatomic, readwrite, strong, null_resettable) GPBDoubleArray *sampleTsUsArray;
/** The number of items in @c sampleTsUsArray without causing the array to be created. */
@property(nonatomic, readonly) NSUInteger sampleTsUsArray_Count;

/** A list of latitude samples */
@property(nonatomic, readwrite, strong, null_resettable) GPBDoubleArray *latitudeSamplesArray;
/** The number of items in @c latitudeSamplesArray without causing the array to be created. */
@property(nonatomic, readonly) NSUInteger latitudeSamplesArray_Count;

/** A list of longitude samples */
@property(nonatomic, readwrite, strong, null_resettable) GPBDoubleArray *longitudeSamplesArray;
/** The number of items in @c longitudeSamplesArray without causing the array to be created. */
@property(nonatomic, readonly) NSUInteger longitudeSamplesArray_Count;

/** A list of altitude samples */
@property(nonatomic, readwrite, strong, null_resettable) GPBDoubleArray *altitudeSamplesArray;
/** The number of items in @c altitudeSamplesArray without causing the array to be created. */
@property(nonatomic, readonly) NSUInteger altitudeSamplesArray_Count;

/** A list of speed samples */
@property(nonatomic, readwrite, strong, null_resettable) GPBDoubleArray *speedSamplesArray;
/** The number of items in @c speedSamplesArray without causing the array to be created. */
@property(nonatomic, readonly) NSUInteger speedSamplesArray_Count;

/** A list of accuracy samples */
@property(nonatomic, readwrite, strong, null_resettable) GPBDoubleArray *accuracySamplesArray;
/** The number of items in @c accuracySamplesArray without causing the array to be created. */
@property(nonatomic, readonly) NSUInteger accuracySamplesArray_Count;

/** Have location permissions been granted by the user? */
@property(nonatomic, readwrite) BOOL locationPermissionsGranted;

/** Has location services been requested by the user? */
@property(nonatomic, readwrite) BOOL locationServicesRequested;

/** Are location services enabled and working? */
@property(nonatomic, readwrite) BOOL locationServicesEnabled;

/** Location provider enumeration */
@property(nonatomic, readwrite) LocationChannel_LocationProvider locationProvider;

/** Statistics for sample timestamps */
@property(nonatomic, readwrite, strong, null_resettable) SummaryStatistics *sampleRateStatistics;
/** Test to see if @c sampleRateStatistics has been set. */
@property(nonatomic, readwrite) BOOL hasSampleRateStatistics;

/** Statistics for latitude samples */
@property(nonatomic, readwrite, strong, null_resettable) SummaryStatistics *latitudeSampleStatistics;
/** Test to see if @c latitudeSampleStatistics has been set. */
@property(nonatomic, readwrite) BOOL hasLatitudeSampleStatistics;

/** Statistics for longitude samples */
@property(nonatomic, readwrite, strong, null_resettable) SummaryStatistics *longitudeSampleStatistics;
/** Test to see if @c longitudeSampleStatistics has been set. */
@property(nonatomic, readwrite) BOOL hasLongitudeSampleStatistics;

/** Statistics for altitude samples */
@property(nonatomic, readwrite, strong, null_resettable) SummaryStatistics *altitudeSampleStatistics;
/** Test to see if @c altitudeSampleStatistics has been set. */
@property(nonatomic, readwrite) BOOL hasAltitudeSampleStatistics;

/** Statistics for speed samples */
@property(nonatomic, readwrite, strong, null_resettable) SummaryStatistics *speedSampleStatistics;
/** Test to see if @c speedSampleStatistics has been set. */
@property(nonatomic, readwrite) BOOL hasSpeedSampleStatistics;

/** Statistics for accuracy samples */
@property(nonatomic, readwrite, strong, null_resettable) SummaryStatistics *accuracySampleStatistics;
/** Test to see if @c accuracySampleStatistics has been set. */
@property(nonatomic, readwrite) BOOL hasAccuracySampleStatistics;

/** A map from string to string for including untyped metadata */
@property(nonatomic, readwrite, strong, null_resettable) NSMutableDictionary<NSString*, NSString*> *metadata;
/** The number of items in @c metadata without causing the array to be created. */
@property(nonatomic, readonly) NSUInteger metadata_Count;

@end

/**
 * Fetches the raw value of a @c LocationChannel's @c locationProvider property, even
 * if the value was not defined by the enum at the time the code was generated.
 **/
int32_t LocationChannel_LocationProvider_RawValue(LocationChannel *message);
/**
 * Sets the raw value of an @c LocationChannel's @c locationProvider property, allowing
 * it to be set to a value that was not defined by the enum at the time the code
 * was generated.
 **/
void SetLocationChannel_LocationProvider_RawValue(LocationChannel *message, int32_t value);

#pragma mark - ImageChannel

typedef GPB_ENUM(ImageChannel_FieldNumber) {
  ImageChannel_FieldNumber_SensorDescription = 1,
  ImageChannel_FieldNumber_MeanSampleRateHz = 2,
  ImageChannel_FieldNumber_SampleTsUsArray = 3,
  ImageChannel_FieldNumber_SamplesArray = 4,
  ImageChannel_FieldNumber_SampleRateStatistics = 5,
  ImageChannel_FieldNumber_Metadata = 6,
};

@interface ImageChannel : GPBMessage

/** The name or description of the sensor */
@property(nonatomic, readwrite, copy, null_resettable) NSString *sensorDescription;

/** The mean sample rate in Hz */
@property(nonatomic, readwrite) double meanSampleRateHz;

/** A list of timestamps, one for each sample */
@property(nonatomic, readwrite, strong, null_resettable) GPBDoubleArray *sampleTsUsArray;
/** The number of items in @c sampleTsUsArray without causing the array to be created. */
@property(nonatomic, readonly) NSUInteger sampleTsUsArray_Count;

@property(nonatomic, readwrite, strong, null_resettable) NSMutableArray<NSData*> *samplesArray;
/** The number of items in @c samplesArray without causing the array to be created. */
@property(nonatomic, readonly) NSUInteger samplesArray_Count;

/** Statistics for sample timestamps */
@property(nonatomic, readwrite, strong, null_resettable) SummaryStatistics *sampleRateStatistics;
/** Test to see if @c sampleRateStatistics has been set. */
@property(nonatomic, readwrite) BOOL hasSampleRateStatistics;

/** A map from string to string for including untyped metadata */
@property(nonatomic, readwrite, strong, null_resettable) NSMutableDictionary<NSString*, NSString*> *metadata;
/** The number of items in @c metadata without causing the array to be created. */
@property(nonatomic, readonly) NSUInteger metadata_Count;

@end

#pragma mark - SummaryStatistics

typedef GPB_ENUM(SummaryStatistics_FieldNumber) {
  SummaryStatistics_FieldNumber_Count = 1,
  SummaryStatistics_FieldNumber_Mean = 2,
  SummaryStatistics_FieldNumber_Median = 3,
  SummaryStatistics_FieldNumber_Mode = 4,
  SummaryStatistics_FieldNumber_Variance = 5,
  SummaryStatistics_FieldNumber_Min = 6,
  SummaryStatistics_FieldNumber_Max = 7,
  SummaryStatistics_FieldNumber_Range = 8,
  SummaryStatistics_FieldNumber_Metadata = 9,
};

/**
 * Message type for summary statistics
 **/
@interface SummaryStatistics : GPBMessage

/** The total count of values included in the statistics */
@property(nonatomic, readwrite) double count;

/** The mean of the values */
@property(nonatomic, readwrite) double mean;

/** The median of the values */
@property(nonatomic, readwrite) double median;

/** The mode of the values */
@property(nonatomic, readwrite) double mode;

/** The variance of the values */
@property(nonatomic, readwrite) double variance;

/** The minimum value */
@property(nonatomic, readwrite) double min;

/** The maximum value */
@property(nonatomic, readwrite) double max;

/** The range of the values */
@property(nonatomic, readwrite) double range;

/** A map from string to string for including untyped metadata */
@property(nonatomic, readwrite, strong, null_resettable) NSMutableDictionary<NSString*, NSString*> *metadata;
/** The number of items in @c metadata without causing the array to be created. */
@property(nonatomic, readonly) NSUInteger metadata_Count;

@end

NS_ASSUME_NONNULL_END

CF_EXTERN_C_END

#pragma clang diagnostic pop

// @@protoc_insertion_point(global_scope)
