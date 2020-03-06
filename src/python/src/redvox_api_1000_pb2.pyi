# @generated by generate_proto_mypy_stubs.py.  Do not edit!
import sys
from google.protobuf.descriptor import (
    Descriptor as google___protobuf___descriptor___Descriptor,
    EnumDescriptor as google___protobuf___descriptor___EnumDescriptor,
)

from google.protobuf.internal.containers import (
    RepeatedScalarFieldContainer as google___protobuf___internal___containers___RepeatedScalarFieldContainer,
)

from google.protobuf.message import (
    Message as google___protobuf___message___Message,
)

from typing import (
    Iterable as typing___Iterable,
    List as typing___List,
    Mapping as typing___Mapping,
    MutableMapping as typing___MutableMapping,
    Optional as typing___Optional,
    Text as typing___Text,
    Tuple as typing___Tuple,
    Union as typing___Union,
    cast as typing___cast,
)

from typing_extensions import (
    Literal as typing_extensions___Literal,
)


builtin___bool = bool
builtin___bytes = bytes
builtin___float = float
builtin___int = int
builtin___str = str
if sys.version_info < (3,):
    builtin___buffer = buffer
    builtin___unicode = unicode


class RedvoxPacket1000(google___protobuf___message___Message):
    DESCRIPTOR: google___protobuf___descriptor___Descriptor = ...
    class NetworkType(builtin___int):
        DESCRIPTOR: google___protobuf___descriptor___EnumDescriptor = ...
        @classmethod
        def Name(cls, number: builtin___int) -> builtin___str: ...
        @classmethod
        def Value(cls, name: builtin___str) -> 'RedvoxPacket1000.NetworkType': ...
        @classmethod
        def keys(cls) -> typing___List[builtin___str]: ...
        @classmethod
        def values(cls) -> typing___List['RedvoxPacket1000.NetworkType']: ...
        @classmethod
        def items(cls) -> typing___List[typing___Tuple[builtin___str, 'RedvoxPacket1000.NetworkType']]: ...
        WIFI = typing___cast('RedvoxPacket1000.NetworkType', 0)
        CELLULAR = typing___cast('RedvoxPacket1000.NetworkType', 1)
        NONE = typing___cast('RedvoxPacket1000.NetworkType', 2)
    WIFI = typing___cast('RedvoxPacket1000.NetworkType', 0)
    CELLULAR = typing___cast('RedvoxPacket1000.NetworkType', 1)
    NONE = typing___cast('RedvoxPacket1000.NetworkType', 2)

    class OsType(builtin___int):
        DESCRIPTOR: google___protobuf___descriptor___EnumDescriptor = ...
        @classmethod
        def Name(cls, number: builtin___int) -> builtin___str: ...
        @classmethod
        def Value(cls, name: builtin___str) -> 'RedvoxPacket1000.OsType': ...
        @classmethod
        def keys(cls) -> typing___List[builtin___str]: ...
        @classmethod
        def values(cls) -> typing___List['RedvoxPacket1000.OsType']: ...
        @classmethod
        def items(cls) -> typing___List[typing___Tuple[builtin___str, 'RedvoxPacket1000.OsType']]: ...
        ANDROID = typing___cast('RedvoxPacket1000.OsType', 0)
        IOS = typing___cast('RedvoxPacket1000.OsType', 1)
        LINUX = typing___cast('RedvoxPacket1000.OsType', 2)
        WINDOWS = typing___cast('RedvoxPacket1000.OsType', 3)
    ANDROID = typing___cast('RedvoxPacket1000.OsType', 0)
    IOS = typing___cast('RedvoxPacket1000.OsType', 1)
    LINUX = typing___cast('RedvoxPacket1000.OsType', 2)
    WINDOWS = typing___cast('RedvoxPacket1000.OsType', 3)

    class MetadataEntry(google___protobuf___message___Message):
        DESCRIPTOR: google___protobuf___descriptor___Descriptor = ...
        key = ... # type: typing___Text
        value = ... # type: typing___Text

        def __init__(self,
            *,
            key : typing___Optional[typing___Text] = None,
            value : typing___Optional[typing___Text] = None,
            ) -> None: ...
        if sys.version_info >= (3,):
            @classmethod
            def FromString(cls, s: builtin___bytes) -> RedvoxPacket1000.MetadataEntry: ...
        else:
            @classmethod
            def FromString(cls, s: typing___Union[builtin___bytes, builtin___buffer, builtin___unicode]) -> RedvoxPacket1000.MetadataEntry: ...
        def MergeFrom(self, other_msg: google___protobuf___message___Message) -> None: ...
        def CopyFrom(self, other_msg: google___protobuf___message___Message) -> None: ...
        def ClearField(self, field_name: typing_extensions___Literal[u"key",b"key",u"value",b"value"]) -> None: ...

    api = ... # type: builtin___int
    auth_email = ... # type: typing___Text
    auth_token = ... # type: typing___Text
    firebase_token = ... # type: typing___Text
    device_id = ... # type: typing___Text
    device_uuid = ... # type: typing___Text
    device_make = ... # type: typing___Text
    device_model = ... # type: typing___Text
    device_os = ... # type: RedvoxPacket1000.OsType
    device_os_version = ... # type: typing___Text
    device_app_version = ... # type: typing___Text
    device_temp_c = ... # type: builtin___float
    device_battery_percent = ... # type: builtin___float
    network_type = ... # type: RedvoxPacket1000.NetworkType
    network_strength_db = ... # type: builtin___float
    is_backfilled = ... # type: builtin___bool
    is_private = ... # type: builtin___bool
    is_mic_scrambled = ... # type: builtin___bool
    uncompressed_size_bytes = ... # type: builtin___float
    compressed_size_bytes = ... # type: builtin___float
    auth_server_url = ... # type: typing___Text
    synch_server_url = ... # type: typing___Text
    acquisition_server_url = ... # type: typing___Text
    packet_start_ts_us_wall = ... # type: builtin___float
    packet_start_ts_us_mach = ... # type: builtin___float
    packet_end_ts_us_wall = ... # type: builtin___float
    packet_end_ts_us_mach = ... # type: builtin___float
    server_acquisition_arrival_ts_us = ... # type: builtin___float
    app_start_ts_us_mach = ... # type: builtin___float
    synch_params = ... # type: google___protobuf___internal___containers___RepeatedScalarFieldContainer[builtin___float]
    best_latency_us = ... # type: builtin___float
    best_offset_us = ... # type: builtin___float

    @property
    def microphone_channel(self) -> MicrophoneChannel: ...

    @property
    def barometer_channel(self) -> SingleChannel: ...

    @property
    def location_channel(self) -> LocationChannel: ...

    @property
    def accelerometer_channel(self) -> XyzChannel: ...

    @property
    def gyroscope_channel(self) -> XyzChannel: ...

    @property
    def magnetometer_channel(self) -> XyzChannel: ...

    @property
    def light_channel(self) -> SingleChannel: ...

    @property
    def infrared_channel(self) -> SingleChannel: ...

    @property
    def metadata(self) -> typing___MutableMapping[typing___Text, typing___Text]: ...

    def __init__(self,
        *,
        api : typing___Optional[builtin___int] = None,
        auth_email : typing___Optional[typing___Text] = None,
        auth_token : typing___Optional[typing___Text] = None,
        firebase_token : typing___Optional[typing___Text] = None,
        device_id : typing___Optional[typing___Text] = None,
        device_uuid : typing___Optional[typing___Text] = None,
        device_make : typing___Optional[typing___Text] = None,
        device_model : typing___Optional[typing___Text] = None,
        device_os : typing___Optional[RedvoxPacket1000.OsType] = None,
        device_os_version : typing___Optional[typing___Text] = None,
        device_app_version : typing___Optional[typing___Text] = None,
        device_temp_c : typing___Optional[builtin___float] = None,
        device_battery_percent : typing___Optional[builtin___float] = None,
        network_type : typing___Optional[RedvoxPacket1000.NetworkType] = None,
        network_strength_db : typing___Optional[builtin___float] = None,
        is_backfilled : typing___Optional[builtin___bool] = None,
        is_private : typing___Optional[builtin___bool] = None,
        is_mic_scrambled : typing___Optional[builtin___bool] = None,
        uncompressed_size_bytes : typing___Optional[builtin___float] = None,
        compressed_size_bytes : typing___Optional[builtin___float] = None,
        auth_server_url : typing___Optional[typing___Text] = None,
        synch_server_url : typing___Optional[typing___Text] = None,
        acquisition_server_url : typing___Optional[typing___Text] = None,
        packet_start_ts_us_wall : typing___Optional[builtin___float] = None,
        packet_start_ts_us_mach : typing___Optional[builtin___float] = None,
        packet_end_ts_us_wall : typing___Optional[builtin___float] = None,
        packet_end_ts_us_mach : typing___Optional[builtin___float] = None,
        server_acquisition_arrival_ts_us : typing___Optional[builtin___float] = None,
        app_start_ts_us_mach : typing___Optional[builtin___float] = None,
        synch_params : typing___Optional[typing___Iterable[builtin___float]] = None,
        best_latency_us : typing___Optional[builtin___float] = None,
        best_offset_us : typing___Optional[builtin___float] = None,
        microphone_channel : typing___Optional[MicrophoneChannel] = None,
        barometer_channel : typing___Optional[SingleChannel] = None,
        location_channel : typing___Optional[LocationChannel] = None,
        accelerometer_channel : typing___Optional[XyzChannel] = None,
        gyroscope_channel : typing___Optional[XyzChannel] = None,
        magnetometer_channel : typing___Optional[XyzChannel] = None,
        light_channel : typing___Optional[SingleChannel] = None,
        infrared_channel : typing___Optional[SingleChannel] = None,
        metadata : typing___Optional[typing___Mapping[typing___Text, typing___Text]] = None,
        ) -> None: ...
    if sys.version_info >= (3,):
        @classmethod
        def FromString(cls, s: builtin___bytes) -> RedvoxPacket1000: ...
    else:
        @classmethod
        def FromString(cls, s: typing___Union[builtin___bytes, builtin___buffer, builtin___unicode]) -> RedvoxPacket1000: ...
    def MergeFrom(self, other_msg: google___protobuf___message___Message) -> None: ...
    def CopyFrom(self, other_msg: google___protobuf___message___Message) -> None: ...
    def HasField(self, field_name: typing_extensions___Literal[u"accelerometer_channel",b"accelerometer_channel",u"barometer_channel",b"barometer_channel",u"gyroscope_channel",b"gyroscope_channel",u"infrared_channel",b"infrared_channel",u"light_channel",b"light_channel",u"location_channel",b"location_channel",u"magnetometer_channel",b"magnetometer_channel",u"microphone_channel",b"microphone_channel"]) -> builtin___bool: ...
    def ClearField(self, field_name: typing_extensions___Literal[u"accelerometer_channel",b"accelerometer_channel",u"acquisition_server_url",b"acquisition_server_url",u"api",b"api",u"app_start_ts_us_mach",b"app_start_ts_us_mach",u"auth_email",b"auth_email",u"auth_server_url",b"auth_server_url",u"auth_token",b"auth_token",u"barometer_channel",b"barometer_channel",u"best_latency_us",b"best_latency_us",u"best_offset_us",b"best_offset_us",u"compressed_size_bytes",b"compressed_size_bytes",u"device_app_version",b"device_app_version",u"device_battery_percent",b"device_battery_percent",u"device_id",b"device_id",u"device_make",b"device_make",u"device_model",b"device_model",u"device_os",b"device_os",u"device_os_version",b"device_os_version",u"device_temp_c",b"device_temp_c",u"device_uuid",b"device_uuid",u"firebase_token",b"firebase_token",u"gyroscope_channel",b"gyroscope_channel",u"infrared_channel",b"infrared_channel",u"is_backfilled",b"is_backfilled",u"is_mic_scrambled",b"is_mic_scrambled",u"is_private",b"is_private",u"light_channel",b"light_channel",u"location_channel",b"location_channel",u"magnetometer_channel",b"magnetometer_channel",u"metadata",b"metadata",u"microphone_channel",b"microphone_channel",u"network_strength_db",b"network_strength_db",u"network_type",b"network_type",u"packet_end_ts_us_mach",b"packet_end_ts_us_mach",u"packet_end_ts_us_wall",b"packet_end_ts_us_wall",u"packet_start_ts_us_mach",b"packet_start_ts_us_mach",u"packet_start_ts_us_wall",b"packet_start_ts_us_wall",u"server_acquisition_arrival_ts_us",b"server_acquisition_arrival_ts_us",u"synch_params",b"synch_params",u"synch_server_url",b"synch_server_url",u"uncompressed_size_bytes",b"uncompressed_size_bytes"]) -> None: ...

