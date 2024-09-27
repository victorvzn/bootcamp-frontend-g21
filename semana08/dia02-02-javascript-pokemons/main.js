let page = 1

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

const elPrevPage = document.querySelector('#prevPage')
const elCurrentPage = document.querySelector('#currentPage')
const elNextPage = document.querySelector('#nextPage')

elNextPage.addEventListener('click', async () => {
  page = page + 1

  const dataPokemons = await fetchPokemons(page)

  renderPokemons(dataPokemons.results)

  elCurrentPage.textContent = page
})

// TODO: Implementar el botón previous


fetchPokemons()
  .then(data => renderPokemons(data.results))