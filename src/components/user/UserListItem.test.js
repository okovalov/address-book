import React from 'react';
import { render, screen, cleanup, fireEvent } from '@testing-library/react';
import { Router } from 'react-router-dom';
import { createMemoryHistory } from 'history';
import UserListItem from './UserListItem';

let userData;

const userId = 1;
const userFirstName = 'first Name';

beforeEach(() => {
  userData = {
    userId: userId,
    firstName: userFirstName,
  };
});

afterEach(cleanup);

describe('UserListItem component', () => {
  it('renders a list item with given props', () => {
    render(
      <table>
        <tbody>
          <UserListItem userData={userData} />
        </tbody>
      </table>,
    );

    const linkElement = screen.getByText(/[userFirstName]/i);

    expect(linkElement).toBeInTheDocument();
  });

  it('calls the user details route with proper user id upon click on the row', () => {
    const history = createMemoryHistory();
    const pushSpy = jest.spyOn(history, 'push');

    const { getByText } = render(
      <Router history={history}>
        <table>
          <tbody>
            <UserListItem userData={userData} />
          </tbody>
        </table>
      </Router>,
    );

    fireEvent.click(getByText(`${userFirstName}`));

    expect(pushSpy).toHaveBeenCalledWith(`/user/${userId}`);
  });
});
