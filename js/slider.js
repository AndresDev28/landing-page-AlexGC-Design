(function(){ 
  // Función autoejecutable para evitar contaminar el alcance global
  
  const sliders = [...document.querySelectorAll('.testimony_body')];
  // Selecciona todos los elementos con la clase 'testimony_body' y convierte la NodeList en un array

  const buttonNext = document.querySelector('#next');
  // Selecciona el elemento con el id 'next' (botón siguiente)

  const buttonBefore = document.querySelector('#before');
  // Selecciona el elemento con el id 'before' (botón anterior)

  let value;
  // Declara una variable para mantener la posición actual del slider

  buttonNext.addEventListener('click', () => {
    changePosition(1);
  });
  // Añade un listener al botón 'next' para llamar a la función changePosition con el argumento 1 cuando se hace clic

  buttonBefore.addEventListener('click', () => {
    changePosition(-1);
  });
  // Añade un listener al botón 'before' para llamar a la función changePosition con el argumento -1 cuando se hace clic

  const changePosition = (add) => {
    const currentTestimony = document.querySelector('.testimony_body--show').dataset.id;
    // Obtiene el elemento del testimonio actual que se está mostrando (tiene la clase 'testimony_body--show') y recupera su atributo data-id

    value = Number(currentTestimony);
    // Convierte el data-id del testimonio actual a un número

    value += add;
    // Suma el argumento (1 o -1) al valor actual para obtener la nueva posición

    sliders[Number(currentTestimony) - 1].classList.remove('testimony_body--show');
    // Elimina la clase 'testimony_body--show' del elemento del testimonio actual

    if (value === sliders.length + 1 || value === 0) {
      value = value === 0 ? sliders.length : 1;
    }
    // Si el nuevo valor excede el número de sliders o es menor que 1, se ajusta para que envuelva al otro extremo

    sliders[value - 1].classList.add('testimony_body--show');
    // Añade la clase 'testimony_body--show' al nuevo elemento del testimonio para mostrarlo
  }
})();
