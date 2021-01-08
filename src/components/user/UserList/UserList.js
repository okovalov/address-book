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

  const headerClasses =
    'has-text-weight-bold is-family-secondary is-size-6 has-background-grey-dark has-text-gold';

  return (
    <div className="table-container">
      <table className="table  is-striped is-hoverable is-fullwidth  ">
        <thead>
          <tr>
            <th className={headerClasses}>First Name</th>
            <th className={headerClasses}>Last Name</th>
            <th className={headerClasses}>Email</th>
          </tr>
        </thead>
        <tbody>{listItems}</tbody>
      </table>
    </div>
  );
};

UsersList.propTypes = {
  userDataList: PropTypes.array,
};

export default UsersList;
