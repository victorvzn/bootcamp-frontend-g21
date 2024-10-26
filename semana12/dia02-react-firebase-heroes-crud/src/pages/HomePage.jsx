import { useEffect, useState } from "react"
import { useHeroes } from "../hooks/useHeroes"

const HomePage = () => {
  const { fetchHeroes } = useHeroes()

  const [heroes, setHeroes] = useState([])

  useEffect(() => {
    fetchHeroes()
      .then(data => setHeroes(data))
  }, [])

  return (
    <section className="border container mx-auto flex flex-col gap-4">
      <div className="w-8/12 mx-auto flex justify-between py-3 px-6">
        <h2 className="text-3xl">Hero list</h2>
        <button
          className="py-2 px-3 bg-green-600 text-white w-[120px] rounded-lg hover:bg-green-700 duration-300"
        >
          New hero
        </button>
      </div>

      <div className="grid grid-cols-2 md:grid-cols-4 lg:grid-cols-6 gap-4 mx-auto">
        {
          heroes && heroes.map(heroe => {
            return (
              <div key={heroe.docId} className="bg-sky-500 p-4">
                {heroe.name} - {heroe.age}
              </div>
            )
          })
        }
      </div>

    </section>
  )
}

export default HomePage