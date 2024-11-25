let PlayButton = document.getElementById("play");
let PauseButton = document.getElementById("pause");
let video = document.getElementById("myVideo");
PlayButton.addEventListener("click", function () {
  video.play();
});
PauseButton.addEventListener("click", function () {
  video.pause();
});
