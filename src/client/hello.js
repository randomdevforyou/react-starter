import React  from "react";

export default class Hello extends React.Component {
	render() {
	  return React.createElement('div', null, `Hello ${this.props.toWhat}`);
	}
  }
