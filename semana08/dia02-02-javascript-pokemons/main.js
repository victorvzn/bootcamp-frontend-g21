const fetchPokemons = async (page = 1) => {
  const LIMIT = 3
  const OFFSET = (page - 1 ) * LIMIT

  const url = `https://pokeapi.co/api/v2/pokemon?offset=${OFFSET}&limit=${LIMIT}`

  const response = await fetch(url) // Devuelve una promesa

  const data = await response.json() // Convierte la respuesta en formato JSON

  // console.log(data)

  return data
}

const renderPokemons = (pokemons = []) => {
  const pokemonsList = document.getElementById('pokemonList')

  let elements = ''

  pokemons.forEach(pokemon => {
    elements += `<h2>${pokemon.name}</h2>`
  })

  pokemonsList.innerHTML = elements
}

fetchPokemons(50)
  .then(data => renderPokemons(data.results))