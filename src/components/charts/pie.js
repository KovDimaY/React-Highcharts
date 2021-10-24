import React, { Component } from 'react';

import Chart from './chart-abstract';
import Tooltip from '../tooltip';

import {
  pureRandom,
  configurableRandom,
  clusteringSimulation,
  primeFactorization,
  irrationalAnalysis,
  interestingFactsOne,
} from '../../constants/pie/default-options-pie';

import {
  modes,
  tooltips,
  initialState,
  optionsPureRandom,
  optionsConfigurableRandom,
  optionsClusteringSimulation,
  optionsPrimeFactorization,
  optionsIrrationalAnalysis,
  optionsInterestingFacts,
} from '../../constants/pie/modes-options-pie';

import {
  generateSeriesForPureRandom,
  generateSeriesForConfigurableRandom,
  generateSeriesForClusteringSimulation,
  newPointToClusteringSimulation,
  generateSeriesForPrimeFactorization,
  generateSeriesForIrrationalAnalysis,
} from '../../constants/pie/data-helpers-pie';

import { limitNumericalInput } from '../../constants/shared/helpers';

export default class Pie extends Component {
  constructor(props) {
    super(props);
    this.state = initialState;

    this.dropdownClickHandler = this.dropdownClickHandler.bind(this);
    this.updatePureRandomConfiguration = this.updatePureRandomConfiguration.bind(this);
    this.updateConfigurableRandomConfiguration = this.updateConfigurableRandomConfiguration.bind(
      this
    );
    this.updateClusteringSimulationConfiguration = this.updateClusteringSimulationConfiguration.bind(
      this
    );
    this.updatePrimeFactorizationConfiguration = this.updatePrimeFactorizationConfiguration.bind(
      this
    );
    this.updateIrrationalAnalysisConfiguration = this.updateIrrationalAnalysisConfiguration.bind(
      this
    );
    this.onPureRandomCheckBoxChange = this.onPureRandomCheckBoxChange.bind(this);
    this.onConfigurableRandomInputChange = this.onConfigurableRandomInputChange.bind(this);
    this.onClusteringSimulationInputChange = this.onClusteringSimulationInputChange.bind(this);
    this.onPrimeFactorizationInputChange = this.onPrimeFactorizationInputChange.bind(this);
    this.onIrrationalAnalysisInputChange = this.onIrrationalAnalysisInputChange.bind(this);
    this.onInterestingFactsRadioChange = this.onInterestingFactsRadioChange.bind(this);
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

  initPrimeFactorizationMode() {
    const options = primeFactorization;

    this.setState({ options }, () => {
      this.updatePrimeFactorizationConfiguration();
    });
  }

  initIrrationalAnalysisMode() {
    const options = irrationalAnalysis;

    this.setState({ options }, () => {
      this.updateIrrationalAnalysisConfiguration();
    });
  }

  initInterestingFactsMode() {
    const options = interestingFactsOne;

    this.setState({ options, rerenderChart: true }, () => {
      this.setState({ rerenderChart: false });
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
      this.setState({ rerenderChart: false });
    });
  }

  updateConfigurableRandomConfiguration() {
    const { configurableRandom } = this.state.configurations;
    const { options } = this.state;

    const series = generateSeriesForConfigurableRandom(configurableRandom);

    options.series = series;

    this.setState({ options, rerenderChart: true }, () => {
      this.setState({ rerenderChart: false });
    });
  }

  updateClusteringSimulationConfiguration(event) {
    const { configurations, options } = this.state;
    const { isRunning, maxNumber, clusterNumber } = configurations.clusteringSimulation;

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

  updatePrimeFactorizationConfiguration() {
    const { primeFactorization } = this.state.configurations;
    const { options: oldOptions } = this.state;

    const options = generateSeriesForPrimeFactorization(oldOptions, primeFactorization);

    this.setState({ options, rerenderChart: true }, () => {
      this.setState({ rerenderChart: false });
    });
  }

  updateIrrationalAnalysisConfiguration() {
    const { irrationalAnalysis } = this.state.configurations;
    const { options: oldOptions } = this.state;

    const options = generateSeriesForIrrationalAnalysis(oldOptions, irrationalAnalysis);

    this.setState({ options, rerenderChart: true }, () => {
      this.setState({ rerenderChart: false });
    });
  }

  addPointsToClusteringSimulation() {
    const { configurations, options: oldOptions } = this.state;
    const { isRunning, maxNumber, clusterNumber, frequency } = configurations.clusteringSimulation;
    if (isRunning) {
      const options = newPointToClusteringSimulation(oldOptions, maxNumber, clusterNumber);
      setTimeout(() => this.addPointsToClusteringSimulation(), frequency * 1000);
      this.setState({ options, rerenderChart: true }, () => {
        this.setState({ rerenderChart: false });
      });
    }
  }

  dropdownClickHandler(mode) {
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
      case modes.primeFactorization: {
        this.initPrimeFactorizationMode();
        break;
      }
      case modes.irrationalAnalysis: {
        this.initIrrationalAnalysisMode();
        break;
      }
      case modes.interestingFacts: {
        this.initInterestingFactsMode();
        break;
      }
      default: {
        console.log('This is impossible to achieve');
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
    this.setState({ configurations });
  }

  onConfigurableRandomInputChange(event) {
    const { configurations } = this.state;
    if (event.target.dataset.type === 'positive') {
      limitNumericalInput(
        configurations.configurableRandom,
        event.target.name,
        event.target.value,
        1,
        20,
        true
      );
    }

    this.setState({ configurations });
  }

  onClusteringSimulationInputChange(event) {
    const { configurations } = this.state;
    if (event.target.dataset.type === 'max-number') {
      limitNumericalInput(
        configurations.clusteringSimulation,
        event.target.name,
        event.target.value,
        1,
        1000000,
        false
      );
    } else if (event.target.dataset.type === 'clusters') {
      limitNumericalInput(
        configurations.clusteringSimulation,
        event.target.name,
        event.target.value,
        1,
        10,
        true
      );
    } else if (event.target.dataset.type === 'frequency') {
      limitNumericalInput(
        configurations.clusteringSimulation,
        event.target.name,
        event.target.value,
        1,
        5,
        true
      );
    }

    this.setState({ configurations });
  }

  onPrimeFactorizationInputChange(event) {
    const { configurations } = this.state;
    if (event.target.dataset.type === 'positive') {
      limitNumericalInput(
        configurations.primeFactorization,
        event.target.name,
        event.target.value,
        2,
        1000000000,
        true
      );
    }

    this.setState({ configurations });
  }

  onIrrationalAnalysisInputChange(event) {
    const { configurations } = this.state;
    if (event.target.dataset.type === 'positive') {
      limitNumericalInput(
        configurations.irrationalAnalysis,
        event.target.name,
        event.target.value,
        1,
        1000000,
        true
      );
    }

    this.setState({ configurations });
  }

  onInterestingFactsRadioChange(event) {
    const { configurations } = this.state;
    let options = configurations.interestingFacts[event.target.name];

    configurations.interestingFacts.current = event.target.name;

    this.setState({ configurations, options, rerenderChart: true }, () => {
      this.setState({ rerenderChart: false });
    });
  }

  renderOptionsDropdown() {
    return (
      <div className="dropdown">
        <button className="btn btn-primary dropdown-toggle" type="button" data-toggle="dropdown">
          Configurations&nbsp;
          <span className="caret"></span>
        </button>
        <ul className="dropdown-menu">
          <li className="dropdown-header">Random Data</li>
          <li className="dropdown-menu__item">
            <span onClick={() => this.dropdownClickHandler(modes.pureRandom)}>
              {modes.pureRandom}
              <Tooltip text={tooltips.pureRandom} addClass="dropdown-menu__help" />
            </span>
          </li>
          <li className="dropdown-menu__item">
            <span onClick={() => this.dropdownClickHandler(modes.configurableRandom)}>
              {modes.configurableRandom}
              <Tooltip text={tooltips.configurableRandom} addClass="dropdown-menu__help" />
            </span>
          </li>
          <li className="dropdown-menu__item">
            <span onClick={() => this.dropdownClickHandler(modes.clusteringSimulation)}>
              {modes.clusteringSimulation}
              <Tooltip text={tooltips.clusteringSimulation} addClass="dropdown-menu__help" />
            </span>
          </li>
          <li className="divider"></li>
          <li className="dropdown-header">Analysis Section</li>
          <li className="dropdown-menu__item">
            <span onClick={() => this.dropdownClickHandler(modes.primeFactorization)}>
              {modes.primeFactorization}
              <Tooltip text={tooltips.primeFactorization} addClass="dropdown-menu__help" />
            </span>
          </li>
          <li className="dropdown-menu__item">
            <span onClick={() => this.dropdownClickHandler(modes.irrationalAnalysis)}>
              {modes.irrationalAnalysis}
              <Tooltip text={tooltips.irrationalAnalysis} addClass="dropdown-menu__help" />
            </span>
          </li>
          <li className="divider"></li>
          <li className="dropdown-header">Real World Data</li>
          <li className="dropdown-menu__item">
            <span onClick={() => this.dropdownClickHandler(modes.interestingFacts)}>
              {modes.interestingFacts}
              <Tooltip text={tooltips.interestingFacts} addClass="dropdown-menu__help" />
            </span>
          </li>
        </ul>
      </div>
    );
  }

  renderPureRandomModeConfiguration() {
    const { pureRandom } = this.state.configurations;
    return (
      <div className="pure-random">
        <div className="checkbox">
          <label>
            <input
              type="checkbox"
              value={optionsPureRandom.title}
              checked={pureRandom.title}
              onChange={this.onPureRandomCheckBoxChange}
            />
            Show Chart Title
          </label>
        </div>
        <div className="checkbox">
          <label>
            <input
              type="checkbox"
              value={optionsPureRandom.dataLabels}
              checked={pureRandom.dataLabels}
              onChange={this.onPureRandomCheckBoxChange}
            />
            Show Data Labels
          </label>
        </div>
        <div className="checkbox">
          <label>
            <input
              type="checkbox"
              value={optionsPureRandom.legend}
              checked={pureRandom.legend}
              onChange={this.onPureRandomCheckBoxChange}
            />
            Show Legend
          </label>
        </div>
        <div className="checkbox">
          <label>
            <input
              type="checkbox"
              value={optionsPureRandom.tooltip}
              checked={pureRandom.tooltip}
              onChange={this.onPureRandomCheckBoxChange}
            />
            Enable Tooltip
          </label>
        </div>
        <div className="checkbox">
          <label>
            <input
              type="checkbox"
              value={optionsPureRandom.donut}
              checked={pureRandom.donut}
              onChange={this.onPureRandomCheckBoxChange}
            />
            Donut Mode
          </label>
        </div>
        <div className="checkbox">
          <label>
            <input
              type="checkbox"
              value={optionsPureRandom.threeDimensions}
              checked={pureRandom.threeDimensions}
              onChange={this.onPureRandomCheckBoxChange}
            />
            3D Mode
          </label>
        </div>
        <div className="checkbox">
          <label>
            <input
              type="checkbox"
              value={optionsPureRandom.animation}
              checked={pureRandom.animation}
              onChange={this.onPureRandomCheckBoxChange}
            />
            Enable Animation
          </label>
        </div>

        <button
          type="button"
          className="btn btn-success apply-button"
          onClick={this.updatePureRandomConfiguration}
        >
          Apply
        </button>
      </div>
    );
  }

  renderConfigurableRandomModeConfiguration() {
    const { configurableRandom } = this.state.configurations;
    return (
      <div className="configurable-random">
        <div className="form-group config-option">
          <label>Number of series</label>
          <input
            type="number"
            data-type="positive"
            className="form-control"
            name={optionsConfigurableRandom.seriesNumber}
            value={configurableRandom.seriesNumber}
            onChange={this.onConfigurableRandomInputChange}
          />
        </div>

        <button
          type="button"
          className="btn btn-success apply-button"
          onClick={this.updateConfigurableRandomConfiguration}
        >
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
          <input
            type="number"
            data-type="max-number"
            className="form-control"
            name={optionsClusteringSimulation.maxNumber}
            value={clusteringSimulation.maxNumber}
            onChange={this.onClusteringSimulationInputChange}
          />
        </div>
        <div className="form-group config-option">
          <label>Number of clusters</label>
          <input
            type="number"
            data-type="clusters"
            className="form-control"
            name={optionsClusteringSimulation.clusterNumber}
            value={clusteringSimulation.clusterNumber}
            onChange={this.onClusteringSimulationInputChange}
          />
        </div>
        <div className="form-group config-option">
          <label>Frequency</label>
          <input
            type="number"
            data-type="frequency"
            className="form-control"
            name={optionsClusteringSimulation.frequency}
            value={clusteringSimulation.frequency}
            onChange={this.onClusteringSimulationInputChange}
          />
        </div>

        {clusteringSimulation.isRunning ? (
          <button
            type="button"
            className="btn btn-danger apply-button position-dynamic"
            onClick={this.updateClusteringSimulationConfiguration}
          >
            Stop Simulation
          </button>
        ) : (
          <button
            type="button"
            className="btn btn-success apply-button position-dynamic"
            onClick={this.updateClusteringSimulationConfiguration}
          >
            Start Simulation
          </button>
        )}
      </div>
    );
  }

  renderPrimeFactorizationModeConfiguration() {
    const { primeFactorization } = this.state.configurations;
    return (
      <div className="prime-factorization">
        <div className="form-group config-option">
          <label>Number for factorization</label>
          <input
            type="number"
            data-type="positive"
            className="form-control"
            name={optionsPrimeFactorization.input}
            value={primeFactorization.input}
            onChange={this.onPrimeFactorizationInputChange}
          />
        </div>

        <button
          type="button"
          className="btn btn-success apply-button"
          onClick={this.updatePrimeFactorizationConfiguration}
        >
          Apply
        </button>
      </div>
    );
  }

  renderIrrationalAnalysisModeConfiguration() {
    const { irrationalAnalysis } = this.state.configurations;
    return (
      <div className="irrational-analysis">
        <div className="form-group config-option">
          <label>Number of digits</label>
          <input
            type="number"
            data-type="positive"
            className="form-control"
            name={optionsIrrationalAnalysis.input}
            value={irrationalAnalysis.input}
            onChange={this.onIrrationalAnalysisInputChange}
          />
        </div>

        <button
          type="button"
          className="btn btn-success apply-button"
          onClick={this.updateIrrationalAnalysisConfiguration}
        >
          Apply
        </button>
      </div>
    );
  }

  renderInterestingFactsModeConfiguration() {
    const { interestingFacts } = this.state.configurations;
    return (
      <div className="interesting-facts">
        <div className="radio">
          <label>
            <input
              type="radio"
              name={optionsInterestingFacts.first}
              checked={interestingFacts.current === optionsInterestingFacts.first}
              onChange={this.onInterestingFactsRadioChange}
            />
            Earth Composition
          </label>
        </div>
        <div className="radio">
          <label>
            <input
              type="radio"
              name={optionsInterestingFacts.second}
              checked={interestingFacts.current === optionsInterestingFacts.second}
              onChange={this.onInterestingFactsRadioChange}
            />
            Earth Population
          </label>
        </div>
        <div className="radio">
          <label>
            <input
              type="radio"
              name={optionsInterestingFacts.third}
              checked={interestingFacts.current === optionsInterestingFacts.third}
              onChange={this.onInterestingFactsRadioChange}
            />
            Earth Atmosphere
          </label>
        </div>
        <div className="radio">
          <label>
            <input
              type="radio"
              name={optionsInterestingFacts.fourth}
              checked={interestingFacts.current === optionsInterestingFacts.fourth}
              onChange={this.onInterestingFactsRadioChange}
            />
            Earth Chemistry
          </label>
        </div>
        <div className="radio">
          <label>
            <input
              type="radio"
              name={optionsInterestingFacts.fifth}
              checked={interestingFacts.current === optionsInterestingFacts.fifth}
              onChange={this.onInterestingFactsRadioChange}
            />
            Human Chemistry
          </label>
        </div>
        <div className="radio">
          <label>
            <input
              type="radio"
              name={optionsInterestingFacts.sixth}
              checked={interestingFacts.current === optionsInterestingFacts.sixth}
              onChange={this.onInterestingFactsRadioChange}
            />
            Modern Life Time
          </label>
        </div>
      </div>
    );
  }

  renderConfigurationsArea() {
    const { currentMode } = this.state;
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
      case modes.primeFactorization: {
        return this.renderPrimeFactorizationModeConfiguration();
      }
      case modes.irrationalAnalysis: {
        return this.renderIrrationalAnalysisModeConfiguration();
      }
      case modes.interestingFacts: {
        return this.renderInterestingFactsModeConfiguration();
      }
      default: {
        return null;
      }
    }
  }

  render() {
    console.log('pie state: ', this.state);
    return (
      <div className="pie-page" key={`pie-chart-${this.state.currentMode}`}>
        <div className="row">
          <div className="col-sm-4">
            {this.renderOptionsDropdown()}
            <div className="configuration-area">{this.renderConfigurationsArea()}</div>
          </div>
          <div className="col-sm-8 chart-area">
            <Chart
              container={'pie-chart'}
              options={this.state.options}
              update={this.state.rerenderChart}
            />
          </div>
        </div>
      </div>
    );
  }
}
