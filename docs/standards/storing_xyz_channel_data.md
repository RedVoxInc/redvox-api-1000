# Storing XYZ Channel Data

These sensors store data to 3 channels, namely `X`, `Y`, and `Z`. Each timestamp must be associated with exactly one `X`, one `Y`, value, and one `Z` value. Thus, `length(timestamps) == length(X) == length(Y) == length(Z)`.
