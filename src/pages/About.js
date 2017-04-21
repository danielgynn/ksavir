import React, { Component } from 'react';
import { Link } from 'react-router-dom';
import Navigation from '../components/Navigation';

class Home extends Component {
  constructor(props) {
		super(props);
		this.state = {
      heading: 'The Ksavir Art Generator Project',
      subhead: 'A Generative Art Project by Daniel Gynn, built with p5.js and React.',
      text: ``
		};
	}

  render() {
    return (
      <div>
        <Navigation />
        <section id="about" className="flex flex-space flex-mobile">
          <div className="m2 flex-grow text-left">
            <h1>{this.state.heading}</h1>
            <h4>{this.state.subhead}</h4>
            <p>This project is heavily influenced by the work of <a href="https://art.daneden.me/">Dan Eden</a> and <a href="http://inconvergent.net/">Incovergent</a>. The system is built using React
              and p5.js, a JavaScript extension of the Processing project.
            </p>
            <p>Check out the <Link to="/gallery">gallery</Link> for more renderings from the generators used in this app.</p>
            <h2>Ksavir</h2>
            <p><a href="https://en.wikipedia.org/wiki/Kvasir">Kvasir</a> (pronounced “KVAHSS-eer”) was the Norse god of Inspiration, who's blood was made into heavenly mead. He was a being who was created by the Aesir and Vanir gods and goddesses at the conclusion of the Aesir-Vanir War.</p>
            <blockquote>Extremely wise, Kvasir traveled far and wide, teaching and spreading knowledge</blockquote>
          </div>

          <div className="mx2 flex flex-center">
            <img className="gallery-img" src="http://i.imgur.com/PDby7FV.jpg" alt="example rendering" />
          </div>
        </section>
      </div>
    )
  }
}

export default Home;
