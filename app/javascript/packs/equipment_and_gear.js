document.addEventListener('DOMContentLoaded', function() {
  const hamburger = document.querySelector('.hamburger');
  const nav = document.querySelector('nav');
  const navMenu = document.querySelector('nav ul');
  const equipmentContainer = document.querySelector('.equipment-container');
  console.log("hamburger found");
  console.log("navMenu found");
  
  const syncContainerTopToNav = () => {
    if (!equipmentContainer || !nav || window.innerWidth > 768) return;
    const navBottom = nav.getBoundingClientRect().bottom;
    equipmentContainer.style.top = `${Math.round(navBottom + 8)}px`;
  };

  const syncNavMenuForViewport = () => {
    if (!navMenu || !hamburger) return;
    if (window.innerWidth > 768) {
      navMenu.style.display = '';
      hamburger.classList.remove('active');
    }
  };

  if (hamburger && navMenu && nav) {
    syncContainerTopToNav();

    hamburger.addEventListener('click', function() {
      if (window.innerWidth > 768) return;
      const isExpanded = navMenu.style.display === 'block';
      navMenu.style.display = isExpanded ? 'none' : 'block';

      // Wait for layout update, then anchor container below nav.
      requestAnimationFrame(syncContainerTopToNav);

      // Optional: Animate hamburger icon
      this.classList.toggle('active');
    });

    // Close menu when clicking outside
    document.addEventListener('click', function(event) {
      if (!navMenu.contains(event.target) && !hamburger.contains(event.target)) {
        // navMenu.style.display = 'none';
        hamburger.classList.remove('active');
        requestAnimationFrame(syncContainerTopToNav);
      }
    });

    // Close menu when clicking a link
    const navLinks = navMenu.querySelectorAll('a');
    navLinks.forEach(link => {
      link.addEventListener('click', () => {
        // navMenu.style.display = 'none';
        hamburger.classList.remove('active');
        requestAnimationFrame(syncContainerTopToNav);
      });
    });

    window.addEventListener('resize', syncContainerTopToNav);
    window.addEventListener('resize', syncNavMenuForViewport);
    syncNavMenuForViewport();
  }
}); 