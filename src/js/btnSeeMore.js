(() => {
  const btn = document.getElementById('btnSeeMore');
  const seeMore = document.querySelector('.section__list').classList;
  const seMore = document.querySelector('.section__list');

  btn.addEventListener('click', (e) => {
    console.log(e.target);
    console.log(seMore);
    seeMore.toggle('section__list--more');
    const active = Object.values(seeMore).includes('section__list--more');

    btn.textContent = active ? 'ver menos' : 'ver más';
  });
})();
