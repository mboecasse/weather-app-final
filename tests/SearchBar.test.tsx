import { describe, test, expect, vi } from 'vitest';
import { render, screen, fireEvent } from '@testing-library/react';
import SearchBar from '../src/components/SearchBar';

describe('SearchBar component', () => {
  test('renders correctly', () => {
    const mockSearch = vi.fn();
    render(<SearchBar onSearch={mockSearch} />);
    
    expect(screen.getByPlaceholderText('Search for a city...')).toBeInTheDocument();
    expect(screen.getByRole('button', { name: /search/i })).toBeInTheDocument();
  });

  test('calls onSearch prop with input value when form is submitted', () => {
    const mockSearch = vi.fn();
    render(<SearchBar onSearch={mockSearch} />);
    
    const input = screen.getByPlaceholderText('Search for a city...');
    fireEvent.change(input, { target: { value: 'London' } });
    fireEvent.submit(screen.getByRole('form'));
    
    expect(mockSearch).toHaveBeenCalledWith('London');
  });

  test('does not call onSearch if input is empty', () => {
    const mockSearch = vi.fn();
    render(<SearchBar onSearch={mockSearch} />);
    
    fireEvent.submit(screen.getByRole('form'));
    
    expect(mockSearch).not.toHaveBeenCalled();
  });
});