import React, { useState } from 'react';
import PropTypes from 'prop-types';
import { useHistory } from 'react-router';

const UserDetailsPage = (props) => {
  const history = useHistory();
  const {
    match: { params },
  } = props;

  const { userId } = params;

  return <div>Your id: {userId} </div>;
};

UserDetailsPage.propTypes = {
  match: PropTypes.object,
};

export default UserDetailsPage;
