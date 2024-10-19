import { useEffect, useState } from "react";
import { TbEdit, TbTrash } from "react-icons/tb";

import { fetchPeliculas } from "../services/peliculas";

const HomePage = () => {
  const [peliculas, setPeliculas] = useState([])

  useEffect(() => {
    fetchPeliculas()
      .then(data => setPeliculas(data))
  }, [])

  // TODO: Renderizar las peliculas en la tabla de abajo usando el estado peliculas

  return (
    <>
      <table>
        <thead>
          <tr>
            <th>#</th>
            <th>Imagen</th>
            <th>Nombre</th>
            <th>Acciones</th>
          </tr>
        </thead>
        <tbody>
          <tr>
            <td>1</td>
            <td>
              <img
                src='https://placehold.co/100x250'
                width="100"
                height="250"
              />
            </td>
            <td>
              <strong>nombre</strong>
              <div className="fs-small">
                <strong>Estreno:</strong> 18/10/24
              </div>
              <div className="fs-small">
                <strong>Genero:</strong> Acción
              </div>
              <div className="fs-small">
                <strong>Resumen:</strong> resumen....
              </div>
            </td>
            <td>
              <div className="flex gap-0.5">
                <button><TbEdit /></button>
                <button><TbTrash /></button>
              </div>
            </td>
          </tr>
        </tbody>
      </table>

      <pre>{JSON.stringify(peliculas, null, 2)}</pre>
    </>
  )
}

export default HomePage