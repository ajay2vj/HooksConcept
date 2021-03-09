import React, { Component } from 'react';
import { BrowserRouter as Router, Route } from 'react-router-dom';
import './App.css';
import State from './pages/State';
import Effect from './pages/Effect';
import Callback from './pages/Callback';

class App extends Component {

    render(){
        return (
          <Router>
            <div>
              <Route exact path="/" component={State}/>
              <Route exact path="/effect" component={Effect}/>
              <Route exact path="/callback" component={Callback}/>
            </div>
          </Router>
        );
    }
}

export default App;
