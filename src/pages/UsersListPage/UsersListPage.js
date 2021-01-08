import React, { useEffect } from 'react';
import PropTypes from 'prop-types';
import UserList from '../../components/user/UserList';
import Loader from '../../components/common/Loader';
import MainHeader from '../../layout/headers/MainHeader';
import MainFooter from '../../layout/footers/MainFooter';
import '../../styles/UserListPage.scss';

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

  return (
    <>
      <MainHeader />
      <section className="section main-section">
        <div className="container main-container">
          <UserList />
        </div>
      </section>
      <MainFooter />
    </>
  );
};

UsersListPage.propTypes = {
  isLoading: PropTypes.bool,
  isListLoaded: PropTypes.bool,
  loadUserList: PropTypes.func,
};

export default UsersListPage;
