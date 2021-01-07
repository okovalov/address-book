import React, { useEffect } from 'react';
import PropTypes from 'prop-types';
import { Link } from 'react-router-dom';
import UserDetails from '../../components/user/UserDetails';

const UserDetailsPage = (props) => {
  const {
    match: { params },
    loadUserById,
  } = props;

  const { userId } = params;

  useEffect(() => {
    loadUserById(userId);
  }, [userId, loadUserById]);

  return (
    <div>
      <UserDetails />
      <Link to="/">Navigate Back</Link>
    </div>
  );
};

UserDetailsPage.propTypes = {
  match: PropTypes.object,
  loadUserById: PropTypes.func,
};

export default UserDetailsPage;
