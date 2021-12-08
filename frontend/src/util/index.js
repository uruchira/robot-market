export const formatPrice = (number) => {
  return new Intl.NumberFormat('th-TH', {
    style: 'currency',
    currency: 'THB'
  }).format(number);
};

export const getMaterialList = (list) => {
  const materialList = list.map((item) => item.material);
  return ['All', ...new Set(materialList)].sort();
};

export const getItemCountsAndTotal = (cartItems) => {
  const allItemCount = cartItems.reduce(
    (total, product) => total + product.quantity,
    0
  );
  const total = cartItems
    .reduce((total, product) => total + product.price * product.quantity, 0)
    .toFixed(2);
  return { distinctItemCount: cartItems.length, allItemCount, total };
};
