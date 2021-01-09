import React, { useEffect } from 'react';
import PropTypes from 'prop-types';
import UserDetails from '../../components/user/UserDetails';
import Breadcrumbs from '../../layout/headers/Breadcrumbs';
import WithLayout from '../../components/hoc/WithLayout';

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
    <WithLayout
      sectionClass={'details-section'}
      containerClass={'details-container'}
    >
      <Breadcrumbs />
      <UserDetails />
    </WithLayout>
  );
};

UserDetailsPage.propTypes = {
  match: PropTypes.object,
  loadUserById: PropTypes.func,
};

export default UserDetailsPage;