class MicrophoneChannel(google___protobuf___message___Message):
    DESCRIPTOR: google___protobuf___descriptor___Descriptor = ...
    class MetadataEntry(google___protobuf___message___Message):
        DESCRIPTOR: google___protobuf___descriptor___Descriptor = ...
        key = ... # type: typing___Text
        value = ... # type: typing___Text

        def __init__(self,
            *,
            key : typing___Optional[typing___Text] = None,
            value : typing___Optional[typing___Text] = None,
            ) -> None: ...
        if sys.version_info >= (3,):
            @classmethod
            def FromString(cls, s: builtin___bytes) -> MicrophoneChannel.MetadataEntry: ...
        else:
            @classmethod
            def FromString(cls, s: typing___Union[builtin___bytes, builtin___buffer, builtin___unicode]) -> MicrophoneChannel.MetadataEntry: ...
        def MergeFrom(self, other_msg: google___protobuf___message___Message) -> None: ...
        def CopyFrom(self, other_msg: google___protobuf___message___Message) -> None: ...
        def ClearField(self, field_name: typing_extensions___Literal[u"key",b"key",u"value",b"value"]) -> None: ...

    sensor_description = ... # type: typing___Text
    first_sample_ts_us = ... # type: builtin___float
    sample_rate_hz = ... # type: builtin___float
    samples = ... # type: google___protobuf___internal___containers___RepeatedScalarFieldContainer[builtin___float]

    @property
    def sample_statistics(self) -> SummaryStatistics: ...

    @property
    def metadata(self) -> typing___MutableMapping[typing___Text, typing___Text]: ...

    def __init__(self,
        *,
        sensor_description : typing___Optional[typing___Text] = None,
        first_sample_ts_us : typing___Optional[builtin___float] = None,
        sample_rate_hz : typing___Optional[builtin___float] = None,
        samples : typing___Optional[typing___Iterable[builtin___float]] = None,
        sample_statistics : typing___Optional[SummaryStatistics] = None,
        metadata : typing___Optional[typing___Mapping[typing___Text, typing___Text]] = None,
        ) -> None: ...
    if sys.version_info >= (3,):
        @classmethod
        def FromString(cls, s: builtin___bytes) -> MicrophoneChannel: ...
    else:
        @classmethod
        def FromString(cls, s: typing___Union[builtin___bytes, builtin___buffer, builtin___unicode]) -> MicrophoneChannel: ...
    def MergeFrom(self, other_msg: google___protobuf___message___Message) -> None: ...
    def CopyFrom(self, other_msg: google___protobuf___message___Message) -> None: ...
    def HasField(self, field_name: typing_extensions___Literal[u"sample_statistics",b"sample_statistics"]) -> builtin___bool: ...
    def ClearField(self, field_name: typing_extensions___Literal[u"first_sample_ts_us",b"first_sample_ts_us",u"metadata",b"metadata",u"sample_rate_hz",b"sample_rate_hz",u"sample_statistics",b"sample_statistics",u"samples",b"samples",u"sensor_description",b"sensor_description"]) -> None: ...

