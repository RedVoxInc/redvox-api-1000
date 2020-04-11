## Client/Server Communications

All station/server communications must take place over encrypted WebSockets (wss). The following URL endpoints are provided for API M. All messages are encoded as bytes.

__redvox.io__

| Service                    | Endpoint                            |
|----------------------------|-------------------------------------|
| Data acquisition API M     | wss://redvox.io/acquisition/v1000   |
| Data acquisition API M E2E | wss://redvox.io/acquisition/x/v1000 |
| Synch exchanges v3         | wss://redvox.io/synch/v3            |

__Testing__

| Service                    | Endpoint                                               |
|----------------------------|--------------------------------------------------------|
| Data acquisition API M     | wss://milton.soest.hawaii.edu:8000/acquisition/v1000   |
| Data acquisition API M E2E | wss://milton.soest.hawaii.edu:8000/acquisition/x/v1000 |
| Synch exchanges v3         | wss://milton.soest.hawaii.edu:8000/synch/v3            |
