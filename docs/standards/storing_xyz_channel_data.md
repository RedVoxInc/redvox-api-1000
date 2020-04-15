# Storing XYZ Channel Data

* These sensors store data to 3 channels, namely `X`, `Y`, and `Z`. 
* Each timestamp must be associated with exactly one `X`, one `Y`, value, and one `Z` value. 
* `length(timestamps) == length(X) == length(Y) == length(Z)`.
* The sensor description should be as descriptive as possible.
* Timestamp and payload statistics for all channels should be maintained.
