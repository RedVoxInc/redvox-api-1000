# API M Standards

While the [protocol definition](https://bitbucket.org/redvoxhi/redvox-api-1000/src/master/src/redvox_api1000/redvox_api_1000.proto) provides the shape of the data, there are also a set or related API M standards and constraints that are outlined in this document.

## Timestamps

__All__ timestamps in API M data should be represented as the number of microseconds since the [epoch](https://en.wikipedia.org/wiki/Unix_time) (1 Janurary 1970 UTC).

## Audio Sampling Rates / Packet Length

Audio samples drive the construction and timing of all API M data packets. The packet time window is directly related to the sampling rate of the audio sensor. The following audio sampling rates and constraints are supported under API M.

| Audio sampling rate (Hz) | Total audio samples/packet | Total packet length (s) |
|--------------------------|----------------------------|-------------------------|
| 80                       | 4,096   (2^12)             | 51.200                  |
| 800                      | 32,768  (2^15)             | 40.960                  |
| 8,000                    | 262,144 (2^18)             | 32.768                  |
| 16,000                   | 524,288 (2^19)             | 32.768                  |
| 48,000                   |
  

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

##### Station metric units

## Performing Synchronization Exchanges

## Storing Data

## Keeping Statistics Up to Date

## Storing sensor state

## Compressing and Decompressing API M Data

## Enabling End-to-End encryption

API M supports end-to-end encryption through the `EncryptedRedvoxPacket1000` message type.

Four pieces of metadata are required for properly routing the encrypted data:

1. The station ID
2. The station UUID
3. The authentication token
4. The authentication email

The station ID abd UUID are required for identifying and routing data for the particular station while the authentication information is required for verifying the authenticity of the data.

As such, these four pieces of metadata are stored separately from the rest of the encrypted payload in an embedded `Header` message.

The `EncryptedRedvoxPacket1000` message contains two fields:

1. header (bytes)
2. packet (bytes)

#### Encrypting and serialization the data

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
## Local Station Storage




