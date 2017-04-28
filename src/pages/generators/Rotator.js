import React, { Component } from 'react';
import P5Wrapper from 'react-p5-wrapper';
import Navigation from '../../components/Navigation';
import Header from '../../components/Header';
import Select from 'react-select';
import rotator1 from '../../sketches/rotator/rotator1';
import rotator2 from '../../sketches/rotator/rotator2';

class Rotator extends Component {
  constructor(props) {
		super(props);
    this.changeSketch = this.changeSketch.bind(this);
		this.state = {
      heading: 'Rotator',
      subhead: 'Reload the page to redraw the canvas, or press ENTER to save the output.',
      sketchValue: rotator2,
      value: 'rotator2',
      clearable: false,
      desc: 'Draws many lines and rotates them from a specific point to draw a 3D rotating circle.',
      options: [
        { value: 'rotator1', label: 'Rotator 1', func: rotator1, desc: 'Rotates the line from the centre to create a rotating 3D \'spoked\' wheel.' },
        { value: 'rotator2', label: 'Rotator 2', func: rotator2, desc: 'Draws many lines and rotates them from a specific point to draw a 3D rotating circle.' }
      ]
    };
	}

  changeSketch(val) {
    this.setState({
      sketchValue: val.func,
      value: val.value,
      desc: val.desc
    });
  }

  refreshPage() {
    window.location.reload();
  }

  render() {
    return (
      <div>
        <Navigation />

        <main className="wrap">
          <Header heading={this.state.heading} />
          <p>{this.state.subhead}</p>
          <p>{this.state.desc}</p>
          <div className="flex flex-space">
            <Select
              name="form-field-name"
              clearable={this.state.clearable}
              value={this.state.value}
              options={this.state.options}
              onChange={this.changeSketch}
            />
            <button onClick={this.refreshPage}>Refresh</button>
          </div>
          <section className="flex flex-center">
            <P5Wrapper sketch={this.state.sketchValue} />
          </section>
        </main>
      </div>
    )
  }
}

export default Rotator;
