import React, { memo, useContext } from 'react';
import { CartContext } from '../contexts/CartContext';

import logo from '../assets/logo.png';
import bag from '../assets/bag.png';

function Header() {
  const { allItemCount } = useContext(CartContext);
  return (
    <div className="header">
      <img src={logo} alt="logo" />
      <img src={bag} alt="shopping cart" />
      <span>{allItemCount}</span>
    </div>
  );
}

export default memo(Header);
