import React from 'react';
import PropTypes from 'prop-types';

function ProductFilter({ items, onItemSelect }) {
  return (
    <select onChange={onItemSelect} className="product-filter">
      {items.map((item, index) => (
        <option key={index} value={item}>
          {item}
        </option>
      ))}
    </select>
  );
}

ProductFilter.propTypes = {
  items: PropTypes.array.isRequired,
  onItemSelect: PropTypes.func.isRequired
};

export default ProductFilter;
