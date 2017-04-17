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
          <Route path="/about" component={About} />
          <Route path="/gallery" component={Gallery}/>
          <Route path="/generators" component={Generators}/>

          <Route path="/perlin" component={Perlin}/>
          <Route path="/sandsplines" component={Sandsplines}/>
          <Route path="/joy" component={Joy}/>
          <Route path="/triangular" component={Triangular}/>
          <Route path="/flowfield" component={Flowfield}/>
          <Route path="/rotator" component={Rotator}/>
        </div>
      </Router>
    )
  }
}

export default App;
