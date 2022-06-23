(() => {
  const sliderContainer = document.getElementById("sliderContainer");
  const sliderItems = parseInt(sliderContainer.childElementCount); // =2

  //asigna el tamaño del slider-container
  const width = 100 * sliderItems;
  sliderContainer.style=`width: ${width}%;`;

  //asigna la medida del translate
  let translateX = 0;
  let a=0
  

  setInterval(() => {
    // console.log(translateX)
    
    // a++
    // sliderContainer.setAttribute("style", `transform:translateX(${translateX}%);width: ${width}%;`);
    // translateX = translateX -50
    // if(a >= sliderItems) {
    //   translateX=0
    //   a=0
    // }
    sliderContainer.setAttribute("style", `transform:translateX(${translateX}%);width: ${width}%;`);
    translateX = translateX -50


    if(translateX <= -100) {
      // console.log('if',translateX)
      translateX=0
    }
  }, 4000);  
})();
