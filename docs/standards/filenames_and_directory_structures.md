# Filenames and Directory Structures

This document describes the standards for filenames and directory layouts. All filenames and directory layouts provided within are case-sensitive.

### Filenames

##### Compressed RedvoxPacketM

RedvoxPacketM messages are serialized to bytes and then compressed using the LZ4 frame protocol. The resulting file is the standard method of sharing RedVox API M data. The filename for these files must utilize the following format.

```
[station ID]_[packet start mach timestamp].rdvxm
```

where
* `[station ID]` comes from `RedvoxPacketM.StationInformation.id`. This field must be exactly 10 characters in length and possibly padded with '0' characters to meet this requirement.
* `[packet start mach timestamp]` is the microsecond timestamp from `RedvoxPacketM.TimingInformation.packet_start_mach_timestamp` formatted as an integer


If the packet is encrypted, it must use the following naming convention:

```
[chksum].rdvxm.gpg
```

where 
* `chksum` is the unsigned sum of bytes that make up the contents of the file.

### Standard Directory Structure

API M utilizes a standardized directory structure and layout for API data. This structure is utilized in several places on the station and in cloud services. It is also the standard structure used when distributing API M data sets. This structure will be referred to in other parts of the documentation as `[STANDARD_DIR_STRUCTURE]`.

The standard directory structure is: `api1000/YYYY/MM/DD/HH`, where: 
* `YYYY` is replaced with the year as 4 characters
* `MM` is replaced with the month as 2 characters (possibly 0 padded)
* `DD` is replaced with the date as 2 characters (possibly 0 padded)
* `HH` is replaced with the hour as 2 characters (00 - 23)
* The date parts are from `RedvoxPacketM.TimingInformation.packet_start_mach_timestamp`

### Station Directory Structure

The following directory layout must be used on stations. 

* The top-level directory storing all station data must be `RedVox`

##### Sent Station Data

Sent station data should reside in:
* `RedVox/RDVX/[STANDARD_DIR_STRUCTURE]`

##### Failed Station Data

Data that has failed to send possibly due to errors with the data itself should be stored in:
* `RedVox/RDVX/failed/[STANDARD_DIR_STRUCTURE]`

##### Unsent Station Data

Data that has not yet been sent to data acquistiion should be stored in:
* `RedVox/RDVX/unsent/[STANDARD_DIR_STRUCTURE]`

##### Configuration Data

* Configuration data should be provided as JSON
* Configuration data should be stored at `RedVox/settings`

##### Event Data

* Event data should be provided as TODO
* Event data should be stored at `RedVox/event`

##### Calibration Data

* Calibration data should be stored at `RedVox/calibration`

#### Shared Data

Data from other stations or synthetic data should be be stored at:
* `RedVox/shared`


