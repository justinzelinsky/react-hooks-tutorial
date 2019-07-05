const posts = [
  {
    id: 1,
    text: 'Foo'
  },
  {
    id: 2,
    text: 'Bar'
  },
  {
    id: 3,
    text: 'Baz'
  }
];

export const getPosts = () => {
  return new Promise(resolve => {
    setTimeout(() => {
      resolve(posts);
    }, 2000);
  });
};
