# RedvoxPacket1000

The `RedvoxPacket1000` message encapsulates all station data and metadata for the RedVox API 1000/M protocol definition.

This message type has been organized into several sub-messages in an attempt to group like data together. In situations where fields only accept a finite number of values, we've tried to provide type-safe enumerations.

Each message and sub-message has an associated metadata field which we can use to expand the protocol in the future if needed. 

Let's examine the other top level message types included in RedvoxPacket1000. 

### RedvoxPacket1000.UserInformation

* Contains fields identifying the station owner
* Contain fields for various authentication tokens associated with the station owner

### RedvoxPacket1000.StationInformation

* Contains meta-data describing the station (IDs, os, app, etc)
* Contains a copy of the app's settings
* Contains QA information about station performance, i.e.,  network, temperature, battery, available ram, etc
* Enumerations are provided for NetworkType and OsType

##### RedvoxPacket1000.StationInformation.AppSettings

* Contains a copy of the app's settings
* Enumerations are provided for AudioSamplingRate, AudioSourceTuning, and InputSensor

### RedvoxPacket1000.PacketInformation

* Provides flags describing if the data is private or backfilled

### RedvoxPacket1000.TimingInformation

* Contains timestamps marking the start and end of the packet as well as the packet's arrival at the data acquisition server
* Contains metrics and partial solutions to timing quality
* Contains synchronization exchange metrics

See the [keeping time standard](https://bitbucket.org/redvoxhi/redvox-api-1000/src/master/docs/standards/keeping_time.md) for more information. 

### RedvoxPacket1000.ServerInformation

* Contains the URLs of servers for which the station interacted with during data creation

### RedvoxPacket1000.SensorChannels

* Contains sub-messages that encapsulate the various sensor types provided by a station

##### RedvoxPacket1000.SensorChannels.AudioChannel

The `AudioChannel` collects stably sampled audio data. See the [storing audio data standard](https://bitbucket.org/redvoxhi/redvox-api-1000/src/master/docs/standards/storing_audio_data.md) for more information. 

