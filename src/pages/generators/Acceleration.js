import React, { Component } from 'react';
import P5Wrapper from 'react-p5-wrapper';
import Navigation from '../../components/Navigation';
import Header from '../../components/Header';
import Select from 'react-select';
import acceleration1 from '../../sketches/acceleration/acceleration1';

class Acceleration extends Component {
  constructor(props) {
		super(props);
    this.changeSketch = this.changeSketch.bind(this);
		this.state = {
      heading: 'Acceleration',
      subhead: 'Reload the page to redraw, or press ENTER to save. You can use the select to view different iterations of this processor.',
      sketchValue: acceleration1,
      value: 'acceleration1',
      clearable: false,
      desc: '',
      options: [
        { value: 'acceleration1', label: 'Acceleration', func: acceleration1 }
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
          <Select
            name="form-field-name"
            clearable={this.state.clearable}
            value={this.state.value}
            options={this.state.options}
            onChange={this.changeSketch}
          />
          <section className="flex flex-center">
            <P5Wrapper sketch={this.state.sketchValue} />
          </section>
        </main>
      </div>
    )
  }
}

export default Acceleration;
