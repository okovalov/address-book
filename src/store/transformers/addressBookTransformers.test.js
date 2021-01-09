import {
  transformUserList,
  transformUserProfile,
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
});
