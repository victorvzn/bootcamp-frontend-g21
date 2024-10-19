import { BrowserRouter, Route, Routes } from 'react-router-dom'

import BaseLayout from './layouts/BaseLayout'
import HomePage from './pages/HomePage'

const App = () => {
  return (
    <BrowserRouter>
      <Routes>
        <Route path='/' element={<BaseLayout />}>
          {/* DONE: RUTA PARA LISTAR UNA PELICULA */}
          <Route path='/' element={<HomePage />} />
          {/* TODO: RUTA PARA RECUPERAR UNA PELICULA */}
          {/* TODO: RUTA PARA CREAR UNA PELICULA */}
          {/* TODO: RUTA PARA EDITAR UNA PELICULA */}
        </Route>
      </Routes>
    </BrowserRouter>
  )
}

export default App