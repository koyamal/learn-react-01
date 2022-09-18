import React, { useState } from "react";
import ColorfulMessage from "./components/ColorfulMessage";
import ColorfulMessageChildren from "./components/ColorfulMessageChildren";

const App = () => {
  const onClickCountUp = () => {
    setNum(num + 1);
  };
  const [num, setNum] = useState(0);
  return (
    <>
      <h1 style={{ color: "red" }}>hello!!</h1>
      <ColorfulMessage color="blue" message="How are you?" />
      <ColorfulMessage color="pink" message="I'm fine!" />
      <ColorfulMessageChildren color="blue">Good!!</ColorfulMessageChildren>
      <button onClick={onClickCountUp}>Count Up</button>
      <p>{num}</p>
    </>
  );
};

export default App;
