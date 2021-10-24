import React, { Component } from 'react';

import Chart from './chart-abstract';
import Stock from './stock-abstract';
import Tooltip from '../tooltip';

import {
  pureRandom,
  configurableRandom,
  stockSimulation,
  functions,
  interestingFactsTemperature,
} from '../../constants/line/default-options-line';

import {
  modes,
  tooltips,
  initialState,
  optionsPureRandom,
  optionsConfigurableRandom,
  optionsStockSimulation,
  optionsPolynomials,
  optionsTrigonometric,
  optionsInterestingFacts,
} from '../../constants/line/modes-options-line';

import {
  generateSeriesForPureRandom,
  generateSeriesForConfigurableRandom,
  generateSeriesForStockSimulation,
  newPointToStockSimulation,
  generateSeriesForPolynomials,
  generateSeriesForTrigonometric,
} from '../../constants/line/data-helpers-line';

import { limitNumericalInput } from '../../constants/shared/helpers';

export default class Line extends Component {
  constructor(props) {
    super(props);
    this.state = initialState;

    this.dropdownClickHandler = this.dropdownClickHandler.bind(this);
    this.updatePureRandomConfiguration = this.updatePureRandomConfiguration.bind(this);
    this.updateConfigurableRandomConfiguration = this.updateConfigurableRandomConfiguration.bind(
      this
    );
    this.updateStockSimulationConfiguration = this.updateStockSimulationConfiguration.bind(this);
    this.updatePolynomialsConfiguration = this.updatePolynomialsConfiguration.bind(this);
    this.updateTrigonometricConfiguration = this.updateTrigonometricConfiguration.bind(this);
    this.onPureRandomCheckBoxChange = this.onPureRandomCheckBoxChange.bind(this);
    this.onConfigurableRandomInputChange = this.onConfigurableRandomInputChange.bind(this);
    this.onStockSimulationInputChange = this.onStockSimulationInputChange.bind(this);
    this.onPolynomialsInputChange = this.onPolynomialsInputChange.bind(this);
    this.onTrigonometricInputChange = this.onTrigonometricInputChange.bind(this);
    this.onInterestingFactsRadioChange = this.onInterestingFactsRadioChange.bind(this);
  }

  componentDidMount() {
    this.initPureRandomeMode();
  }

