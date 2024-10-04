const App = () => {
  return (
    <main
      className="bg-yellow-100 w-full max-w-sm mx-auto mt-10 border border-yellow-400 rounded-lg shadow-lg p-4"
    >
      <h1 className="text-2xl font-bold text-center">TODO APP</h1>

      <form>
        <input
          className="w-full border my-3 p-2 rounded-lg"
          type="text"
          placeholder="¿Qué deseas hacer hoy?"
          required
        />
      </form>

      <section className="flex justify-between items-center">
        <span className="font-bold">
          2 de 3
        </span>
        <button
          className="bg-blue-500 text-white rounded-lg px-2 py-1 hover:bg-blue-700 duration-300"
        >
          Limpiar completadas
        </button>
      </section>

      <section className="mt-4">
        <ul className="flex flex-col gap-2">
          <li className="flex">
            <input
              className="mr-2"
              type="checkbox"
            />
            <div className="w-full flex justify-between items-center">
              <span className="font-medium">
                title
              </span>
              <button
                className="bg-red-300 rounded-lg px-1 py-1"
              >
                ❌
              </button>
            </div>
          </li>
          <li className="flex">
            <input
              className="mr-2"
              type="checkbox"
            />
            <div className="w-full flex justify-between items-center">
              <span className="font-medium">
                title
              </span>
              <button
                className="bg-red-300 rounded-lg px-1 py-1"
              >
                ❌
              </button>
            </div>
          </li>
        </ul>
      </section>
    </main>
  )
}

export default App