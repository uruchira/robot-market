import React, { createContext, useReducer } from 'react';
import PropTypes from 'prop-types';

import {
  ADD_PRODUCT,
  REMOVE_PRODUCT,
  REMOVE_PRODUCT_TYPE,
  CLEAR_CART
} from '../constants';

import { CartReducer } from '../reducers/CartReducer';

const CartContext = createContext();
const { Provider } = CartContext;

const initialState = { cartItems: [] };

const CartProvider = ({ children }) => {
  const [state, dispatch] = useReducer(CartReducer, initialState);

  const addProduct = (payload) => {
    dispatch({ type: ADD_PRODUCT, payload });
  };

  const removeProduct = (payload) => {
    dispatch({ type: REMOVE_PRODUCT, payload });
  };

  const removeProductType = (payload) => {
    dispatch({ type: REMOVE_PRODUCT_TYPE, payload });
  };

  const clearCart = () => {
    dispatch({ type: CLEAR_CART });
  };

  const contextValues = {
    addProduct,
    removeProduct,
    removeProductType,
    clearCart,
    ...state
  };

  return <Provider value={contextValues}>{children}</Provider>;
};

CartProvider.propTypes = {
  children: PropTypes.node.isRequired
};

export { CartContext, CartProvider };
