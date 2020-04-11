# RedVox API M Introduction

API M is a specification implemented using [protocol buffers](https://developers.google.com/protocol-buffers) for serializing next generation mobile sensor data. RedVox API M provides a specification for organizing a wide variety of structured metadata and sensor data collected from mobile platforms. API 1000 (or API M for "[millenary](https://www.merriam-webster.com/dictionary/millenary)") provides a type safe way of serializing RedVox data. It roughly consists of three types of data. Typed metadata describing the sensor and sensor channels, typed sensor payload data and timestamps, and untyped metadata that can be used for extending the protocol. 

Windows of data are collected into individual packets which can be saved or streamed elsewhere. Data produced using the RedVox API M format can be created, edited, and read using the RedVox open source suite of SDKs for API M. 

The following list summarizes what API M collects and organizes
* Detailed metadata on the station, authentication, timing, and servers
* Detailed metadata for each available sensor channel
* A stable audio channel capable of sampling at 80Hz, 800Hz, 8kHz, 16kHz, and 48kHz
* Sensor channels which include a timestamp per sample for
  * Barometer
  * Location (latitude, longitude, altitude, speed, bearing)
  * Accelerometer (X,Y,Z)
  * Magnetometer (X,Y,Z)
  * Gyroscope (X,Y,Z)
  * Light
  * Proximity
  * Image  

While the [protocol definition](https://bitbucket.org/redvoxhi/redvox-api-1000/src/master/src/redvox_api1000/redvox_api_1000.proto) provides the _shape_ of the data and should be used as a starting point reference to API M. There are also a set of related API M standards and constraints that can not be expressed in a protocol definition and are outlined in this document.

### Changes from API 900

API 1000 was largely designed to expand on API 900 while still attempting to simplify the overall format.

##### Numerical Data Types

All numerical types are now 64-bit floating point. This includes timestamps, statistics, and sample payloads. 

Previously, API 900 provided flexible data types that only added needless complexity. Not only does this reduce complexity, but it turns out that protobuf encoded floating point values compress better than integer counterparts. 

##### More Concrete Sensor Channels

API 900 used arrays of evenly and unevenly sampled channels. API 1000 has been simplified to provide a single channel for each sensor that RedVox utilizes. The following new channel types exist in API 1000.

* MicrophoneChannel specifically for evenly sampled microphone data.
* SingleChannel for unevenly sampled sensors with a single data channel such as barometer, light, or infrared.
* XyzChannel for unevenly sampled sensors that have X, Y, and Z channels such as accelerometer, gyroscope, and magnetometer.
* LocationChannel for location data.
* ImageChannel for image data.

These new more concrete channel types remove the need to "interleave" data like we did in API 900. Instead, data for each channel is stored in the appropriate array. 

You will also note that the time synchronization channel has been moved to the timing information metadata instead of shoehorned as a data channel.

##### Improved Statistics

API M utilizes a new type `SummaryStatistics` which stores common summary statistics. Each payload and each collection of timestamps now have associated summary statistics that should be populated by the sensor when building this the packet.

Further, the storage of system statistics (ram, disk, etc) is provided through this new type.

##### Increased Device Information

API M improves on API 900 by providing enhanced device information. 

New network settings describe the sensor's network type and strength of connection. 

System information can be collected including RAM, disk, and CPU usage and stored as summary statistics.

Finally, a new data type has been provided for recording app settings.   

##### Increased Modularization

Previously in API 900, most fields were provided as top level fields of a single type. API M has increased modularization by categorizing like data into separate message types. Thus, the top level packet only contains the following types, which in turn provide the detailed field, `api`, `user_information`, `device_information`, `packet_information`, `timing_information`, `sensor_channels`, and `metadata`.

##### Increased Type Safety

In general, many fields with finite values have been converted into type safe enumerations. Examples include `NetworkType(WIFI, CELLULAR, NONE)`, `OsType(ANDROID, IOS, LINUX, WINDOWS)`, or app settings like `AudioSourceTuning(INFRASOUND, LOW_AUDIO, AUDIO)`, etc.

Not only does this increase type safety, but also compresses better than strings.

##### Improved Timing Information

API M adds additional timestamps for app and mach time that correspond with the first and last sample of the microphone data. Synchronization parameters have been moved into the timing information message. Further, fields for exposing the best latency and offset are provided and can be calculated directly from the synch_params.

##### Updated Metadata

Metadata has been updated in API M from a list of strings to a map data structure that maps string keys to string values. Each message type gets its own metadata field. 

Having untyped metadata proved to be an important component of API 900 as it allowed us to expand our protocol in ad-hoc ways as needed for certain situations. API M has taken all of the metadata fields from API 900 and makes them top level fields in API M.

In general, typed top level fields are preferred over untyped metadata. However, it's an important escape hatch that can be used to extend the protocol without extending the binary protocol. 


##### Modified Compression Routines

API M simplifies the compression routines required for compressing and decompressing API M packets. API M utilizes the `LZ4 Frame Format` (https://github.com/lz4/lz4/blob/master/doc/lz4_Frame_format.md) for compression. Most modern LZ4 libraries support this compression protocol. 

This eliminates the need for prepending 4-bytes to the front of compressed payloads representing the size of the uncompressed data as we did with API 900. These details are handled by LZ4's Frame Format.  

##### Improved Network Protocol

API M adds additional constraints to communications protocol between sensors and RedVox acquisition servers.

Previously, API 900 servers accepted raw bytes for the compressed packet and responded with a typed response that contained an indication of success or error and the checksum computed on the server. If the sensor received a bad response or an incorrect checksum, it would attempt to backfill and resend the packet.

API M improves on this protocol in multiple ways.

First, clients will no longer send an untyped array of bytes. Instead, a new `AcquisitionRequest` type is provided which wraps the compressed packet payload in a type safe message along with a checksum that is computed on the client before packet transmission. This allows the server to compute and compare its checksum with the client's checksum.
 
 The `AcquisitionResponse` type has been updated by providing more accurate error responses. API M also adds a `resend` field that is set by the server. If resend is set to `false`, the client will not attempt to resend the packet to the server. This can happen when data quality issues are observed such as packets full of zeroes or data quality issues are observed.

The underlying transport layer has not changed and remains encrypted WebSockets.
