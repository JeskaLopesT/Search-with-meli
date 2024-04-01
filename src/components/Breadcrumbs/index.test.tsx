import { render, screen } from '@testing-library/react'
import { Breadcrumbs } from './';
import React from 'react';

const mockItems = [
  { id: "1", name: 'Home' },
  { id: "2", name: 'About' },
  { id: "3", name: 'Contact' },
];

const mockProps = {
  items: mockItems,
};

describe('Breadcrumbs', () => {
  test('renders breadcrumbs correctly', () => {
    render(<Breadcrumbs {...mockProps} />);


    mockItems.forEach(item => {
      const linkElement = screen.getByText(item.name);
      expect(linkElement).toBeInTheDocument();
    });

    const dividerElements = screen.getAllByTestId('divider');
    expect(dividerElements.length).toBe(mockItems.length - 1);
  });
});