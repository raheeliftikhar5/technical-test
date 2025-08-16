import React from 'react';
import { render, screen, fireEvent, waitFor } from '@testing-library/react';
// import '@testing-library/jest-dom/extend-expect';
import '@testing-library/jest-dom'
import Posts from '../pages/posts';

// Mock fetch
global.fetch = jest.fn(() =>
  Promise.resolve({
    json: () =>
      Promise.resolve([
        { id: 1, title: 'Test Post 1' },
        { id: 2, title: 'Test Post 2' },
        { id: 3, title: 'Test Post 3' },
        { id: 4, title: 'Test Post 4' },
        { id: 5, title: 'Test Post 5' },
      ]),
  })
) as jest.Mock;

// Add at the top of your test file
const originalError = console.error;
beforeAll(() => {
  console.error = (...args) => {
    if (/not wrapped in act/.test(args[0])) return;
    originalError.call(console, ...args);
  };
});
afterAll(() => {
  console.error = originalError;
});

describe('Posts component', () => {
  beforeEach(() => {
    jest.clearAllMocks();
  });

  it('renders loading state initially', () => {
    render(<Posts />);
    expect(screen.getByText(/loading/i)).toBeInTheDocument();
  });

  it('renders posts after loading', async () => {
    render(<Posts />);
    await waitFor(() => {
      expect(screen.getByText('Posts')).toBeInTheDocument();
    });
    expect(screen.getByText('Test Post 1')).toBeInTheDocument();
    expect(screen.getByText('Test Post 5')).toBeInTheDocument();
  });

  it('toggles posts visibility', async () => {
    render(<Posts />);
    await waitFor(() => {
      expect(screen.getByText('Hide Posts')).toBeInTheDocument();
    });
    fireEvent.click(screen.getByText('Hide Posts'));
    expect(screen.getByText('Show Posts')).toBeInTheDocument();
    // Posts should not be visible
    expect(screen.queryByText('Test Post 1')).not.toBeInTheDocument();
  });
});