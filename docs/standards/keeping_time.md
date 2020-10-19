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

Equations for computing the sample interval and sample rates are provided in the following PDF: https://github.com/RedVoxInc/redvox-api-1000/raw/master/docs/pdfs/sample_rate_eqs.pdf

### Calculating best latency and best offset

Given a list of `N` synch exchanges `exchanges`, extract the `a1, a2, a3, b1, b2, b3` coefficients into separate arrays.

```
a1s = [exchanges[0].a1, exchanges[1].a1, ..., exchanges[N].a1]
a2s = [exchanges[0].a2, exchanges[1].a2, ..., exchanges[N].a2]
a3s = [exchanges[0].a3, exchanges[1].a3, ..., exchanges[N].a3]
b1s = [exchanges[0].b1, exchanges[1].b1, ..., exchanges[N].b1]
b2s = [exchanges[0].b2, exchanges[1].b2, ..., exchanges[N].b2]
b3s = [exchanges[0].b3, exchanges[1].b3, ..., exchanges[N].b3]
```

Next, perform the following steps using "vector operations" (that is, apply the operation to each element in the arrays resulting in a new array of the same size).

```
d1s = ((a2s - a1s) - (b2s - b1s)) * 0.5
d3s = ((b3s - b2s) - (a3s - a2a)) * 0.5
o1s = (a1s - b1s) + d1s
o3s = (a3s - b3s) + d3s
```

Next, compute the d1 and d3 metrics. Each metric contains the `bestLatency` as well as the `bestOffset` that is associated with the `bestLatency`. The `bestLatency` is found by finding the smallest value greater than 0. If such a value does not exist, the `bestLatency` and `bestOffset` should be set to `0`. 

```
d1Metric = bestMetric(d1s)
d3Metric = bestMetric(d3s)
```

Finally, compare the metrics and return.

```
if d3Metric.bestLatency < d1Metric.bestLatency:
    return (d3Metric.bestLatency, o3s[d3Metric.bestOffset])
else:
    return (d1Metric.bestLatency, o1s[d1Metric.bestOffset])
```

A reference Python imeplementation for finding the best latency and offset is provided at: https://github.com/RedVoxInc/redvox-api-1000/src/master/docs/ref/best_latency_offset.py

### Timing Synchronization

When a client is collecting data, it should perform a synchronization exchange at a given interval (currently 5 seconds, but this may change). All exchanges that occur during the duration of a packet should be included in the exchanges section of the TimingInformation. Further, the client is expected to calculate the best latency and offest from these exchanges and store them in the TimingInformation metadata.

Details are described at: https://github.com/RedVoxInc/redvox-api-1000/src/master/docs/standards/time_synchronization.md.
