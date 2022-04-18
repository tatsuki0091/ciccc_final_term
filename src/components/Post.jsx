import React from 'react';
import { useState, useEffect } from 'react';
import { fetchArticles } from '../api/post';
import { Link } from 'react-router-dom';

const Post = () => {
  const [blogArticles, setBlogArticles] = useState([]);
  async function fetchData() {
    const data = await fetchArticles();
    setBlogArticles(data);
  }
  useEffect(() => {
    // APIからデータを取得
    fetchData();
  }, []);

  return (
    <>
      <h1>Blog List</h1>
      {blogArticles.map((blogArticle) => (
        <ul>
          <li key={blogArticle.id}>
            <Link to={`/post/${blogArticle.id}`}>{blogArticle.title}</Link>
          </li>
        </ul>
      ))}
    </>
  );
};

export default Post;
