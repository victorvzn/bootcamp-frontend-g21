import { useSelector, useDispatch } from "react-redux"

import { clearCart } from "../store/cart"

const ShoppingCart = () => {
  const cart = useSelector(state => state.cart)

  const dispatch = useDispatch()

  return (
    <section>
      <h3>Shopping Cart</h3>

      <div style={{ marginBottom: '1rem' }}>
        <button onClick={() => dispatch(clearCart())}>
          Clean cart
        </button>
      </div>

      <div style={{ display: 'flex', flexDirection: 'column', gap: '1rem' }}>
        {cart && cart.map(product => {
          return (
            <button
              key={product.id}
            >
              {product.title} - S/ {product.price}
            </button>
          )
        })}
      </div>
    </section>
  )
}

export default ShoppingCart