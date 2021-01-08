import React from 'react';
import { render, screen, cleanup } from '@testing-library/react';
import UserDetails from './UserDetails';

let userDetails;

const userOneId = 1;

const userOneFirstName = 'John';
const userOneLastName = 'Smith';
const fullName = `${userOneFirstName} ${userOneLastName}`;
const phoneNumber = '123-456';

beforeEach(() => {
  userDetails = {
    userId: userOneId,
    fullName,
    phoneNumber: '123-456',
  };
});

afterEach(cleanup);

test('renders user details page', () => {
  render(<UserDetails userDetails={userDetails} />);

  const userNameElement = screen.getByText(`${fullName}`);
  const userPhoneElement = screen.getByText(`Phone: ${phoneNumber}`);

  expect(userNameElement).toBeInTheDocument();
  expect(userPhoneElement).toBeInTheDocument();
});
