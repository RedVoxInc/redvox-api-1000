## RedVox Time Synchronization Specification v3

The goal of the time synchronization process is to exchange sets of timestamps between a client and server for the purpose of gathering the metrics required for performing timing correction. This section provides the relevant details for implementing a client or server that is compatible with version 3 of the RedVox synchronization specification. 

Communication between clients and servers are provided over encrypted WebSockets using protocol buffer serialization. The `SynchRequest` and `SynchResponse` message types are used to serialized data. Further, the client is expected to build a list `RedvoxPacket1000.TimingInformation.SynchExchange` messages per packet. A client should perform a synchronization exchange once every 5 seconds. This may change in future revision of API M. Any exchanges that are not fully completed before a packet is closed should be discarded.

Two sequence ids are kept: `seq_id` should start at zero when the app starts and increment by one on each full exchange. `sub_seq_id` starts at 0 for each new exchange and is incremented by one on each step within a full exchange. The following table outlines the algorithms for V3 of the time synchronization algorithm.

The function `timestamp()` should return the number of microsconds since the epoch. `N` represents the `Nth` complete message exchange where each message exchange is defined as follows.

__Exchange algorithm:__

| Step | Client | Server | 
|------|--------|--------|
| 1    | Set `exchange` to a new `RedvoxPacket1000.TimingInformation.SynchExchange` | |
| 2    | Set `synch_req` to a new `SynchRequest` | |
| 3    | Set `synch_req.station_id` | |
| 4    | Set `synch_req.station_uuid` | |
| 5    | Set `synch_req.seq_id` to `N` | |
| 6    | Set `synch_req.sub_seq_id` to 0 | |
| 7    | Serialize `synch_req` to bytes | |
| 8    | Send serialized bytes to server | | 
| 9    | | Receive serialized bytes |
| 10   | | Set `tmp` to `timestamp()` |
| 11   | | Deserialize request bytes into a `SynchRequest` message called `synch_req` |
| 12   | | Set `synch_resp` to a new `SynchResponse` |
| 13   | | Set `synch_resp.station_id` to `synch_req.station_id`
| 14   | | Set `synch_resp.station_uuid` to `synch_req.station_uuid` |
| 15   | | Set `synch_resp.seq_id` to `synch_req.seq_id` |
| 16   | | Set `synch_resp.sub_seq_id` to `synch_req.sub_seq_id + 1` |
| 17   | | Set `synch_resp.recv_ts_us` to `tmp` |
| 18   | | Set `synch_resp.send_ts_us` to `timestamp()` |
| 19   | | Serialize `synch_resp` to bytes |
| 20   | | Respond to the client with serialized response |
| 21   | Receive serialized response | |
| 22   | Set `tmp` to `timestamp()` | |
| 23   | Deserialize response from bytes into a `SynchResponse` message call `synch_resp` | |
| 23   | Confirm `synch_resp.station_id` is correct | |
| 25   | Confirm `synch_resp.station_uuid` is correct | |
| 26   | Confirm `synch_resp.seq_id` is still `N` | |
| 27   | Confirm `synch_resp.sub_seq_id` is now `1` | |
| 28   | Set `exchange.a1` to `synch_resp.recv_ts_us` | |
| 29   | Set `exchange.b1` to `tmp` | |
| 30   | Set `exchange.b2` to `timestamp()` | | 
| 31   | Set `synch_req` to a new `SynchRequest` | |
| 32   | Set `synch_req.station_id` | |
| 33   | Set `synch_req.station_uuid` | |
| 34   | Set `synch_req.seq_id` to `N` | |
| 35   | Set `synch_req.sub_seq_id` to 2 | |
| 36   | Serialize `synch_req` to bytes | |
| 37   | Send serialized bytes to server | | 
| 38   | | Receive serialized bytes |
| 39   | | Set `tmp` to `timestamp()` |
| 40   | | Deserialize request bytes into a `SynchRequest` message called `synch_req` |
| 41   | | Set `synch_resp` to a new `SynchResponse` |
| 42   | | Set `synch_resp.station_id` to `synch_req.station_id`
| 43   | | Set `synch_resp.station_uuid` to `synch_req.station_uuid` |
| 44   | | Set `synch_resp.seq_id` to `synch_req.seq_id` |
| 45   | | Set `synch_resp.sub_seq_id` to `synch_req.sub_seq_id + 1` |
| 46   | | Set `synch_resp.recv_ts_us` to `tmp` |
| 47   | | Set `synch_resp.send_ts_us` to `timestamp()` |
| 48   | | Serialize `synch_resp` to bytes |
| 49   | | Respond to the client with serialized response |
| 50   | Receive serialized response | |
| 51   | Set `tmp` to `timestamp()` | |
| 52   | Deserialize response from bytes into a `SynchResponse` message call `synch_resp` | |
| 53   | Confirm `synch_resp.station_id` is correct | |
| 54   | Confirm `synch_resp.station_uuid` is correct | |
| 55   | Confirm `synch_resp.seq_id` is still `N` | |
| 56   | Confirm `synch_resp.sub_seq_id` is now `3` | |
| 57   | Set `exchange.a2` to `synch_resp.recv_ts_us` | |
| 58   | Set `exchange.a3` to `synch_resp.send_ts_us` | |
| 59   | Set `exchange.b3` to `tmp` | | 
| 60   | Congrats, you now have one full exchange. Add it to your list and go get some more. | |
