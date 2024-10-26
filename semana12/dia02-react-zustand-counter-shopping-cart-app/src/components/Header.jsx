import { useState } from "react"
import { useCartStore } from "../store/cart"

const Header = () => {
  const { cart } = useCartStore()

  const [open, setOpen] = useState(false)

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

        { open && (
          <div>
            CARRITO DE COMPRAS
            {/* {JSON.stringify(cart)}2 */}
          </div>
        )}
      </div>
    </header>
  )
}

export default Header