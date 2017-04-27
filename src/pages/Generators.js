import React, { Component } from 'react';
import Navigation from '../components/Navigation';
import Header from '../components/Header';
import Generator from '../components/Generator';

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

        <div className="flex flex-column wrap">
          <Generator title="Perlin" link="/generators/perlin" desc="A Rorschach generator built using Perlin noise to render lines." />
          <Generator title="Sandsplines" link="/generators/sandsplines" desc="Renders horizontal lines that gradually increase in noise. Based on the concept of B-splines."/>
          <Generator title="Joy" link="/generators/joy" desc="A Perlin noise and B-spline rendering of the Joy Division album cover 'Unknown Pleasures'."/>
          <Generator title="Triangular" link="/generators/triangular" />
          <Generator title="Perlin Flow Field" link="/generators/flowfield" />
          <Generator title="Rotator" link="/generators/rotator" desc="Renders a 3D circular object consisting of lines rotating from specific points." />
        </div>
      </div>
    )
  }
}

export default Generators;
