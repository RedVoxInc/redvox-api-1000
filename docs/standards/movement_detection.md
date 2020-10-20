# Movement Detection

The API M `EventStream` and `Event` message types are used to store the result of detected movement.

### Description of the algorithm

This algorithm requires multiple circular buffers for storing the cumulative sum window and the average window.

### Configuring the Movement Detector

The following fields are required for configuring the movement detector.

* window_duration (the duration of the average window in microseconds (default=1,000,000))
* scaling (the scaling factor (default=1.75))
* threshold (the detection threshold (default=0.2))

The station should be able to read configurations passed as JSON. The following is an example configuration.

```json
{
  "windowDurationUs": 1000000.0,
  "scaling": 1.75,
  "threshold": 0.2,
}
```

### Storing Movement Events

Movement events are to be stored in an EventStream with the name `Movement`.

Each `Event` utilizes the `numeric_payload` mapping to store detected movement metadata. The following fields must be defined and provided when movement is detected.

* movement_start (microsecond epoch start of movement)
* movement_end (microsecond epoch end of movement)
* movement_duration (duration of detected movement in microseconds)
* magnitude_min (the minimum of the movement magnitude over the movement window)
* magnitude_max (the maximum of the movement magnitude over the movement window)
* magnitude_range (the range of the movement magnitude over the movement window)
* magnitude_mean (the mean of the movement magnitude over the movement window)
* magnitude_std_dev (the standard deviation of the movement magnitude over the movement window)

Each event must also have its `description` field set to the channel that detected the movement (one of ACCELEROMETER_X, ACCELEROMETER_Y, ACCELEROMETER_Z, GYROSCOPE_X, GYROSCOPE_Y, GYROSCOPE_Z).
