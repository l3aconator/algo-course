import createGraph from '../5 - graph-structure';

describe('Graph depth search', () => {
  test('checks graph depth search', () => {
    const graph = createGraph(true);
    const result = [];

    const nodes = ['a', 'b', 'c', 'd', 'e', 'f'];
    const edges = [
      ['a', 'b'],
      ['a', 'e'],
      ['a', 'f'],
      ['b', 'd'],
      ['b', 'e'],
      ['c', 'b'],
      ['d', 'c'],
      ['d', 'e'],
    ];

    nodes.forEach((node) => {
      graph.addNode(node);
    });

    // eslint-disable-next-line
    edges.forEach(nodes => {
      graph.addEdge(...nodes);
    });

    graph.depthFirstSearch('a', node => result.push(node.key));

    expect(result).toEqual(['a', 'b', 'd', 'c', 'e', 'f']);
  });
});
