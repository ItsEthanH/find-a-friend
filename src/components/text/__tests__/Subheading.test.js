import { render, screen } from '@testing-library/react';

import Subheading from '../Subheading';

describe('subheading', () => {
  test('renders correctly', () => {
    render(<Subheading>Test Title</Subheading>);

    expect(screen.getByText('Test Title')).toBeInTheDocument();
  });

  test('applies alignment styles', () => {
    const alignments = ['left', 'center', 'right'];
    const { rerender } = render();

    for (const align of alignments) {
      rerender(
        <Subheading alignment={align} styles="testStyles">
          Test Title
        </Subheading>
      );

      const subheading = screen.getByText('Test Title');
      expect(subheading.classList.contains(align)).toBe(true);
      expect(subheading.classList.contains('subheading')).toBe(true);
      expect(subheading.classList.contains('testStyles')).toBe(true);
    }
  });
});
