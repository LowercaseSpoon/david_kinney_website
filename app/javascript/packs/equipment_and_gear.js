document.addEventListener('DOMContentLoaded', function() {
  const hamburger = document.querySelector('.hamburger');
  const navMenu = document.querySelector('nav ul');
  const equipmentContainer = document.querySelector('.equipment-container');
  console.log("hamburger found");
  console.log("navMenu found");
  if (hamburger && navMenu) {
    hamburger.addEventListener('click', function() {
      const isExpanded = navMenu.style.display === 'block';
      navMenu.style.display = isExpanded ? 'none' : 'block';
      
      // Adjust equipment container position based on navbar state
      if (equipmentContainer) {
        if (!isExpanded) {
          // Navbar is expanding, push container down
          equipmentContainer.style.top = '35vh'; // Adjust this value as needed
        } else {
          // Navbar is collapsing, move container back up
          equipmentContainer.style.top = '10vh';
        }
      }
      
      // Optional: Animate hamburger icon
      this.classList.toggle('active');
    });

    // Close menu when clicking outside
    document.addEventListener('click', function(event) {
      if (!navMenu.contains(event.target) && !hamburger.contains(event.target)) {
        // navMenu.style.display = 'none';
        hamburger.classList.remove('active');
        // Reset container position
        if (equipmentContainer) {
          equipmentContainer.style.top = '15vh';
        }
      }
    });

    // Close menu when clicking a link
    const navLinks = navMenu.querySelectorAll('a');
    navLinks.forEach(link => {
      link.addEventListener('click', () => {
        // navMenu.style.display = 'none';
        hamburger.classList.remove('active');
      });
    });
  }
}); 