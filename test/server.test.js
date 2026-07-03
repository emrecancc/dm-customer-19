const request = require('supertest');
const server = require('../src/server');

describe('Server', () => {
  beforeAll(() => {
    server.listen(3119);
  });

  afterAll(() => {
    server.close();
  });

  test('GET /', async () => {
    const res = await request(server).get('/');
    expect(res.status).toBe(200);
  });
});