# Keeping Time

### Timestamp Standard

__All__ timestamps in API M should be represented as the number of microseconds since the [epoch](https://en.wikipedia.org/wiki/Unix_time) (1 January 1970 UTC).

The following example shows a UTC date and time and its corresponding timestamp:

|Date/Time UTC | Timestamp microseconds since epoch |
|---|---|
|2020-04-09 21:30:51.820478 | 1586467851820478 |

### Timing Information

The `TimingInformation` message contains timestamps that delineate the start and end of the data window as measured by the audio channel. 

The start and end timestamps represent the first and last sample of the audio channel respectively.

Timestamps marked as `os_timestamp` refer to the time according to the operating system. This is sometimes referred to as the "wall clock". This time is generally disciplined by NTP and may not be monotonic or stable. Timestamps marked as `mach_timestamp` refer to timestamps collected from stable monotonic clocks provided by station hardware and accessed through the OS.  

The station must track and adjust the start time of each recording session in the `app_start_mach_timestamp` field.

The station must also compute the partial best latency and offset from each packet's synchronization exchanges.

### Calculating Sample Rates

Only the audio sensor is stable enough that we don't store an associated timestamp with each sample. All other sensors include a timestamp per sample. These sensors also have `mean_sample_rate` and `stdev_sample_rate` fields. These values must be computed by stations using the provided timestamps. 

Equations for computing the sample interval and sample rates are provided in the following PDF: https://bitbucket.org/redvoxhi/redvox-api-1000/raw/master/docs/pdfs/sample_rate_eqs.pdf

### Calculating best latency and best offset

TODO

### Timing Synchronization

When a client is collecting data, it should perform a synchronization exchange at a given interval (currently 5 seconds, but this may change). All exchanges that occur during the duration of a packet should be included in the exchanges section of the TimingInformation. Further, the client is expected to calculate the best latency and offest from these exchanges and store them in the TimingInformation metadata.

Details are described at: https://bitbucket.org/redvoxhi/redvox-api-1000/src/master/docs/standards/time_synchronization.md.
