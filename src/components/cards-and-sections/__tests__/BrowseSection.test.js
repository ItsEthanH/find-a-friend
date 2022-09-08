import { render, screen } from '@testing-library/react';

import BrowseSection from '../BrowseSection';

test('browse section renders correctly', () => {
  const items = [{ name: 'Test Name', image: './testing.jpg' }];
  const heading = 'Test Heading';

  render(<BrowseSection items={items} heading={heading} />);

  expect(screen.getByText(heading)).toBeInTheDocument();
  expect(screen.getByText(items[0].name)).toBeInTheDocument();
  expect(screen.getByAltText(items[0].name)).toBeInTheDocument();
});
