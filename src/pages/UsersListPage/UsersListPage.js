import React, { useEffect } from 'react';
import PropTypes from 'prop-types';
import UserList from '../../components/user/UserList';
import Loader from '../../components/common/Loader';

const UsersListPage = (props) => {
  const { isLoading, isListLoaded, loadUserList } = props;

  const shouldFetchTheList = !isLoading && !isListLoaded;

  useEffect(() => {
    if (shouldFetchTheList) {
      loadUserList();
    }
  }, [loadUserList, shouldFetchTheList]);

  if (isLoading) {
    return <Loader />;
  }

  return <UserList />;
};

UsersListPage.propTypes = {
  isLoading: PropTypes.bool,
  isListLoaded: PropTypes.bool,
  loadUserList: PropTypes.func,
};

export default UsersListPage;
