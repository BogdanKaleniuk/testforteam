import PRODUCTS from "./products";
import FilterableProductTable from "./Filterable";
import "../styles.css";

export default function Search() {
  return <FilterableProductTable products={PRODUCTS} />;
}
export function ProductCategoryRow({ category }) {
  return (
    <tr>
      <th colSpan="2">{category}</th>
    </tr>
  );
}

export function ProductRow({ product }) {
  const nameStyle = {
    color: product.stocked ? "green" : "red",
  };

  return (
    <tr>
      <td style={nameStyle}>{product.name}</td>
      <td>{product.price}</td>
    </tr>
  );
}
