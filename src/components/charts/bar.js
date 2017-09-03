import React, { Component } from 'react'
import ReactDOM from 'react-dom'

import Chart from './chart-abstract'

import {
  pureRandom,
  configurableRandom,
} from '../../constants/bar/default-options-bar'

import {
  modes,
  initialState,
  optionsPureRandom,
  optionsConfigurableRandom,
} from '../../constants/bar/modes-options-bar'

import {
  generateSeriesForPureRandom,
  generateSeriesForConfigurableRandom,
  generateCategoriesConfigurableRandom
} from '../../constants/bar/data-helpers-bar'


export default class Bar extends Component {
  constructor(props) {
    super(props);
    this.state = initialState;

    this.dropdownClickHandler = this.dropdownClickHandler.bind(this);
    this.updatePureRandomConfiguration = this.updatePureRandomConfiguration.bind(this);
    this.updateConfigurableRandomConfiguration = this.updateConfigurableRandomConfiguration.bind(this);
    this.onPureRandomCheckBoxChange = this.onPureRandomCheckBoxChange.bind(this);
    this.onConfigurableRandomInputChange = this.onConfigurableRandomInputChange.bind(this);
  }

  componentDidMount() {
    this.initPureRandomeMode();
  }

  initPureRandomeMode() {
    let options = pureRandom;
    options.series = generateSeriesForPureRandom();
    this.setState({ options }, () => {
      this.updatePureRandomConfiguration();
    });
  }

  initConfigurableRandomeMode() {
    let options = configurableRandom;
    this.setState({ options }, () => {
      this.updateConfigurableRandomConfiguration();
    });
  }

  updatePureRandomConfiguration() {
    const { pureRandom } = this.state.configurations;
    const { options } = this.state;
    options.chart.type = pureRandom.vertical ? 'column' : 'bar';
    options.chart.zoomType = pureRandom.zoom ? 'xy' : null;
    options.title.text = pureRandom.title ? 'Randomly generated data' : null;
    options.subtitle.text = pureRandom.title ? 'Randomly generated data' : null;
    options.legend.enabled = pureRandom.legend;
    options.yAxis.title.text = pureRandom.yAxisTitle ? 'Random Value (UOM)' : null;
    if (pureRandom.vertical) {
      options.plotOptions.column.dataLabels.enabled = pureRandom.dataLabels;
      options.plotOptions.column.enableMouseTracking = pureRandom.tooltip;
    } else {
      options.plotOptions.bar.dataLabels.enabled = pureRandom.dataLabels;
      options.plotOptions.bar.enableMouseTracking = pureRandom.tooltip;
    }
    options.plotOptions.series.animation = pureRandom.animation;

    this.setState({ options, rerenderChart: true }, () => {
      this.setState({ rerenderChart: false })
    })
  }

  updateConfigurableRandomConfiguration() {
    const { configurableRandom } = this.state.configurations;
    const { options } = this.state;

    const series = generateSeriesForConfigurableRandom(configurableRandom);
    const categories = generateCategoriesConfigurableRandom(configurableRandom.categoriesNumber);
    options.series = series;
    options.xAxis.categories = categories;

    this.setState({ options, rerenderChart: true }, () => {
      this.setState({ rerenderChart: false })
    })
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
        console.log("lalala");
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
    } else {
      if (event.target.name === optionsConfigurableRandom.min) {
        if (Number(event.target.value) > configurations.configurableRandom[optionsConfigurableRandom.max]) {
          configurations.configurableRandom[event.target.name] = configurations.configurableRandom[optionsConfigurableRandom.max];
        } else {
          configurations.configurableRandom[event.target.name] = Math.floor(Number(event.target.value));
        }
      } else if (event.target.name === optionsConfigurableRandom.max) {
        if (Number(event.target.value) < configurations.configurableRandom[optionsConfigurableRandom.min]) {
          configurations.configurableRandom[event.target.name] = configurations.configurableRandom[optionsConfigurableRandom.min];
        } else {
          configurations.configurableRandom[event.target.name] = Math.floor(Number(event.target.value));
        }
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
          // <li><a onClick={this.dropdownClickHandler}>{modes.stockSimulation}</a></li>
          <li className="divider"></li>
          <li className="dropdown-header">Functions Visualization</li>
          // <li><a onClick={this.dropdownClickHandler}>{modes.polinomials}</a></li>
          // <li><a onClick={this.dropdownClickHandler}>{modes.trigonometric}</a></li>
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
                        value={optionsPureRandom.vertical}
                        checked={pureRandom.vertical}
                        onChange={this.onPureRandomCheckBoxChange}/>Vertical</label>
        </div>
        <div className="checkbox">
          <label><input type="checkbox"
                        value={optionsPureRandom.title}
                        checked={pureRandom.title}
                        onChange={this.onPureRandomCheckBoxChange}/>Show Chart Title</label>
        </div>
        <div className="checkbox">
          <label><input type="checkbox"
                        value={optionsPureRandom.yAxisTitle}
                        checked={pureRandom.yAxisTitle}
                        onChange={this.onPureRandomCheckBoxChange}/>Show Axis Title</label>
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
                        value={optionsPureRandom.zoom}
                        checked={pureRandom.zoom}
                        onChange={this.onPureRandomCheckBoxChange}/>Enable Zoom</label>
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
        <div className="form-group config-option">
          <label>Number of categories</label>
            <input type="number"
                   data-type="positive"
                   className="form-control"
                   name={optionsConfigurableRandom.categoriesNumber}
                   value={configurableRandom.categoriesNumber}
                   onChange={this.onConfigurableRandomInputChange}/>
        </div>
        <div className="form-group config-option">
          <label>Min value</label>
            <input type="number"
                   className="form-control"
                   name={optionsConfigurableRandom.min}
                   value={configurableRandom.min}
                   onChange={this.onConfigurableRandomInputChange}/>
        </div>
        <div className="form-group config-option">
          <label>Max value</label>
            <input type="number"
                   className="form-control"
                   name={optionsConfigurableRandom.max}
                   value={configurableRandom.max}
                   onChange={this.onConfigurableRandomInputChange}/>
        </div>

        <button
          type="button"
          className="btn btn-success apply-button position-dynamic"
          onClick={this.updateConfigurableRandomConfiguration}>
          Apply
        </button>
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
      default: {
        return null;
      }
    }
  }

	render() {
    console.log("bar state: ", this.state);
    return(
			<div className="bar-page" key={`bar-chart-${this.state.currentMode}`}>
        <div className="row">
          <div className="col-sm-4">
            {this.renderOptionsDropdown()}
            <div className="configuration-area">
              {this.renderConfigurationsArea()}
            </div>
          </div>
          <div className="col-sm-8 chart-area">
            <Chart container={'bar-chart'}
                   options={this.state.options}
                   update={this.state.rerenderChart}/>
          </div>
        </div>
			</div>
		)
	}
}
