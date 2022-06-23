(() => {
  const btn = document.getElementById('btnSeeMore');
  const seeMore = document.querySelector('.section__list').classList;

  btn.addEventListener('click', () => {
    seeMore.toggle('section__list--more');
    const active = Object.values(seeMore).includes('section__list--more');

    btn.textContent = active ? 'ver menos' : 'ver más';
  });
})();
