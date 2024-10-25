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
              style={{ backgroundColor: '#FF8080', border: 'none', cursor: 'pointer', padding: '1rem' }}
            >
              {product.title} - S/ {product.price} (Qty: {product.quantity})
            </button>
          )
        })}
      </div>
      
      {/* TODO: calcular el total de la compra en el carrito */}

      <div style={{ paddingTop: '1rem', fontSize: '1.5rem' }}>
        <strong>TOTAL</strong> <span>S/ 0.00</span>
      </div>

      {/* <pre>{JSON.stringify(cart, null, 2)}</pre> */}
    </section>
  )
}

export default ShoppingCart