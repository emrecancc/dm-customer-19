const request = require('supertest');
const app = require('../src/app');
const http = require('http');

const server = http.createServer(app);

beforeAll((done) => {
  server.listen(3039, done);
});

afterAll(() => server.close());

describe('Server', () => {
  it('responds to GET /', async () => {
    const res = await request(server).get('/');
    expect(res.status).toBe(200);
  });
});