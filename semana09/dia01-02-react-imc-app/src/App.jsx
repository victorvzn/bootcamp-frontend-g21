import { useState } from 'react'

const App = () => {
  // useState hook que nos ayuda a generar un estado para manipular datos dentro de nuestro componente
  // useState devuelve un arreglo con una variable de lectura y una función de escritura para cambiar el estado
  const [weight, setWeight] = useState(80);
  const [height, setHeight] = useState(180);

  const handleWeight = (event) => {
    setWeight(event.target.value)
  }

  return (
    <section className="w-[400px] mx-auto bg-slate-200 p-4 mt-8">
      <h1 className="text-3xl text-red-600 font-bold text-center">IMC Calculator</h1>

      <div className="pt-4">
        <p>Weight: {weight} kg</p>
        <input
          type="range"
          min="50"
          max="200"
          onChange={handleWeight}
        />
      </div>

      <div>
        <p>Height: {height} cm</p>
        <input
          type="range"
          min="50"
          max="200"
        />
      </div>

      <p className="font-bold ">Tu IMC es 0</p>

      <p className="font-bold text-2xl">Estado de IMC: 0</p>
    </section>
  )
}

export default App