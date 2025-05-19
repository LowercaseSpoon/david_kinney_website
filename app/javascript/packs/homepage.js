document.addEventListener('DOMContentLoaded', function() {
    const video = document.getElementById('intro-video');
    console.log("video loaded")
    
    if (video) {
      video.addEventListener('ended', function() {
        video.remove();
        console.log("video removed")
      });
    }
  });