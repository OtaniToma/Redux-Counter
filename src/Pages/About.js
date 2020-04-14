import React from 'react';
import PropTypes from 'prop-types'
import { NavLink as Link } from "react-router-dom";
import { increment, decrement, plusten } from '../actions';
import { connect } from 'react-redux';

class About extends React.Component {
  constructor(props) {
    super(props);
  }

  render() {

    return (
      <>
      <h1>About</h1>
      <p>カウンター：{this.props.counter}</p>
      <button onClick={this.props.increment}>+1</button>
      <button onClick={this.props.decrement}>-1</button>
      <button onClick={this.props.plusten}>+10</button>
      <br />
      <br />
      <Link to="./">Home</Link>
      </>
    )
  }
}

About.propTypes = {
  count: PropTypes.number,
  increment: PropTypes.func.isRequired,
  decrement: PropTypes.func.isRequired,
}

const mapStateToProps = state => ({
  counter: state.counter,
});

const mapDispatchToProps = dispatch => ({
  increment: () => dispatch(increment()),
  decrement: () => dispatch(decrement()),
  plusten: () => dispatch(plusten()),
});

export default connect(mapStateToProps, mapDispatchToProps)(About);