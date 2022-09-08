import { render, screen } from '@testing-library/react';
import { BrowserRouter } from 'react-router-dom';

import Footer from '../Footer';

test('footer renders', () => {
  render(
    <BrowserRouter>
      <Footer />
    </BrowserRouter>
  );

  const footerLogo = screen.getByAltText('Find-a-Friend');
  expect(footerLogo).toBeInTheDocument();

  const siteMap = screen.getByText('Site Map');
  expect(siteMap).toBeInTheDocument();
});
