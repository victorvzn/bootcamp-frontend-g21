import { useCartStore } from "../store/cart"

const Header = () => {
  const { cart } = useCartStore()

  return (
    <header className="bg-lime-600 text-white py-4 px-6 w-full">
      <div className="container mx-auto flex justify-between">
        <h1 className="font-bold">Shopping Cart</h1>

        <button
          className="text-3xl relative"
        >
          🛒
          <div className="absolute inline-flex items-center justify-center w-6 h-6 text-xs font-bold text-white bg-red-500 border-2 border-white rounded-full -top-2 -end-2 dark:border-gray-900">
            {cart.length}
          </div>
        </button>
      </div>
    </header>
  )
}

export default Header