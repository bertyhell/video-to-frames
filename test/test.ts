let startTime = performance.now();
let endTime;
VideoToFrames.getFrames('bunny.mp4', 30, VideoToFramesMethod.totalFrames).then(function (frames: ImageData[]) {
  endTime = performance.now();
  frames.forEach((frame: ImageData) => {
    let canvas = document.createElement('canvas');
    canvas.width = frame.width;
    canvas.height = frame.height;
    canvas.getContext('2d').putImageData(frame, 0, 0);
    document.getElementsByTagName('body')[0].appendChild(canvas);
  });
  console.log(endTime - startTime);
});

