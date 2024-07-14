console.log(`//======== THE SCRIPT FILE IS CONNECTED =======//`);

// Cache the video element
const videoEl = document.getElementById("my-video");

// The steam variable will store the stream
let stream = null;
// This is a object containing the type of media-tracks/hardware
const constrants = {
  audio: true,
  video: true,
};

// Async functions to capture the media device
const getMicAndCamera = async (e) => {
  try {
    stream = await navigator.mediaDevices.getUserMedia(constrants);
    console.log(stream);
  } catch (error) {
    // User denied access to media device
    console.log("The requested constrants was denied", error);
  }
};

// Async functions to show video feed
const showMyVideoFeed = async (e) => {
  // console.log("Sanity Check", e);
  // console.log(videoEl);
  // This will set our video stream to our video element
  videoEl.srcObject = stream;
  // Cache the media tracks
  const tracks = stream.getTracks();
  console.log(tracks);
};

// Async functions to capture the media device
const stopMyVideoFeed = async (e) => {
  // console.log("Sanity Check", e);
  // Cache the media tracks
  const tracks = stream.getTracks();
  tracks.forEach((track) => {
    // console.log(track);
    // This stops/disassociates the video & audio track from the source
    track.stop();
  });
};

// Cache the share mic and camera button
const shareMicAndCameraButton = document.getElementById("share");
// Add event listener to the share mic and camera
shareMicAndCameraButton.addEventListener("click", (e) => getMicAndCamera(e));
// Cache the show video button
const showVideoButton = document.getElementById("show-video");
// Add event listener to show the video
showVideoButton.addEventListener("click", (e) => showMyVideoFeed(e));
// Cache the stop video button
const stopVideoButton = document.getElementById("stop-video");
// Add event listener to stop the video
stopVideoButton.addEventListener("click", (e) => stopMyVideoFeed(e));
