import React, { useState, useEffect } from 'react';
import { useParams } from 'react-router-dom';
import { fetchDetailData } from '../api/post';

const PostDetail = () => {
  const [detailArticle, setDetailArticle] = useState([]);
  const params = useParams();
  console.log(params.id);
  async function fetchData() {
    const data = await fetchDetailData(params.id);
    setDetailArticle(data);
  }
  useEffect(() => {
    // APIからデータを取得
    fetchData();
  }, []);

  return (
    <>
      <h1>{detailArticle.title}</h1>
      <p>{detailArticle.body}</p>
      {/* <p>パスパラメーター：{params}</p> */}
    </>
  );
};

export default PostDetail;
