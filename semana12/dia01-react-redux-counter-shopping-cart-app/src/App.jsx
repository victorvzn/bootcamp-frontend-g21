import Counter from "./components/Counter"

import { Provider } from 'react-redux'
import { store } from "./store"
import ProductList from "./components/ProductList"

import { useProducts } from "./hooks/useProducts"

const App = () => {
  const { products } = useProducts()

  return (
    <Provider store={store}>
      <ProductList products={products} />

      <hr />

      <Counter />
    </Provider>
  )
}

export default App