class SingleChannel(google___protobuf___message___Message):
    DESCRIPTOR: google___protobuf___descriptor___Descriptor = ...
    class MetadataEntry(google___protobuf___message___Message):
        DESCRIPTOR: google___protobuf___descriptor___Descriptor = ...
        key = ... # type: typing___Text
        value = ... # type: typing___Text

        def __init__(self,
            *,
            key : typing___Optional[typing___Text] = None,
            value : typing___Optional[typing___Text] = None,
            ) -> None: ...
        if sys.version_info >= (3,):
            @classmethod
            def FromString(cls, s: builtin___bytes) -> SingleChannel.MetadataEntry: ...
        else:
            @classmethod
            def FromString(cls, s: typing___Union[builtin___bytes, builtin___buffer, builtin___unicode]) -> SingleChannel.MetadataEntry: ...
        def MergeFrom(self, other_msg: google___protobuf___message___Message) -> None: ...
        def CopyFrom(self, other_msg: google___protobuf___message___Message) -> None: ...
        def ClearField(self, field_name: typing_extensions___Literal[u"key",b"key",u"value",b"value"]) -> None: ...

    sensor_description = ... # type: typing___Text
    mean_sample_rate_hz = ... # type: builtin___float
    sample_ts_us = ... # type: google___protobuf___internal___containers___RepeatedScalarFieldContainer[builtin___float]
    samples = ... # type: google___protobuf___internal___containers___RepeatedScalarFieldContainer[builtin___float]

    @property
    def sample_rate_statistics(self) -> SummaryStatistics: ...

    @property
    def sample_statistics(self) -> SummaryStatistics: ...

    @property
    def metadata(self) -> typing___MutableMapping[typing___Text, typing___Text]: ...

    def __init__(self,
        *,
        sensor_description : typing___Optional[typing___Text] = None,
        mean_sample_rate_hz : typing___Optional[builtin___float] = None,
        sample_ts_us : typing___Optional[typing___Iterable[builtin___float]] = None,
        samples : typing___Optional[typing___Iterable[builtin___float]] = None,
        sample_rate_statistics : typing___Optional[SummaryStatistics] = None,
        sample_statistics : typing___Optional[SummaryStatistics] = None,
        metadata : typing___Optional[typing___Mapping[typing___Text, typing___Text]] = None,
        ) -> None: ...
    if sys.version_info >= (3,):
        @classmethod
        def FromString(cls, s: builtin___bytes) -> SingleChannel: ...
    else:
        @classmethod
        def FromString(cls, s: typing___Union[builtin___bytes, builtin___buffer, builtin___unicode]) -> SingleChannel: ...
    def MergeFrom(self, other_msg: google___protobuf___message___Message) -> None: ...
    def CopyFrom(self, other_msg: google___protobuf___message___Message) -> None: ...
    def HasField(self, field_name: typing_extensions___Literal[u"sample_rate_statistics",b"sample_rate_statistics",u"sample_statistics",b"sample_statistics"]) -> builtin___bool: ...
    def ClearField(self, field_name: typing_extensions___Literal[u"mean_sample_rate_hz",b"mean_sample_rate_hz",u"metadata",b"metadata",u"sample_rate_statistics",b"sample_rate_statistics",u"sample_statistics",b"sample_statistics",u"sample_ts_us",b"sample_ts_us",u"samples",b"samples",u"sensor_description",b"sensor_description"]) -> None: ...

