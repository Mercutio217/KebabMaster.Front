import React from 'react';
import { render, screen } from '@testing-library/react';
import '@testing-library/jest-dom/extend-expect';
import UserPanel from './UserPanel';

describe('<UserPanel />', () => {
  test('it should mount', () => {
    render(<UserPanel />);
    
    const userPanel = screen.getByTestId('UserPanel');

    expect(userPanel).toBeInTheDocument();
  });
});