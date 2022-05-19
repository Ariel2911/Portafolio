const btnSeeMore = document.getElementById('btnSeeMore');
const seeMore = document.querySelector('.more-technologies').classList;

btnSeeMore.addEventListener('click', () => {
  seeMore.toggle('more-technologies--active');
  const active = Object.values(seeMore).includes('more-technologies--active');

  btnSeeMore.textContent = active ? 'ver menos' : 'ver más';
});
