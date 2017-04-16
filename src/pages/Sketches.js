import React, { Component } from 'react';
import P5Wrapper from 'react-p5-wrapper';
import Header from '../components/Header';
import perlin from '../sketches/perlin';
import joy from '../sketches/joy';

class Sketches extends Component {
  constructor(props) {
		super(props);
		this.state = {
      sketchState: perlin,
      heading: 'Perlin'
		};
	}

  pressEvent() {
		this.state.sketchState === perlin ?
      this.setState({sketchState:joy, heading:'Joy'}) :
      this.setState({sketchState:perlin, heading:'Perlin'});
	}

  render() {
    return (
      <main>
        <Header heading={this.state.heading} />
        <button onClick={this.pressEvent.bind(this)}>Change Sketch</button>
        <section className="flex flex-center">
          <P5Wrapper sketch={this.state.sketchState} />
        </section>
      </main>
    )
  }
}

export default Sketches;
