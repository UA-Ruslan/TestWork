const burgerBtn = document.querySelector('.burgerButton');
const navBar = document.querySelector('.navWrapper');

burgerBtn.addEventListener('click', function () {
  this.classList.toggle('active');
  navBar.classList.toggle('navWrapperActive');
});
