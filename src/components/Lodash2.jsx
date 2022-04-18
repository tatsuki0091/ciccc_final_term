import React from "react";
import _ from "lodash";

const Lodash2 = () => {
  const testArray = [
    "a",
    "b",
    "c",
    "d",
    "e",
    "f",
    "g",
    "h",
    "i",
    "j",
    "k",
    "l",
  ];
  const devideNum = 2;

  const compactArray = [0, 1, false, 2, "", 3];
  var concatArray = [1];

  // lodashのメソッド
  const lodashCunk = _.chunk(testArray, devideNum);
  const lodashCompact = _.compact(compactArray);
  const other = _.concat(concatArray, 2, [3], [[[4]]]);

  //　自作メソッド
  const myChunk = (testArray, devideNum) => {
    let chunkArr = [];
    let count = 0;
    let temArr = [];

    for (let i = 0; i < testArray.length; i++) {
      if (count < devideNum) {
        temArr.push(testArray[i]);
        count++;
      } else {
        chunkArr = [...chunkArr, temArr];
        // chunkArr.push(temArr);
        count = 0;
        temArr = [];
        temArr.push(testArray[i]);
        count++;
      }
    }
    chunkArr = [...chunkArr, temArr];
    return chunkArr;
  };

  const myCompact = (compactArray) => {
    let newComArr = [];
    compactArray.forEach((element) => {
      if (element !== 0 && typeof element === "number") {
        newComArr = [...newComArr, element];
      }
    });

    return newComArr;
  };

  const myConcat = (concatArray, ...args) => {
    args.forEach((element) => {
      if (!Array.isArray(element)) {
        concatArray.push(element);
      } else {
        concatArray.push(element[0]);
      }
    });
    return concatArray;
  };

  // 結果表示
  //   console.log(lodashCunk);
  //   console.log(lodashCompact);
  //   console.log(other);
  //   console.log(myChunk(testArray, devideNum));
  //   console.log(myCompact(compactArray));
  console.log(myConcat(concatArray, 2, [3], [[[4]]]));
  return (
    <>
      <h1>Lodash2</h1>
      {lodashCunk}
    </>
  );
};

export default Lodash2;
