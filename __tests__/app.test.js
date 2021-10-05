const pool = require('../lib/utils/pool');
const setup = require('../data/setup');
const request = require('supertest');
const app = require('../lib/app');

describe('animal routes', () => {
  beforeEach(() => {
    return setup(pool);
  });

  afterAll(() => {
    pool.end();
  });

  it('creates a new animal', () => {
    return request(app)
      .post('/api/animals')
      .send({ animalName: 'wren', extinct: false })
      .then((res) => {
        expect(res.body).toEqual({
          id: '5',
          animalName: 'wren',
          extinct: false,
        });
      });
  });
});
