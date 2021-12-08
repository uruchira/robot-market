import React from 'react';
import PropTypes from 'prop-types';

import './index.css';

function Card({
  image,
  name,
  price,
  stock,
  material,
  createdAt,
  disabled,
  onClick
}) {
  return (
    <div className="card">
      <img src={image} alt={name} />
      <div className="card-body">
        <div className="card-body-header">{name}</div>
        <div className="card-body-tag">{material}</div>
        <div className="card-info">
          <p>{price}</p>
          <h2>
            {stock} <span>in stocks</span>
          </h2>
        </div>
        <div className="card-footer">
          <span>{createdAt}</span>
          <button disabled={disabled} onClick={onClick}>
            Add to Cart
          </button>
        </div>
      </div>
    </div>
  );
}

Card.propTypes = {
  image: PropTypes.string.isRequired,
  name: PropTypes.string.isRequired,
  price: PropTypes.string.isRequired,
  stock: PropTypes.number.isRequired,
  material: PropTypes.string.isRequired,
  createdAt: PropTypes.string.isRequired,
  disabled: PropTypes.bool.isRequired,
  onClick: PropTypes.func.isRequired
};

export default Card;
