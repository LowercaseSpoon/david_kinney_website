document.addEventListener('DOMContentLoaded', function () {
  const menuButton = document.querySelector('.hamburger');
  const navMenu = document.querySelector('nav ul');

  menuButton.addEventListener('click', function () {
    navMenu.style.display = navMenu.style.display === 'block' ? 'none' : 'block';
  });

  debugger;
  const video = document.getElementById('intro-video');
  console.log("video loaded")
  if (video) {
    video.addEventListener('ended', function() {
      console.log("video ended")
      const videoContainer = document.querySelector('.video-container');
      
      if (videoContainer) {
        videoContainer.remove();
      }
    });
  }
});