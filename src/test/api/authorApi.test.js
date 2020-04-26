import { authors } from '../../../tools/mockData';

describe('THE AUTHOR API', () => {
  beforeEach(() => {
    global.fetch = jest.fn().mockImplementationOnce(() => {
      return new Promise((resolve, reject) => {
        resolve({
          ok: true,
          status: 200,
          json: () => {
            return authors;
          },
        });
        reject({
          error: 'something went wrong',
          statusCode: 500,
        });
      });
    });
  });
  test('should return list of authors', () => {
    const result = jest.fn();
    // expect(result).toEqual(authors);
  });
});
