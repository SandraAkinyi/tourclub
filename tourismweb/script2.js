document.addEventListener('DOMContentLoaded', function() {
  const hamburger = document.querySelector('.hamburger');
  const mobileMenu = document.querySelector('.mobile__menu');

  hamburger.addEventListener('click', function() {
    mobileMenu.classList.toggle('open');
  });
});
