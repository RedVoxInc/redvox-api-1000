## Keeping Time

#### Timestamp Standard

__All__ timestamps in API M should be represented as the number of microseconds since the [epoch](https://en.wikipedia.org/wiki/Unix_time) (1 January 1970 UTC).

The following example shows a UTC date and time and its corresponding timestamp:

|Date/Time UTC | Timestamp microseconds since epoch |
|---|---|
|2020-04-09 21:30:51.820478 | 1586467851820478 |

#### Timing Information

The `TimingInformation` message contains timestamps that delineate the start and end of the data window as measured by the audio channel. 

The start and end timestamps represent the first and last sample of the audio channel respectively.

Timestamps marked as `os_timestamp` refer to the time according to the operating system. This is sometimes refered to as the "wall clock". This time is generally disciplined by NTP and may not be monotonic or stable. Timestamps marked as `mach_timestamp` refer to timestamps collected from stable monotonic clocks provided by station hardware and accessed through the OS.  

TODO, how to get a real time from mach time?

#### Timing Synchronization

When a client is collecting data, it should perform a synchronization exchange at a given interval (currently 5 seconds, but this may change). All exchanges that occur during the duration of a packet should be included in the exchanges section of the TimingInformation. Further, the client is expected to calculate the best latency and offest from these exchanges and store them in the TimingInformation metadata.

Details are described in [TODO]().
