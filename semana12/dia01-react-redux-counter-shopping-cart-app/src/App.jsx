import Counter from "./components/Counter"

import { Provider } from 'react-redux'
import { store } from "./store"
import ProductList from "./components/ProductList"
import { useEffect, useState } from "react"

const fetchProducts = async () => {
  const url = 'https://dummyjson.com/products'

  const response = await fetch(url)

  const data = await response.json()

  return data.products
}

const App = () => {
  const [products, setProducts] = useState([])

  useEffect(() => {
    fetchProducts()
      .then(data => setProducts(data))
  }, [])

  return (
    <Provider store={store}>
      <ProductList products={products} />

      <hr />

      <Counter />
    </Provider>
  )
}

export default App