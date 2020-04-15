# API M Protocol Documentation

This documentation provides high-level summaries of the layout and makeup of the [API M protocol](https://bitbucket.org/redvoxhi/redvox-api-1000/src/master/src/redvox_api1000/redvox_api_1000.proto).

The top-level protocol provides 6 message definitions.

1. __RedvoxPacket1000__ - A message type for serializing diverse digital sensor data and metadata.
2. __EncryptedRedvoxPacket1000__ - A message type for securely encrypting and routing encrypted data.
3. __AcquisitionRequest__ - A message type that encapsulates the contents of an (Encrypted)RedvoxPacket1000 for transport to a cloud based data acquisition server.
4. __AcquisitionResponse__ - A message type that cloud based data acquisition servers use to report the status of receiving data from a station.
5. __SynchRequest__ - A synchronization message from a station client to a synchronization server.
6. __SynchResponse__ - A synchronization message from a synchronization server to a station client. 

### RedvoxPacket1000

* This message provides the main definition of RedVox API 1000/M data. As such, the details of this message are [described in their own document](https://bitbucket.org/redvoxhi/redvox-api-1000/src/master/docs/protocol/redvox_packet_1000.md). 

### EncryptedRedvoxPacket1000

* This message provides fields for providing separately encrypted header (for routing and authentication) and packet data.

### AcquisitionRequest

* An AcquisitionRequest is created by stations and transferred to acquisition servers as part of the [data acquistiion process](https://bitbucket.org/redvoxhi/redvox-api-1000/src/master/docs/standards/client_server_comms.md).
* These contain the packet payload, a flag for if the payload is encrypted, and a checksum.

### AcquisitionResponse

* An AcquisitionResponse is created by acquisition servers and transferred to station clients as part of the [data acquistiion process](https://bitbucket.org/redvoxhi/redvox-api-1000/src/master/docs/standards/client_server_comms.md).
* The response contains a type indicating success or failure as well as additional details on errors. The response also contains a flag that instructs whether the station client should attempt to resend data on failure.

### SynchRequest

* A SynchRequest is created by stations and transferred to synch servers as part of the [v3 synch exchange standard](https://bitbucket.org/redvoxhi/redvox-api-1000/src/master/docs/standards/time_synchronization.md).
* A SynchRequest contains station identification information so that the server can keep QA metrics for each station. Sequence ids also provide various QA capabilities on both the client and server.

### SynchResponse

* A SynchResponse is created by synch servers and transferred to stations as part of the [v3 synch exchange standard](https://bitbucket.org/redvoxhi/redvox-api-1000/src/master/docs/standards/time_synchronization.md).
* A SynchResponse contains station information from copied from the client, a sequence id copied from the client, and a sub-sequence id incremented from the client. 
