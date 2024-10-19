const HomePage = () => {
  return (
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
              <button>Editar</button>
              <button>Eliminar</button>
            </div>
          </td>
        </tr>
      </tbody>
    </table>
  )
}

export default HomePage