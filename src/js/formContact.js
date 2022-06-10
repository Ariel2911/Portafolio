const formContact = () => {
  const form = document.getElementById('form');
  const response = document.getElementById('response');
  const loader = document.getElementById('loader');
  const message = document.getElementById('message');

  form.addEventListener('submit', (e) => {
    e.preventDefault();
    form[3].disabled = true;
    response.classList.remove('hidden');
    message.textContent = 'Enviando...';

    fetch('https://formsubmit.co/ajax/ariel29111978@hotmail.com', {
      method: 'POST',
      body: new FormData(e.target),
    })
      .then((res) => (res.ok ? res.json() : Promise.reject(res)))
      .then(() => {
        loader.classList.add('hidden');
        message.textContent = 'Gracias por tú mensaje';
      })
      .catch((err) => {
        loader.classList.add('hidden');
        message.textContent = err;
      });

    // Pequeño bloque de código para probar la vista de la ventana "response"
    // setTimeout(() => {
    //   loader.classList.add('hidden');
    //   message.textContent = 'Gracias por tú mensaje';
    //   // form.reset();
    // }, 2000);

    form.reset();
    setTimeout(() => {
      form[3].disabled = false;
      loader.classList.remove('hidden');
      response.classList.add('hidden');
    }, 3000);
  });
};

export default formContact;
