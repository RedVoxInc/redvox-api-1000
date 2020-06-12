## Authentication / Authorization

Authentication and authorization to RedVox services is provided through the RedVox Cloud API. 

This service can be interacted with using any HTTP client. Endpoints for the HTTP API can be found [here](https://bitbucket.org/redvoxhi/redvox-api-1000/src/master/docs/standards/client_server_comms.md). The rest of this documentation will refer to endpoints using the format `https://host:port/api/v1/...`.

### Authenticating with RedVox Services

Send an HTTP `POST` request to `https://host:port/api/v1/auth` with a JSON body payload that contains the following fields:

| Field    | Type   | 
|----------|--------|
| email    | String |
| password | String |

The following is an example.

```
{
  "email": "foo@bar.com",
  "password": "abc123" 
}
```


