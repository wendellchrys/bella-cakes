import { Variations } from "@/types";
import { formatPrice } from "../formatPrice";

  export const findPriceRange = (products: Variations[]): string => {
    const prices = products.map(product => parseFloat(product.price));
    const minPrice = Math.min(...prices);
    const maxPrice = Math.max(...prices);
    return `${formatPrice(minPrice)} - ${formatPrice(maxPrice)}`;
  };
  