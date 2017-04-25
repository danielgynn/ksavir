import React, { Component } from 'react';
import { Link } from 'react-router-dom';
import Header from '../components/Header';

class Home extends Component {
  constructor(props) {
		super(props);
		this.state = {
      heading: 'Ksavir',
      subhead: 'A Generative Art Project by Daniel Gynn.'
		};
	}

  render() {
    return (
      <div className="">
        <main id="main" className="home-page index flex flex-center flex-column">
          <h1 className="app-title fadeIn mx2">{this.state.heading}</h1>
          <h3 className="fadeIn mx1">{this.state.subhead}</h3>
          <nav className="fadeIn m1">
            <Link to="/about" className="">About</Link>
            <Link to="/gallery" className="">Gallery</Link>
            <Link to="/generators" className="">Generators</Link>
          </nav>
        </main>
      </div>
    )
  }
}

export default Home;
