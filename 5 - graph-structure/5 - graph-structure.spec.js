import createGraph from '.';

describe('Graph', () => {
  test('checks graph', () => {
    const graph = createGraph(true);

    graph.addNode('Kyle');
    graph.addNode('Lexi');
    graph.addNode('Monster');
    graph.addNode('Ghost');

    graph.addEdge('Kyle', 'Lexi');
    graph.addEdge('Lexi', 'Kyle');

    graph.addEdge('Kyle', 'Monster');
    graph.addEdge('Kyle', 'Ghost');
    graph.addEdge('Lexi', 'Monster');
    graph.addEdge('Lexi', 'Ghost');

    graph.addEdge('Ghost', 'Lexi');
    graph.addEdge('Monster', 'Kyle');

    expect(graph.print().split('\n')).toEqual([
      'Kyle => Lexi Monster Ghost ',
      'Lexi => Kyle Monster Ghost ',
      'Monster => Kyle ',
      'Ghost => Lexi ',
    ]);
  });
});
