const taskInput = document.querySelector('.task__input')
const taskAdd = document.querySelector('.task__add')
const taskList = document.querySelector('.task__list')

taskAdd.addEventListener('click', function(event) {
  // Se ejecutará cuando hagamos click en el botón "Añadir tarea"

  const button = document.createElement('button')
  button.textContent = '¡Hola soy un botón!'
  document.body.appendChild(button)

  // TODO: Añadir dinámicamente una etiqueta h1 dentro del body

  

  console.log('click')
})