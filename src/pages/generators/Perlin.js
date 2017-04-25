import React, { Component } from 'react';
import P5Wrapper from 'react-p5-wrapper';
import Navigation from '../../components/Navigation';
import Header from '../../components/Header';
import perlin1 from '../../sketches/perlin/perlin1';
import perlin2 from '../../sketches/perlin/perlin2';
import Select from 'react-select';

class Perlin extends Component {
  constructor(props) {
		super(props);
    this.changeSketch = this.changeSketch.bind(this);
		this.state = {
      heading: 'Perlin Noise Generator',
      subhead: 'Reload the page to redraw, or press ENTER to save.',
      sketchValue: perlin1,
      value: 'perlin1',
      clearable: false,
      desc: '',
      options: [
        { value: 'perlin1', label: 'Perlin Noise Horizontal', func: perlin1 },
        { value: 'perlin2', label: 'Perlin Noise Vertical', func: perlin2, desc: '' }
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
          <Header heading={this.state.heading} subhead={this.state.subhead}/>
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

export default Perlin;
