import React from "react";
import ColorfulMessage from "./components/ColorfulMessage";

const App = () => {
  const onClickButton = () => {
    alert();
  };
  return (
    <>
      <h1 style={{ color: "red" }}>hello!!</h1>
      <ColorfulMessage color="blue" message="How are you?" />
      <ColorfulMessage color="pink" message="I'm fine!" />
      <button onClick={onClickButton}>Button</button>
    </>
  );
};

export default App;
