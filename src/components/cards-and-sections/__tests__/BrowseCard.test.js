import { render, screen } from '@testing-library/react';

import BrowseCard from '../BrowseCard';

test('browse card renders correctly', () => {
  const name = 'Test Card';
  const image = './imgsrc.jpg';

  render(<BrowseCard name={name} image={image} />);

  expect(screen.getByText(name)).toBeInTheDocument();
  expect(screen.getByAltText(name)).toBeInTheDocument();
});
