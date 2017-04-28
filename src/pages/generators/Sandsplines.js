import React, { Component } from 'react';
import P5Wrapper from 'react-p5-wrapper';
import Navigation from '../../components/Navigation';
import Header from '../../components/Header';
import Select from 'react-select';
import sandsplines1 from '../../sketches/sandsplines/sandsplines1';
import sandsplines2 from '../../sketches/sandsplines/sandsplines2';
import sandsplines3 from '../../sketches/sandsplines/sandsplines3';
import sandsplines4 from '../../sketches/sandsplines/sandsplines4';

class Sandsplines extends Component {
  constructor(props) {
		super(props);
    this.changeSketch = this.changeSketch.bind(this);
		this.state = {
      heading: 'Sandsplines',
      subhead: 'Reload the page to redraw, or press ENTER to save.',
      sketchValue: sandsplines4,
      value: 'sandsplines4',
      clearable: false,
      desc: 'The final iteration shows an array of blue sandsplines, gradually increasing in noise values to produce some successful splines.',
      options: [
        { value: 'sandsplines1', label: 'Sandsplines 1', func: sandsplines1, desc: 'The first iteration shows a rainbow of coloured sandsplines with highly erratic noise values towards the end of the spline.' },
        { value: 'sandsplines2', label: 'Sandsplines 2', func: sandsplines2, desc: 'The second iteration shows yellow sandsplines with an increase of erratic behaviour. This iteration somewhat resembles ancient calligraphy.' },
        { value: 'sandsplines3', label: 'Sandsplines 3', func: sandsplines3, desc: 'The third iteration shows a vastly incomprehensible array of sandsplines, with a much-too-high noise value.' },
        { value: 'sandsplines4', label: 'Sandsplines 4', func: sandsplines4, desc: 'The final iteration shows an array of blue sandsplines, gradually increasing in noise values to produce some successful splines.' }
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

  render() {
    return (
      <div>
        <Navigation />

        <main className="wrap">
          <Header heading={this.state.heading} />
          <p>{this.state.subhead}</p>
          <p>{this.state.desc}</p>
          <div className="wrap">
            <Select
              name="form-field-name"
              clearable={this.state.clearable}
              value={this.state.value}
              options={this.state.options}
              onChange={this.changeSketch}
            />
          </div>
          <section className="flex flex-center">
            <P5Wrapper sketch={this.state.sketchValue} />
          </section>
        </main>
      </div>
    )
  }
}

export default Sandsplines;
