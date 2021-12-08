import { getItemCountsAndTotal } from '../util';
import {
  ADD_PRODUCT,
  REMOVE_PRODUCT,
  REMOVE_PRODUCT_TYPE,
  CLEAR_CART
} from '../constants';

const addProductToCart = (state, product) => {
  const updatedCart = [...state.cartItems];
  const updatedItemIndex = updatedCart.findIndex(
    (item) => item.name === product.name
  );

  if (updatedItemIndex < 0) {
    updatedCart.push({ ...product, quantity: 1 });
  } else {
    const updatedItem = {
      ...updatedCart[updatedItemIndex]
    };
    updatedItem.quantity++;
    updatedCart[updatedItemIndex] = updatedItem;
  }

  return {
    ...state,
    ...getItemCountsAndTotal(updatedCart),
    cartItems: updatedCart
  };
};

const removeProductFromCart = (state, product) => {
  const updatedCart = [...state.cartItems];
  const updatedItemIndex = updatedCart.findIndex(
    (item) => item.name === product.name
  );

  const updatedItem = {
    ...updatedCart[updatedItemIndex]
  };
  updatedItem.quantity--;

  if (updatedItem.quantity <= 0) {
    updatedCart.splice(updatedItemIndex, 1);
  } else {
    updatedCart[updatedItemIndex] = updatedItem;
  }
  return {
    ...state,
    ...getItemCountsAndTotal(updatedCart),
    cartItems: updatedCart
  };
};

const removeProductTypeFromCart = (state, product) => {
  return {
    ...state,
    ...getItemCountsAndTotal(
      state.cartItems.filter((item) => item.name !== product.name)
    ),
    cartItems: state.cartItems.filter((item) => item.name !== product.name)
  };
};

export const CartReducer = (state, action) => {
  switch (action.type) {
    case ADD_PRODUCT:
      return addProductToCart(state, action.payload);
    case REMOVE_PRODUCT:
      return removeProductFromCart(state, action.payload);
    case REMOVE_PRODUCT_TYPE:
      return removeProductTypeFromCart(state, action.payload);
    case CLEAR_CART:
      return {
        cartItems: [],
        ...getItemCountsAndTotal([])
      };
    default:
      return state;
  }
};
