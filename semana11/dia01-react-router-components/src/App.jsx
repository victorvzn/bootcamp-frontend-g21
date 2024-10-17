import { BrowserRouter, Route, Routes } from 'react-router-dom'

import { LoginPage } from './pages/LoginPage'

export default function App() {
  return (
    <BrowserRouter>
      <Routes>
        <Route path='/' element={<LoginPage />} />
        <Route path='/login' element={<h1>LOGIN</h1>} />
        <Route path='/register' element={<h1>REGISTER</h1>} />
      </Routes>
    </BrowserRouter>
  )
}