import React, { useEffect } from 'react';
import PropTypes from 'prop-types';
import UserList from '../../components/user/UserList';
import WithLayout from '../../components/hoc/WithLayout';
import withLoader from '../../components/hoc/withLoader';
import '../../styles/UserListPage.scss';

const UsersListPage = (props) => {
  const { isLoading, isListLoaded, loadUserList } = props;

  const shouldFetchTheList = !isLoading && !isListLoaded;

  useEffect(() => {
    if (shouldFetchTheList) {
      loadUserList();
    }
  }, [loadUserList, shouldFetchTheList]);

  return (
    <WithLayout sectionClass={'main-section'} containerClass={'main-container'}>
      <UserList />
    </WithLayout>
  );
};

UsersListPage.propTypes = {
  isLoading: PropTypes.bool,
  isListLoaded: PropTypes.bool,
  loadUserList: PropTypes.func,
};

export default withLoader(UsersListPage);
