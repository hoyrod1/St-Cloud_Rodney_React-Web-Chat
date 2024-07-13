console.log(`//======== THE SCRIPT FILE IS CONNECTED =======//`);
// The steam variable will store the stream
let stream = null;
// This is a object containing the type of media-tracks/hardware
const constrants = {
  audio: true,
  video: true,
};

// Async functions to capture the media device.
const getMicAndCamera = async (e) => {
  try {
    stream = await navigator.mediaDevices.getUserMedia(constrants);
    console.log(stream);
  } catch (error) {
    // User denied access to media device
    console.log("The requested constrants was denied", error);
  }
};

// Cache the share mic and camera button
const shareButton = document.getElementById("share");
// Add event listener to the share mic and camera button
shareButton.addEventListener("click", (e) => getMicAndCamera(e));