class XyzChannel(google___protobuf___message___Message):
    DESCRIPTOR: google___protobuf___descriptor___Descriptor = ...
    class MetadataEntry(google___protobuf___message___Message):
        DESCRIPTOR: google___protobuf___descriptor___Descriptor = ...
        key = ... # type: typing___Text
        value = ... # type: typing___Text

        def __init__(self,
            *,
            key : typing___Optional[typing___Text] = None,
            value : typing___Optional[typing___Text] = None,
            ) -> None: ...
        if sys.version_info >= (3,):
            @classmethod
            def FromString(cls, s: builtin___bytes) -> XyzChannel.MetadataEntry: ...
        else:
            @classmethod
            def FromString(cls, s: typing___Union[builtin___bytes, builtin___buffer, builtin___unicode]) -> XyzChannel.MetadataEntry: ...
        def MergeFrom(self, other_msg: google___protobuf___message___Message) -> None: ...
        def CopyFrom(self, other_msg: google___protobuf___message___Message) -> None: ...
        def ClearField(self, field_name: typing_extensions___Literal[u"key",b"key",u"value",b"value"]) -> None: ...

    sensor_description = ... # type: typing___Text
    mean_sample_rate_hz = ... # type: builtin___float
    sample_ts_us = ... # type: google___protobuf___internal___containers___RepeatedScalarFieldContainer[builtin___float]
    x_samples = ... # type: google___protobuf___internal___containers___RepeatedScalarFieldContainer[builtin___float]
    y_samples = ... # type: google___protobuf___internal___containers___RepeatedScalarFieldContainer[builtin___float]
    z_samples = ... # type: google___protobuf___internal___containers___RepeatedScalarFieldContainer[builtin___float]

    @property
    def sample_rate_statistics(self) -> SummaryStatistics: ...

    @property
    def x_sample_statistics(self) -> SummaryStatistics: ...

    @property
    def y_sample_statistics(self) -> SummaryStatistics: ...

    @property
    def z_sample_statistics(self) -> SummaryStatistics: ...

    @property
    def metadata(self) -> typing___MutableMapping[typing___Text, typing___Text]: ...

    def __init__(self,
        *,
        sensor_description : typing___Optional[typing___Text] = None,
        mean_sample_rate_hz : typing___Optional[builtin___float] = None,
        sample_ts_us : typing___Optional[typing___Iterable[builtin___float]] = None,
        x_samples : typing___Optional[typing___Iterable[builtin___float]] = None,
        y_samples : typing___Optional[typing___Iterable[builtin___float]] = None,
        z_samples : typing___Optional[typing___Iterable[builtin___float]] = None,
        sample_rate_statistics : typing___Optional[SummaryStatistics] = None,
        x_sample_statistics : typing___Optional[SummaryStatistics] = None,
        y_sample_statistics : typing___Optional[SummaryStatistics] = None,
        z_sample_statistics : typing___Optional[SummaryStatistics] = None,
        metadata : typing___Optional[typing___Mapping[typing___Text, typing___Text]] = None,
        ) -> None: ...
    if sys.version_info >= (3,):
        @classmethod
        def FromString(cls, s: builtin___bytes) -> XyzChannel: ...
    else:
        @classmethod
        def FromString(cls, s: typing___Union[builtin___bytes, builtin___buffer, builtin___unicode]) -> XyzChannel: ...
    def MergeFrom(self, other_msg: google___protobuf___message___Message) -> None: ...
    def CopyFrom(self, other_msg: google___protobuf___message___Message) -> None: ...
    def HasField(self, field_name: typing_extensions___Literal[u"sample_rate_statistics",b"sample_rate_statistics",u"x_sample_statistics",b"x_sample_statistics",u"y_sample_statistics",b"y_sample_statistics",u"z_sample_statistics",b"z_sample_statistics"]) -> builtin___bool: ...
    def ClearField(self, field_name: typing_extensions___Literal[u"mean_sample_rate_hz",b"mean_sample_rate_hz",u"metadata",b"metadata",u"sample_rate_statistics",b"sample_rate_statistics",u"sample_ts_us",b"sample_ts_us",u"sensor_description",b"sensor_description",u"x_sample_statistics",b"x_sample_statistics",u"x_samples",b"x_samples",u"y_sample_statistics",b"y_sample_statistics",u"y_samples",b"y_samples",u"z_sample_statistics",b"z_sample_statistics",u"z_samples",b"z_samples"]) -> None: ...

