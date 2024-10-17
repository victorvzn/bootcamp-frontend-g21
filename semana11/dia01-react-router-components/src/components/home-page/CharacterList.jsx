import { useEffect, useState } from "react"

const fetchCharacters = async () => {
  const URL = 'https://dragonball-api.com/api/characters'

  const response = await fetch(URL)

  return await response.json()
}

const CharacterList = () => {
  // TODO: Renderizar los items del resultado de personajes en una grilla de 3 x 3
  const [characters, setCharacters] = useState([])

  useEffect(() => {
    fetchCharacters()
      .then(results => setCharacters(results.items))
  }, [])

  return (
    <section className="grid grid-cols-4 gap-4 mt-6">
      {characters.map(character => {
        return (
          <article
            key={character.id}
            className="bg-yellow-300 rounded-lg p-3 flex flex-col justify-center items-center"
          >
            <img src={character.image} width={50} />
            <div className="font-bold text-3xl text-center mt-2">#{character.id} - {character.name}</div>
            <div className="font-bold text-center mt-2 bg-orange-300 p-2 uppercase">{character.race}</div>
          </article>
        )
      })}

      {/* <pre className="border mt-6 p-2">{JSON.stringify(characters, null, 2)}</pre> */}
    </section>
  )
}

export default CharacterList