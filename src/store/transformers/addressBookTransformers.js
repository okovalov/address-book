import _get from 'lodash/get';
import { getSafeDateString } from '../../services/utils';

export const transformUserList = (response) => {
  const userList = _get(response, 'data.results', []);

  return userList.map((userInfo) => {
    const email = _get(userInfo, 'email', '');
    const firstName = _get(userInfo, 'name.first', '');
    const lastName = _get(userInfo, 'name.last', '');
    const phoneNumber = _get(userInfo, 'phone', '');
    const userIdType = _get(userInfo, 'id.name', '');
    const userIdValue = _get(userInfo, 'id.value', '');

    const registrationDateString = _get(userInfo, 'registered.date', '');
    const safeDateString = getSafeDateString(registrationDateString);

    const picture = _get(userInfo, 'picture', {});

    return {
      email,
      userId: `${userIdType || 'email'}-${userIdValue || email}`,
      firstName,
      lastName,
      phoneNumber,
      registrationDate: safeDateString,
      picture,
    };
  });
};

export const transformUserProfile = (userData) => {
  const firstName = _get(userData, 'firstName', '');
  const lastName = _get(userData, 'lastName', '');

  const fullName = `${firstName} ${lastName}`;

  return { ...userData, fullName };
};
