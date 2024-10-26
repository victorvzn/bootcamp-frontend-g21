import { useState } from "react"
import { useCartStore } from "../store/cart"

const Header = () => {
  const { cart } = useCartStore()

  const [open, setOpen] = useState(false)

  const classSidebar = 'fixed top-0 right-0 z-40 h-screen p-4 overflow-y-auto transition-transform bg-white w-80 text-gray-600'

  const classShowCart = open ? 'translate-none' : 'translate-x-full'

  return (
    <header className="bg-lime-600 text-white py-4 px-6 w-full">
      <div className="container mx-auto flex justify-between">
        <h1 className="font-bold">Shopping Cart (v1.1)</h1>

        <button
          className="text-3xl relative"
          onClick={() => setOpen(!open)}
        >
          🛒
          <div className="absolute inline-flex items-center justify-center w-6 h-6 text-xs font-bold text-white bg-red-500 border-2 border-white rounded-full -top-2 -end-2 dark:border-gray-900">
            {cart.length}
          </div>
        </button>

        
        <div
          className={`${classSidebar} ${classShowCart}`}
        >
          <div className="flex justify-between items-center">
            <h5 className="text-2xl font-semibold">
              Cart
            </h5>

            <button onClick={() => setOpen(false)}>❌</button>
          </div>

          <div className="my-3">
            No hay productos en el carrito
          </div>
          {/* {JSON.stringify(cart)}2 */}
        </div>
      </div>
    </header>
  )
}

export default Header