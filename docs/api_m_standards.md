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

## Performing Time Synchronization Exchanges

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

#### Image data

TODO

## Keeping Statistics Up to Date

Each `Payload` type message contains an associated `SummaryStatistics` message type. The `SummaryStatistics` type must be kept up to date with the contents of __every payload in an API M packet__.

## Storing sensor state

API M introduces improved system metric collection. Using the same period as synch exchanges (5 seconds) poll the following sensor metrics and store to the `StationInformation` message type with associated timestamps.

* 

## Compressing and Decompressing API M Data

## Client/Server Communications

#### Communicating with the data acquisition server

#### Communicating with the time synchronization server

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




