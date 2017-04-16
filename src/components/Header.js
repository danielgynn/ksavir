import React, { Component } from 'react';

class Header extends Component {
  render() {
    return (
      <header className="flex flex-center flex-column">
        <h1>{this.props.heading}</h1>
      </header>
    )
  }
}

export default Header;
