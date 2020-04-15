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