class LocationChannel(google___protobuf___message___Message):
    DESCRIPTOR: google___protobuf___descriptor___Descriptor = ...
    class LocationProvider(builtin___int):
        DESCRIPTOR: google___protobuf___descriptor___EnumDescriptor = ...
        @classmethod
        def Name(cls, number: builtin___int) -> builtin___str: ...
        @classmethod
        def Value(cls, name: builtin___str) -> 'LocationChannel.LocationProvider': ...
        @classmethod
        def keys(cls) -> typing___List[builtin___str]: ...
        @classmethod
        def values(cls) -> typing___List['LocationChannel.LocationProvider']: ...
        @classmethod
        def items(cls) -> typing___List[typing___Tuple[builtin___str, 'LocationChannel.LocationProvider']]: ...
        NONE = typing___cast('LocationChannel.LocationProvider', 0)
        USER = typing___cast('LocationChannel.LocationProvider', 1)
        GPS = typing___cast('LocationChannel.LocationProvider', 2)
        NETWORK = typing___cast('LocationChannel.LocationProvider', 3)
    NONE = typing___cast('LocationChannel.LocationProvider', 0)
    USER = typing___cast('LocationChannel.LocationProvider', 1)
    GPS = typing___cast('LocationChannel.LocationProvider', 2)
    NETWORK = typing___cast('LocationChannel.LocationProvider', 3)

    class MetadataEntry(google___protobuf___message___Message):
        DESCRIPTOR: google___protobuf___descriptor___Descriptor = ...
        key = ... # type: typing___Text
        value = ... # type: typing___Text

        def __init__(self,
            *,
            key : typing___Optional[typing___Text] = None,
            value : typing___Optional[typing___Text] = None,
            ) -> None: ...
        if sys.version_info >= (3,):
            @classmethod
            def FromString(cls, s: builtin___bytes) -> LocationChannel.MetadataEntry: ...
        else:
            @classmethod
            def FromString(cls, s: typing___Union[builtin___bytes, builtin___buffer, builtin___unicode]) -> LocationChannel.MetadataEntry: ...
        def MergeFrom(self, other_msg: google___protobuf___message___Message) -> None: ...
        def CopyFrom(self, other_msg: google___protobuf___message___Message) -> None: ...
        def ClearField(self, field_name: typing_extensions___Literal[u"key",b"key",u"value",b"value"]) -> None: ...

    sensor_description = ... # type: typing___Text
    mean_sample_rate_hz = ... # type: builtin___float
    sample_ts_us = ... # type: google___protobuf___internal___containers___RepeatedScalarFieldContainer[builtin___float]
    latitude_samples = ... # type: google___protobuf___internal___containers___RepeatedScalarFieldContainer[builtin___float]
    longitude_samples = ... # type: google___protobuf___internal___containers___RepeatedScalarFieldContainer[builtin___float]
    altitude_samples = ... # type: google___protobuf___internal___containers___RepeatedScalarFieldContainer[builtin___float]
    speed_samples = ... # type: google___protobuf___internal___containers___RepeatedScalarFieldContainer[builtin___float]
    accuracy_samples = ... # type: google___protobuf___internal___containers___RepeatedScalarFieldContainer[builtin___float]
    location_permissions_granted = ... # type: builtin___bool
    location_services_requested = ... # type: builtin___bool
    location_services_enabled = ... # type: builtin___bool
    location_provider = ... # type: LocationChannel.LocationProvider

    @property
    def sample_rate_statistics(self) -> SummaryStatistics: ...

    @property
    def latitude_sample_statistics(self) -> SummaryStatistics: ...

    @property
    def longitude_sample_statistics(self) -> SummaryStatistics: ...

    @property
    def altitude_sample_statistics(self) -> SummaryStatistics: ...

    @property
    def speed_sample_statistics(self) -> SummaryStatistics: ...

    @property
    def accuracy_sample_statistics(self) -> SummaryStatistics: ...

    @property
    def metadata(self) -> typing___MutableMapping[typing___Text, typing___Text]: ...

    def __init__(self,
        *,
        sensor_description : typing___Optional[typing___Text] = None,
        mean_sample_rate_hz : typing___Optional[builtin___float] = None,
        sample_ts_us : typing___Optional[typing___Iterable[builtin___float]] = None,
        latitude_samples : typing___Optional[typing___Iterable[builtin___float]] = None,
        longitude_samples : typing___Optional[typing___Iterable[builtin___float]] = None,
        altitude_samples : typing___Optional[typing___Iterable[builtin___float]] = None,
        speed_samples : typing___Optional[typing___Iterable[builtin___float]] = None,
        accuracy_samples : typing___Optional[typing___Iterable[builtin___float]] = None,
        location_permissions_granted : typing___Optional[builtin___bool] = None,
        location_services_requested : typing___Optional[builtin___bool] = None,
        location_services_enabled : typing___Optional[builtin___bool] = None,
        location_provider : typing___Optional[LocationChannel.LocationProvider] = None,
        sample_rate_statistics : typing___Optional[SummaryStatistics] = None,
        latitude_sample_statistics : typing___Optional[SummaryStatistics] = None,
        longitude_sample_statistics : typing___Optional[SummaryStatistics] = None,
        altitude_sample_statistics : typing___Optional[SummaryStatistics] = None,
        speed_sample_statistics : typing___Optional[SummaryStatistics] = None,
        accuracy_sample_statistics : typing___Optional[SummaryStatistics] = None,
        metadata : typing___Optional[typing___Mapping[typing___Text, typing___Text]] = None,
        ) -> None: ...
    if sys.version_info >= (3,):
        @classmethod
        def FromString(cls, s: builtin___bytes) -> LocationChannel: ...
    else:
        @classmethod
        def FromString(cls, s: typing___Union[builtin___bytes, builtin___buffer, builtin___unicode]) -> LocationChannel: ...
    def MergeFrom(self, other_msg: google___protobuf___message___Message) -> None: ...
    def CopyFrom(self, other_msg: google___protobuf___message___Message) -> None: ...
    def HasField(self, field_name: typing_extensions___Literal[u"accuracy_sample_statistics",b"accuracy_sample_statistics",u"altitude_sample_statistics",b"altitude_sample_statistics",u"latitude_sample_statistics",b"latitude_sample_statistics",u"longitude_sample_statistics",b"longitude_sample_statistics",u"sample_rate_statistics",b"sample_rate_statistics",u"speed_sample_statistics",b"speed_sample_statistics"]) -> builtin___bool: ...
    def ClearField(self, field_name: typing_extensions___Literal[u"accuracy_sample_statistics",b"accuracy_sample_statistics",u"accuracy_samples",b"accuracy_samples",u"altitude_sample_statistics",b"altitude_sample_statistics",u"altitude_samples",b"altitude_samples",u"latitude_sample_statistics",b"latitude_sample_statistics",u"latitude_samples",b"latitude_samples",u"location_permissions_granted",b"location_permissions_granted",u"location_provider",b"location_provider",u"location_services_enabled",b"location_services_enabled",u"location_services_requested",b"location_services_requested",u"longitude_sample_statistics",b"longitude_sample_statistics",u"longitude_samples",b"longitude_samples",u"mean_sample_rate_hz",b"mean_sample_rate_hz",u"metadata",b"metadata",u"sample_rate_statistics",b"sample_rate_statistics",u"sample_ts_us",b"sample_ts_us",u"sensor_description",b"sensor_description",u"speed_sample_statistics",b"speed_sample_statistics",u"speed_samples",b"speed_samples"]) -> None: ...

