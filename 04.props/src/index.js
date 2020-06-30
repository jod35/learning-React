import React from "react";
import ReactDOM from "react-dom";

const Hello = (props) => {
  const { name } = props;

  return <h1>Hello {name}</h1>;
};

ReactDOM.render(<Hello name="JOnathan" />, document.getElementById("root"));
