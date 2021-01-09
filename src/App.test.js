import React from 'react';
import { rest } from 'msw';
import { setupServer } from 'msw/node';
import { render, waitFor, screen, cleanup } from '@testing-library/react';
import '@testing-library/jest-dom/extend-expect';
import App from './App';

const myResults = [
  {
    email: 'email',
    name: {
      first: 'JohnDoe',
    },
    id: {
      name: 'aa',
      value: 'vv',
    },
  },
];

const server = setupServer(
  rest.get('https://randomuser.me/api/', (req, res, ctx) => {
    return res(ctx.json({ results: myResults }));
  }),
);

beforeAll(() => server.listen());
afterEach(() => server.resetHandlers());
afterAll(() => server.close());

describe('App component', () => {
  afterEach(cleanup);

  it('renders an entire application on a default page', async () => {
    render(<App />);

    await waitFor(() => {
      const linkElement = screen.getByText(/JohnDoe/i);
      expect(linkElement).toBeInTheDocument();
    });
  });
});
