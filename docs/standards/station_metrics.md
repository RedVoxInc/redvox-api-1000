# Storing Metrics

The following fields should be collected (when available) on a configurable period. 

* network_type (one of UNKNOWN, NO_NETWORK, WIFI, CELLULAR, or WIRED)
* cell_service_state (one of UNKNOWN, EMERGENCY, NOMINAL, OUT_OF_SERVICE, POWER_OFF)
* network_strength (dB)
* temperature (C)
* battery (percentage)
* battery_current (microamperes)
* available_ram (bytes)
* available_disk (bytes)
* cpu_utilization (percentage)
* power_state (one of UNKNOWN_POWER_STATE, UNPLUGGED, CHARGING, CHARGED)
* wifi_wake_lock (one of NONE, HIGH_PERF, LOW_LATENCY, OTHER)

Each field should be collected at the same time so that each sample corresponds to exactly one timestamp (that is a single timestamp at a particular index will correspond to multiple samples at the same index).
