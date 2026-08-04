document.addEventListener("DOMContentLoaded", function () {
  const video = document.getElementById("intro-video");

  if (!video) return;

  const revealSite = function () {
    if (video.parentNode) {
      video.remove();
    }
    document.body.classList.remove("video-playing");
  };

  video.addEventListener("ended", revealSite);
  video.addEventListener("error", revealSite);

  // Some browsers need an explicit play() after load, even with autoplay + muted
  const tryPlay = function () {
    const playPromise = video.play();
    if (playPromise && typeof playPromise.catch === "function") {
      playPromise.catch(function () {
        // Autoplay blocked or decode failed — don't leave users on a black screen
        revealSite();
      });
    }
  };

  if (video.readyState >= 2) {
    tryPlay();
  } else {
    video.addEventListener("loadeddata", tryPlay, { once: true });
  }
});
