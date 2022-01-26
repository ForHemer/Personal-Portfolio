const hamburgerButton = document.querySelector('.hamburger_btn');
const mobileMenu = document.querySelector('.mobile-menu');
const closeButton = document.querySelector('.close-menu');

hamburgerButton.addEventListener('click', (e) => {
  e.target.style.display = 'none';
  mobileMenu.style.display = 'block';
  setTimeout(() => {
    mobileMenu.style.right = '0px';
  }, 1);
});

closeButton.addEventListener('click', () => {
  mobileMenu.style.right = '-800px';
  setTimeout(() => {
    mobileMenu.style.display = 'none';
  }, 900);
  hamburgerButton.style.display = 'block';
});

document.querySelectorAll('.mobile-menu-list-item').forEach((link) => {
  link.addEventListener('click', () => {
    mobileMenu.style.right = '-800px';
    setTimeout(() => {
      mobileMenu.style.display = 'none';
    }, 900);
    hamburgerButton.style.display = 'block';
  });
});