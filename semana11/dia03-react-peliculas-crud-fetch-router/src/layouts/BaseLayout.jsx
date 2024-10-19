import { Outlet } from "react-router-dom"

const BaseLayout = () => {
  return (
    <>
      <nav className="container-fluid">
        <ul>
          <li>
            <strong>Peliculas + React Router</strong>
          </li>
        </ul>
      </nav>
      <section className="container-fluid">
        <Outlet />
      </section>
    </>
  )
}

export default BaseLayout