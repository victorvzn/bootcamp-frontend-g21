import { fetchPeliculas } from './services.js'
import { renderPeliculas } from './utils.js'

fetchPeliculas()
  .then(peliculas => renderPeliculas(peliculas))