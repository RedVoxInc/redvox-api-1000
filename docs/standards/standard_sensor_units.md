## Standard Sensor Units

Sensor samples must be stored using the following units. You will note that API M provides all units and type safe enumerations as part of the protocol definition. In order to provide discoverable units from the data without access to the documentation, you must set the correct unit for each sensor and payload field found in the protocol.

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