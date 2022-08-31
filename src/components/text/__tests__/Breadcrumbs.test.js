/* eslint-disable testing-library/no-node-access */
import { render, screen } from '@testing-library/react';
import { BrowserRouter } from 'react-router-dom';

import Breadcrumbs from '../Breadcrumbs';

test('breadcrumbs render and work correctly', () => {
  const testBreadcrumbs = [
    { link: '/', text: 'Home' },
    { link: '/search', text: 'Search Animals' },
    { link: '/results/new-york-ny/1/recent', text: 'Results' },
  ];

  render(
    <BrowserRouter>
      <Breadcrumbs breadcrumbs={testBreadcrumbs} />
    </BrowserRouter>
  );

  expect(screen.getByText('Home')).toBeInTheDocument();
  expect(screen.getByText('Home').closest('a')).toHaveAttribute('href', '/');

  expect(screen.getByText('Search Animals')).toBeInTheDocument();
  expect(screen.getByText('Search Animals').closest('a')).toHaveAttribute('href', '/search');

  expect(screen.getByText('Results')).toBeInTheDocument();
  expect(screen.getByText('Results').closest('a')).toHaveAttribute(
    'href',
    '/results/new-york-ny/1/recent'
  );
});
