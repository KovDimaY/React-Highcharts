import React, { Component } from 'react'
import ReactDOM from 'react-dom'

import Chart from './chart-abstract'

import {
  pureRandom,
  configurableRandom
} from '../../constants/pie/default-options-pie'

import {
  modes,
  initialState,
  optionsPureRandom,
  optionsConfigurableRandom
} from '../../constants/pie/modes-options-pie'

import {
  generateSeriesForPureRandom,
  generateSeriesForConfigurableRandom
} from '../../constants/pie/data-helpers-pie'

export default class Pie extends Component {
  constructor(props) {
    super(props);
    this.state = initialState;

    this.dropdownClickHandler = this.dropdownClickHandler.bind(this);
    this.updatePureRandomConfiguration = this.updatePureRandomConfiguration.bind(this);
    this.onPureRandomCheckBoxChange = this.onPureRandomCheckBoxChange.bind(this);
  }

  componentDidMount() {
    this.initPureRandomeMode();
  }

  initPureRandomeMode() {
    const options = pureRandom;

    options.series = generateSeriesForPureRandom();

    this.setState({ options }, () => {
      this.updatePureRandomConfiguration();
    });
  }

  initConfigurableRandomeMode() {
    const options = configurableRandom;

    this.setState({ options }, () => {
      this.updateConfigurableRandomConfiguration();
    });
  }

  updatePureRandomConfiguration() {
    const { pureRandom } = this.state.configurations;
    const { options } = this.state;

    options.title.text = pureRandom.title ? 'Randomly generated data' : null;
    options.subtitle.text = pureRandom.title ? 'Randomly generated data' : null;
    options.legend.enabled = pureRandom.legend;
    options.plotOptions.pie.dataLabels.enabled = pureRandom.dataLabels;
    options.tooltip.enabled = pureRandom.tooltip;
    options.plotOptions.series.animation = pureRandom.animation;
    options.chart.options3d.enabled = pureRandom.threeDimensions;
    options.plotOptions.pie.innerSize = pureRandom.donut ? '30%' : '0';

    this.setState({ options, rerenderChart: true }, () => {
      this.setState({ rerenderChart: false })
    })
  }

  updateConfigurableRandomConfiguration() {
    console.log("updateConfigurableRandomConfiguration")
  }

  dropdownClickHandler(input) {
    const mode = input.target.innerHTML;
    const { configurations } = this.state;
    switch (mode) {
      case modes.pureRandom: {
        this.initPureRandomeMode();
        break;
      }
      case modes.configurableRandom: {
        this.initConfigurableRandomeMode();
        break;
      }
      default: {
        console.log("This mode is not supported yet");
      }
    }
    this.setState({ currentMode: mode, configurations });
  }

  onPureRandomCheckBoxChange(event) {
    const { configurations } = this.state;
    if (configurations.pureRandom[event.target.value]) {
      configurations.pureRandom[event.target.value] = false;
    } else {
      configurations.pureRandom[event.target.value] = true;
    }
    this.setState({ configurations })
  }

  renderOptionsDropdown() {
    return (
      <div className="dropdown">
        <button className="btn btn-primary dropdown-toggle" type="button" data-toggle="dropdown">Configurations
        <span className="caret"></span></button>
        <ul className="dropdown-menu">
          <li className="dropdown-header">Random Data</li>
          <li><a onClick={this.dropdownClickHandler}>{modes.pureRandom}</a></li>
          <li><a onClick={this.dropdownClickHandler}>{modes.configurableRandom}</a></li>
          // <li><a onClick={this.dropdownClickHandler}>{modes.balanceSimulation}</a></li>
          <li className="divider"></li>
          <li className="dropdown-header">Text Analysis</li>
          // <li><a onClick={this.dropdownClickHandler}>{modes.symbolsAnalysis}</a></li>
          // <li><a onClick={this.dropdownClickHandler}>{modes.wordsAnalysis}</a></li>
          <li className="divider"></li>
          <li className="dropdown-header">Real World Data</li>
          // <li><a onClick={this.dropdownClickHandler}>{modes.interestingFacts}</a></li>
        </ul>
      </div>
    )
  }

  renderPureRandomModeConfiguration() {
    const { pureRandom } = this.state.configurations;
    return (
      <div className="pure-random">
        <div className="checkbox">
          <label><input type="checkbox"
                        value={optionsPureRandom.title}
                        checked={pureRandom.title}
                        onChange={this.onPureRandomCheckBoxChange}/>Show Chart Title</label>
        </div>
        <div className="checkbox">
          <label><input type="checkbox"
                        value={optionsPureRandom.dataLabels}
                        checked={pureRandom.dataLabels}
                        onChange={this.onPureRandomCheckBoxChange}/>Show Data Labels</label>
        </div>
        <div className="checkbox">
          <label><input type="checkbox"
                        value={optionsPureRandom.legend}
                        checked={pureRandom.legend}
                        onChange={this.onPureRandomCheckBoxChange}/>Show Legend</label>
        </div>
        <div className="checkbox">
          <label><input type="checkbox"
                        value={optionsPureRandom.tooltip}
                        checked={pureRandom.tooltip}
                        onChange={this.onPureRandomCheckBoxChange}/>Enable Tooltip</label>
        </div>
        <div className="checkbox">
          <label><input type="checkbox"
                        value={optionsPureRandom.donut}
                        checked={pureRandom.donut}
                        onChange={this.onPureRandomCheckBoxChange}/>Donut Mode</label>
        </div>
        <div className="checkbox">
          <label><input type="checkbox"
                        value={optionsPureRandom.threeDimensions}
                        checked={pureRandom.threeDimensions}
                        onChange={this.onPureRandomCheckBoxChange}/>3D Mode</label>
        </div>
        <div className="checkbox">
          <label><input type="checkbox"
                        value={optionsPureRandom.animation}
                        checked={pureRandom.animation}
                        onChange={this.onPureRandomCheckBoxChange}/>Enable Animation</label>
        </div>

        <button
          type="button"
          className="btn btn-success apply-button"
          onClick={this.updatePureRandomConfiguration}>
          Apply
        </button>
      </div>
    )
  }

  renderConfigurableRandomModeConfiguration() {
    console.log("renderConfigurableRandomModeConfiguration");
  }

  renderConfigurationsArea() {
    const { currentMode } = this.state;
    switch (currentMode) {
      case modes.pureRandom: {
        return this.renderPureRandomModeConfiguration();
      }
      case modes.configurableRandom: {
        return this.renderConfigurableRandomModeConfiguration();
      }
      default: {
        return null;
      }
    }
  }

  render() {
    console.log("pie state: ", this.state);
    return(
			<div className="pie-page" key={`pie-chart-${this.state.currentMode}`}>
        <div className="row">
          <div className="col-sm-4">
            {this.renderOptionsDropdown()}
            <div className="configuration-area">
              {this.renderConfigurationsArea()}
            </div>
          </div>
          <div className="col-sm-8 chart-area">
            <Chart container={'pie-chart'}
                   options={this.state.options}
                   update={this.state.rerenderChart}/>
          </div>
        </div>
			</div>
		)
	}
}
