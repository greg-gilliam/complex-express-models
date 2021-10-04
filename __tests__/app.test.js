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
});

it('creates a new animal', () => {
  return request(app)
    .post('/api/animals')
    .send({})
    .then((res) => {
      expect(res.body).toEqual({
        id: '1',
        name: 'dog',
      });
    });
});
