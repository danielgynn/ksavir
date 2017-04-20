import React, { Component } from 'react';
import { Link } from 'react-router-dom';
import Header from '../components/Header';

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
      <div className="">
        <main id="main" className="home-page index flex flex-center flex-column">
          <h1 className="app-title fadeIn mx2">{this.state.heading}</h1>
          <h3 className="fadeIn mx1">{this.state.subhead}</h3>
          <p className="fadeIn m1">Check out the <Link to="/gallery">Gallery</Link>, the <Link to="/generators">Generators</Link> or <Link to="/about">Read More</Link> about the project.</p>
        </main>
      </div>
    )
  }
}

export default Home;
