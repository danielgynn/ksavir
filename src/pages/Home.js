import React, { Component } from 'react';
import { Link } from 'react-router-dom';
import Header from '../components/Header';
import Scrollchor from 'react-scrollchor';

class Home extends Component {
  constructor(props) {
		super(props);
		this.state = {
      heading: 'Ksavir',
      subhead: 'A Generative Art Project by Daniel Gynn, built with p5.js and React.'
		};
	}

  render() {
    return (
      <div>
        <main id="main" className="index flex flex-center flex-column">
          <Header heading={this.state.heading} subhead={this.state.subhead}/>
          <p>Check out the <Link to="/perlin">Perlin</Link>.</p>
          <Scrollchor to="#about" animate={{offset: 20, duration: 600}} className="nav-link">Read More</Scrollchor>
        </main>

        <section id="about" className="index flex flex-center flex-column">
          <header className="flex flex-center flex-column">
            <h1>The Ksavir Art Generator Project</h1>
            <Scrollchor to="#main" animate={{offset: 20, duration: 600}} className="nav-link">Back to Top</Scrollchor>
          </header>
          <p>This project is heavily influenced by the work of Dan Eden and Incovergent.</p>
          <p>The system is built using React and p5.js, a JavaScript extension of the Processing project.</p>
        </section>
      </div>
    )
  }
}

export default Home;
