import React from 'react';
import './Blog.module.css';

function BlogPost({ date, author, title, image }) {
  return (
    <div className="blog-post">
      <img src={image} alt={title} />
      <div className="blog-post-info">
        <div className="blog-post-date">{date}</div>
        <div className="blog-post-author">{author}</div>
        <div className="blog-post-title">{title}</div>
      </div>
    </div>
  );
}

function Blog() {
  const blogPosts = [
    {
      date: 'Mar 16, 2020',
      author: 'Michael Foster',
      title: 'Boost your conversion rate',
      image: 'https://images.unsplash.com/photo-1519388647853-12ef494c4e88?ixlib=rb-1.2.1&ixid=MnwxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8&auto=format&fit=crop&w=1170&q=80',
    },
    {
      date: 'Mar 10, 2020',
      author: 'Lindsay Walton',
      title: 'How to use search engine optimization to drive sales',
      image: 'https://images.unsplash.com/photo-1531297480868-e2741ded2245?ixlib=rb-1.2.1&ixid=MnwxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8&auto=format&fit=crop&w=1170&q=80',
    },
    {
      date: 'Feb 12, 2020',
      author: 'Tom Cook',
      title: 'Improve your customer experience',
      image: 'https://images.unsplash.com/photo-1524478075381-3a4081c49461?ixlib=rb-1.2.1&ixid=MnwxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8&auto=format&fit=crop&w=1170&q=80',
    },
  ];

  return (
    <div className="blog">
      <h1>From the blog</h1>
      <p>Learn how to grow your business with our expert advice.</p>
      <div className="blog-posts">
        {blogPosts.map((post) => (
          <BlogPost key={post.title} {...post} />
        ))}
      </div>
    </div>
  );
}

export default Blog;