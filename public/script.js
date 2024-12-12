// document.getElementById("fullscreenBtn").addEventListener("click", function () {
//   let videoElement = document.getElementById("myVideo");

//   if (videoElement.requestFullscreen) {
//     videoElement.requestFullscreen();
//   } else if (videoElement.mozRequestFullScreen) {
//     // Firefox
//     videoElement.mozRequestFullScreen();
//   } else if (videoElement.webkitRequestFullscreen) {
//     // Chrome, Safari and Opera
//     videoElement.webkitRequestFullscreen();
//   } else if (videoElement.msRequestFullscreen) {
//     // IE/Edge
//     videoElement.msRequestFullscreen();
//   }
// });

document.addEventListener("keydown", () => {
  document.documentElement.requestFullscreen();
});
