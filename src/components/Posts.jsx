import './Posts.scss';

import React, { useEffect, useState } from 'react';

import { getPosts } from 'utils/api';

const Posts = () => {
  const [posts, setPosts] = useState([]);
  const [isLoading, setIsLoading] = useState(null);

  useEffect(() => {
    setIsLoading(true);
    getPosts().then(newPosts => {
      setIsLoading(false);
      setPosts(newPosts);
    });
  }, []);

  return (
    <div styleName="posts-container">
      {isLoading && <div>Loading...</div>}
      {!isLoading && posts.map(post => <div key={post.id}>{post.text}</div>)}
    </div>
  );
};

export default Posts;
