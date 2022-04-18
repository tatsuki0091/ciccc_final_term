export const fetchArticles = async () => {
  const res = await fetch('https://jsonplaceholder.typicode.com/posts/')
    .then((res) => {
      return res.json();
    })
    .catch((error) => {
      alert('We could not fetch the data');
    });
  return res;
};

export const fetchDetailData = async (id) => {
  const res = await fetch(`https://jsonplaceholder.typicode.com/posts/${id}`)
    .then((res) => {
      return res.json();
    })
    .catch((error) => {
      alert('We could not fetch the data');
    });
  return res;
};

export const postArticle = async (title, article) => {
  const requestOptions = {
    method: 'POST',
    headers: { 'Content-Type': 'application/json' },
    body: JSON.stringify({ title: title, article: article }),
  };

  fetch('https://jsonplaceholder.typicode.com/posts/', requestOptions)
    .then((response) => response.json())
    .then((responseJson) => {
      console.log(responseJson);
    })
    .catch(() => {
      console.log('error');
    });
};
