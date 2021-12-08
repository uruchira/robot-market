import React, { memo, useContext } from 'react';
import CartItem from './CartItem';

import { CartContext } from '../contexts/CartContext';
import { formatPrice } from '../util';

function CartList() {
  const {
    cartItems,
    allItemCount,
    total,
    addProduct,
    removeProduct,
    removeProductType
  } = useContext(CartContext);

  const renderCartList = () => {
    return cartItems.map((item, index) => (
      <CartItem
        key={index}
        item={item}
        onAddProduct={() => addProduct(item)}
        onRemoveProduct={() => removeProduct(item)}
        onRemoveProductType={() => removeProductType(item)}
      />
    ));
  };

  return !allItemCount || allItemCount === 0 ? (
    <h3>Shopping Cart is Empty</h3>
  ) : (
    <>
      <table>
        <thead>
          <tr>
            <th>Robot Name</th>
            <th className="center">Qty</th>
            <th className="right">Amount</th>
            <th>&nbsp;</th>
          </tr>
        </thead>
        <tbody>{renderCartList()}</tbody>
      </table>
      <div className="totals-section">
        <p>Total Amount:</p>
        <div className="total-values">{formatPrice(total)}</div>
      </div>
      <div className="totals-section">
        <p>Total Items:</p>
        <div className="total-values">{allItemCount}</div>
      </div>
    </>
  );
}

export default memo(CartList);
