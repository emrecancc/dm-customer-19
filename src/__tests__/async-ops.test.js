import { processBatch } from '../src/async-ops';

describe('batch processing', () => {
  it('processes all items', async () => {
    const results = [];
    const items = Array.from({ length: 10 }, (_, i) => i + 1);
    const promises = items.map(item =>
      processBatch(item).then(res => results.push(res))
    );
    await Promise.all(promises);
    expect(results).toHaveLength(10);
  });
});