import React from "react";

const ColorfulMessageChildren = (props) => {
  //console.log("ColorfullChild");
  const contentStyle = {
    color: props.color,
    fontSize: "18px"
  };
  return <p style={contentStyle}>{props.children}</p>;
};

export default ColorfulMessageChildren;
