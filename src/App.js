import React, { Component } from 'react'
import {BrowserRouter as Router, Route, Switch } from 'react-router-dom'
// import FormValidator from './components/FormValidator/FormValidator';
// import MovieSeatBooker from './components/MovieSeatBooker/MovieSeatBooker';
// import ModalMenuSlider from './components/ModalMenuSlider/ModalMenuSlider';
import ExchangeRateCalculator from './components/ExchangeRate/ExchangeRate'


class App extends Component {

  render() {
    return (
      <div className="App">
        <Router>
          <Switch>
           {/* <Route exact path='/' component={FormValidator} />
           <Route exact path='/movie' component={MovieSeatBooker} /> */}
           {/* <Route exact path='/modal' component={ModalMenuSlider} /> */}
           <Route exact path='/exchangerate' component={ExchangeRateCalculator} />
          </Switch>
        </Router>
      </div>
    );

  }
}

export default App;
