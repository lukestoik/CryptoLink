// src/App.test.js
import { render, screen } from '@testing-library/react';
import App from './App';

test('renders CryptoLink title', () => {
    render(<App />);
    const titleElement = screen.getByText(/CryptoLink/i);
    expect(titleElement).toBeInTheDocument();
});
