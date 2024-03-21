import { truncateText } from './';

describe(':: utils :: truncateText', () => {
  it('should truncate text that exceeds the specified length', () => {
    const text = 'This is a long text that should be truncated';
    expect(truncateText(text, 20)).toBe('This is a long text ...');
  });

  it('should not truncate text that is within the specified length', () => {
    const text = 'Short text';
    expect(truncateText(text, 20)).toBe('Short text');
  });

  it('should return the text without truncation if the length is exact', () => {
    const text = 'Exact length text';
    expect(truncateText(text, 17)).toBe('Exact length text');
  });
});
