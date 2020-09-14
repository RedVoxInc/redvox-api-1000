# RedVox API 1000

This repository contains the RedVox API 1000 protocol definition as well as several wrappers generated by the protobuf compiler.

[Protocol buffers](https://developers.google.com/protocol-buffers) (often shortened to just "protobuf") are a type-safe system for serializing and deserializing structured data between different programming languages and systems.

### Specification

The RedVox API 1000 specification can be found at https://bitbucket.org/redvoxhi/redvox-api-1000/src/master/src/redvox_api_m/redvox_api_m.proto

It's fairly small and fairly readable. This is the best and first place to refer for documentation for API 1000.

### Protobuf generated wrappers

Wrappers generated by protobuf for working with the raw RedVox API 1000 protocol are provided below:

* [Java](https://bitbucket.org/redvoxhi/redvox-api-1000/src/master/src/generated/java/) / [Java API Docs](https://redvoxhi.bitbucket.io/api-m/java/index.html)
* [JavaScript](https://bitbucket.org/redvoxhi/redvox-api-1000/src/master/src/generated/js/)
* [Objective-C](https://bitbucket.org/redvoxhi/redvox-api-1000/src/master/src/generated/obj_c/) / [Objective-C API Docs](https://redvoxhi.bitbucket.io/api-m/obj_c/html/index.html)
* [Python](https://bitbucket.org/redvoxhi/redvox-api-1000/src/master/src/generated/python/) / [Python API Docs](https://redvoxhi.bitbucket.io/api-m/python/redvox_api_m_pb2.html)


### Documentation

Detailed documentation is provided at: https://bitbucket.org/redvoxhi/redvox-api-1000/src/master/docs/README.md


### Changelog

* v9.0 - 14 Sep 2020 - Add seq_id to AcquisitionReq/Resp. Expand app settings to match app changes.
* v8.0 - 11 Aug 2020 - Fix typo with lat/lng/alt in AppSettings.
* v7.0 - 11 Aug 2020 - Convert AppSettings lat/lng to double. Convert statistics to double.
* v6.0 - 5 Aug 2020 - Add timestamps_gps to Location sensor.
* v5.0 - 5 Aug 2020 - Rename location_provider to location_providers. Add LocationProvider to BestLocation.
* v4.0 - 5 Aug 2020 - Remove one of the best location fields
