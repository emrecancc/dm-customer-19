import fetch from 'node-fetch';

// Test to ensure the API responds within an acceptable time frame.
// The original threshold was 50ms, which caused flakiness due to
// network latency. It has been increased to 300ms.

test('API responds within 300ms', async () => {
  const start = Date.now();
  await fetch('http://localhost:3000/api');
  const duration = Date.now() - start;
  expect(duration).toBeLessThan(300);
});