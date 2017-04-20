import React, { Component } from 'react';
import P5Wrapper from 'react-p5-wrapper';
import Navigation from '../../components/Navigation';
import Header from '../../components/Header';
import Select from 'react-select';
import flowField1 from '../../sketches/flowfield/flow-field1';
import flowField2 from '../../sketches/flowfield/flow-field2';
import flowField3 from '../../sketches/flowfield/flow-field3';
import flowField4 from '../../sketches/flowfield/flow-field4';
import flowField5 from '../../sketches/flowfield/flow-field5';

class Flowfield extends Component {
  constructor(props) {
		super(props);
    this.changeSketch = this.changeSketch.bind(this);
		this.state = {
      heading: 'Perlin Flow Field',
      subhead: 'Reload the page to redraw, or press ENTER to save. You can use the select to view different iterations of this processor.',
      sketchValue: flowField5,
      value: 'flowField5',
      clearable: false,
      desc: 'The final iteration shows a fully working Perlin Noise Flow Field. The particles jump from one location to another randomly and render their opacity as they go.',
      options: [
        { value: 'flowField1', label: 'Flow Field 1', func: flowField1 },
        { value: 'flowField2', label: 'Flow Field 2', func: flowField2, desc: 'The second iteration shows the particle system on top of the Perlin Noise Flow. The particle system will be later used to generate the visual aspects of this piece, whereas the background noise will not be rendered as a line, but there purely to give the flowing effect.' },
        { value: 'flowField3', label: 'Flow Field 3', func: flowField3 },
        { value: 'flowField4', label: 'Flow Field 4', func: flowField4 },
        { value: 'flowField5', label: 'Flow Field 5', func: flowField5, desc: 'The final iteration shows a fully working Perlin Noise Flow Field. The particles jump from one location to another randomly and render their opacity as they go.' }
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

export default Flowfield;
