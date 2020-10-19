# Storing Audio Data

* Audio data must only be provided at 80Hz, 800Hz, 8kHz, 16kHz, or 48kHz. This value should be recorded in the metadata.
* The timestamp of the first audio sample in a packet should be stored with the Audio channel metadata. This should match `RedvoxPacket1000.TimingInformation.packet_start_mach_timestamp` 
* A description of the microphone must be stored with the metadata. Be as descriptive as possible.
* If audio is scrambled, set flag indicating that it is scrambled
* Audio sample statistics must be maintained

### Storing compressed audio

TODO

### Scrambling Audio Data

TODO

## Audio Sampling Rates / Packet Length

Audio samples drive the construction and timing of all API M data packets. The packet time window is directly related to the sampling rate of the audio sensor. The following audio sampling rates and constraints are supported under API M.

| Audio sampling rate (Hz) | Total audio samples/packet | Total packet length (s) |
|--------------------------|----------------------------|-------------------------|
| 80                       | 4,096   (2^12)             | 51.200                  |
| 800                      | 32,768  (2^15)             | 40.960                  |
| 8,000                    | 262,144 (2^18)             | 32.768                  |
| 16,000                   | 262,144 (2^18)             | 16.384                  |
| 48,000                   | 524,288 (2^19)             | 10.923                  |


