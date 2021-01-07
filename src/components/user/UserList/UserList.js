import React from 'react';
import PropTypes from 'prop-types';

const UsersList = (props) => {
  const { userDataList } = props;

  console.log('userDataList', userDataList);

  return <div>Your user list </div>;
};

UsersList.propTypes = {
  userDataList: PropTypes.array,
};

export default UsersList;
