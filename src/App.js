import React, { Component } from 'react'
import {BrowserRouter as Router, Route, Link, Switch } from 'react-router-dom'
import FormValidator from './components/FormValidator/FormValidator';


class App extends Component {

  render() {
    return (
      <div className="App">
        <FormValidator/>
      </div>
    );

  }
}

export default App;
