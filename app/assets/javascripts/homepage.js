document.addEventListener('turbolinks:load', function() {
    debugger;
    const video = document.getElementById('intro-video');
    console.log("video loaded")
    if (video) {
      video.addEventListener('ended', function() {
        const videoContainer = document.querySelector('.video-container');
        console.log("video container found")
        if (videoContainer) {
          videoContainer.remove();
        }
      });
    }
  });