import React, { Component } from 'react';
import Navigation from '../components/Navigation';

class Home extends Component {
  constructor(props) {
		super(props);
		this.state = {
      heading: 'The Ksavir Art Generator Project',
      subhead: 'A Generative Art Project by Daniel Gynn, built with p5.js and React.',
      text: `This project is heavily influenced by the work of Dan Eden and Incovergent.
        The system is built using React and p5.js, a JavaScript extension of the
        Processing project.`
		};
	}

  render() {
    return (
      <div>
        <Navigation />
        <section id="about" className="flex flex-space flex-mobile">
          <div className="m2 flex-grow text-left">
            <h1>{this.state.heading}</h1>
            <h3>{this.state.subhead}</h3>
            <p>{this.state.text}</p>
            <p>Check out the gallery for more renderings from the generators used in this app.</p>
          </div>

          <div className="m2 flex flex-center">
            <img className="gallery-img" src="http://i.imgur.com/PDby7FV.jpg" alt="example rendering" />
          </div>
        </section>
      </div>
    )
  }
}

export default Home;
