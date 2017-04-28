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
          <Generator title="Vector Flow Field" link="/generators/flowfield" desc="Vector Flow Field simulator, built with Perlin noise. Generates random noise to simulate flocking/flowing behaviour and produces a wavy/smoky output."/>
          <Generator title="Perlin Noise Lines" link="/generators/perlin" desc="A Perlin noise generator that renders vertical or horizontal lines to produce a 3D fabric-like effect." />
          <Generator title="Sandsplines" link="/generators/sandsplines" desc="Renders horizontal lines that gradually increase in noise. Based on the concept of B-splines."/>
          <Generator title="Perlin Joy" link="/generators/joy" desc="A Perlin noise and B-spline rendering of the Joy Division album cover 'Unknown Pleasures'."/>
          <Generator title="3D Rotator" link="/generators/rotator" desc="Renders a 3D circular object consisting of lines rotating from specific points." />
        </div>
      </div>
    )
  }
}

export default Generators;
