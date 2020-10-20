#  Image Sensor

API M provides the `Image` sensor type for storing image data.

The image sensor should be configurable to either:

* Capture one image per second
* Capture one image per packet

Images should be captured using the native/default resolution of back facing camera (if there are more than one cameras on the station).

The description field should provide a description of the camera being utilized. The image_codec field should be set with the codec that the image was created with. Every image should be saved as an array of bytes representing the image. A timestamp should be stored for each image.
