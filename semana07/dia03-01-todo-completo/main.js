const taskInput = document.querySelector('.task__input')
const taskClear = document.querySelector('.task__clear')
const taskList = document.querySelector('.task__list')

taskInput.addEventListener('keydown', function(event) {
  // console.log(event.key)

  const value = event.target.value

  if (event.key === 'Enter') {
    console.log('Agregando una nueva tarea', value)

    // event.target.value = ''
    taskInput.value = ''
  }
})