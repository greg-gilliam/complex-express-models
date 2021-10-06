const pool = require('../lib/utils/pool');
const setup = require('../data/setup');
const request = require('supertest');
const app = require('../lib/app');

describe('animal routes', () => {
  beforeEach(() => {
    return setup(pool);
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

  it('should GET an animal by id', () => {
    return request(app)
      .get('/api/animals/1')
      .then((res) => {
        expect(res.body).toEqual({
          id: '1',
          animalName: 'dog',
          extinct: false,
        });
      });
  });

  it('should UPDATE an animal by id', () => {
    return request(app)
      .put('/api/animals/1')
      .send({ animalName: 'dogbird', extinct: false })
      .then((res) => {
        expect(res.body).toEqual({
          id: '1',
          animalName: 'dogbird',
          extinct: false,
        });
      });
  });

  it('should DELETE an animal by id', () => {
    return request(app)
      .delete('/api/animals/1')
      .then((res) => {
        expect(res.body).toEqual({
          id: '1',
          animalName: 'dog',
          extinct: false,
        });
      });
  });

  it('should ADD species', () => {
    return request(app).post('/api/species').send({
      animalId: '1',
      speciesName: 'enormous',
    });
  });

  it.only('should GET ALL species', () => {
    return request(app)
      .get('/api/species')
      .then((res) => {
        expect(res.body).toEqual([
          {
            animalId: '1',
            id: '1',
            speciesName: 'mammal',
          },
          {
            animalId: '2',
            id: '2',
            speciesName: 'bird',
          },
          {
            animalId: '3',
            id: '3',
            speciesName: 'mammal',
          },
          {
            animalId: '4',
            id: '4',
            speciesName: 'mammal',
          },
        ]);
      });
  });

  it('should GET ALL animals and their species', () => {
    return request(app)
      .get('/api/animals/species')
      .then((res) => {
        expect(res.body).toEqual([
          {
            animalName: 'dog',
            speciesName: 'mammal',
          },
        ]);
      });
  });
  afterAll(() => {
    pool.end();
  });
});