  componentDidUpdate(prevProps, prevState) {
    $(this.refs.priceTooltip).tooltip();
    $(this.refs.oscilationTooltip).tooltip();
    $(this.refs.frequencyTooltip).tooltip();
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

  initStockSimulationMode() {
    let options = stockSimulation;
    const { price } = this.state.configurations.stockSimulation;
    options.series = generateSeriesForStockSimulation(price);
    this.setState({ options }, () => {
      this.updateStockSimulationConfiguration();
    });
  }

  initPolynomialsMode() {
    let options = functions;
    this.setState({ options }, () => {
      this.updatePolynomialsConfiguration();
    });
  }

  initTrigonometricMode() {
    let options = functions;
    this.setState({ options }, () => {
      this.updateTrigonometricConfiguration();
    });
  }

  initInterestingFactsMode() {
    let options = interestingFactsTemperature;
    this.setState({ options, rerenderChart: true }, () => {
      this.setState({ rerenderChart: false });
    });
  }

  updatePureRandomConfiguration() {
    const { pureRandom } = this.state.configurations;
    const { options } = this.state;
    options.chart.zoomType = pureRandom.zoom ? 'xy' : null;
    options.chart.type = pureRandom.area ? 'area' : 'line';
    options.title.text = pureRandom.title ? 'Randomly generated data' : null;
    options.subtitle.text = pureRandom.title ? 'Randomly generated data' : null;
    options.legend.enabled = pureRandom.legend;
    options.yAxis.title.text = pureRandom.yAxisTitle ? 'Random Value (UOM)' : null;
    options.plotOptions.line.dataLabels.enabled = pureRandom.dataLabels;
    options.plotOptions.area.dataLabels.enabled = pureRandom.dataLabels;
    options.plotOptions.line.enableMouseTracking = pureRandom.tooltip;
    options.plotOptions.area.enableMouseTracking = pureRandom.tooltip;
    options.plotOptions.series.animation = pureRandom.animation;
    options.plotOptions.series.marker.enabled = pureRandom.markers;

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

  updateStockSimulationConfiguration(event) {
    const { configurations, options } = this.state;
    const { name, isRunning, price } = configurations.stockSimulation;
    options.title.text = name ? 'Stock price of ' + name : null;
    if (event) {
      if (isRunning) {
        options.navigator.enabled = true;
        options.rangeSelector.enabled = true;
        configurations.stockSimulation.isRunning = false;
        this.setState({ options, configurations, rerenderChart: true }, () => {
          this.setState({ rerenderChart: false });
        });
      } else {
        options.navigator.enabled = false;
        options.rangeSelector.enabled = false;
        options.series = generateSeriesForStockSimulation(price);
        configurations.stockSimulation.isRunning = true;
        this.setState({ configurations }, () => {
          this.addPointToStockSimulation();
        });
      }
    } else {
      this.setState({ options, rerenderChart: true }, () => {
        this.setState({ rerenderChart: false });
      });
    }
  }

  addPointToStockSimulation() {
    const { configurations, options } = this.state;
    const { isRunning, oscillation, frequency } = configurations.stockSimulation;
    if (isRunning) {
      options.series = newPointToStockSimulation(options.series, oscillation);
      setTimeout(() => this.addPointToStockSimulation(), frequency * 1000);
      this.setState({ options, rerenderChart: true }, () => {
        this.setState({ rerenderChart: false });
      });
    }
  }

  updatePolynomialsConfiguration() {
    const { polynomials } = this.state.configurations;
    const { options } = this.state;

    const series = generateSeriesForPolynomials(polynomials);
    options.title.text = modes.polynomials;
    options.series = series;

    this.setState({ options, rerenderChart: true }, () => {
      this.setState({ rerenderChart: false });
    });
  }

  updateTrigonometricConfiguration() {
    const { trigonometric } = this.state.configurations;
    const { options } = this.state;

    const series = generateSeriesForTrigonometric(trigonometric);
    options.title.text = modes.trigonometric;
    options.series = series;

    this.setState({ options, rerenderChart: true }, () => {
      this.setState({ rerenderChart: false });
    });
  }

  dropdownClickHandler(mode) {
    const { configurations } = this.state;
    configurations.stockSimulation.isRunning = false;
    switch (mode) {
      case modes.pureRandom: {
        this.initPureRandomeMode();
        break;
      }
      case modes.configurableRandom: {
        this.initConfigurableRandomeMode();
        break;
      }
      case modes.stockSimulation: {
        this.initStockSimulationMode();
        break;
      }
      case modes.polynomials: {
        this.initPolynomialsMode();
        break;
      }
      case modes.trigonometric: {
        this.initTrigonometricMode();
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
            <span onClick={() => this.dropdownClickHandler(modes.stockSimulation)}>
              {modes.stockSimulation}
              <Tooltip text={tooltips.stockSimulation} addClass="dropdown-menu__help" />
            </span>
          </li>
          <li className="divider"></li>
          <li className="dropdown-header">Functions Visualization</li>
          <li className="dropdown-menu__item">
            <span onClick={() => this.dropdownClickHandler(modes.polynomials)}>
              {modes.polynomials}
              <Tooltip text={tooltips.polynomials} addClass="dropdown-menu__help" />
            </span>
          </li>
          <li className="dropdown-menu__item">
            <span onClick={() => this.dropdownClickHandler(modes.trigonometric)}>
              {modes.trigonometric}
              <Tooltip text={tooltips.trigonometric} addClass="dropdown-menu__help" />
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
    if (event.target.dataset.type === 'series') {
      limitNumericalInput(
        configurations.configurableRandom,
        event.target.name,
        event.target.value,
        1,
        20,
        true
      );
    } else if (event.target.dataset.type === 'points') {
      limitNumericalInput(
        configurations.configurableRandom,
        event.target.name,
        event.target.value,
        1,
        1000,
        true
      );
    } else if (event.target.dataset.type === 'min') {
      limitNumericalInput(
        configurations.configurableRandom,
        event.target.name,
        event.target.value,
        -10000,
        configurations.configurableRandom.max,
        false
      );
    } else if (event.target.dataset.type === 'max') {
      limitNumericalInput(
        configurations.configurableRandom,
        event.target.name,
        event.target.value,
        configurations.configurableRandom.min,
        10000,
        false
      );
    } else {
      configurations.configurableRandom[event.target.name] = Number(event.target.value);
    }
    this.setState({ configurations });
  }

  onStockSimulationInputChange(event) {
    const { configurations } = this.state;
    if (event.target.type === 'number') {
      limitNumericalInput(
        configurations.stockSimulation,
        event.target.name,
        event.target.value,
        0.01,
        1000000,
        false
      );
    } else {
      configurations.stockSimulation[event.target.name] = event.target.value;
    }
    this.setState({ configurations });
  }

  onPolynomialsInputChange(event) {
    const { configurations } = this.state;
    if (event.target.dataset.type === 'integer') {
      limitNumericalInput(
        configurations.polynomials,
        event.target.name,
        event.target.value,
        1,
        1000,
        true
      );
    } else if (event.target.dataset.type === 'min') {
      limitNumericalInput(
        configurations.polynomials,
        event.target.name,
        event.target.value,
        -10000,
        configurations.polynomials.max,
        false
      );
    } else if (event.target.dataset.type === 'max') {
      limitNumericalInput(
        configurations.polynomials,
        event.target.name,
        event.target.value,
        configurations.polynomials.min,
        10000,
        false
      );
    } else {
      configurations.polynomials[event.target.name] = Number(event.target.value);
    }
    this.setState({ configurations });
  }

  onTrigonometricInputChange(event) {
    const { configurations } = this.state;
    if (event.target.dataset.type === 'integer') {
      limitNumericalInput(
        configurations.trigonometric,
        event.target.name,
        event.target.value,
        1,
        1000,
        true
      );
    } else if (event.target.dataset.type === 'min') {
      limitNumericalInput(
        configurations.trigonometric,
        event.target.name,
        event.target.value,
        -10000,
        configurations.trigonometric.max,
        false
      );
    } else if (event.target.dataset.type === 'max') {
      limitNumericalInput(
        configurations.trigonometric,
        event.target.name,
        event.target.value,
        configurations.trigonometric.min,
        10000,
        false
      );
    } else {
      configurations.trigonometric[event.target.name] = Number(event.target.value);
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
              value={optionsPureRandom.yAxisTitle}
              checked={pureRandom.yAxisTitle}
              onChange={this.onPureRandomCheckBoxChange}
            />
            Show Y-Axis Title
          </label>
        </div>
        <div className="checkbox">
          <label>
            <input
              type="checkbox"
              value={optionsPureRandom.markers}
              checked={pureRandom.markers}
              onChange={this.onPureRandomCheckBoxChange}
            />
            Show Point Markers
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
              value={optionsPureRandom.zoom}
              checked={pureRandom.zoom}
              onChange={this.onPureRandomCheckBoxChange}
            />
            Enable Zoom
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
        <div className="checkbox">
          <label>
            <input
              type="checkbox"
              value={optionsPureRandom.area}
              checked={pureRandom.area}
              onChange={this.onPureRandomCheckBoxChange}
            />
            Use Areas
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
            data-type="series"
            className="form-control"
            name={optionsConfigurableRandom.seriesNumber}
            value={configurableRandom.seriesNumber}
            onChange={this.onConfigurableRandomInputChange}
          />
        </div>
        <div className="form-group config-option">
          <label>Max number of points</label>
          <input
            type="number"
            data-type="points"
            className="form-control"
            name={optionsConfigurableRandom.pointsNumber}
            value={configurableRandom.pointsNumber}
            onChange={this.onConfigurableRandomInputChange}
          />
        </div>
        <div className="form-group config-option">
          <label>Min value</label>
          <input
            type="number"
            data-type="min"
            className="form-control"
            name={optionsConfigurableRandom.min}
            value={configurableRandom.min}
            onChange={this.onConfigurableRandomInputChange}
          />
        </div>
        <div className="form-group config-option">
          <label>Max value</label>
          <input
            type="number"
            data-type="max"
            className="form-control"
            name={optionsConfigurableRandom.max}
            value={configurableRandom.max}
            onChange={this.onConfigurableRandomInputChange}
          />
        </div>

        <button
          type="button"
          className="btn btn-success apply-button position-dynamic"
          onClick={this.updateConfigurableRandomConfiguration}
        >
          Apply
        </button>
      </div>
    );
  }

  renderStockSimulationModeConfiguration() {
    const { stockSimulation } = this.state.configurations;
    return (
      <div className="stock-simulation">
        <div className="form-group">
          <label>Name of the Stock</label>
          <input
            type="text"
            className="form-control"
            name={optionsStockSimulation.name}
            value={stockSimulation.name}
            onChange={this.onStockSimulationInputChange}
          />
        </div>
        <div className="form-group">
          <label
            data-toggle="tooltip"
            ref="priceTooltip"
            title="This is a starting price of the stock (in $)."
          >
            � Start Price
          </label>
          <input
            type="number"
            className="form-control"
            name={optionsStockSimulation.price}
            value={stockSimulation.price}
            onChange={this.onStockSimulationInputChange}
          />
        </div>
        <div className="row">
          <div className="col-xs-6">
            <div className="form-group config-option">
              <label
                data-toggle="tooltip"
                ref="oscilationTooltip"
                title="This number means the maximum difference (in $) between the old price and the new one."
              >
                � Oscillation
              </label>
              <input
                type="number"
                className="form-control"
                name={optionsStockSimulation.oscillation}
                value={stockSimulation.oscillation}
                onChange={this.onStockSimulationInputChange}
              />
            </div>
          </div>
          <div className="col-xs-6">
            <div className="form-group config-option">
              <label
                data-toggle="tooltip"
                ref="frequencyTooltip"
                title="This number means how often (in seconds) the new price will appear."
              >
                � Frequency
              </label>
              <input
                type="number"
                className="form-control"
                name={optionsStockSimulation.frequency}
                value={stockSimulation.frequency}
                onChange={this.onStockSimulationInputChange}
              />
            </div>
          </div>
        </div>
        {stockSimulation.isRunning ? (
          <button
            type="button"
            className="btn btn-danger apply-button"
            onClick={this.updateStockSimulationConfiguration}
          >
            Stop Simulation
          </button>
        ) : (
          <button
            type="button"
            className="btn btn-success apply-button"
            onClick={this.updateStockSimulationConfiguration}
          >
            Start Simulation
          </button>
        )}
      </div>
    );
  }

  renderPolynomialsModeConfiguration() {
    const { polynomials } = this.state.configurations;
    return (
      <div className="functions">
        {this.renderBasicConfigPolynomials(polynomials)}

        <h3>Functions:</h3>

        {this.renderLinearConfigPolynomials(polynomials)}
        {this.renderQuadraticConfigPolynomials(polynomials)}
        {this.renderCubicConfigPolynomials(polynomials)}

        <button
          type="button"
          className="btn btn-success apply-button position-dynamic"
          onClick={this.updatePolynomialsConfiguration}
        >
          Apply
        </button>
      </div>
    );
  }

  renderBasicConfigPolynomials(polynomials) {
    return (
      <div className="row basic-config">
        <div className="col-md-4">
          <div className="form-group config-option">
            <label>Min X</label>
            <input
              type="number"
              data-type="min"
              className="form-control"
              name={optionsPolynomials.min}
              value={polynomials.min}
              onChange={this.onPolynomialsInputChange}
            />
          </div>
        </div>
        <div className="col-md-4">
          <div className="form-group config-option">
            <label>Max X</label>
            <input
              type="number"
              data-type="max"
              className="form-control"
              name={optionsPolynomials.max}
              value={polynomials.max}
              onChange={this.onPolynomialsInputChange}
            />
          </div>
        </div>
        <div className="col-md-4">
          <div className="form-group config-option">
            <label>Count X</label>
            <input
              type="number"
              data-type="integer"
              className="form-control"
              name={optionsPolynomials.number}
              value={polynomials.number}
              onChange={this.onPolynomialsInputChange}
            />
          </div>
        </div>
      </div>
    );
  }

  renderLinearConfigPolynomials(polynomials) {
    return (
      <div className="function-config">
        <div>
          <p>
            <i>y</i> = <b>A</b> · <i>x</i> + <b>B</b>
          </p>
        </div>
        <div>
          <span className="coefficient">
            A ={' '}
            <input
              type="number"
              className="form-control modified"
              name={optionsPolynomials.linearA}
              value={polynomials.linearA}
              onChange={this.onPolynomialsInputChange}
            />
          </span>
          <span className="coefficient">
            B ={' '}
            <input
              type="number"
              className="form-control modified"
              name={optionsPolynomials.linearB}
              value={polynomials.linearB}
              onChange={this.onPolynomialsInputChange}
            />
          </span>
        </div>
      </div>
    );
  }

  renderQuadraticConfigPolynomials(polynomials) {
    return (
      <div className="function-config">
        <p>
          <i>y</i> = <b>A</b> · <i>x</i>
          <sup>2</sup> + <b>B</b> · <i>x</i> + <b>C</b>
        </p>
        <div>
          <span className="coefficient">
            A ={' '}
            <input
              type="number"
              className="form-control modified"
              name={optionsPolynomials.quadraticA}
              value={polynomials.quadraticA}
              onChange={this.onPolynomialsInputChange}
            />
          </span>
          <span className="coefficient">
            B ={' '}
            <input
              type="number"
              className="form-control modified"
              name={optionsPolynomials.quadraticB}
              value={polynomials.quadraticB}
              onChange={this.onPolynomialsInputChange}
            />
          </span>
          <span className="coefficient">
            C ={' '}
            <input
              type="number"
              className="form-control modified"
              name={optionsPolynomials.quadraticC}
              value={polynomials.quadraticC}
              onChange={this.onPolynomialsInputChange}
            />
          </span>
        </div>
      </div>
    );
  }

  renderCubicConfigPolynomials(polynomials) {
    return (
      <div className="function-config">
        <p>
          <i>y</i> = <b>A</b> · <i>x</i>
          <sup>3</sup> + <b>B</b> · <i>x</i>
          <sup>2</sup> + <b>C</b> · <i>x</i> + <b>D</b>
        </p>
        <div>
          <span className="coefficient">
            A ={' '}
            <input
              type="number"
              className="form-control modified"
              name={optionsPolynomials.cubicA}
              value={polynomials.cubicA}
              onChange={this.onPolynomialsInputChange}
            />
          </span>
          <span className="coefficient">
            B ={' '}
            <input
              type="number"
              className="form-control modified"
              name={optionsPolynomials.cubicB}
              value={polynomials.cubicB}
              onChange={this.onPolynomialsInputChange}
            />
          </span>
        </div>
        <div>
          <span className="coefficient">
            C ={' '}
            <input
              type="number"
              className="form-control modified"
              name={optionsPolynomials.cubicC}
              value={polynomials.cubicC}
              onChange={this.onPolynomialsInputChange}
            />
          </span>
          <span className="coefficient">
            D ={' '}
            <input
              type="number"
              className="form-control modified"
              name={optionsPolynomials.cubicD}
              value={polynomials.cubicD}
              onChange={this.onPolynomialsInputChange}
            />
          </span>
        </div>
      </div>
    );
  }

  renderTrigonometricModeConfiguration() {
    const { trigonometric } = this.state.configurations;
    return (
      <div className="functions">
        {this.renderBasicConfigTrigonometric(trigonometric)}

        <h3>Functions:</h3>

        {this.renderConfigTrigonometric(
          'cos',
          optionsTrigonometric.cosA,
          optionsTrigonometric.cosB,
          trigonometric.cosA,
          trigonometric.cosB
        )}
        {this.renderConfigTrigonometric(
          'sin',
          optionsTrigonometric.sinA,
          optionsTrigonometric.sinB,
          trigonometric.sinA,
          trigonometric.sinB
        )}
        {this.renderConfigTrigonometric(
          'tg',
          optionsTrigonometric.tanA,
          optionsTrigonometric.tanB,
          trigonometric.tanA,
          trigonometric.tanB
        )}
        {this.renderConfigTrigonometric(
          'ctg',
          optionsTrigonometric.ctanA,
          optionsTrigonometric.ctanB,
          trigonometric.ctanA,
          trigonometric.ctanB
        )}

        <button
          type="button"
          className="btn btn-success apply-button position-dynamic"
          onClick={this.updateTrigonometricConfiguration}
        >
          Apply
        </button>
      </div>
    );
  }

  renderBasicConfigTrigonometric(trigonometric) {
    return (
      <div className="row basic-config">
        <div className="col-md-4">
          <div className="form-group config-option">
            <label>Min X</label>
            <input
              type="number"
              data-type="min"
              className="form-control"
              name={optionsTrigonometric.min}
              value={trigonometric.min}
              onChange={this.onTrigonometricInputChange}
            />
          </div>
        </div>
        <div className="col-md-4">
          <div className="form-group config-option">
            <label>Max X</label>
            <input
              type="number"
              data-type="max"
              className="form-control"
              name={optionsTrigonometric.max}
              value={trigonometric.max}
              onChange={this.onTrigonometricInputChange}
            />
          </div>
        </div>
        <div className="col-md-4">
          <div className="form-group config-option">
            <label>Count X</label>
            <input
              type="number"
              data-type="integer"
              className="form-control"
              name={optionsTrigonometric.number}
              value={trigonometric.number}
              onChange={this.onTrigonometricInputChange}
            />
          </div>
        </div>
      </div>
    );
  }

  renderConfigTrigonometric(func, optionsA, optionsB, coefA, coefB) {
    return (
      <div className="function-config">
        <div>
          <p>
            <i>y</i> = <b>A</b> · <i>{func}</i>(<b>B</b>·<i>x</i>)
          </p>
        </div>
        <div>
          <span className="coefficient">
            A ={' '}
            <input
              type="number"
              className="form-control modified"
              name={optionsA}
              value={coefA}
              onChange={this.onTrigonometricInputChange}
            />
          </span>
          <span className="coefficient">
            B ={' '}
            <input
              type="number"
              className="form-control modified"
              name={optionsB}
              value={coefB}
              onChange={this.onTrigonometricInputChange}
            />
          </span>
        </div>
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
              name={optionsInterestingFacts.temperature}
              checked={interestingFacts.current === optionsInterestingFacts.temperature}
              onChange={this.onInterestingFactsRadioChange}
            />
            Temperature
          </label>
        </div>
        <div className="radio">
          <label>
            <input
              type="radio"
              name={optionsInterestingFacts.population}
              checked={interestingFacts.current === optionsInterestingFacts.population}
              onChange={this.onInterestingFactsRadioChange}
            />
            Population
          </label>
        </div>
        <div className="radio">
          <label>
            <input
              type="radio"
              name={optionsInterestingFacts.itGiants}
              checked={interestingFacts.current === optionsInterestingFacts.itGiants}
              onChange={this.onInterestingFactsRadioChange}
            />
            IT Giants
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
      case modes.stockSimulation: {
        return this.renderStockSimulationModeConfiguration();
      }
      case modes.polynomials: {
        return this.renderPolynomialsModeConfiguration();
      }
      case modes.trigonometric: {
        return this.renderTrigonometricModeConfiguration();
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
    console.log('line state: ', this.state);
    return (
      <div className="line-page" key={`line-chart-${this.state.currentMode}`}>
        <div className="row">
          <div className="col-sm-4">
            {this.renderOptionsDropdown()}
            <div className="configuration-area">{this.renderConfigurationsArea()}</div>
          </div>
          <div className="col-sm-8 chart-area">
            {this.state.currentMode === modes.stockSimulation ? (
              <Stock
                container={'line-stock'}
                options={this.state.options}
                update={this.state.rerenderChart}
              />
            ) : (
              <Chart
                container={'line-chart'}
                options={this.state.options}
                update={this.state.rerenderChart}
              />
            )}
          </div>
        </div>
      </div>
    );
  }
}
