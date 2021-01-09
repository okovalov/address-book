import { getSafeDateString } from './utils';

describe('utils', () => {
  describe('getSafeDateString', () => {
    it('returns an empty string when given date is incorrect', () => {
      const dateString = getSafeDateString('foo');

      expect(dateString).toEqual('');
    });

    it('returns an empty string when date is not given', () => {
      const dateString = getSafeDateString();

      expect(dateString).toEqual('');
    });

    it('returns proper safe date string from a given incomplete string', () => {
      const dateString = getSafeDateString('2007-02-20');

      expect(dateString).toEqual('Mon Feb 19 2007');
    });

    it('returns proper safe date string', () => {
      const dateString = getSafeDateString('2007-02-21T02:23:54.244Z');

      expect(dateString).toEqual('Tue Feb 20 2007');
    });
  });
});
