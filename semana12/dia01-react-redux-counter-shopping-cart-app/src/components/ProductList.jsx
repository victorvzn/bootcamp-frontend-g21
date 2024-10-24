const ProductList = ({ products }) => {
  return (
    <div>
      ProductList

      <pre>{JSON.stringify(products, null, 2)}</pre>
    </div>
  )
}

export default ProductList