// console.log('Hola JS')

const inputDisplay = document.querySelector('.display')
const buttons = document.querySelectorAll('button')

buttons.forEach(function(button) {
  // console.log(button.textContent)

  button.addEventListener('click', function(event) {
    console.log({ target: event.target })
    const buttonText = event.target.textContent

    console.log(buttonText) // + 9 8 1 =

    // TODO: Añadiremos la lógica de la calculadora
  })
})

// console.log(buttons)
// console.log({inputDisplay})
// inputDisplay.value = '9999'