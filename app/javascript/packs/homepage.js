document.addEventListener('DOMContentLoaded', function() {
    // Hamburger menu functionality
    const menuButton = document.querySelector('.hamburger');
    const navMenu = document.querySelector('nav ul');

    if (menuButton && navMenu) {
        menuButton.addEventListener('click', function () {
            navMenu.style.display = navMenu.style.display === 'block' ? 'none' : 'block';
        });
    }

    // Video functionality
    const video = document.getElementById('intro-video');
    console.log("video loaded")
    
    if (video) {
      video.addEventListener('ended', function() {
        video.remove();
        console.log("video removed")
      });
    }
  });