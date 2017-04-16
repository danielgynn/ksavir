import React, { Component } from 'react';
import { BrowserRouter as Router, Route } from 'react-router-dom';
import Home from './pages/Home';
import Perlin from './pages/Perlin';
import Sandsplines from './pages/Sandsplines';
import Joy from './pages/Joy';
import Playground from './pages/Playground';
import Abstract from './pages/Abstract';
import Gallery from './pages/Gallery';

class App extends Component {
  render() {
    return (
      <Router>
        <div>
          <Route exact path="/" component={Home}/>
          <Route path="/perlin" component={Perlin}/>
          <Route path="/sandsplines" component={Sandsplines}/>
          <Route path="/joy" component={Joy}/>
          <Route path="/playground" component={Playground}/>
          <Route path="/abstract" component={Abstract}/>
          <Route path="/gallery" component={Gallery}/>
        </div>
      </Router>
    )
  }
}

export default App;
