(() => {
  const sliderContainer = document.getElementById('sliderContainer');
  const sliderItems = parseInt(sliderContainer.childElementCount, 10);

  const prevArrow = document.getElementById('prevArrow');
  const nextArrow = document.getElementById('nextArrow');

  // Establece el tamaño del contenedor de las tarjetas
  sliderContainer.style.width = `${100 * sliderItems}%`;

  // Específica el porcentaje del ancho de cada imagen
  const percentage = 100 / sliderItems;

  let count = 0;

  const sliderMove = (move) => {
    if (move === 'prev') count -= 1;
    if (move === 'next') count += 1;

    if (count < 0) count = sliderItems - 1;
    if (count > sliderItems - 1) count = 0;
    sliderContainer.style.transform = `translateX(-${count * percentage}%)`;
  };

  prevArrow.addEventListener('click', () => sliderMove('prev'));
  nextArrow.addEventListener('click', () => sliderMove('next'));

  let interval = setInterval(sliderMove, 3000, 'next');

  const sliderAutoMove = (status = 'on') => {
    if (status === 'on') interval = setInterval(sliderMove, 3000, 'next');
    if (status === 'off') clearInterval(interval);
  };

  sliderContainer.addEventListener('mouseenter', () => sliderAutoMove('off'));
  sliderContainer.addEventListener('mouseleave', () => sliderAutoMove('on'));
})();
