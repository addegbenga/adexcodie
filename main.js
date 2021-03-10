const videoplayer = document.querySelector("video-player");

window.addEventListener("DOMContentLoaded", (event) => {
  console.log(videoplayer);
});
var vid = document.getElementById("bgvid");
var pauseButton = document.querySelector("#btn");
// document.querySelector('video').defaultPlaybackRate = 1;
pauseButton.addEventListener("click", (e) => {
//   vid.classList.toggle("txt");
//   const demo = document.querySelector("txt");
//   demo && demo.addEventListener("click", ()=>{
//       vid.pause()
//   })
vid.restart()
});

if (window.matchMedia("(prefers-reduced-motion)").matches) {
  vid.removeAttribute("autoplay");
  vid.pause();
  pauseButton.innerHTML = "Paused";
}

function vidFade() {
  vid.classList.add("stopfade");
}

vid.addEventListener("ended", function () {
  // only functional if "loop" is removed
  vid.pause();
  // to capture IE10
  vidFade();
});
