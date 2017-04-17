import React, { Component } from 'react';
import Header from '../components/Header';
import Navigation from '../components/Navigation';

class Home extends Component {
  constructor(props) {
		super(props);
		this.state = {
      heading: 'The Ksavir Art Generator Project',
      subhead: 'A Generative Art Project by Daniel Gynn, built with p5.js and React.'
		};
	}

  render() {
    return (
      <div className="">
        <Navigation />
        <section id="about" className="flex flex-center flex-column">
          <Header heading={this.state.heading} subhead={this.state.subhead}/>
          <p>This project is heavily influenced by the work of Dan Eden and Incovergent.</p>
          <p>The system is built using React and p5.js, a JavaScript extension of the Processing project.</p>
        </section>
      </div>
    )
  }
}

export default Home;
