import React from 'react';
import { Link } from 'react-router-dom';

const Home = () => {
  const blogPosts = [
    { id: 1, title: 'Blog Post 1', content: 'This is the content of Blog Post 1.' },
    { id: 2, title: 'Blog Post 2', content: 'This is the content of Blog Post 2.' },
    { id: 3, title: 'Blog Post 3', content: 'This is the content of Blog Post 3.' },
  ];

  return (
    <div>
      <h1>Welcome to the Blog Website!</h1>
      <h2>Recent Blog Posts:</h2>
      <ul>
        {blogPosts.map((post) => (
          <li key={post.id}>
            <Link to={`/blog/${post.id}`}>{post.title}</Link>
          </li>
        ))}
      </ul>
    </div>
  );
};

export default Home;
