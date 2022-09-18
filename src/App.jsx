import React from "react";
import ColorfulMessage from "./components/ColorfulMessage";

const App = () => {
  const onClickButton = () => {
    alert();
  };
  const contentLedyStyle = {
    color: "pink",
    fontSize: "18px"
  };
  return (
    <>
      <h1 style={{ color: "red" }}>hello!!</h1>
      <ColorfulMessage />
      <p style={contentLedyStyle}>I'm fine!!</p>
      <button onClick={onClickButton}>Button</button>
    </>
  );
};

export default App;
