import React, { Component } from 'react';
import Navigation from '../components/Navigation';
import Header from '../components/Header';
import { Link } from 'react-router-dom';

class Generators extends Component {
  constructor(props) {
		super(props);
		this.state = {
      heading: 'Generators',
      subhead: 'A list of all art generators available.',
    };
	}

  render() {
    return (
      <div>
        <Navigation />
        <Header heading={this.state.heading} subhead={this.state.subhead}/>

        <div className="wrap flex flex-column">
          <Link to="/perlin">Perlin</Link>
          <Link to="/sandsplines">Sandsplines</Link>
          <Link to="/joy">Joy</Link>
          <Link to="/triangular">Triangular</Link>
          <Link to="/flowfield">Perlin Flow Field</Link>
          <Link to="/rotator">Rotator</Link>
        </div>
      </div>
    )
  }
}

export default Generators;
