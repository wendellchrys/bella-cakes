import { render, screen, waitFor } from '@testing-library/react';
import userEvent from '@testing-library/user-event';

import '@testing-library/jest-dom';

import { Dropdown } from './';

describe('<Dropdown />', () => {
  it('should render title', () => {
    const title = <h1 aria-label="toggle dropdown">Click here</h1>;
    render(
      <Dropdown title={title}>
        <span>content</span>
      </Dropdown>
    );

    expect(screen.getByLabelText(/toggle dropdown/)).toBeInTheDocument();
  });

  it('should handle open/close dropdown', async () => {
    const title = <h1 aria-label="toggle dropdown">Click here</h1>;
    render(
      <Dropdown title={title}>
        <span>content</span>
      </Dropdown>
    );

    userEvent.click(screen.getByLabelText(/toggle dropdown/));

    expect(await screen.findByText(/content/)).toBeVisible();

    userEvent.click(screen.getByLabelText(/toggle dropdown/));

    await waitFor(() => {
      expect(screen.queryByText(/content/)).not.toBeInTheDocument();
    });
  });
});
