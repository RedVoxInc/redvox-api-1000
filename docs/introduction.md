# RedVox API M Introduction

API M is a specification implemented using [protocol buffers](https://developers.google.com/protocol-buffers) for serializing next generation mobile sensor data. RedVox API M provides a specification for organizing a wide variety of structured metadata and sensor data collected from mobile platforms.

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

Details about the design and standards associated with API M are described in the rest these documents.

