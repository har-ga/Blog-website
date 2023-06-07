import React from 'react';
import { useParams } from 'react-router-dom';

const BlogPost = () => {
  const { id } = useParams();
  const blogPost = {
    1: { title: 'Blog Post 1', content: 'This is the content of Blog Post 1.' },
    2: { title: 'Blog Post 2', content: 'This is the content of Blog Post 2.' },
    3: { title: 'Blog Post 3', content: 'This is the content of Blog Post 3.' },
  };

  return (
    <div>
      <h2>{blogPost[id].title}</h2>
      <p>{blogPost[id].content}</p>
    </div>
  );
};

export default BlogPost;
