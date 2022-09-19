/* eslint react-hooks/exhaustive-deps: off */
import React, { useEffect, useState } from "react";
import ColorfulMessage from "./components/ColorfulMessage";
import ColorfulMessageChildren from "./components/ColorfulMessageChildren";

const App = () => {
  console.log("start");
  const [num, setNum] = useState(0);
  const [faceShowFlag, setFaceShowFlag] = useState(true);

  const onClickCountUp = () => {
    setNum(num + 1);
  };
  const onClickSwitchShowFlag = () => {
    setFaceShowFlag(!faceShowFlag);
  };

  useEffect(() => {
    console.log("useEffect is Called");
    if (num % 3 === 0) {
      faceShowFlag || setFaceShowFlag(true);
    } else {
      faceShowFlag && setFaceShowFlag(false);
    }
  }, [num]);

  return (
    <>
      <h1 style={{ color: "red" }}>hello!!</h1>
      <ColorfulMessage color="blue" message="How are you?" />
      <ColorfulMessage color="pink" message="I'm fine!" />
      <ColorfulMessageChildren color="blue">Good!!</ColorfulMessageChildren>
      <button onClick={onClickCountUp}>Count Up</button>
      <br />
      <button onClick={onClickSwitchShowFlag}>on/off</button>
      <p>{num}</p>
      {faceShowFlag && <p>(^_^)</p>}
    </>
  );
};

export default App;
