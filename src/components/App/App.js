import React, { Component } from 'react';
import { connect } from 'react-redux';

class App extends Component {

  constructor(props) {
    super(props);

    this.state = {
      newAirport : ''
    }
  }

  captureInput = (event) => {
    this.setState({
      newAirport : event.target.value
    });
  }

  buttonClick = (event) => {
    this.props.dispatch({type: 'ADD_AIRPORT', payload : this.state.newAirport});
  }

  render() {
    console.log(this.props.reduxState.airportReducer);
    const htmlArray = this.props.reduxState.airportReducer.map((item, index) => {
        return (
          <div key={index}>
            <p>{item}</p>
          </div>
        )
    });

    return (
      <div>
        <h1>Redux Airport</h1>
        <input onChange={this.captureInput} placeholder="Airline Name" />
        <button onClick={this.buttonClick}>Add Airline</button>
        <div>
          {htmlArray}
        </div>
      </div>
    );
  }
}

const mapReduxStateToProps = (reduxState) => {
  return {
    reduxState
  }
}

export default connect(mapReduxStateToProps)(App);
