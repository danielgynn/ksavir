import React, { Component } from 'react';
import P5Wrapper from 'react-p5-wrapper';
import Navigation from '../components/Navigation';
import Header from '../components/Header';
import sandsplines from '../sketches/sandsplines';

class Sandsplines extends Component {
  constructor(props) {
		super(props);
		this.state = {
      heading: 'Sandsplines',
      subhead: 'Reload the page to redraw, or press ENTER to save.'
		};
	}

  render() {
    return (
      <div>
        <Navigation />

        <main>
          <Header heading={this.state.heading} subhead={this.state.subhead}/>
          <section className="flex flex-center">
            <P5Wrapper sketch={sandsplines} />
          </section>
        </main>
      </div>
    )
  }
}

export default Sandsplines;
