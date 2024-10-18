// TODO: listar los productos del siguiente endpoint renderizandolos en esta página
// https://dummyjson.com/products

import { useEffect, useState } from "react"

const fetchProducts = async () => {
  const url = 'https://dummyjson.com/products'

  const response = await fetch(url)

  return await response.json()
}

const HomePage = () => {
  const [products, setProduts] = useState([])

  useEffect(() => {
    fetchProducts()
      .then(data => setProduts(data.products))
  }, [])

  return (
    <section>
      <h1 className="font-bold">Listado de productos</h1>

      {products.map(product => {
        return <h3 key={product.id}>{product.title}</h3>
      })}
    </section>
  )
}

export default HomePage