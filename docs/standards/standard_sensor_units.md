# Standard Sensor Units

Sensor samples must be stored using the following units. You will note that API M provides all units and type safe enumerations as part of the protocol definition. In order to provide discoverable units from the data without access to the documentation, you must set the correct unit for each sensor and payload field found in the protocol.

### Timestamps

All timestamps in API M should be represented as the nummber of microseconds since the Unix epoch.

More information is provided in the [keeping time standard](https://bitbucket.org/redvoxhi/redvox-api-1000/src/master/docs/standards/keeping_time.md).

### Sample Rates

All sample rates and associated statistics are to be represented in Hz.

### Sensor channel units

| Sensor                         | Unit                         | Notes                                                                                               |
|--------------------------------|------------------------------|-----------------------------------------------------------------------------------------------------|
| Accelerometer                  | meters/second^2              |                                                                                                     |
| Ambient Temperature            | degrees Celsius              |                                                                                                     |
| Audio                          | normalized counts +/- 1      |                                                                                                     |
| Compressed Audio               | bytes (codec specific)       |                                                                                                     |
| Gravity                        | meters/second^2              |                                                                                                     |
| Gyroscope                      | radians/second               |                                                                                                     |
| Image                          | bytes (codec specific)       |                                                                                                     |
| Light                          | lux                          |                                                                                                     |
| Linear Acceleration            | meters/second*2              |                                                                                                     |
| Location (Latitude)            | decimal degrees              |                                                                                                     |
| Location (Longitude)           | decimal degrees              |                                                                                                     |
| Location (Altitude)            | meters WGS 84                |                                                                                                     |
| Location (Speed)               | meters/second                |                                                                                                     |
| Location (Bearing)             | degrees                      |                                                                                                     |
| Location (Horizontal accuracy) | meters                       | https://developer.android.com/reference/android/location/Location#getAccuracy()                     |
| Location (Vertical accuracy)   | meters                       | https://developer.android.com/reference/android/location/Location#getVerticalAccuracyMeters()       |
| Location (Speed accuracy)      | meters/second                | https://developer.android.com/reference/android/location/Location#getSpeedAccuracyMetersPerSecond() |
| Location (Bearing accuracy)    | decimal degrees              | https://developer.android.com/reference/android/location/Location#getBearingAccuracyDegrees()       |
| Magnetometer                   | microtesla                   |                                                                                                     |
| Orientation                    | radians                      | https://developer.android.com/reference/android/hardware/SensorManager#getOrientation(float%5B%5D,%20float%5B%5D) |
| Pressure                       | kilopascal                   |                                                                                                     |
| Proximity                      | 0 (off) or 1 (on) or cm      |                                                                                                     |
| Relative Humidity              | percentage                   |                                                                                                     |
| Rotation Vector                | Unitless                     |                                                                                                     |

### Station metric units

| Metric           | Unit            |
|------------------|-----------------|
| network_strength | decibels        |
| temperature      | degrees celsius |
| battery          | percentage      | 
| available_ram    | bytes           |
| available_disk   | bytes           |
| cpu_utilization  | percentage      |
