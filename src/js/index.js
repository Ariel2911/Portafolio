const btnMenu = document.getElementById('btn-menu');
const btnMenuBar = document.getElementById('btn-menu-bar');
const navBar = document.getElementById('nav-bar');
const navBarLink = document.querySelectorAll('.nav-bar__link');

btnMenu.addEventListener('click', () => {
  btnMenuBar.classList.toggle('btn-menu__bar--active');
  navBar.classList.toggle('nav-bar--active');
});

navBarLink.forEach((item) => {
  item.addEventListener('click', () => {
    btnMenuBar.classList.toggle('btn-menu__bar--active');
    navBar.classList.toggle('nav-bar--active');
  });
});
