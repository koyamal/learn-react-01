import React from "react";

const App = () => {
  const onClickButton = () => {
    alert();
  };
  const contentStyle = {
    color: "blue",
    fontSize: "18px"
  };
  return (
    <>
      <h1 style={{ color: "red" }}>hello!!</h1>
      <p style={contentStyle}>How are you?</p>
      <button onClick={onClickButton}>Button</button>
    </>
  );
};

export default App;
