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
      options: [
        { value: 'sandsplines1', label: 'Sandsplines 1', func: sandsplines1 },
        { value: 'sandsplines2', label: 'Sandsplines 2', func: sandsplines2 },
        { value: 'sandsplines3', label: 'Sandsplines 3', func: sandsplines3 },
        { value: 'sandsplines4', label: 'Sandsplines 4', func: sandsplines4 }
      ]
		};
	}

  changeSketch(val) {
    this.setState({
      sketchValue: val.func,
      value: val.value
    });
  }

  render() {
    return (
      <div>
        <Navigation />

        <main>
          <Header heading={this.state.heading} subhead={this.state.subhead}/>
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
