import _get from 'lodash/get';

export const getUserById = (userId, { addressBook }) => {
  const userList = _get(addressBook, 'userList', null);

  if (!userList) {
    return {};
  }

  return userList.find((userData) => userData.userId === userId);
};
