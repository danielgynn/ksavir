import React, { Component } from 'react';
import P5Wrapper from 'react-p5-wrapper';
import Navigation from '../../components/Navigation';
import Header from '../../components/Header';
import joy from '../../sketches/joy';

class Joy extends Component {
  constructor(props) {
		super(props);
		this.state = {
      heading: 'Deep Joy',
      subhead: 'Reload the page to redraw the canvas, or press ENTER to save the output.',
      desc: 'A Perlin noise and B-spline rendering of the Joy Division album cover \'Unknown Pleasures\'.'
		};
	}

  render() {
    return (
      <div>
        <Navigation />

        <main className="wrap">
          <Header heading={this.state.heading} />
          <p>{this.state.subhead}</p>
          <p>{this.state.desc}</p>
          <section className="flex flex-center">
            <P5Wrapper sketch={joy} />
          </section>
        </main>
      </div>
    )
  }
}

export default Joy;
