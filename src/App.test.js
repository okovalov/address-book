import React from 'react';
import App from './App';

import { rest } from 'msw';
import { setupServer } from 'msw/node';
import { render, waitFor, screen } from '@testing-library/react';
import '@testing-library/jest-dom/extend-expect';

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

test('renders an entire application on a default page', async () => {
  render(<App />);

  await waitFor(() => {
    const linkElement = screen.getByText(/JohnDoe/i);
    expect(linkElement).toBeInTheDocument();
  });
});
