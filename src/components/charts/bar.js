import React, { Component } from 'react'
import ReactDOM from 'react-dom'

import Chart from './chart-abstract'

import {
  pureRandom,
  configurableRandom,
  balanceSimulation,
  symbolsAnalysis
} from '../../constants/bar/default-options-bar'

import {
  modes,
  initialState,
  optionsPureRandom,
  optionsConfigurableRandom,
  optionsBalanceSimulation,
  optionsSymbolsAnalysis
} from '../../constants/bar/modes-options-bar'

import {
  generateSeriesForPureRandom,
  generateSeriesForConfigurableRandom,
  generateCategoriesConfigurableRandom,
  generateSeriesForBalanceSimulation,
  newPointsToBalanceSimulation,
  collectPointsAndCategories,
  generateSeriesForSymbolsAnalysis,
  sortAndCutPoints
} from '../../constants/bar/data-helpers-bar'


export default class Bar extends Component {
  constructor(props) {
    super(props);
    this.state = initialState;

    this.dropdownClickHandler = this.dropdownClickHandler.bind(this);
    this.updatePureRandomConfiguration = this.updatePureRandomConfiguration.bind(this);
    this.updateBalanceSimulationConfiguration = this.updateBalanceSimulationConfiguration.bind(this);
    this.updateConfigurableRandomConfiguration = this.updateConfigurableRandomConfiguration.bind(this);
    this.updateSymbolsAnalysisConfiguration = this.updateSymbolsAnalysisConfiguration.bind(this);
    this.onPureRandomCheckBoxChange = this.onPureRandomCheckBoxChange.bind(this);
    this.onConfigurableRandomInputChange = this.onConfigurableRandomInputChange.bind(this);
    this.onBalanceSimulationInputChange = this.onBalanceSimulationInputChange.bind(this);
    this.onSymbolAnalysisInputChange = this.onSymbolAnalysisInputChange.bind(this);
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

  initBalanceSimulationMode() {
    let options = balanceSimulation;
    const { initIncome, initExpenses } = this.state.configurations.balanceSimulation;
    options.series = generateSeriesForBalanceSimulation(initIncome, initExpenses);
    this.setState({ options }, () => {
      this.updateBalanceSimulationConfiguration();
    });
  }

  initSymbolsAnalysisMode() {
    let options = symbolsAnalysis;

    this.setState({ options }, () => {
      this.updateSymbolsAnalysisConfiguration();
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

  updateBalanceSimulationConfiguration(event) {
    const { configurations, options } = this.state;
    const {
      isRunning,
      initIncome,
      initExpenses
    } = configurations.balanceSimulation;
    if (event) {
      if (isRunning) {
        configurations.balanceSimulation.isRunning = false;
        this.setState({ options, configurations, rerenderChart: true }, () => {
          this.setState({ rerenderChart: false });
        });
      } else {
        options.series = generateSeriesForBalanceSimulation(initIncome, initExpenses);
        configurations.balanceSimulation.isRunning = true;
        this.setState({ configurations }, () => {
          this.addPointsToBalanceSimulation();
        });
      }
    } else {
      this.setState({ options, rerenderChart: true }, () => {
        this.setState({ rerenderChart: false });
      });
    }
  }

  updateSymbolsAnalysisConfiguration() {
    const { options, configurations } = this.state;
    const { text, limit, filter, caseSensitive } = configurations.symbolsAnalysis;

    const rawData = collectPointsAndCategories(text, caseSensitive, filter);
    const { points, categories } = sortAndCutPoints(rawData, limit);

    options.series = generateSeriesForSymbolsAnalysis(points);
    options.xAxis.categories = categories;

    this.setState({ options, rerenderChart: true }, () => {
      this.setState({ rerenderChart: false })
    })
  }

  addPointsToBalanceSimulation() {
    const { configurations, options } = this.state;
    const {
      isRunning,
      incomeProbability,
      expensesProbability
    } = configurations.balanceSimulation;
    if (isRunning) {
      if (options.series[0].data.length < 12) {
        options.series = newPointsToBalanceSimulation(options.series, incomeProbability, expensesProbability);
        setTimeout(() => this.addPointsToBalanceSimulation(), 5000);
        this.setState({ options, rerenderChart: true }, () => {
          this.setState({ rerenderChart: false });
        });
      } else {
        configurations.balanceSimulation.isRunning = false;
        this.setState({ configurations });
      }
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
      case modes.balanceSimulation: {
        this.initBalanceSimulationMode();
        break;
      }
      case modes.symbolsAnalysis: {
        this.initSymbolsAnalysisMode();
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

  onBalanceSimulationInputChange(event) {
    const { configurations } = this.state;
    if (Number(event.target.value) <= 0) {
      configurations.balanceSimulation[event.target.name] = 0;
    } else {
      configurations.balanceSimulation[event.target.name] = Math.floor(Number(event.target.value));
    }
    if (event.target.dataset.type === "percent") {
      if (Number(event.target.value) > 100) {
        configurations.balanceSimulation[event.target.name] = 100;
      } else {
        configurations.balanceSimulation[event.target.name] = Math.floor(Number(event.target.value));
      }
    }
    this.setState({ configurations });
  }

  onSymbolAnalysisInputChange(event) {
    const { configurations } = this.state;
    if (event.target.name === "limit") {
      const tempValue = parseInt(event.target.value, 10);
      configurations.symbolsAnalysis[event.target.name] = tempValue < 1 || isNaN(tempValue)
        ? 1
        : tempValue;
    } else if (event.target.name === "caseSensitive") {
      const currentState = configurations.symbolsAnalysis[event.target.name];
      configurations.symbolsAnalysis[event.target.name] = currentState ? false : true;
    } else {
      configurations.symbolsAnalysis[event.target.name] = event.target.value;
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
          <li><a onClick={this.dropdownClickHandler}>{modes.balanceSimulation}</a></li>
          <li className="divider"></li>
          <li className="dropdown-header">Text Analysis</li>
          <li><a onClick={this.dropdownClickHandler}>{modes.symbolsAnalysis}</a></li>
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

  renderBalanceSimulationModeConfiguration() {
    const { balanceSimulation } = this.state.configurations;
    return (
      <div className="balance-simulation">
        <div className="form-group config-option">
          <label>Initial Income ($)</label>
            <input type="number"
                   className="form-control"
                   name={optionsBalanceSimulation.initIncome}
                   value={balanceSimulation.initIncome}
                   onChange={this.onBalanceSimulationInputChange}/>
        </div>
        <div className="form-group config-option">
          <label>Initial Expenses ($)</label>
            <input type="number"
                   className="form-control"
                   name={optionsBalanceSimulation.initExpenses}
                   value={balanceSimulation.initExpenses}
                   onChange={this.onBalanceSimulationInputChange}/>
        </div>
        <div className="form-group config-option">
          <label>Income change probability (%)</label>
            <input type="number"
                   className="form-control"
                   data-type="percent"
                   name={optionsBalanceSimulation.incomeProbability}
                   value={balanceSimulation.incomeProbability}
                   onChange={this.onBalanceSimulationInputChange}/>
        </div>
        <div className="form-group config-option">
          <label>Expenses change probability (%)</label>
            <input type="number"
                   data-type="percent"
                   className="form-control"
                   name={optionsBalanceSimulation.expensesProbability}
                   value={balanceSimulation.expensesProbability}
                   onChange={this.onBalanceSimulationInputChange}/>
        </div>

        {
          balanceSimulation.isRunning ?
          (
            <button
              type="button"
              className="btn btn-danger apply-button position-dynamic"
              onClick={this.updateBalanceSimulationConfiguration}>
              Stop Simulation
            </button>
          )
          :
          (
            <button
              type="button"
              className="btn btn-success apply-button position-dynamic"
              onClick={this.updateBalanceSimulationConfiguration}>
              Start Simulation
            </button>
          )
        }
      </div>
    );
  }

  renderSymbolsAnalysisModeConfiguration() {
    const { symbolsAnalysis } = this.state.configurations;
    return (
      <div className="symbols-analysis">
        <div className="form-group config-option">
          <label>Text for analysis</label>
            <textarea className="form-control input-textarea"
                   name={optionsSymbolsAnalysis.text}
                   value={symbolsAnalysis.text}
                   onChange={this.onSymbolAnalysisInputChange}/>
        </div>

        <div className="row basic-config">
          <div className="col-md-6">
            <div className="form-group config-option">
              <label>Number of Chars</label>
                <input type="number"
                       className="form-control"
                       name={optionsSymbolsAnalysis.limit}
                       value={symbolsAnalysis.limit}
                       onChange={this.onSymbolAnalysisInputChange}/>
            </div>
          </div>
          <div className="col-md-6">
            <div className="form-group config-option">
              <label>Filter Next Chars</label>
                <input type="text"
                       className="form-control"
                       name={optionsSymbolsAnalysis.filter}
                       value={symbolsAnalysis.filter}
                       onChange={this.onSymbolAnalysisInputChange}/>
            </div>
          </div>
        </div>

        <div className="checkbox">
          <label><input type="checkbox"
                        value={optionsSymbolsAnalysis.caseSensitive}
                        name={optionsSymbolsAnalysis.caseSensitive}
                        checked={symbolsAnalysis.caseSensitive}
                        onChange={this.onSymbolAnalysisInputChange}/>Case Sensitive</label>
        </div>

        <button
          type="button"
          className="btn btn-success apply-button position-dynamic"
          onClick={this.updateSymbolsAnalysisConfiguration}>
          Results
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
      case modes.balanceSimulation: {
        return this.renderBalanceSimulationModeConfiguration();
      }
      case modes.symbolsAnalysis: {
        return this.renderSymbolsAnalysisModeConfiguration();
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
