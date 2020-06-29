## Authentication / Authorization

Authentication and authorization to RedVox services is provided through the RedVox Cloud API. 

This service can be interacted with using any HTTP client. Endpoints for the HTTP API can be found [here](https://bitbucket.org/redvoxhi/redvox-api-1000/src/master/docs/standards/client_server_comms.md). The rest of this documentation will refer to endpoints using the format `https://host:port/api/v1/...`.

### Authenticating with RedVox Services

##### Sending the initial authentication request
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

##### Handling the initial authentication response

On successful authentication, you will receive an HTTP response with a status code of 200. The response also contains a JSON body payload with the following fields:

| Field      | Type             |  
|------------|------------------|
| status     | int              |
| auth_token | Optional<String> |
| claims     | Optional<Object> |

As an example:

```
{
  "status": 200,
  "auth_token": "v2.public.eyJ0aWVyIjoiZnJlZSIsImF1ZCI6ImFwaSIsIm5iZiI6IjIwMjAtMDYtMTJUMjI6MjI6NTEuMzY5NDU4MTYwWiIsImV4cCI6IjIwMjAtMDYtMTJUMjM6MjI6NTEuMzY5NDU4MTYwWiIsInN1YiI6InJlZHZveGNvcmVAZ21haWwuY29tIiwiaXNzIjoiUmVkVm94LCBJbmMuIiWiaWF0IjoiMjAyMC0wNi0xMlQyMjoyMjo1MS4zNjk0NTgxNjBaIn2U1Z3R_mvRpdGRQT7io1TJ6cOV9gnh6nueJye6NOF66HZUriJrZs_LxKq2Jo6EjiY93HEuopOlVSVqGtKSS3AN",
  "claims": {
    "aud": "api",
    "exp": "2020-06-25T19:27:30.348047657Z",
    "iat": "2020-06-25T18:27:30.348047657Z",
    "iss": "RedVox, Inc.",
    "nbf": "2020-06-25T18:27:30.348047657Z",
    "sub": "redvoxcore@gmail.com",
    "tier": "free"
  }
}
```

At this point, you have three things to check to ensure successful authentication.

1. Original HTTP response status should be 200
2. JSON status should be 200
3. auth_token should be non-null and non-empty
4. claims should be non-null and non-empty

If any of the above fail, authentication should be considered a failure. 

##### Using authentication tokens

An initial successful response contains a [PASETO authentication token](https://github.com/paragonie/paseto). The token is cryptographically signed by RedVox, but not encrypted. This is an important distinction. The token may look encrypted, but it's merely encoded and the fields of the token are readable by anyone with a PASETO token parser. The important bit is, the token can not be modified without changing the signature.  

This means that RedVox can provide a token with specific "claims" about the token. This token must be included in every packet transmission to RedVox servers. When RedVox receives a data packet, it will verify the token and the claims. If the token has been modified in any way, the cryptographic signature check will fail and the data will be rejected.

The following claims are provided and utilized by RedVox:

| Claim | Description                      |
|-------|----------------------------------|
| aud   | Who is able to receive the token |
| exp   | Date after which token is no longer valid |
| iat   | Date token was issued at |
| iss   | Who issued the token |
| nbf   | Token is not valid before this date |
| sub   | RedVox user associated with this token |
| tier  | RedVox tier of this user |

It is possible for the RedVox App client to utilize a [PASETO parser](https://paseto.io/) or send an additional HTTP request to the RedVox Cloud API to decode and inspect the contents of an authentication token. Let's look at an example of the latter.

To examine the contents of an authentication token, send a `POST` request to `https://host:port/api/v1/auth/token` with a JSON payload containing the following fields:

| Field      | Type             |  
|------------|------------------|
| auth_token | String           |

An an example:

```
{
  "auth_token": "v2.public.eyJzdWIiOiJyZWR2b3hjb3JlQGdtYWlsLmNvbSIsImF1ZCI6ImFwaSIsImV4cCI6IjIwMjAtMDYtMTJUMjM6MTQ6MTMuMDM1NzQyNTAyWiIsImlhdCI6IjIwMjAtMDYtMTJUMjI6MTQ6MTMuMDM1NzQUNTAyWiIsIm5iZiI6IjIwMjAtMDYtMTJUMjI6MTQ6MTMuMDM1NzQyNTAyWiIsImlzcyI6IlJlZFZveCwgSW5jLiIsInRpZXIiOiJmcmVlIn2H_btc0oDVUw9p87uOWbwzYpuALMHMxhj865mxesdzppPDyTV7ZytJhcPzL8U1ctdXQpZlTqmJnh_11bfi_QYB"
}
```

If the token is valid, you will receive an HTTP response with a JSON payload that matches the above description of token claims. 

As an example: 

```
{
  "aud": "api",
  "exp": "2020-06-12T23:14:13.035742502Z",
  "iat": "2020-06-12T22:14:13.035742502Z",
  "iss": "RedVox, Inc.",
  "nbf": "2020-06-12T22:14:13.035742502Z",
  "sub": "redvoxcore@gmail.com",
  "tier": "free"
}
```

If the token is not valid, you will receive an HTTP response with a station that is something other than 200.

##### Refreshing authentication tokens

As you may have noticed, authentication tokens now expire. This is used to minimize the chance of replay attacks. Thus, the app will need to manage the automatic refreshing of the authentication token. Currently, each token expires after 1 hour. This may be increased. 

The following requirements should be met:

* The user should have the option to save their username and password on the device
* If the app has a network connection, the app should refresh its authentication token before it expires (see below)
* If the app does not have a network connection and the token expires, it should use the user's stored username and password to re-authenticate when the app regains network access. If the user did not opt to store their username and password, the user should be prompted to log in again before continuing.

The RedVox Cloud API provides an HTTP endpoint for refreshing valid authentication tokens. This API method will take a valid token and return a new token for the same user, but with a new expiration date. 

To refresh a valid token, send an HTTP `POST` request to `https://host:port/api/v1/auth/refresh` with a JSON payload that contains the following fields:

| Field      | Type             |  
|------------|------------------|
| auth_token | String           |

As an example:

```
{
  "auth_token": "v2.public.eyJzdWIiOiJyZWR2b3hjb3JlQGdtYWlsLmNvbSIsImF1ZCI6ImFwaSIsImV4cCI6IjIwMjAtMDYtMTJUMjM6MTQ6MTMuMDM1NzQyNTAyWiIsImlhdCI6IjIwMjAtMDYtMTJUMjI6MTQ6MTMuMDM1NzQUNTAyWiIsIm5iZiI6IjIwMjAtMDYtMTJUMjI6MTQ6MTMuMDM1NzQyNTAyWiIsImlzcyI6IlJlZFZveCwgSW5jLiIsInRpZXIiOiJmcmVlIn2H_btc0oDVUw9p87uOWbwzYpuALMHMxhj865mxesdzppPDyTV7ZytJhcPzL8U1ctdXQpZlTqmJnh_11bfi_QYB"
}
```

If the refresh is successful, you will receive an HTTP 200 response with a JSON payload that contains the following fields: 

| Field      | Type             |  
|------------|------------------|
| auth_token | String           |
| claims     | Onject           |

As an example:

```
{
  "auth_token": "v2.public.eyJzdWIiOiJyZWR2b3hjb3JlQGdtYWlsLmNvbSIsImF1ZCI6ImFwaRIsImVPPCI6IjIwMjAtMDYtMTJUMjM6MTQ6MTMuMDM1NzQyNTAyWiIsImlhdCI6IjIwMjAtMDYtMTJUMjI6MTQ6MTMuMDM1NzQUNTAyWiIsIm5iZiI6IjIwMjAtMDYtMTJUMjI6MTQ6MTMuMDM1NzQyNTAyWiIsImlzcyI6IlJlZFZveCwgSW5jLiIsInRpZXIiOiJmcmVlIn2H_btc0oDVUw9p87uOWbwzYpuALMHMxhj865mxesdzppPDyTV7ZytJhcPzL8U1ctdXQpZlTqmJnh_11bfi_QYB",
  "claims": {
    "aud": "api",
    "exp": "2020-06-25T19:27:30.348047657Z",
    "iat": "2020-06-25T18:27:30.348047657Z",
    "iss": "RedVox, Inc.",
    "nbf": "2020-06-25T18:27:30.348047657Z",
    "sub": "redvoxcore@gmail.com",
    "tier": "free"
  }
}
```

If the refresh is not successful, the HTTP response code will be something other than 200.

##### Sending the authentication token with every packet transmission

The token is stored along with the [AcquisitionRequest](https://bitbucket.org/redvoxhi/redvox-api-1000/src/master/src/redvox_api_m/redvox_api_m.proto#lines-419). This is a change from API 900 where the token was stored in the packet data itself. This change was made so that the token only needs to be associated with the data directly before being transmitted. 
