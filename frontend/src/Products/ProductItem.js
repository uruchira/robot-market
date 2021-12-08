import React, { memo } from 'react';
import PropTypes from 'prop-types';
import dayjs from 'dayjs';

import Card from '../components/Card';
import { formatPrice } from '../util';
import { DATE_FORMAT } from '../constants';

function ProductItem({ item, onAddToCart }) {
  const { image, name, price, stock, material, createdAt } = item;
  return (
    <Card
      image={image}
      name={name}
      price={formatPrice(price)}
      stock={stock}
      material={material}
      createdAt={dayjs(createdAt).format(DATE_FORMAT)}
      disabled={stock === 0}
      onClick={onAddToCart}
    />
  );
}

ProductItem.propTypes = {
  item: PropTypes.object.isRequired,
  onAddToCart: PropTypes.func.isRequired
};

export default memo(ProductItem);
