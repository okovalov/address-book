import React from 'react';
import PropTypes from 'prop-types';

const UserDetails = (props) => {
  const { userDetails } = props;

  const { fullName, email, phoneNumber } = userDetails;

  return (
    <div>
      <div>
        <h1>Your user details</h1>
      </div>
      <div>
        <span>{fullName}</span>
      </div>
      <div>
        <span>{email}</span>
      </div>
      <div>
        <span>{phoneNumber}</span>
      </div>
    </div>
  );
};

UserDetails.propTypes = {
  userDetails: PropTypes.object,
};

export default UserDetails;
