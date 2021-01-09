import { loadUserList } from './api';

import { rest } from 'msw';
import { setupServer } from 'msw/node';
import { cleanup } from '@testing-library/react';
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

describe('api', () => {
  describe('loadUserList', () => {
    afterEach(cleanup);

    it('returns properly formatted data', async () => {
      const usersList = await loadUserList();
      expect(usersList).toHaveProperty('response');
      expect(usersList).not.toHaveProperty('error');
    });

    it('returns an error in case of a server error', async () => {
      server.use(
        rest.get('https://randomuser.me/api/', (req, res, ctx) => {
          return res(ctx.status(500));
        }),
      );

      const usersList = await loadUserList();
      expect(usersList).not.toHaveProperty('response');
      expect(usersList).toHaveProperty('error');
    });
  });
});