class ImageChannel(google___protobuf___message___Message):
    DESCRIPTOR: google___protobuf___descriptor___Descriptor = ...
    class MetadataEntry(google___protobuf___message___Message):
        DESCRIPTOR: google___protobuf___descriptor___Descriptor = ...
        key = ... # type: typing___Text
        value = ... # type: typing___Text

        def __init__(self,
            *,
            key : typing___Optional[typing___Text] = None,
            value : typing___Optional[typing___Text] = None,
            ) -> None: ...
        if sys.version_info >= (3,):
            @classmethod
            def FromString(cls, s: builtin___bytes) -> ImageChannel.MetadataEntry: ...
        else:
            @classmethod
            def FromString(cls, s: typing___Union[builtin___bytes, builtin___buffer, builtin___unicode]) -> ImageChannel.MetadataEntry: ...
        def MergeFrom(self, other_msg: google___protobuf___message___Message) -> None: ...
        def CopyFrom(self, other_msg: google___protobuf___message___Message) -> None: ...
        def ClearField(self, field_name: typing_extensions___Literal[u"key",b"key",u"value",b"value"]) -> None: ...

    sensor_description = ... # type: typing___Text
    mean_sample_rate_hz = ... # type: builtin___float
    sample_ts_us = ... # type: google___protobuf___internal___containers___RepeatedScalarFieldContainer[builtin___float]
    samples = ... # type: google___protobuf___internal___containers___RepeatedScalarFieldContainer[builtin___bytes]

    @property
    def sample_rate_statistics(self) -> SummaryStatistics: ...

    @property
    def metadata(self) -> typing___MutableMapping[typing___Text, typing___Text]: ...

    def __init__(self,
        *,
        sensor_description : typing___Optional[typing___Text] = None,
        mean_sample_rate_hz : typing___Optional[builtin___float] = None,
        sample_ts_us : typing___Optional[typing___Iterable[builtin___float]] = None,
        samples : typing___Optional[typing___Iterable[builtin___bytes]] = None,
        sample_rate_statistics : typing___Optional[SummaryStatistics] = None,
        metadata : typing___Optional[typing___Mapping[typing___Text, typing___Text]] = None,
        ) -> None: ...
    if sys.version_info >= (3,):
        @classmethod
        def FromString(cls, s: builtin___bytes) -> ImageChannel: ...
    else:
        @classmethod
        def FromString(cls, s: typing___Union[builtin___bytes, builtin___buffer, builtin___unicode]) -> ImageChannel: ...
    def MergeFrom(self, other_msg: google___protobuf___message___Message) -> None: ...
    def CopyFrom(self, other_msg: google___protobuf___message___Message) -> None: ...
    def HasField(self, field_name: typing_extensions___Literal[u"sample_rate_statistics",b"sample_rate_statistics"]) -> builtin___bool: ...
    def ClearField(self, field_name: typing_extensions___Literal[u"mean_sample_rate_hz",b"mean_sample_rate_hz",u"metadata",b"metadata",u"sample_rate_statistics",b"sample_rate_statistics",u"sample_ts_us",b"sample_ts_us",u"samples",b"samples",u"sensor_description",b"sensor_description"]) -> None: ...

