import { formatPrice } from '.';

describe('formatPrice()', () => {
  it('should format the price to Brazilian Real', () => {
    const price = 10;
    const formattedPrice = formatPrice(price);
    expect(formattedPrice).toBe('R$ 10,00');
  });

  it('should handle decimal prices', () => {
    const price = 10.5;
    const formattedPrice = formatPrice(price);
    expect(formattedPrice).toBe('R$ 10,50');
  });

  it('should handle thousand separator', () => {
    const price = 1000;
    const formattedPrice = formatPrice(price);
    expect(formattedPrice).toBe('R$ 1.000,00');
  });

  it('should handle large numbers', () => {
    const price = 1234567.89;
    const formattedPrice = formatPrice(price);
    expect(formattedPrice).toBe('R$ 1.234.567,89');
  });

  it('should handle BigInt numbers', () => {
    const price = BigInt(123456789012345);
    const formattedPrice = formatPrice(price);
    expect(formattedPrice).toBe('R$ 123.456.789.012.345,00');
  });
});
