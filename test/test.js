var startTime = performance.now();
var endTime;
VideoToFrames.getFrames('bunny.mp4', 30, VideoToFramesMethod.totalFrames).then(function (frames) {
    endTime = performance.now();
    frames.forEach(function (frame) {
        var canvas = document.createElement('canvas');
        canvas.width = frame.width;
        canvas.height = frame.height;
        canvas.getContext('2d').putImageData(frame, 0, 0);
        document.getElementsByTagName('body')[0].appendChild(canvas);
    });
    console.log(endTime - startTime);
});
//# sourceMappingURL=test.js.map