import { render, screen } from '@testing-library/react';

import Footer from '../Footer';

test('footer renders', () => {
  render(<Footer />);

  const footerLogo = screen.getByAltText('Find-a-Friend');
  expect(footerLogo).toBeInTheDocument();

  const pageMap = screen.getByText('Page Map');
  expect(pageMap).toBeInTheDocument();

  const siteMap = screen.getByText('Site Map');
  expect(siteMap).toBeInTheDocument();
});
