import React, { useEffect } from 'react';
import PropTypes from 'prop-types';
import UserDetails from '../../components/user/UserDetails';
import MainHeader from '../../layout/headers/MainHeader';
import Breadcrumbs from '../../layout/headers/Breadcrumbs';
import MainFooter from '../../layout/footers/MainFooter';
import '../../styles/UserDetailsPage.scss';

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
    <>
      <MainHeader />
      <section className="section details-section">
        <div className="container details-container">
          <Breadcrumbs />
          <UserDetails />
        </div>
      </section>
      <MainFooter />
    </>
  );
};

UserDetailsPage.propTypes = {
  match: PropTypes.object,
  loadUserById: PropTypes.func,
};

export default UserDetailsPage;
