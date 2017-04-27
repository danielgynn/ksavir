import React, { Component } from 'react';
import { BrowserRouter as Router, Route } from 'react-router-dom';
import Home from './pages/Home';
import About from './pages/About';
import Gallery from './pages/Gallery';
import Generators from './pages/Generators';
import Perlin from './pages/generators/Perlin';
import Sandsplines from './pages/generators/Sandsplines';
import Joy from './pages/generators/Joy';
import Triangular from './pages/generators/Triangular';
import Flowfield from './pages/generators/Flowfield';
import Rotator from './pages/generators/Rotator';
import 'react-select/dist/react-select.css';

class App extends Component {
  render() {
    return (
      <Router>
        <div>
          <Route exact path="/" component={Home}/>
          <Route exact path="/about" component={About} />
          <Route exact path="/gallery" component={Gallery}/>
          <Route exact path="/generators" component={Generators}/>

          <Route exact path="/generators/perlin" component={Perlin}/>
          <Route exact path="/generators/sandsplines" component={Sandsplines}/>
          <Route exact path="/generators/joy" component={Joy}/>
          <Route exact path="/generators/triangular" component={Triangular}/>
          <Route exact path="/generators/flowfield" component={Flowfield}/>
          <Route exact path="/generators/rotator" component={Rotator}/>
        </div>
      </Router>
    )
  }
}

export default App;
