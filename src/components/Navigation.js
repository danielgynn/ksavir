import React, { Component } from 'react';
import { Link } from 'react-router-dom';

class Navigation extends Component {
  render() {
    return (
      <nav className="flex flex-space">
        <Link to="/"><h1>Ksavir</h1></Link>

        <div>
          <Link to="/sketches">Sketches</Link>
        </div>
      </nav>
    )
  }
}

export default Navigation;
