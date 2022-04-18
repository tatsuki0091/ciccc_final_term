import React, { useCallback, useState } from "react";

const Callback = () => {
  const [height, setHeight] = useState(150);
  const [weight, setWeight] = useState(40);
  console.log(height);
  console.log(weight);
  const changeHeight = () => {
    setHeight((prevHeight) => prevHeight + 1);
  };
  const changeWight = (prevState) => {
    setWeight((prevWeight) => prevWeight + 1);
  };
  return (
    <div>
      <h1>Callback</h1>
      <h2>身長: {height}</h2>
      <h2>体重: {weight}</h2>
      <button onClick={changeHeight}>身長+1</button>
      <button onClick={changeWight}>体重+1</button>
    </div>
  );
};

export default Callback;
