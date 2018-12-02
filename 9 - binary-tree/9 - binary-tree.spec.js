import createBinaryTree from '.';

describe('Test Creation of tree', () => {
  test('Checks adding of root node', () => {
    const tree = createBinaryTree('a');
    expect(tree.print()).toEqual('a');
  });

  test('Checks IN_ORDER method', () => {
    const tree2 = createBinaryTree('a');
    const b = tree2.root.addLeft('b');
    const c = tree2.root.addRight('c');
    const d = b.addLeft('d');
    const e = b.addRight('e');
    const f = c.addLeft('f');
    const g = c.addRight('g');
    const h = d.addLeft('h');
    const i = d.addRight('i');

    expect(tree2.print()).toEqual(
      'h => d  => i  => b  => e  => a  => f  => c  => g ',
    );

    expect(tree2.print('PRE_ORDER')).toEqual(
      'a => b  => d  => h  => i  => e  => c  => f  => g ',
    );

    expect(tree2.print('POST_ORDER')).toEqual(
      'h => i  => d  => e  => b  => f  => g  => c  => a ',
    );
  });
});
