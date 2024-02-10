import React from 'react';
import { render, screen } from '@testing-library/react';
import '@testing-library/jest-dom/extend-expect';
import MyOrders from './MyOrders';

describe('<MyOrders />', () => {
  test('it should mount', () => {
    render(<MyOrders />);
    
    const myOrders = screen.getByTestId('MyOrders');

    expect(myOrders).toBeInTheDocument();
  });
});