import { useEffect } from "react"

const fetchCharacters = async () => {
  const URL = 'https://dragonball-api.com/api/characters'

  const response = await fetch(URL)

  return await response.json()
}

const CharacterList = () => {
  // TODO: Renderizar los items del resultado de personajes en una grilla de 3 x 3

  useEffect(() => {
    fetchCharacters()
      .then(results => console.log(results))
  }, [])

  return (
    <div>CharacterList</div>
  )
}

export default CharacterList