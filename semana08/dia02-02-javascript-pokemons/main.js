let page = 1
let count = 0
let totalPages = 0
const LIMIT = 9

const POKEMONS_STORAGE_KEY = 'pokemon-favorites'

let pokemonFavorites = JSON.parse(localStorage.getItem(POKEMONS_STORAGE_KEY)) ?? []

const fetchPokemons = async (page = 1) => {
  const OFFSET = (page - 1 ) * LIMIT

  const url = `https://pokeapi.co/api/v2/pokemon?offset=${OFFSET}&limit=${LIMIT}`

  const response = await fetch(url) // Devuelve una promesa

  const data = await response.json() // Convierte la respuesta en formato JSON

  const dataResults = data.results.map(pokemon => {
    // "url": "https://pokeapi.co/api/v2/pokemon/1/"
    const id = pokemon.url.split('/').at(6)
    const image = `https://raw.githubusercontent.com/PokeAPI/sprites/master/sprites/pokemon/other/official-artwork/${id}.png`
    const foundFavorite = pokemonFavorites.find(favorite => favorite.id === id)

    return {
      ...pokemon,
      id,
      name: Boolean(foundFavorite) ? foundFavorite.name : pokemon.name,
      image: Boolean(foundFavorite) ? foundFavorite.image : image,
      isFavorite: Boolean(foundFavorite)
    }
  })

  console.log({dataResults})

  return {
    ...data,
    results: dataResults
  }
}

const toggleFavorite = async (id, name, image) => {
  const foundPokemonFavorite = pokemonFavorites.filter(favorite => favorite.id === id)
  const existPokemonFavorite = foundPokemonFavorite.length > 0

  if (existPokemonFavorite) {
    // retirar el pokemon de favoritos
    pokemonFavorites = pokemonFavorites.filter(pokemon => pokemon.id != id)
  } else {
    pokemonFavorites.push({id, name, image})
  }

  localStorage.setItem(POKEMONS_STORAGE_KEY, JSON.stringify(pokemonFavorites))

  const data = await fetchPokemons(page)
  renderPokemons(data.results)
}

const readPokemon = async (pokemonId) => {
  const pokemonForm = document.forms['pokemonForm']

  const currentFavorites = JSON.parse(localStorage.getItem(POKEMONS_STORAGE_KEY)) ?? []

  const foundPokemon = currentFavorites.find(favorite => favorite.id === pokemonId)

  pokemonForm.id.value = foundPokemon.id
  pokemonForm.name.value = foundPokemon.name
  pokemonForm.image.value = foundPokemon.image
}

const updatePokemon = async () => {
  const pokemonForm = document.forms['pokemonForm'];

  const id = pokemonForm.id.value;
  const name = pokemonForm.name.value;
  const image = pokemonForm.image.value;

  const newPokemons = pokemonFavorites.map(pokemon => {
    if (pokemon.id === id) {
      return { id, name, image }
    }
    return pokemon
  })

  pokemonFavorites = newPokemons

  localStorage.setItem(POKEMONS_STORAGE_KEY, JSON.stringify(newPokemons))

  pokemonForm.reset()

  const data = await fetchPokemons(page);
  renderPokemons(data.results);
  currentPage.innerHTML = page;
}

const renderPokemons = (pokemons = []) => {
  const pokemonsList = document.getElementById('pokemonList')

  let elements = ''

  // DONE: Agregar una imagen a cada pokemon

  pokemons.forEach(pokemon => {
    elements += `<article class="pokemon-item">
      <h2>#${pokemon.id} ${pokemon.name}</h2>
      <img
        src="${pokemon.image}"
        onerror="this.src='https://placehold.co/80x80'"
        width="80"
        height="80"
      />
      <div class="pokemon-item__buttons">
        <button onclick="toggleFavorite('${pokemon.id}','${pokemon.name}','${pokemon.image}')">
          <svg class='${pokemon.isFavorite ? 'is-favorite' : '' }' xmlns="http://www.w3.org/2000/svg" width="24" height="24" fill="none" stroke="currentColor" stroke-linecap="round" stroke-linejoin="round" stroke-width="2" class="feather feather-star"><path d="m12 2 3.09 6.26L22 9.27l-5 4.87 1.18 6.88L12 17.77l-6.18 3.25L7 14.14 2 9.27l6.91-1.01L12 2z"/></svg>
        </button>
        <button onclick="readPokemon('${pokemon.id}')" class="btn ${!pokemon.isFavorite ? 'is-hidden' : ''}">
          <svg xmlns="http://www.w3.org/2000/svg" width="24" height="24" fill="none" stroke="currentColor" stroke-linecap="round" stroke-linejoin="round" stroke-width="2" class="feather feather-edit"><path d="M11 4H4a2 2 0 0 0-2 2v14a2 2 0 0 0 2 2h14a2 2 0 0 0 2-2v-7"/><path d="M18.5 2.5a2.121 2.121 0 0 1 3 3L12 15l-4 1 1-4 9.5-9.5z"/></svg>
        </button>
      </div>
    </article>`
  })

  pokemonsList.innerHTML = elements

  totalPages = Math.ceil(count / LIMIT)

  elCurrentPage.textContent = `${page} de ${totalPages}`

  const numberPokemons = document.getElementById('numberPokemons')
  const currentFavorites = JSON.parse(localStorage.getItem(POKEMONS_STORAGE_KEY)) ?? []

  numberPokemons.innerHTML = `Favorites: ${currentFavorites.length}`
}

const elPrevPage = document.querySelector('#prevPage')
const elCurrentPage = document.querySelector('#currentPage')
const elNextPage = document.querySelector('#nextPage')
const pokemonForm = document.getElementById('pokemonForm')
const elFirstPage = document.querySelector('#firstPage')
const elLastPage = document.querySelector('#lastPage')

// const xPage = document.querySelector('#xPage')

// xPage.addEventListener('click', async () => {
//   page = 140

//   const dataPokemons = await fetchPokemons(page)

//   renderPokemons(dataPokemons.results)
// })

const handleSubmit = (e) => {
  e.preventDefault();

  updatePokemon()
}

pokemonForm.addEventListener('submit', handleSubmit)

elNextPage.addEventListener('click', async () => {
  page = page + 1

  if (page > totalPages) {
    page = totalPages
    return
  }

  const dataPokemons = await fetchPokemons(page)

  renderPokemons(dataPokemons.results)
})

// DONE: Implementar el botón previous
elPrevPage.addEventListener('click', async () => {
  page = page - 1

  if (page <= 0) {
    page = 1
    return
  }

  const dataPokemons = await fetchPokemons(page)
  
  renderPokemons(dataPokemons.results)
})

// TODO: Implementar el botón first page

elFirstPage.addEventListener('click', async () => {
  page = 1

  const dataPokemons = await fetchPokemons(page)
  
  renderPokemons(dataPokemons.results)
})

// TODO: Implementar el botón last page

elLastPage.addEventListener('click', async () => {
  page = totalPages

  const dataPokemons = await fetchPokemons(page)
  
  renderPokemons(dataPokemons.results)
})

fetchPokemons()
  .then(data => {
    count = data.count

    renderPokemons(data.results)
  })

// TODO: Editar el nombre y la imagen solo de los pokemons favoritos.
