import { render, screen } from '@testing-library/react';
import Poke from './PokemonSearch';

test('renders learn react link', () => {
  render(<Poke />);
  const linkElement = screen.getByText(/choose that pokemon/i);
  expect(linkElement).toBeInTheDocument();
});
