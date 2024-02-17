document.addEventListener('DOMContentLoaded', function () {
  const menuButton = document.querySelector('.hamburger');
  const navMenu = document.querySelector('nav ul');

  menuButton.addEventListener('click', function () {
    navMenu.style.display = navMenu.style.display === 'block' ? 'none' : 'block';
  });
});