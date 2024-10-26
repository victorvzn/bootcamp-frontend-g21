import { useState } from "react"
import { useCartStore } from "../store/cart"
import { TbTrash } from "react-icons/tb";

const Header = () => {
  const { cart } = useCartStore()

  const [open, setOpen] = useState(false)

  const classSidebar = 'fixed top-0 right-0 z-40 h-screen p-4 overflow-y-auto transition-transform bg-white w-96 text-gray-600'

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
          <div className="absolute inline-flex items-center justify-center w-6 h-6 text-xs font-bold text-white bg-red-500 border-2 border-white rounded-full -top-2 -end-2">
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

          { cart.length === 0 && ( 
            <div className="my-3">
              No hay productos en el carrito
            </div>
          )}

          {/* TODO: Renderizar los productos del carrito de compras en la tabla de abajo */}

          { cart.length > 0 && ( 
            <div className="my-3">
            <table className="w-full text-sm text-left text-gray-500">
              <thead className="text-xs text-gray-700 uppercase bg-gray-50">
                  <tr>
                    <th className="px-6 py-3">Title / Price</th>
                    <th className="px-6 py-3">Qty</th>
                    <th className="px-6 py-3"></th>
                  </tr>
                </thead>
                <tbody>
                  {cart && cart.map(product => {
                    return (
                      <tr className="bg-white border-b" key={product.id}>
                        <td className="px-6 py-4 font-semibold">
                          {product.title} - S/ {product.price}
                        </td>
                        <td className="px-6 py-4 font-semibold">
                          {product.quantity}
                        </td>
                        <td className="px-6 py-4">
                          <button>
                            <TbTrash className="text-red-600" size="1.3rem" />
                          </button>
                        </td>
                      </tr>
                    )
                  })}
                </tbody>
              </table>
            </div>
          )}
          {/* {JSON.stringify(cart)}2 */}
        </div>
      </div>
    </header>
  )
}

export default Header