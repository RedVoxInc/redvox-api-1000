# RedVox API M Documentation

[RedVox API 1000 (M) Protocol](https://bitbucket.org/redvoxhi/redvox-api-1000/src/master/src/redvox_api1000/redvox_api_1000.proto)

* Introduction
* API M Standards
* API M Structure/Layout Documentation



#### Barometer, light, and proximity data



#### Accelerometer, gyroscope, and magnetometer data



#### Location data

Location sensors can provide several different channel types.

* latitude
* longitude
* altitude
* speed
* bearing
* horizontal_accuracy
* vertical_accuracy
* speed_accuracy
* bearing_accuracy

Each timestamp must correspond to exactly one of each channel type presented above.

Further, the location metadata should be populated to provide information on location permissions, user location requests, and location provider information.

Calculations for determining the best location metrics per packet are provided next.

TODO

#### Image data

TODO

## Keeping Statistics Up to Date

Each `Payload` type message contains an associated `SummaryStatistics` message type. The `SummaryStatistics` type must be kept up to date with the contents of __every payload in an API M packet__.

## Storing sensor state

API M introduces improved system metric collection. Using the same period as synch exchanges (5 seconds) poll the following sensor metrics and store to the `StationInformation` message type with associated timestamps.




## Client/Server Communications

All station/server communications must take place over encrypted WebSockets (wss). The following URL endpoints are provided for API M. All messages are encoded in binary as bytes.

__redvox.io__

| Service                    | Endpoint                            |
|----------------------------|-------------------------------------|
| Data acquisition API M     | wss://redvox.io/acquisition/v1000   |
| Data acquisition API M E2E | wss://redvox.io/acquisition/x/v1000 |
| Synch exchanges v3         | wss://redvox.io/synch/v3            |

__Testing__

| Service                    | Endpoint                                               |
|----------------------------|--------------------------------------------------------|
| Data acquisition API M     | wss://milton.soest.hawaii.edu:8000/acquisition/v1000   |
| Data acquisition API M E2E | wss://milton.soest.hawaii.edu:8000/acquisition/x/v1000 |
| Synch exchanges v3         | wss://milton.soest.hawaii.edu:8000/synch/v3            |

#### Communicating with the data acquisition server

Sending API M packets to a RedVox data acquisition server requires using the `AcquisitionRequest` message type.

The payload field takes a collection of bytes and can take two items:
* compressed(serialized(RedvoxPacket1000))
* encrypted(compressed(serialized(RedvoxPacket1000)))

The checksum is calculated by summing all payload bytes into a signed 64-bit integer.

The server will respond with an `AcquisitionResponse` message. This will contain a response type of `OK` or various errors. 

There is a boolean field `resend` that when set the client should attempt to resent the failed packet. If the `resend` is false, the client should not attempt to resent the failed packet. 

A `details` field will optionally provide a more detailed error description from the acquisition server. 

Finally, a `chksum` exists from the server computed checksum.








