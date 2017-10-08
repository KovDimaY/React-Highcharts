import React, { Component } from 'react'
import ReactDOM from 'react-dom'

import Chart from './chart-abstract'

import {
  pureRandom,
  configurableRandom,
  clusteringSimulation
} from '../../constants/pie/default-options-pie'

import {
  modes,
  initialState,
  optionsPureRandom,
  optionsConfigurableRandom,
  optionsClusteringSimulation
} from '../../constants/pie/modes-options-pie'

import {
  generateSeriesForPureRandom,
  generateSeriesForConfigurableRandom,
  generateSeriesForClusteringSimulation,
  newPointToClusteringSimulation
} from '../../constants/pie/data-helpers-pie'

export default class Pie extends Component {
  constructor(props) {
    super(props);
    this.state = initialState;

    this.dropdownClickHandler = this.dropdownClickHandler.bind(this);
    this.updatePureRandomConfiguration = this.updatePureRandomConfiguration.bind(this);
    this.updateConfigurableRandomConfiguration = this.updateConfigurableRandomConfiguration.bind(this);
    this.updateClusteringSimulationConfiguration = this.updateClusteringSimulationConfiguration.bind(this);
    this.onPureRandomCheckBoxChange = this.onPureRandomCheckBoxChange.bind(this);
    this.onConfigurableRandomInputChange = this.onConfigurableRandomInputChange.bind(this);
    this.onClusteringSimulationInputChange = this.onClusteringSimulationInputChange.bind(this);
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

  initClusteringSimulationMode() {
    const options = clusteringSimulation;

    this.setState({ options }, () => {
      this.updateClusteringSimulationConfiguration();
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
    const { configurableRandom } = this.state.configurations;
    const { options } = this.state;

    const series = generateSeriesForConfigurableRandom(configurableRandom);

    options.series = series;

    this.setState({ options, rerenderChart: true }, () => {
      this.setState({ rerenderChart: false })
    })
  }

  updateClusteringSimulationConfiguration(event) {
    const { configurations, options } = this.state;
    const {
      isRunning,
      maxNumber,
      clusterNumber
    } = configurations.clusteringSimulation;

    if (event) {
      if (isRunning) {
        configurations.clusteringSimulation.isRunning = false;
        this.setState({ options, configurations, rerenderChart: true }, () => {
          this.setState({ rerenderChart: false });
        });
      } else {
        options.series = generateSeriesForClusteringSimulation(maxNumber, clusterNumber);
        configurations.clusteringSimulation.isRunning = true;
        this.setState({ configurations }, () => {
          this.addPointsToClusteringSimulation();
        });
      }
    } else {
      this.setState({ options, rerenderChart: true }, () => {
        this.setState({ rerenderChart: false });
      });
    }
  }

  addPointsToClusteringSimulation() {
    const { configurations, options: oldOptions } = this.state;
    const {
      isRunning,
      maxNumber,
      clusterNumber,
      frequency
    } = configurations.clusteringSimulation;
    if (isRunning) {
      const options = newPointToClusteringSimulation(oldOptions, maxNumber, clusterNumber);
      setTimeout(() => this.addPointsToClusteringSimulation(), frequency * 1000);
      this.setState({ options, rerenderChart: true }, () => {
        this.setState({ rerenderChart: false });
      });
    }
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
      case modes.clusteringSimulation: {
        this.initClusteringSimulationMode();
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

  onConfigurableRandomInputChange(event) {
    const { configurations } = this.state;
    if (event.target.dataset.type === "positive") {
      if (Number(event.target.value) <= 1) {
        configurations.configurableRandom[event.target.name] = 1;
      } else {
        configurations.configurableRandom[event.target.name] = Math.floor(Number(event.target.value));
      }
    }

    this.setState({ configurations });
  }

  onClusteringSimulationInputChange(event) {
    const { configurations } = this.state;
    if (event.target.dataset.type === "positive") {
      if (Number(event.target.value) <= 1) {
        configurations.clusteringSimulation[event.target.name] = 1;
      } else {
        configurations.clusteringSimulation[event.target.name] = Math.floor(Number(event.target.value));
      }
    }

    this.setState({ configurations });
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
          <li><a onClick={this.dropdownClickHandler}>{modes.clusteringSimulation}</a></li>
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
    const { configurableRandom } = this.state.configurations;
    return (
      <div className="configurable-random">
        <div className="form-group config-option">
          <label>Number of series</label>
            <input type="number"
                   data-type="positive"
                   className="form-control"
                   name={optionsConfigurableRandom.seriesNumber}
                   value={configurableRandom.seriesNumber}
                   onChange={this.onConfigurableRandomInputChange}/>
        </div>

        <button
          type="button"
          className="btn btn-success apply-button"
          onClick={this.updateConfigurableRandomConfiguration}>
          Apply
        </button>
      </div>
    );
  }

  renderClusteringSimulationModeConfiguration() {
    const { clusteringSimulation } = this.state.configurations;
    return (
      <div className="clustering-simulation">
        <div className="form-group config-option">
          <label>Max number</label>
            <input type="number"
                   data-type="positive"
                   className="form-control"
                   name={optionsClusteringSimulation.maxNumber}
                   value={clusteringSimulation.maxNumber}
                   onChange={this.onClusteringSimulationInputChange}/>
        </div>
        <div className="form-group config-option">
          <label>Number of clusters</label>
            <input type="number"
                   data-type="positive"
                   className="form-control"
                   name={optionsClusteringSimulation.clusterNumber}
                   value={clusteringSimulation.clusterNumber}
                   onChange={this.onClusteringSimulationInputChange}/>
        </div>
        <div className="form-group config-option">
          <label>Frequency</label>
            <input type="number"
                   data-type="positive"
                   className="form-control"
                   name={optionsClusteringSimulation.frequency}
                   value={clusteringSimulation.frequency}
                   onChange={this.onClusteringSimulationInputChange}/>
        </div>

        {
          clusteringSimulation.isRunning ?
          (
            <button
              type="button"
              className="btn btn-danger apply-button position-dynamic"
              onClick={this.updateClusteringSimulationConfiguration}>
              Stop Simulation
            </button>
          )
          :
          (
            <button
              type="button"
              className="btn btn-success apply-button position-dynamic"
              onClick={this.updateClusteringSimulationConfiguration}>
              Start Simulation
            </button>
          )
        }
      </div>
    );
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
      case modes.clusteringSimulation: {
        return this.renderClusteringSimulationModeConfiguration();
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
