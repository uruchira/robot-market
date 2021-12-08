import React, { memo } from 'react';
import PropTypes from 'prop-types';

import { formatPrice } from '../util';

import minusButton from '../assets/minus-icon.svg';
import plusButton from '../assets/plus-icon.svg';
import deleteButton from '../assets/delete-icon.svg';

function CartItem({
  item,
  onAddProduct,
  onRemoveProduct,
  onRemoveProductType
}) {
  const { name, price, quantity } = item;
  return (
    <tr>
      <td>
        {name}
        <span>{formatPrice(price)}</span>
      </td>
      <td>
        <p>
          <button className="table-button" onClick={onRemoveProduct}>
            <img src={minusButton} alt="Minus Button" />
          </button>
          <span>{quantity}</span>
          <button className="table-button" onClick={onAddProduct}>
            <img src={plusButton} alt="Plus Button" />
          </button>
        </p>
      </td>
      <td className="right">{formatPrice(price * quantity)}</td>
      <td className="center">
        <button className="table-button" onClick={onRemoveProductType}>
          <img src={deleteButton} alt="Delete Button" />
        </button>
      </td>
    </tr>
  );
}

CartItem.propTypes = {
  item: PropTypes.object.isRequired,
  onAddProduct: PropTypes.func.isRequired,
  onRemoveProduct: PropTypes.func.isRequired,
  onRemoveProductType: PropTypes.func.isRequired
};

export default memo(CartItem);
