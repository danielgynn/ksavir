import React, { Component } from 'react';
import { Link } from 'react-router-dom';

class Generator extends Component {
  render() {
    return (
      <div className="py1">
        <Link to={this.props.link} className="gen-obj flex flex-column flex-grow">
          <h2 className="text-left">{this.props.title}</h2>
          <p>{this.props.desc}</p>
        </Link>
      </div>
    )
  }
}

export default Generator;
