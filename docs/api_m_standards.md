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

##### Station metric units

## Performing Synchronization Exchanges

## Storing Data

## Keeping Statistics Up to Date

## Storing sensor state

## Compressing and Decompressing API M Data

## Enabling End-to-End encryption

## Local Station Storage




