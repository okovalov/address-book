import React from 'react';
import PropTypes from 'prop-types';
import { useHistory } from 'react-router-dom';

const UserListItem = (props) => {
  let history = useHistory();

  const { userData } = props;
  const { userId, email, firstName, lastName, phoneNumber } = userData;

  return (
    <tr onClick={() => history.push(`/user/${userId}`)}>
      <td>{firstName}</td>
      <td>{lastName}</td>
      <td>{phoneNumber}</td>
      <td>
        <a href={`mailto:${email}`}>{email}</a>
      </td>
    </tr>
  );
};

UserListItem.propTypes = {
  userData: PropTypes.object,
};

export default UserListItem;
