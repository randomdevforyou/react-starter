import Hello from "./hello";
import ReactDOM from "react-dom";
import React from "react";

ReactDOM.render(
	React.createElement(Hello, {toWhat: 'World'}, null),
	document.getElementById('root')
);
