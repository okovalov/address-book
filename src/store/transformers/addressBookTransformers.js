import _get from 'lodash/get';

export const transformUserList = (response) => {
  const userList = _get(response, 'data.results', []);

  return userList.map((userInfo) => {
    const email = _get(userInfo, 'email', '');
    const firstName = _get(userInfo, 'name.first', '');
    const lastName = _get(userInfo, 'name.last', '');
    const phoneNumber = _get(userInfo, 'phone', '');
    const userIdType = _get(userInfo, 'id.name', '');
    const userIdValue = _get(userInfo, 'id.value', '');

    return {
      email,
      userId: `${userIdType || 'email'}-${userIdValue || email}`,
      firstName,
      lastName,
      phoneNumber,
    };
  });
};

export const transformUserProfile = (userDetailsReponse) => userDetailsReponse;
