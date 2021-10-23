import React, { Component } from 'react';

import Chart from './chart-abstract';

export default class Playground extends Component {
  constructor(props) {
    super(props);
    this.state = {
      options: this.generateInitialOptions(),
    };
    this.editor = undefined;

    this.updateChartBasedOnJSON = this.updateChartBasedOnJSON.bind(this);
  }

  generateInitialOptions() {
    const generateRandomData = count => {
      const result = [];
      for (let i = 0; i < count; i += 1) {
        const randValue = Math.random() * 1000;
        result.push(Math.round(randValue * 100) / 100);
      }
      return result;
    };

    return {
      title: {
        text: 'Simple example',
      },
      series: [
        {
          name: 'Serie 1',
          data: generateRandomData(10),
        },
        {
          name: 'Serie 2',
          data: generateRandomData(10),
        },
        {
          name: 'Serie 3',
          data: generateRandomData(10),
        },
      ],
    };
  }

  componentDidMount() {
    var container = document.getElementById('jsoneditor');
    var options = {
      mode: 'code',
    };
    this.editor = new JSONEditor(container, options);
    this.editor.set(this.state.options);
  }

  updateChartBasedOnJSON() {
    try {
      const newOptions = this.editor.get();
      this.setState({ options: newOptions, rerenderChart: true }, () => {
        this.setState({ rerenderChart: false });
      });
    } catch (e) {
      alert('Your JSON has some errors. Please check your input and try again.');
    }
  }

  renderConfigurationsArea() {
    return (
      <div className="other-clock-container">
        <div className="checkboxes other-clock">
          <div id="jsoneditor"></div>
        </div>
        <button
          type="button"
          className="btn btn-success apply-button position-dynamic"
          onClick={this.updateChartBasedOnJSON}
        >
          Apply
        </button>
      </div>
    );
  }

  render() {
    console.log('other state: ', this.state);
    return (
      <div className="playground" key={`other-chart-${this.state.currentMode}`}>
        <div className="row">
          <div className="col-sm-4">
            <div className="configuration-area">{this.renderConfigurationsArea()}</div>
          </div>

          <div className="col-sm-8 chart-area">
            <Chart
              container={'playground-chart'}
              options={this.state.options}
              update={this.state.rerenderChart}
            />
          </div>
        </div>
      </div>
    );
  }
}
