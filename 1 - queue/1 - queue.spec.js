import createQueue from '.';

describe('Queue', () => {
  const q = createQueue();

  test('checks isEmpty', () => {
    expect(q.isEmpty()).toEqual(true);
  });

  test('checks adding item to queue', () => {
    q.enqueue('Make an egghead lessson');
    q.enqueue('Help others learn');
    q.enqueue('Be happy');
    expect(q.peek()).toEqual('Make an egghead lessson');
  });

  test('checks length of queue', () => {
    expect(q.length).toEqual(3);
  });

  test('checks removing 2 items from queue', () => {
    q.dequeue();
    q.dequeue();
    expect(q.peek()).toEqual('Be happy');
  });
});
