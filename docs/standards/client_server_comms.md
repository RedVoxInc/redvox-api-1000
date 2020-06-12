## Client/Server Communications

All station/server communications must take place over encrypted WebSockets (wss). The following URL endpoints are provided for API M. All messages are encoded as bytes.

__redvox.io__

| Service                    | Endpoint                            |
|----------------------------|-------------------------------------|
| Data acquisition API M     | wss://redvox.io/acquisition/v1000   |
| Data acquisition API M E2E | wss://redvox.io/acquisition/x/v1000 |
| Synch exchanges v3         | wss://redvox.io/synch/v3            |
| Authentication             | https://redvox.io:8080/api/v1/auth  |

__Testing / Pre-Release__

| Service                    | Endpoint                                               |
|----------------------------|--------------------------------------------------------|
| Data acquisition API M     | wss://milton.soest.hawaii.edu:8000/acquisition/v1000   |
| Data acquisition API M E2E | wss://milton.soest.hawaii.edu:8000/acquisition/x/v1000 |
| Synch exchanges v3         | wss://milton.soest.hawaii.edu:8000/synch/v3            |
| Authentication             | https://milton.soest.hawaii.edu:8080/api/v1/auth       |


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
