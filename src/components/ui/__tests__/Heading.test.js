import { render, screen } from '@testing-library/react';

import Heading from '../Heading';

describe('heading', () => {
  test('renders correctly', () => {
    render(<Heading>Test Title</Heading>);

    expect(screen.getByText('Test Title')).toBeInTheDocument();
  });

  test('applies alignment styles', () => {
    const alignments = ['left', 'center', 'right'];
    const { rerender } = render();

    for (const align of alignments) {
      rerender(
        <Heading alignment={align} styles="testStyles">
          Test Title
        </Heading>
      );

      const heading = screen.getByText('Test Title');
      expect(heading.classList.contains(align)).toBe(true);
      expect(heading.classList.contains('heading')).toBe(true);
      expect(heading.classList.contains('testStyles')).toBe(true);
    }
  });
});
