import React from "react";

const App = () => {
  const onClickButton = () => {
    alert();
  };
  return (
    <>
      <h1>hello!!</h1>
      <p>How are you?</p>
      <button onClick={onClickButton}>Button</button>
    </>
  );
};

export default App;
