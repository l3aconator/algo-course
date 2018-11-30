import createPriorityQueue from '.';

describe('Priority Queue', () => {
  const q = createPriorityQueue();

  test('checks isEmpty', () => {
    expect(q.isEmpty()).toEqual(true);
  });

  test('checks adding item to queue', () => {
    q.enqueue('A fix here');
    q.enqueue('A bug there');
    q.enqueue('A new feature');
    expect(q.peek()).toEqual('A fix here');
  });

  test('checks length of queue', () => {
    expect(q.length).toEqual(3);
  });

  test('checks removing 2 items from queue', () => {
    q.dequeue();
    expect(q.peek()).toEqual('A bug there');
  });

  test('checks enqueue highPriority of queue', () => {
    q.enqueue('Emergency task!', true);
    expect(q.peek()).toEqual('Emergency task!');
  });

  test('checks dequeue highPriority of queue', () => {
    q.dequeue();
    expect(q.peek()).toEqual('A bug there');
  });
});
