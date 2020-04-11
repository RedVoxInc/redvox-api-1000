# RedVox API M Documentation

While the [protocol definition](https://bitbucket.org/redvoxhi/redvox-api-1000/src/master/src/redvox_api1000/redvox_api_1000.proto) provides the _shape_ of the data and should be used as a starting point reference to API M. There are also a set of related API M standards and constraints that can not be expressed in a protocol definition and are outlined in this document.

The following items __must__ be implemented to be considered RedVox API M compliant.

## Timestamps

__All__ timestamps in API M should be represented as the number of microseconds since the [epoch](https://en.wikipedia.org/wiki/Unix_time) (1 January 1970 UTC).

The following example shows a UTC date and time and its corresponding timestamp:

|Date/Time UTC | Timestamp microseconds since epoch |
|---|---|
|2020-04-09 21:30:51.820478 | 1586467851820478 |

#### Keeping Time

TODO

## Filenames

The default filename for an API M packet follows the following format:

```
[station ID]_[packet start mach timestamp]_m.rdvxz
```

Here `station ID` is the station ID prepended with zeros so that the length is exactly 10 characters and `packet start mach timestamp` corresponds to the `timing_information.packet_start_mach_timestamp` but is truncated to milliseconds and converted to an integer for the purpose of outputting to a filename.

If the packet is encrypted, it will have the following format:

```
[chksum]_m.rdvxz.gpg
```

where `chksum` is the unsigned sim of bytes that make up the contents of the file.

## Audio Sampling Rates / Packet Length

Audio samples drive the construction and timing of all API M data packets. The packet time window is directly related to the sampling rate of the audio sensor. The following audio sampling rates and constraints are supported under API M.

| Audio sampling rate (Hz) | Total audio samples/packet | Total packet length (s) |
|--------------------------|----------------------------|-------------------------|
| 80                       | 4,096   (2^12)             | 51.200                  |
| 800                      | 32,768  (2^15)             | 40.960                  |
| 8,000                    | 262,144 (2^18)             | 32.768                  |
| 16,000                   | TODO                       | TODO                    |
| 48,000                   | TODO                       | TODO                    |
  

## Sensor Units

Sensor samples must be stored using the following units.

##### Sensor channel units

| Sensor        | Unit                         |
|---------------|------------------------------|
| Accelerometer | meters/second^2              |
| Audio         | counts                       |
| Barometer     | kilopascal                   |
| Gyroscope     | radians/second               |
| Light         | lux                          |
| Magnetometer  | microtesla                   |
| Proximity     | 0 (off) or 1 (on)            |

_Note:_ The image channel does not have a specified unit in the traditional sensor. The image payload is made up of collections of bytes representing frames. These bytes are encoded using the specified encoding in the channel's metadata.

##### Station metric units

| Metric           | Unit            |
|------------------|-----------------|
| network_strength | decibels        |
| temperature      | degrees celsius |
| battery          | percentage      | 
| available_ram    | bytes           |
| available_disk   | bytes           |
| cpu_utilization  | percentage      |

## Storing Data

#### Audio data

Audio data must only be provided at 80Hz, 800Hz, 8kHz, 16kHz, or 48kHz. The timestamp of the first audio sample in a packet should be stored with the Audio channel metadata. A description of the microphone must be stored with the metadata.

#### Barometer, light, and proximity data

These sensors store only a single channel to store their data. Each sample must have an associated timestamp. The length of samples must equal the length of timestamps. A description of each sensor must be stored with the metadata.

#### Accelerometer, gyroscope, and magnetometer data

These sensors store data to 3 channels, namely `X`, `Y`, and `Z`. Each timestamp must be associated with exactly one `X`, one `Y`, value, and one `Z` value. Thus, `length(timestamps) == length(X) == length(Y) == length(Z)`.

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

* 

## Compressing and Decompressing API M Data

API M utilizes the [LZ4 frame specification](https://github.com/lz4/lz4/blob/master/doc/lz4_Frame_format.md) for compression and decompression of data. 

##### Compression

Compression should be used in the following scenarios:

* Serialized `RedvoxPacket1000` messages should be compressed before storing in an `AcqusitionRequest`
* When using E2E encryption
  * serialized `Header` messages should be compressed before being encrypted and stored in `EncryptedRedvoxPacket1000` 
  * serialized `RedvoxPacket1000` messages should be compressed before being encrypted and stored in `EncryptedRedvoxPacket1000` 
  
Please note that the `EncryptedRedvoxPacket1000` is _not_ compressed before storing in an `AcqusitionRequest`.

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

## RedVox Time Synchronization Specification v3

The goal of the time synchronization process is to exchange sets of timestamps between a client and server for the purpose of gathering the metrics required for performing timing correction. This section provides the relevant details for implementing a client or server that is compatible with version 3 of the RedVox synchronization specification. 

Communication between clients and servers are provided over encrypted WebSockets using protocol buffer serialization. The `SynchRequest` and `SynchResponse` message types are used to serialized data. Further, the client is expected to build a list `RedvoxPacket1000.TimingInformation.SynchExchange` messages per packet. A client should perform a synchronization exchange once every 5 seconds. This may change in future revision of API M. Any exchanges that are not fully completed before a packet is closed should be discarded.

Two sequence ids are kept: `seq_id` should start at zero when the app starts and increment by one on each full exchange. `sub_seq_id` starts at 0 for each new exchange and is incremented by one on each step within a full exchange. The following table outlines the algorithms for V3 of the time synchronization algorithm.

The function `timestamp()` should return the number of microsconds since the epoch.

__Exchange algorithm:__

| Step | Client | Server | 
|------|--------|--------|
| 1    | Set `exchange` to a new `RedvoxPacket1000.TimingInformation.SynchExchange` | |
| 2    | Set `synch_req` to a new `SynchRequest` | |
| 3    | Set `synch_req.station_id` | |
| 4    | Set `synch_req.station_uuid` | |
| 5    | Set `synch_req.seq_id` to `N` | |
| 6    | Set `synch_req.sub_seq_id` to 0 | |
| 7    | Serialize `synch_req` to bytes | |
| 8    | Send serialized bytes to server | | 
| 9    | | Receive serialized bytes |
| 10   | | Set `tmp` to `timestamp()` |
| 11   | | Deserialize request bytes into a `SynchRequest` message called `synch_req` |
| 12   | | Set `synch_resp` to a new `SynchResponse` |
| 13   | | Set `synch_resp.station_id` to `synch_req.station_id`
| 14   | | Set `synch_resp.station_uuid` to `synch_req.station_uuid` |
| 15   | | Set `synch_resp.seq_id` to `synch_req.seq_id` |
| 16   | | Set `synch_resp.sub_seq_id` to `synch_req.sub_seq_id + 1` |
| 17   | | Set `synch_resp.recv_ts_us` to `tmp` |
| 18   | | Set `synch_resp.send_ts_us` to `timestamp()` |
| 19   | | Serialize `synch_resp` to bytes |
| 20   | | Respond to the client with serialized response |
| 21   | Receive serialized response | |
| 22   | Set `tmp` to `timestamp()` | |
| 23   | Deserialize response from bytes into a `SynchResponse` message call `synch_resp` | |
| 23   | Confirm `synch_resp.station_id` is correct | |
| 25   | Confirm `synch_resp.station_uuid` is correct | |
| 26   | Confirm `synch_resp.seq_id` is still `N` | |
| 27   | Confirm `synch_resp.sub_seq_id` is now `1` | |
| 28   | Set `exchange.a1` to `synch_resp.recv_ts_us` | |
| 29   | Set `exchange.b1` to `tmp` | |
| 30   | Set `exchange.b2` to `timestamp()` | | 

for some exchange `N` where `N >= 0` starting with 0.

#### Quality Assurance

## Enabling End-to-End encryption

API M supports end-to-end encryption through the `EncryptedRedvoxPacket1000` message type.

Four pieces of metadata are required for properly routing encrypted data:

1. The station ID
2. The station UUID
3. The authentication token
4. The authentication email

The station ID abd UUID are required for identifying and routing data for the particular station while the authentication information is required for verifying the authenticity of the data.

As such, these four pieces of metadata are stored separately from the rest of the encrypted payload in an embedded `Header` message.

The `EncryptedRedvoxPacket1000` message contains two fields:

1. header (bytes)
2. packet (bytes)

#### Encrypting and serializing the data

The [Pretty Good Privacy](https://en.wikipedia.org/wiki/Pretty_Good_Privacy) (PGP) encryption standard is to be used. The modern standard is described through [OpenPGP](https://www.openpgp.org/). The [GNU Privacy Guard](https://gnupg.org/) (GPG) provides a modern open source implementation of PGP.

Each user utilizing E2E encryption will be required to generate a public/private key pair. The public key must be provided to RedVox. RedVox will also make available its public key. Then:

1. The station builds a RedVox packet in memory as normal
2. When the packet is ready to be sent, the station id, uuid, authentication token, and authentication email are stored to a separate `Header` message.
3. The packet is serialized to bytes, compressed, and then encrypted using the __user's__ public key. 
4. The header is serialized to bytes, compressed, and then encrypted using __RedVox's__ public key.

or more succinctly:

* header bytes = `encrypt_redvox(compress(serialize(header)))`
* packet bytes = `encrypt_user(compress(serialize(packet)))`

The `EncryptedRedvoxPacket1000` is serialized and sent to the acquisition server at a separate endpoint specifically for E2E.  

#### Routing the encrypted data

The acquisition server receives the serialized encrypted message and then:

1. Deserializes the message
2. Decrypts only the `Header` message using RedVox's private key
3. Authenticates the message
    1. On failure, responds to client with failure message
    2. On success, the compressed and then encrypted packet contents are routed to the user
4. Only the user will be able to decrypt the packet using their private key

## Local Station Storage




