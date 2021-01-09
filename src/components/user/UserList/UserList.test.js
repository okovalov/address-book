import React from 'react';
import { render, screen, cleanup } from '@testing-library/react';
import UserList from './UserList';

let userOneData;
let userTwoData;
let userDataList;

const userOneId = 1;
const userTwoId = 2;

const userOneFirstName = 'JohnSmith';
const userTwoFirstName = 'BobDoe';

beforeEach(() => {
  userOneData = {
    userId: userOneId,
    firstName: userOneFirstName,
  };

  userTwoData = {
    userId: userTwoId,
    firstName: userTwoFirstName,
  };

  userDataList = [userOneData, userTwoData];
});

afterEach(cleanup);

describe('UserList component', () => {
  it('renders a full list with both items', () => {
    render(<UserList userDataList={userDataList} />);

    const userOneElement = screen.getByText(`${userOneFirstName}`);
    const userTwoElement = screen.getByText(`${userTwoFirstName}`);

    expect(userOneElement).toBeInTheDocument();
    expect(userTwoElement).toBeInTheDocument();
  });
});
