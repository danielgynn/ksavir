import React, { Component } from 'react';
import P5Wrapper from 'react-p5-wrapper';
import Navigation from '../components/Navigation';
import Header from '../components/Header';
import playground from '../sketches/sketch';

class Playground extends Component {
  constructor(props) {
		super(props);
		this.state = {
      heading: 'Playground',
      subhead: 'Click to generate a circle, press ESCAPE to generate a rectangle, or press ENTER to save.'
		};
	}

  render() {
    return (
      <div>
        <Navigation />

        <main>
          <Header heading={this.state.heading} subhead={this.state.subhead}/>
          <section className="flex flex-center">
            <P5Wrapper sketch={playground} />
          </section>
        </main>
      </div>
    )
  }
}

export default Playground;
