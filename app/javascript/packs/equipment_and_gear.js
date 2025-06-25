document.addEventListener('DOMContentLoaded', function() {
  const hamburger = document.querySelector('.hamburger');
  const navMenu = document.querySelector('nav ul');
  console.log("hamburger found");
  console.log("navMenu found");
  if (hamburger && navMenu) {
    hamburger.addEventListener('click', function() {
      navMenu.style.display = navMenu.style.display === 'block' ? 'none' : 'block';
      // Optional: Animate hamburger icon
      this.classList.toggle('active');
    });

    // Close menu when clicking outside
    document.addEventListener('click', function(event) {
      if (!navMenu.contains(event.target) && !hamburger.contains(event.target)) {
        navMenu.style.display = 'none';
        hamburger.classList.remove('active');
      }
    });

    // Close menu when clicking a link
    const navLinks = navMenu.querySelectorAll('a');
    navLinks.forEach(link => {
      link.addEventListener('click', () => {
        navMenu.style.display = 'none';
        hamburger.classList.remove('active');
      });
    });
  }
}); 