class SummaryStatistics(google___protobuf___message___Message):
    DESCRIPTOR: google___protobuf___descriptor___Descriptor = ...
    class MetadataEntry(google___protobuf___message___Message):
        DESCRIPTOR: google___protobuf___descriptor___Descriptor = ...
        key = ... # type: typing___Text
        value = ... # type: typing___Text

        def __init__(self,
            *,
            key : typing___Optional[typing___Text] = None,
            value : typing___Optional[typing___Text] = None,
            ) -> None: ...
        if sys.version_info >= (3,):
            @classmethod
            def FromString(cls, s: builtin___bytes) -> SummaryStatistics.MetadataEntry: ...
        else:
            @classmethod
            def FromString(cls, s: typing___Union[builtin___bytes, builtin___buffer, builtin___unicode]) -> SummaryStatistics.MetadataEntry: ...
        def MergeFrom(self, other_msg: google___protobuf___message___Message) -> None: ...
        def CopyFrom(self, other_msg: google___protobuf___message___Message) -> None: ...
        def ClearField(self, field_name: typing_extensions___Literal[u"key",b"key",u"value",b"value"]) -> None: ...

    count = ... # type: builtin___float
    mean = ... # type: builtin___float
    median = ... # type: builtin___float
    mode = ... # type: builtin___float
    variance = ... # type: builtin___float
    min = ... # type: builtin___float
    max = ... # type: builtin___float
    range = ... # type: builtin___float

    @property
    def metadata(self) -> typing___MutableMapping[typing___Text, typing___Text]: ...

    def __init__(self,
        *,
        count : typing___Optional[builtin___float] = None,
        mean : typing___Optional[builtin___float] = None,
        median : typing___Optional[builtin___float] = None,
        mode : typing___Optional[builtin___float] = None,
        variance : typing___Optional[builtin___float] = None,
        min : typing___Optional[builtin___float] = None,
        max : typing___Optional[builtin___float] = None,
        range : typing___Optional[builtin___float] = None,
        metadata : typing___Optional[typing___Mapping[typing___Text, typing___Text]] = None,
        ) -> None: ...
    if sys.version_info >= (3,):
        @classmethod
        def FromString(cls, s: builtin___bytes) -> SummaryStatistics: ...
    else:
        @classmethod
        def FromString(cls, s: typing___Union[builtin___bytes, builtin___buffer, builtin___unicode]) -> SummaryStatistics: ...
    def MergeFrom(self, other_msg: google___protobuf___message___Message) -> None: ...
    def CopyFrom(self, other_msg: google___protobuf___message___Message) -> None: ...
    def ClearField(self, field_name: typing_extensions___Literal[u"count",b"count",u"max",b"max",u"mean",b"mean",u"median",b"median",u"metadata",b"metadata",u"min",b"min",u"mode",b"mode",u"range",b"range",u"variance",b"variance"]) -> None: ...
