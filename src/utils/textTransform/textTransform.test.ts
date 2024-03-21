import { toCapitalizeCase } from './';

describe(':: utils :: toCapitalizeCase', () => {
  it('should capitalize words correctly from an uppercase string', () => {
    const input = 'HELLO WORLD';
    expect(toCapitalizeCase(input)).toBe('Hello World');
  });

  it('should handle single-word strings correctly', () => {
    const input = 'SINGLEWORD';
    expect(toCapitalizeCase(input)).toBe('Singleword');
  });

  it('should not alter already capitalized strings', () => {
    const input = 'Already Capitalized';
    expect(toCapitalizeCase(input)).toBe('Already Capitalized');
  });

  it('should handle empty strings correctly', () => {
    const input = '';
    expect(toCapitalizeCase(input)).toBe('');
  });

  it('should handle strings with multiple spaces correctly', () => {
    const input = 'MULTIPLE   SPACES';
    expect(toCapitalizeCase(input)).toBe('Multiple   Spaces');
  });
});
