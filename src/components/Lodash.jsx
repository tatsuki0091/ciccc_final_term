import React from 'react';
import _ from 'lodash';
import { useState } from 'react';

function lodashDefference(array, values) {
  for (var i = 0; i < values.length; i++) {
    if (array.includes(values[i]) === true) {
      array.splice(array.indexOf(values[i], 0), 1);
    }
  }
  return array;
}

function myFunctionIntersection() {
  let result = [];
  for (var i = 0; i < arguments.length; i++) {
    result = result.concat(arguments[i]);
  }

  // 重複していない値を削除
  result = result.filter(function (x, i, self) {
    return self.indexOf(x) !== self.lastIndexOf(x);
  });
  // 重複している行を削除
  result = result.filter(function (x, i, self) {
    return self.indexOf(x) === i;
  });
  return result;
}

const Lodash = () => {
  const [toggle, setToggle] = useState('off');
  const array = [1, 2, 3];
  const values = [1, 2];
  const array2 = [1, 2];

  // オリジナルのlodashのメソッド
  const newArray = _.difference(array, values);
  const intersectionArray = _.intersection(
    [1, 2, 3, 7],
    [5, 2, 1, 4, 7],
    [2, 1, 7],
    [1, 2, 3, 7]
  );
  const union = _.union(array, array2, values);

  const array3 = [1, 2, 3];
  const array4 = [1, 2];
  const array5 = [1, 2];

  // 自分で作成したlodashのメソッド
  const myFunctionDefferenceResult = lodashDefference(array, values);
  const myFunctionIntersectionResult = myFunctionIntersection(
    array3,
    array4,
    array5
  );

  const changeToggle = () => {
    if (toggle === 'off') {
      setToggle('on');
    } else {
      setToggle('off');
    }
  };
  return (
    <>
      <div className="App">
        <header>
          <h1>This is a practice for the interview</h1>
        </header>
        <main>
          <button onClick={changeToggle}>{toggle}</button>
          {newArray.map((arr) => (
            <p>{arr}</p>
          ))}
          {myFunctionDefferenceResult.map((myFunc) => (
            <p>{myFunc}</p>
          ))}
          {intersectionArray.map((intersection) => (
            <p>{intersection}</p>
          ))}
          {myFunctionIntersectionResult.map((intersectionResult) => (
            <p>{intersectionResult}</p>
          ))}
          {union.map((uni) => (
            <p>{uni}</p>
          ))}
        </main>
      </div>
    </>
  );
};

export default Lodash;
