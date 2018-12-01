import createTree from '.';

describe('Test tree', () => {
  test('Checks adding of root node', () => {
    const dom = createTree('html');
    const head = dom.root.addChild('head');
    const body = dom.root.addChild('body');
    const title = head.addChild('title - egghead Tree lesson');
    const header = body.addChild('header');
    const main = body.addChild('main');
    const footer = body.addChild('footer');
    const h1 = header.addChild('h1 - tree lesson');
    const p = main.addChild('p - learn about trees!');
    const copyright = footer.addChild(
      `Copyright ${new Date().getFullYear()}`,
    );

    const result = JSON.stringify(dom.toObject());
    const result2 = JSON.parse(result);

    expect(result2).toEqual([
      {
        key: 'html',
        children: [
          {
            key: 'head',
            children: [
              { key: 'title - egghead Tree lesson', children: [] },
            ],
          },
          {
            key: 'body',
            children: [
              {
                key: 'header',
                children: [{ key: 'h1 - tree lesson', children: [] }],
              },
              {
                key: 'main',
                children: [
                  { key: 'p - learn about trees!', children: [] },
                ],
              },
              {
                key: 'footer',
                children: [{ key: 'Copyright 2018', children: [] }],
              },
            ],
          },
        ],
      },
      {
        key: 'head',
        children: [
          { key: 'title - egghead Tree lesson', children: [] },
        ],
      },
      { key: 'title - egghead Tree lesson', children: [] },
      {
        key: 'body',
        children: [
          {
            key: 'header',
            children: [{ key: 'h1 - tree lesson', children: [] }],
          },
          {
            key: 'main',
            children: [
              { key: 'p - learn about trees!', children: [] },
            ],
          },
          {
            key: 'footer',
            children: [{ key: 'Copyright 2018', children: [] }],
          },
        ],
      },
      {
        key: 'header',
        children: [{ key: 'h1 - tree lesson', children: [] }],
      },
      { key: 'h1 - tree lesson', children: [] },
      {
        key: 'main',
        children: [{ key: 'p - learn about trees!', children: [] }],
      },
      { key: 'p - learn about trees!', children: [] },
      {
        key: 'footer',
        children: [{ key: 'Copyright 2018', children: [] }],
      },
      { key: 'Copyright 2018', children: [] },
    ]);
  });
});
