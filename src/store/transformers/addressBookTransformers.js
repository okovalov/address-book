import _get from 'lodash/get';
import { getSafeDateString } from '../../services/utils';

export const transformUserAddress = (locationInfo) => {
  const country = _get(locationInfo, 'country', '');
  const state = _get(locationInfo, 'state', '');
  const city = _get(locationInfo, 'city', '');
  const postcode = _get(locationInfo, 'postcode', '');

  const street = _get(locationInfo, 'street', {});
  const streetNumber = _get(street, 'number', '');
  const streetName = _get(street, 'name', '');
  const streetContainer = [streetName, streetNumber];
  const fullStreetInfo = streetContainer.join(' ').trim();

  const addressContainer = [fullStreetInfo, city, state, postcode, country];

  const fullAddressInfo = addressContainer.filter(Boolean).join(', ');

  return {
    country,
    state,
    city,
    postcode,
    streetNumber,
    streetName,
    fullStreetInfo,
    fullAddressInfo,
  };
};

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

    const locationInfo = _get(userInfo, 'location', {});

    const addressInfo = transformUserAddress(locationInfo);

    return {
      email,
      userId: `${userIdType || 'email'}-${userIdValue || email}`,
      firstName,
      lastName,
      phoneNumber,
      registrationDate: safeDateString,
      picture,
      addressInfo,
    };
  });
};

export const transformUserProfile = (userData) => {
  const firstName = _get(userData, 'firstName', '');
  const lastName = _get(userData, 'lastName', '');

  const fullName = `${firstName} ${lastName}`;

  return { ...userData, fullName };
};
