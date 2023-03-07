import React from "react";

const Paragraph = (props) => {
  return (
    <div>
      <input onChange={(e) => props.addInput(e)} type="text" />
      <button onClick={props.addText}>ADD</button>
      {props.display.map((item) => (
        <p>{item.text}</p>
      ))}
    </div>
  );
};

export default Paragraph;
