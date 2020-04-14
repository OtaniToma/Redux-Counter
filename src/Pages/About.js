import React from 'react';
import { NavLink as Link } from "react-router-dom";

export default class extends React.Component {
  constructor(props) {
    super(props)

    this.state = {
    }
  }

  render() {

    return (
      <>
      <h1>About</h1>
      <Link to="./">Home</Link>
      </>
    )
  }
}