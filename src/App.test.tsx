import { render, screen } from '@testing-library/react';
import userEvent from '@testing-library/user-event';
import { InnerApp } from './App';

describe('InnerApp', () => {
  it('shows matching cage combinations for the entered total and size', () => {
    render(<InnerApp />);

    expect(screen.getByRole('heading', { name: '3 cell, 10 cage' })).toBeInTheDocument();
    expect(screen.getByRole('button', { name: 'Toggle combination 1, 2, 7' })).toBeInTheDocument();
    expect(screen.getByRole('button', { name: 'Toggle combination 1, 3, 6' })).toBeInTheDocument();
    expect(screen.getByRole('button', { name: 'Toggle combination 1, 4, 5' })).toBeInTheDocument();
  });

  it('filters combinations by required and disallowed numbers', async () => {
    render(<InnerApp />);

    await userEvent.type(screen.getByLabelText(/Disallowed/i), '7');
    await userEvent.type(screen.getByLabelText(/Required/i), '1');

    expect(screen.queryByRole('button', { name: 'Toggle combination 1, 2, 7' })).not.toBeInTheDocument();
    expect(screen.getByRole('button', { name: 'Toggle combination 1, 3, 6' })).toBeInTheDocument();
    expect(screen.getByRole('button', { name: 'Toggle combination 1, 4, 5' })).toBeInTheDocument();
  });

  it('shows an empty state when no combinations match', async () => {
    render(<InnerApp />);

    await userEvent.type(screen.getByLabelText(/Required/i), '9');

    expect(screen.getByText('No combinations match these filters.')).toBeInTheDocument();
  });

  it('shows validation errors for invalid required and disallowed numbers', async () => {
    render(<InnerApp />);

    await userEvent.type(screen.getByLabelText(/Disallowed/i), '10 a');
    await userEvent.type(screen.getByLabelText(/Required/i), '0');

    expect(screen.getByText('Disallowed numbers must be digits from 1 to 9: 10, a.')).toBeInTheDocument();
    expect(screen.getByText('Required numbers must be digits from 1 to 9: 0.')).toBeInTheDocument();
    expect(screen.queryByRole('heading', { name: /cage$/i })).not.toBeInTheDocument();
  });

  it('shows validation errors for total and size', async () => {
    render(<InnerApp />);

    await userEvent.clear(screen.getByLabelText(/Total/i));
    await userEvent.type(screen.getByLabelText(/Total/i), '46');
    await userEvent.clear(screen.getByLabelText(/Size/i));
    await userEvent.type(screen.getByLabelText(/Size/i), '10');

    expect(screen.getByText('Total must be a whole number from 1 to 45.')).toBeInTheDocument();
    expect(screen.getByText('Size must be a whole number from 1 to 9.')).toBeInTheDocument();
    expect(screen.queryByRole('heading', { name: /cage$/i })).not.toBeInTheDocument();
  });
});
