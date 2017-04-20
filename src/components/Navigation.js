import React, { Component } from 'react';
import { Link } from 'react-router-dom';

class Navigation extends Component {
  render() {
    return (
      <nav className="flex flex-space flex-items">
        <div>
          <Link to="/" className="nav-title">Ksavir</Link>
        </div>

        <div>
          <Link to="/about">About</Link>
          <Link to="/gallery">Gallery</Link>
          <Link to="/generators">Generators</Link>
        </div>
      </nav>
    )
  }
}

export default Navigation;
