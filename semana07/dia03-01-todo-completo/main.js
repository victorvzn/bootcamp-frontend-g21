const taskInput = document.querySelector('.task__input')
const taskClear = document.querySelector('.task__clear')
const taskList = document.querySelector('.task__list')

let tasks = [
  // {
  //   title: 'Estudiar Javascript',
  //   completed: true
  // },
  // {
  //   title: 'Salir al receso a las 9:00pm',
  //   completed: false
  // },
  // {
  //   title: 'Realizar el reto del fin de semana',
  //   completed: false
  // }
]

taskInput.addEventListener('keydown', function(event) {
  // console.log(event.key)

  const value = event.target.value

  if (event.key === 'Enter') {
    console.log('Agregando una nueva tarea', value)

    const newTask = {
      title: value,
      completed: false
    }

    tasks.push(newTask)

    console.log(tasks)

    // event.target.value = ''
    taskInput.value = ''

    renderTasks()
  }
})

function renderTasks() {
  let lista = ''

  // TODO: Añadir el contenido "No hay tareas registradas" si no hay tareas en el array tasks
  if (tasks.length === 0) {
    taskList.innerHTML = `
      <li class="p-4 bg-yellow-100 text-yellow-800 text-sm rounded-lg text-center font-medium border border-yellow-300">
        No hay tareas registradas
      </li>
    `
    return
  }

  tasks.forEach(function(task, index) {
    lista = lista + `
      <li class="flex justify-center items-center gap-4 py-1">
        <input
          type="checkbox"
        />
        <div class="w-full">${task.title}</div>
        <button
          class="border border-red-700 font-medium text-sm p-1 px-3 text-red-900 hover:bg-red-700 hover:text-white rounded-lg duration-300"
          onclick="removeTask(${index})"
        >
          Borrar
        </button>
      </li>
    `
  })

  taskList.innerHTML = lista
}

function removeTask(selectedIndex) {
  const newTasks = tasks.filter(function(task, index) {
    return index !== selectedIndex
  })

  // tasks.splice(selectedIndex, 1)

  tasks = newTasks

  renderTasks()
}

renderTasks()