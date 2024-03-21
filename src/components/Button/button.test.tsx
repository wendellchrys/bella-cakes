import { render, screen } from '@testing-library/react';
import { FaShoppingCart } from 'react-icons/fa';

import { Button } from './';

describe('<Button />', () => {
  it('should render the medium size by default', () => {
    render(<Button>Buy now</Button>);

    expect(screen.getByRole('button', { name: /Buy now/i })).toHaveClass(
      'h-16 px-4 text-sm'
    );

    expect(screen.getByRole('button', { name: /Buy now/i })).toMatchSnapshot();
  });

  it('should render the small size', () => {
    render(<Button size="small">Buy now</Button>);

    expect(screen.getByRole('button', { name: /Buy now/i })).toHaveClass(
      'h-12 text-xs'
    );
  });

  it('should render the large size', () => {
    render(<Button size="large">Buy now</Button>);

    expect(screen.getByRole('button', { name: /Buy now/i })).toHaveClass(
      'h-20 px-6 text-md'
    );
  });

  it('should render a fullWidth version', () => {
    render(<Button fullWidth>Buy now</Button>);

    expect(screen.getByRole('button', { name: /Buy now/i })).toHaveClass(
      'w-full'
    );
  });

  it('should render an icon version', () => {
    render(
      <Button icon={<FaShoppingCart data-testid="icon" />}>Buy now</Button>
    );

    expect(screen.getByTestId('icon')).toBeInTheDocument();
  });

  it('should render a minimal version', () => {
    render(<Button minimal>Buy now</Button>);

    // Verifique as classes aplicadas para a versão minimal
    expect(screen.getByRole('button', { name: /Buy now/i })).toHaveClass(
      'bg-transparent'
    );
    expect(screen.getByRole('button', { name: /Buy now/i })).toHaveClass(
      'text-primary'
    );
  });

  it('should render a disabled Button', () => {
    render(<Button disabled>Buy now</Button>);

    expect(screen.getByRole('button', { name: /Buy now/i })).toBeDisabled();
  });

  it('should render Button as a link', () => {
    render(
      <Button as="a" href="/link">
        Buy now
      </Button>
    );

    expect(screen.getByRole('link', { name: /Buy now/i })).toHaveAttribute(
      'href',
      '/link'
    );
  });
});
