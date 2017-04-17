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
      options: [
        { value: 'flowField1', label: 'Flow Field 1', func: flowField1 },
        { value: 'flowField2', label: 'Flow Field 2', func: flowField2 },
        { value: 'flowField3', label: 'Flow Field 3', func: flowField3 },
        { value: 'flowField4', label: 'Flow Field 4', func: flowField4 },
        { value: 'flowField5', label: 'Flow Field 5', func: flowField5 }
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

export default Flowfield;
