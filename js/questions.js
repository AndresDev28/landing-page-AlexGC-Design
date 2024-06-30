(function(){

  const titleQuestions = [...document.querySelectorAll('.questions_title')];
  
  titleQuestions.forEach(question => {
    question.addEventListener('click', () => {
      let height = 0; /* Variable para calcular el alto del elemento */
      let answer = question.nextElementSibling; /* Obtenemos el siguiente hermano de question que el p .question_show */
      let addPadding = question.parentElement.parentElement; /* Llega hasta el elmento padre article .questions_padding */

      addPadding.classList.toggle('questions_padding--add')
      question.children[0].classList.toggle('questions_arrow--rotate');

      if(answer.clientHeight === 0) { /* Comprueba si el párrafo esta contraído */
        height = answer.scrollHeight; /* Da la altura mínima para que se vea el contenido */
      }

      answer.style.height = `${height}px`
    })
  })

})(); 