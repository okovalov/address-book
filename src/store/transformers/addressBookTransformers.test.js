import {
  transformUserList,
  transformUserProfile,
  transformUserAddress,
} from './addressBookTransformers';

const userEmail = 'a@test.ba';
const firstName = 'Joe';
const lastName = 'Boe';
const phoneNumber = '12345';
const userIdType = 'foo';
const userIdValue = 'bar';
const registrationDate = '2007-02-21T02:23:54.244Z';
const safeDateString = 'Tue Feb 20 2007';

const picture = { a: 'b' };

const defaultFullAddressInfo = {
  city: '',
  country: '',
  fullAddressInfo: '',
  fullStreetInfo: '',
  postcode: '',
  state: '',
  streetName: '',
  streetNumber: '',
};

describe('addressBookTransformers', () => {
  describe('transformUserList', () => {
    it('returns properly transformed data', () => {
      const response = {
        data: {
          results: [
            {
              email: userEmail,
              name: {
                first: firstName,
                last: lastName,
              },
              phone: phoneNumber,
              id: {
                value: userIdValue,
                name: userIdType,
              },
              registered: {
                date: registrationDate,
              },
              picture,
            },
          ],
        },
      };

      const expectedFormattedResponse = [
        {
          email: userEmail,
          userId: `${userIdType || 'email'}-${userIdValue || userEmail}`,
          firstName,
          lastName,
          phoneNumber,
          registrationDate: safeDateString,
          picture,
          addressInfo: defaultFullAddressInfo,
        },
      ];

      const formattedResponse = transformUserList(response);

      expect(formattedResponse).toEqual(expectedFormattedResponse);
    });

    it('returns transformed data with empty registration date', () => {
      const response = {
        data: {
          results: [
            {
              email: userEmail,
              name: {
                first: firstName,
                last: lastName,
              },
              phone: phoneNumber,
              id: {
                value: userIdValue,
                name: userIdType,
              },
              picture,
            },
          ],
        },
      };

      const expectedFormattedResponse = [
        {
          email: userEmail,
          userId: `${userIdType || 'email'}-${userIdValue || userEmail}`,
          firstName,
          lastName,
          phoneNumber,
          registrationDate: '',
          picture,
          addressInfo: defaultFullAddressInfo,
        },
      ];

      const formattedResponse = transformUserList(response);

      expect(formattedResponse).toEqual(expectedFormattedResponse);
    });

    it('returns transformed data with id created from email', () => {
      const response = {
        data: {
          results: [
            {
              email: userEmail,
              name: {
                first: firstName,
                last: lastName,
              },
              phone: phoneNumber,
              registered: {
                date: registrationDate,
              },
              picture,
            },
          ],
        },
      };

      const expectedFormattedResponse = [
        {
          email: userEmail,
          userId: `email-${userEmail}`,
          firstName,
          lastName,
          phoneNumber,
          registrationDate: safeDateString,
          picture,
          addressInfo: defaultFullAddressInfo,
        },
      ];

      const formattedResponse = transformUserList(response);

      expect(formattedResponse).toEqual(expectedFormattedResponse);
    });

    it('returns transformed data without picture', () => {
      const response = {
        data: {
          results: [
            {
              email: userEmail,
              name: {
                first: firstName,
                last: lastName,
              },
              phone: phoneNumber,
              id: {
                value: userIdValue,
                name: userIdType,
              },
              registered: {
                date: registrationDate,
              },
            },
          ],
        },
      };

      const expectedFormattedResponse = [
        {
          email: userEmail,
          userId: `${userIdType || 'email'}-${userIdValue || userEmail}`,
          firstName,
          lastName,
          phoneNumber,
          registrationDate: safeDateString,
          picture: {},
          addressInfo: defaultFullAddressInfo,
        },
      ];

      const formattedResponse = transformUserList(response);

      expect(formattedResponse).toEqual(expectedFormattedResponse);
    });

    it('returns an empty array when no data given', () => {
      const expectedFormattedResponse = [];

      const formattedResponse = transformUserList();

      expect(formattedResponse).toEqual(expectedFormattedResponse);
    });
  });

  describe('transformUserProfile', () => {
    it('returns properly formatted data', () => {
      const response = {
        firstName,
        lastName,
      };

      const expectedFormattedResponse = {
        firstName,
        lastName,
        fullName: `${firstName} ${lastName}`,
      };

      const formattedResponse = transformUserProfile(response);

      expect(formattedResponse).toEqual(expectedFormattedResponse);
    });

    it('returns an empty fullName when no input given', () => {
      const expectedFormattedResponse = {
        fullName: ` `,
      };

      const formattedResponse = transformUserProfile();

      expect(formattedResponse).toEqual(expectedFormattedResponse);
    });
  });

  describe('transformUserAddress', () => {
    it('returns default data when no input is given', () => {
      const expectedFormattedResponse = {
        city: '',
        country: '',
        fullAddressInfo: '',
        fullStreetInfo: '',
        postcode: '',
        state: '',
        streetName: '',
        streetNumber: '',
      };

      const formattedResponse = transformUserAddress();

      expect(formattedResponse).toEqual(expectedFormattedResponse);
    });

    it('returns proper full street info', () => {
      const response = {
        street: {
          number: 1,
          name: 'main st',
        },
      };

      const expectedFormattedResponse = {
        country: '',
        city: '',
        fullAddressInfo: 'main st 1',
        fullStreetInfo: 'main st 1',
        postcode: '',
        state: '',
        streetName: 'main st',
        streetNumber: 1,
      };

      const formattedResponse = transformUserAddress(response);

      expect(formattedResponse).toEqual(expectedFormattedResponse);
    });

    it('returns proper full address info', () => {
      const response = {
        country: 'CA',
        state: 'ON',
        postcode: 'K6R3D7',
        street: {
          number: 1,
          name: 'main st',
        },
      };

      const expectedFormattedResponse = {
        country: 'CA',
        city: '',
        fullAddressInfo: 'main st 1, ON, K6R3D7, CA',
        fullStreetInfo: 'main st 1',
        postcode: 'K6R3D7',
        state: 'ON',
        streetName: 'main st',
        streetNumber: 1,
      };

      const formattedResponse = transformUserAddress(response);

      expect(formattedResponse).toEqual(expectedFormattedResponse);
    });
  });
});
