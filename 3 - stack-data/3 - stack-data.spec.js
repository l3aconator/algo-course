import createStack from '.';

describe('Stacks', () => {
  const lowerBodyStack = createStack();

  test('checks isEmpty', () => {
    expect(lowerBodyStack.isEmpty()).toEqual(true);
  });

  test('checks adding to stack', () => {
    // adds to stack, checks peek method for LIFO
    lowerBodyStack.push('underwear');
    lowerBodyStack.push('socks');
    lowerBodyStack.push('pants');
    lowerBodyStack.push('shoes');
    expect(lowerBodyStack.peek()).toEqual('shoes');
  });

  test('checks popping off of stack', () => {
    lowerBodyStack.pop();
    lowerBodyStack.pop();
    expect(lowerBodyStack.peek()).toEqual('socks');
  });

  test('checks length of stack', () => {
    expect(lowerBodyStack.length).toEqual(2);
  });
});
