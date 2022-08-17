import { render, screen } from '@testing-library/react';

import BrowseCard from '../BrowseCard';

test('browse card renders correctly', () => {
  const name = 'Test Card';
  const image = './imgsrc.jpg';
  const available = '123';

  render(<BrowseCard name={name} image={image} available={available} />);

  expect(screen.getByText(name)).toBeInTheDocument();
  expect(screen.getByAltText(name)).toBeInTheDocument();
  expect(screen.getByText(`${available} Available`)).toBeInTheDocument();
});
