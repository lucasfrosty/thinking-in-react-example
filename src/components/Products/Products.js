import React from 'react';
import uuidv1 from 'uuid/v1';
import './Products.css';

function Products({
  category,
  productsForEachCategory,
  showOnlyProductsInStock,
  inputValue,
}) {
  const productsFiltered = productsForEachCategory.filter(
    product =>
      product.name.toUpperCase().indexOf(inputValue.toUpperCase()) !== -1,
  );

  if (productsFiltered.length === 0) {
    return null;
  }

  return (
    <div className="products-container">
      <tr>
        <th colSpan="2">{category}</th>
      </tr>

      {productsFiltered.map(productFiltered => {
        if (showOnlyProductsInStock && !productFiltered.stocked) return;

        return (
          <tr key={uuidv1()}>
            <td className={productFiltered.stocked || 'red'}>
              {productFiltered.name}
            </td>
            <td>{productFiltered.price}</td>
          </tr>
        );
      })}
    </div>
  );
}

export default Products;
