export const calculateDiscount = (
  full_price: number,
  price: number,
): number => {
  return 100 - Math.round((price * 100) / full_price);
};
