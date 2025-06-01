// How would you use .map() to transform a list of products into a list of HTML elements?

export function Sixth({ products }) {
  return (
    <ul>
      {products.map((product) => (
        <li key={product.id}>
          {product.name} - ${product.price}
        </li>
      ))}
    </ul>
  );
}
