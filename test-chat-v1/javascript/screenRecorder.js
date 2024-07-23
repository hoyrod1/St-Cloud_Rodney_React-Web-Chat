console.log(`//======== THE screenRecorder FILE IS CONNECTED =======//`);
//=========================================================================================//
// Declare the mediaRecorder variable //
let mediaRecorder;
// Declare the recordedBlobs array variable //
let recordedBlobs;
//=========================================================================================//

//================================= START VIDEO RECORDING =================================//
const startRecording = (e) => {
  console.log(`Start recording button works sanity check`);
  // console.log(e);
  // recordedBlobs is an array to hold the blobs for playback //
  recordedBlobs = [];
  // mediaRecorder makes a media recorder from the constructor //
  mediaRecorder = new MediaRecorder(stream);
  // Ondataavailable will run when the stream ends, stops, or we ask for it //
  mediaRecorder.ondataavailable = (e) => {
    // console.log("Data is available to be recorded");
    recordedBlobs.push(e.data);
  };
  mediaRecorder.start();
};
//=========================================================================================//

//================================== STOP VIDEO RECORDING =================================//
const stopRecording = (e) => {
  console.log(`Stop recording button works sanity check`);
  // console.log(e);
  mediaRecorder.stop();
};
//=========================================================================================//

//================================== PLAY RECORDED VIDEO ==================================//
const playRecording = (e) => {
  console.log(`Play recording button works sanity check`);
  // console.log(e);
  // superBuffer is a super of the array of recordedBlobs
  const superBuffer = new Blob(recordedBlobs);
  // Cache the video element to play the recorded video
  const recordedVideEl = document.getElementById("other-video");
  recordedVideEl.src = window.URL.createObjectURL(superBuffer);
  recordedVideEl.controls = true;
  recordedVideEl.play();
};
//=========================================================================================//
