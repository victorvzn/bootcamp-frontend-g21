import { useParams } from "react-router-dom"

const EditarPeliculaPage = () => {
  const { id } = useParams()

  // TODO: Crear un formulario para recepcionar la información de la pelicula
  // TODO: Recuperar los datos de la pelicula para llenar el formulario de peliculas
  // TODO: Enviar la data con el metodo PUT para guardar la información modificada

  return (
    <div>EditarPeliculaPage ID:{id}</div>
  )
}

export default EditarPeliculaPage