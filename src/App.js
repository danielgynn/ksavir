import React, { Component } from 'react';
import { BrowserRouter as Router, Route } from 'react-router-dom';
import Home from './pages/Home';
import Perlin from './pages/Perlin';
import Sandsplines from './pages/Sandsplines';

class App extends Component {
  render() {
    return (
      <Router>
        <div>
          <Route exact path="/" component={Home}/>
          <Route path="/perlin" component={Perlin}/>
          <Route path="/sandsplines" component={Sandsplines}/>
        </div>
      </Router>
    )
  }
}

export default App;
