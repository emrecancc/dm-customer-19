const request = require('supertest');
const app = require('../src/app');
const server = app.listen(3079);
afterAll(() => server.close());

describe('Server', () => {
  it('responds to GET /', async () => {
    const res = await request(server).get('/');
    expect(res.status).toBe(200);
  });
});