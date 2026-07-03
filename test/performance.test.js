const request = require('supertest');
const app = require('../app');

test('API responds within 1250ms', async () => {
  const start = Date.now();
  await request(app).get('/api/endpoint');
  const duration = Date.now() - start;
  expect(duration).toBeLessThan(1250);
});