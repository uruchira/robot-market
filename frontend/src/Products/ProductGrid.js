import React, { memo, useContext } from 'react';
import PropTypes from 'prop-types';
import { ToastContainer, toast, Slide } from 'react-toastify';

import ProductItem from './ProductItem';

import { CartContext } from '../contexts/CartContext';
import 'react-toastify/dist/ReactToastify.css';

const TOAST_OPTIONS = {
  type: 'info',
  position: 'top-right',
  hideProgressBar: true,
  closeOnClick: true,
  pauseOnHover: true
};

function ProductGrid({ list }) {
  const { cartItems, distinctItemCount, addProduct } = useContext(CartContext);

  const notifyProductType = () =>
    toast('You can only buy 5 types of robot at one time', TOAST_OPTIONS);

  const notifyExceedStock = () =>
    toast('The product you pick has no more stocks', TOAST_OPTIONS);

  const handleAddToCart = (product) => {
    const isNewProduct = cartItems.find((item) => product.name === item.name);
    if (!isNewProduct && distinctItemCount === 5) {
      notifyProductType();
    } else {
      const newQty = isNewProduct ? isNewProduct.quantity + 1 : 1;
      const newStock = isNewProduct ? isNewProduct.stock : product.stock;

      if (newStock >= newQty) addProduct(product);
      else {
        notifyExceedStock();
      }
    }
  };

  const renderProdcutGrid = () => {
    return list.map((item, index) => (
      <ProductItem
        key={index}
        item={item}
        onAddToCart={() => handleAddToCart(item)}
      />
    ));
  };

  ProductGrid.propTypes = {
    list: PropTypes.array.isRequired
  };

  return (
    <>
      {renderProdcutGrid()}
      <ToastContainer transition={Slide} />;
    </>
  );
}

export default memo(ProductGrid);
