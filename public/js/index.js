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

const btnSeeMore = document.getElementById('btnSeeMore');
const seeMore = document.querySelector('.more-technologies').classList;

btnSeeMore.addEventListener('click', () => {
  seeMore.toggle('more-technologies--active');
  const active = Object.values(seeMore).includes('more-technologies--active');

  btnSeeMore.textContent = active ? 'ver menos' : 'ver más';
});

// console.log('hola');
