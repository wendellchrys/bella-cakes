export const convertPriceToNumber = (price: string): number => {

  let newPrice = price.replace('R$', '').trim();

  newPrice = newPrice.replace(',', '.');

  const convertedNumber = parseFloat(newPrice);

  return Math.round(convertedNumber);
}
