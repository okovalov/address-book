import React from 'react';
import PropTypes from 'prop-types';
import { useHistory } from 'react-router-dom';

const UserListItem = (props) => {
  let history = useHistory();

  const { userData } = props;
  const { userId, email, firstName, lastName } = userData;

  return (
    <li onClick={() => history.push(`/user/${userId}`)}>
      <div>
        <span>{firstName}</span>
        <span>{lastName}</span>
        <span>{email}</span>
      </div>
    </li>
  );
};

UserListItem.propTypes = {
  userData: PropTypes.object,
};

export default UserListItem;
