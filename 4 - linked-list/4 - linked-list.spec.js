import createLinkedList from '.';

describe('Linked List', () => {
  const list = createLinkedList();

  test('checks isEmpty', () => {
    expect(list.isEmpty()).toEqual(true);
  });

  test('checks if list has items', () => {
    const values = ['a', 'b', 'c', 'd', 'e'];
    values.map(val => list.push(val));

    expect(list.isEmpty()).toEqual(false);
  });

  test('checks if tail item is d after popping e', () => {
    list.pop();
    expect(list.tail.value).toEqual('d');
  });

  test('checks get method', () => {
    expect(list.get(1)).toEqual({
      value: 'b',
      next: {
        value: 'c',
        next: {
          value: 'd',
          next: null,
        },
      },
    });
  });

  test('checks delete and print method', () => {
    list.delete(1);
    expect(list.print()).toEqual('a => c => d');
  });
});
