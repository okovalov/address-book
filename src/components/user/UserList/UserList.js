import React from 'react';
import PropTypes from 'prop-types';
import UserListItem from '../UserListItem';

const userListItemMapper = (userData) => {
  const { userId } = userData;

  return <UserListItem key={userId} userData={userData} />;
};

const UsersList = (props) => {
  const { userDataList } = props;

  const listItems = userDataList.map(userListItemMapper);

  return <ul>{listItems}</ul>;
};

UsersList.propTypes = {
  userDataList: PropTypes.array,
};

export default UsersList;
