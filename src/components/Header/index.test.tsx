import React from 'react'
import { render, screen, fireEvent } from '@testing-library/react';
import { MemoryRouter } from 'react-router-dom';
import { Header } from './';

jest.mock('react-router-dom', () => ({
  ...jest.requireActual('react-router-dom'),
  useLocation: () => ({ pathname: '/test-path' }),
  useSearchParams: () => {
    const params = new URLSearchParams();
    return [params];
  },
}));

describe('Header', () => {
  test('renders header correctly', () => {
    render(
      <MemoryRouter>
        <Header />
      </MemoryRouter>
    );

    // Verifica se o logo está presente e é um link para a home
    const logoLink = screen.getByRole('link', { name: /home/i });
    expect(logoLink).toBeInTheDocument();
    expect(logoLink).toHaveAttribute('href', '/');

    // Verifica se o input de pesquisa está presente
    const searchInput = screen.getByPlaceholderText(/pesquisa alguma coisa aqui vai?/i);
    expect(searchInput).toBeInTheDocument();

    // Verifica se o botão de pesquisa está presente
    const searchButton = screen.getByRole('button', { name: /search/i });
    expect(searchButton).toBeInTheDocument();
  });

  test('submits search form correctly', () => {
    render(
      <MemoryRouter>
        <Header />
      </MemoryRouter>
    );

    // Simula uma alteração no input de pesquisa
    const searchInput = screen.getByPlaceholderText(/pesquisa alguma coisa aqui vai?/i);
    fireEvent.change(searchInput, { target: { value: 'test search' } });

    // Verifica se o valor do input foi atualizado corretamente
    expect(searchInput).toHaveValue('test search');

    // Simula o envio do formulário de pesquisa
    const searchForm = screen.getByRole('form');
    fireEvent.submit(searchForm);

    // Verifica se o envio do formulário foi realizado corretamente
    expect(searchForm).toHaveFormValues({ q: 'test search' });
  });
});