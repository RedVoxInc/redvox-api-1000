## Compressing and Decompressing API M Data

API M utilizes the [LZ4 frame specification](https://github.com/lz4/lz4/blob/master/doc/lz4_Frame_format.md) for compression and decompression of data. 

Compression should be used in the following scenarios:

* Serialized `RedvoxPacket1000` messages should be compressed before storing in an `AcqusitionRequest`
* When using E2E encryption
  * serialized `Header` messages should be compressed before being encrypted and stored in `EncryptedRedvoxPacket1000` 
  * serialized `RedvoxPacket1000` messages should be compressed before being encrypted and stored in `EncryptedRedvoxPacket1000` 
  
Please note that the `EncryptedRedvoxPacket1000` is _not_ compressed before storing in an `AcqusitionRequest`.

