import React, { useState } from 'react';
import * as QuantitySelectorStyles from './styles';

type QuantitySelectorProps = {
  maxQuantity: number;
  initialQuantity: number;
  onQuantityChange: (quantity: number) => void;
};

export const QuantitySelector: React.FC<QuantitySelectorProps> = ({
  maxQuantity,
  initialQuantity,
  onQuantityChange,
}) => {
  const [quantity, setQuantity] = useState<number>(initialQuantity);

  const increment = () => {
    if (quantity < maxQuantity) {
      const newQuantity = quantity + 1;
      setQuantity(newQuantity);
      onQuantityChange(newQuantity);
    }
  };

  const decrement = () => {
    if (quantity > 1) {
      const newQuantity = quantity - 1;
      setQuantity(newQuantity);
      onQuantityChange(newQuantity);
    }
  };

  return (
    <QuantitySelectorStyles.Wrapper>
      <QuantitySelectorStyles.DecrementButton onClick={decrement} disabled={quantity <= 1}>
        &ndash;
      </QuantitySelectorStyles.DecrementButton>
      <QuantitySelectorStyles.QuantityInput
        type="text"
        value={quantity.toString()}
        readOnly
      />
      <QuantitySelectorStyles.IncrementButton onClick={increment} disabled={quantity >= maxQuantity}>
        &#43;
      </QuantitySelectorStyles.IncrementButton>
    </QuantitySelectorStyles.Wrapper>
  );
};
