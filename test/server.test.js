const request = require('supertest');
const server = require('../src/server');

describe('Server', () => {
  it('responds to GET /', async () => {
    const res = await request(server).get('/');
    expect(res.statusCode).toBe(200);
  });
});

afterAll(() => server.close());