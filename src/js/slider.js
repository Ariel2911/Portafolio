(() => {
  const sliderContainer = document.getElementById('sliderContainer');
  const sliderItems = parseInt(sliderContainer.childElementCount, 10);

  // asigna el tamaño del slider-container
  const width = 100 * sliderItems;
  sliderContainer.style = `width: ${width}%;`;

  const translate = 100 / sliderItems;
  let translateX = 0;

  setInterval(() => {
    sliderContainer.setAttribute(
      'style',
      `transform:translateX(${translateX}%);width: ${width}%;`,
    );
    translateX -= translate;

    if (translateX <= -100) {
      translateX = 0;
    }
  }, 4000);
})();
