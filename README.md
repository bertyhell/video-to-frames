# video-to-frames
Extract video frames from an html5 video and return them as an array of imageData

## How to use:
Include the index.js file in your html page
```html
<script src="index.js"></script>
```

Call the video-to-frames function:
```javascript
VideoToFrames.getFrames('bunny.mp4', 30, VideoToFramesMethod.totalFrames).then(function (frames) {

    /*
    Do something with the frame data: eg: output them as canvasses to the DOM
    frames.forEach(function (frame) {
        var canvas = document.createElement('canvas');
        canvas.width = frame.width;
        canvas.height = frame.height;
        canvas.getContext('2d').putImageData(frame, 0, 0);
        document.getElementsByTagName('body')[0].appendChild(canvas);
    });
    */

});
```

## Performance

For a video file (bunny.mp4) which is 1280x720 and comes in at 5MB

##### Desktop (windows i7)
* Getting   5 frames takes about 0.7 seconds
* Getting  30 frames takes about 2   seconds
* Getting  60 frames takes about 4   seconds
* Getting 120 frames takes about 8   seconds

##### phone (Nexus 5)
* Getting   5 frames takes about 4   seconds
* Getting  30 frames takes about 32  seconds
