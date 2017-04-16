import React, { Component } from 'react';
import { BrowserRouter as Router, Route, Link } from 'react-router-dom';
import Sketches from './pages/Sketches';
import Navigation from './components/Navigation';

const Home = () => (
  <div>
    <h2>Home</h2>
  </div>
)

class App extends Component {
  render() {
    return (
      <Router>
        <div>
          <Navigation />

          <Route exact path="/" component={Home}/>
          <Route path="/sketches" component={Sketches}/>
        </div>
      </Router>
    )
  }
}

export default App;
