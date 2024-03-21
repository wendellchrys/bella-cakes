import { Variations } from "@/types";

  export const findPriceRange = (products: Variations[]): string => {
    const prices = products.map(product => parseFloat(product.price));
    const minPrice = Math.min(...prices);
    const maxPrice = Math.max(...prices);
    return `R$ ${minPrice.toFixed(2)} - ${maxPrice.toFixed(2)}`;
  };
  