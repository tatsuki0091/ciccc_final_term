export const fetchTasks = async () => {
  const todos = await fetch(process.env.REACT_APP_API_URL)
    .then((res) => {
      return res.json();
    })
    .catch((err) => {
      //   console.log(err);
      return [];
    });
  return todos;
};

export const fetchTask = async (id) => {
  const todos = await fetch(process.env.REACT_APP_API_URL + "/" + id)
    .then((res) => {
      return res.json();
    })
    .catch((err) => {
      //   console.log(err);
      //   alert('We could not update the data. Please try again');
      return [];
    });
  return todos;
};

export const postTask = async (title, body) => {
  const requestOptions = {
    method: "POST",
    headers: { "Content-Type": "application/json" },
    body: JSON.stringify({ title, body }),
  };

  await fetch(process.env.REACT_APP_API_URL, requestOptions)
    .then((res) => {
      return res;
    })
    .catch((err) => {
      return err;
    });
};

export const updateTask = async (id, title, body) => {
  const requestOptions = {
    method: "PUT",
    headers: { "Content-Type": "application/json" },
    body: JSON.stringify({ id, title, body }),
  };

  await fetch(process.env.REACT_APP_API_URL, requestOptions)
    .then((res) => {
      return res;
    })
    .catch((err) => {
      alert("We could not update the data. Please try again");
      return [];
    });
};

export const deleteTask = async (id) => {
  const requestOptions = {
    method: "DELETE",
    headers: { "Content-Type": "application/json" },
    // body: JSON.stringify({ id }),
  };
  await fetch(process.env.REACT_APP_API_URL + "/" + id, requestOptions)
    .then((res) => {
      return res;
    })
    .catch((err) => {
      return err;
    });
};
