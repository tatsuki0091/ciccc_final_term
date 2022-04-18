import React, { useState } from 'react';
import { useHistory } from 'react-router-dom';
import { postArticle } from '../api/post';

const Form = () => {
  const history = useHistory();
  const [title, setTitle] = useState('');
  const [article, setArticle] = useState('');

  const changeTitle = (e) => {
    setTitle(e.target.value);
  };
  const changeArticle = (e) => {
    setArticle(e.target.value);
  };

  const handleSubmit = () => {
    postArticle(title, article);
    history.push('/posts');
  };
  return (
    <>
      <h1>Register Form</h1>
      <form onSubmit={handleSubmit}>
        <label htmlFor="name">Title</label>
        <input type="text" name="title" value={title} onChange={changeTitle} />
        <br />
        <label htmlFor="article">Article</label>
        <textarea value={article} onChange={changeArticle} />
        <br />

        <input type="submit" value="create" />
      </form>
    </>
  );
};

export default Form;
