import React, { Component } from 'react';

class Header extends Component {
  render() {
    return (
      <header className="flex flex-center flex-column">
        <h1>{this.props.heading}</h1>
        <p>{this.props.subhead}</p>
      </header>
    )
  }
}

export default Header;
