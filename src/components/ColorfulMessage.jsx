import React from "react";

const ColorfulMessage = (props) => {
  //console.log("Colorful");
  const { color, message } = props;
  const contentStyle = {
    color: color,
    fontSize: "18px"
  };
  return <p style={contentStyle}>{message}</p>;
};

export default ColorfulMessage;
