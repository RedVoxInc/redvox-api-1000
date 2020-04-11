## Filenames

The default filename for an API M packet follows the following format:

```
[station ID]_[packet start mach timestamp]_m.rdvxz
```

Here `station ID` is the station ID prepended with zeros so that the length is exactly 10 characters and `packet start mach timestamp` corresponds to the `timing_information.packet_start_mach_timestamp` but is truncated to milliseconds and converted to an integer for the purpose of outputting to a filename.

If the packet is encrypted, it will have the following format:

```
[chksum]_m.rdvxz.gpg
```

where `chksum` is the unsigned sim of bytes that make up the contents of the file.
