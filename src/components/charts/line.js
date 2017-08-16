import React, { Component } from 'react'
import ReactDOM from 'react-dom'

import Chart from './chart-abstract'

import {
  pureRandom,
  polinomials
} from '../../constants/line/default-options-line'

import {
  modes,
  optionsPureRandom,
  optionsPolinomials
} from '../../constants/line/modes-options'

import {
  generateSeriesForPureRandom,
  generateSeriesForPolinomials
} from '../../constants/line/data-helpers'

export default class Line extends Component {
  constructor(props) {
    super(props);
    this.state = {
      options: pureRandom,
      rerenderChart: false,
      currentMode: modes.pureRandom,
      configurations: {
        pureRandom: {
          tooltip: true,
          zoom: true,
          legend: true,
          title: true,
          dataLabels: true,
          animation: true,
          yAxisTitle: true,
          markers: true,
        },
        polinomials: {
          min: -10,
          max: 10,
          number: 100,
          linearA: 1,
          linearB: 1,
          quadraticA: 1,
          quadraticB: 1,
          quadraticC: 1,
          cubicA: 1,
          cubicB: 1,
          cubicC: 1,
          cubicD: 1
        }
      }
    }

    this.dropdownClickHandler = this.dropdownClickHandler.bind(this);
    this.updatePureRandomConfiguration = this.updatePureRandomConfiguration.bind(this);
    this.updatePolinomialsConfiguration = this.updatePolinomialsConfiguration.bind(this);
    this.onPureRandomCheckBoxChange = this.onPureRandomCheckBoxChange.bind(this);
    this.onPolinomialsInputChange = this.onPolinomialsInputChange.bind(this);
  }

  componentDidMount() {
    this.initPureRandomeMode();
  }

  initPureRandomeMode() {
    let options = pureRandom;
    options.series = this.generateSeriesForPureRandom();
    this.setState({ options }, () => {
      this.updatePureRandomConfiguration();
    });
  }

  initPolinomialsMode() {
    let options = polinomials;
    this.setState({ options }, () => {
      this.updatePolinomialsConfiguration();
    });
  }

  updatePureRandomConfiguration() {
    const { pureRandom } = this.state.configurations;
    const { options } = this.state;
    options.chart.zoomType = pureRandom.zoom ? 'xy' : null;
    options.title.text = pureRandom.title ? 'Randomly generated data' : null;
    options.subtitle.text = pureRandom.title ? 'Randomly generated data' : null;
    options.legend.enabled = pureRandom.legend;
    options.yAxis.title.text = pureRandom.yAxisTitle ? 'Random Value (UOM)' : null;
    options.plotOptions.line.dataLabels.enabled = pureRandom.dataLabels;
    options.plotOptions.line.enableMouseTracking = pureRandom.tooltip;
    options.plotOptions.series.animation = pureRandom.animation;
    options.plotOptions.series.marker.enabled = pureRandom.markers;

    this.setState({ options, rerenderChart: true }, () => {
      this.setState({ rerenderChart: false })
    })
  }

  updatePolinomialsConfiguration() {
    const { polinomials } = this.state.configurations;
    const { options } = this.state;

    const series = this.generateSeriesForPolinomials(polinomials);
    options.series = series;

    this.setState({ options, rerenderChart: true }, () => {
      this.setState({ rerenderChart: false })
    })
  }

  dropdownClickHandler(input) {
    const mode = input.target.innerHTML;
    switch (mode) {
      case modes.pureRandom: {
        this.initPureRandomeMode();
        break;
      }
      case modes.polinomials: {
        this.initPolinomialsMode();
        break;
      }
      default: {
        console.log("lalala");
      }
    }
    this.setState({ currentMode: mode });
  }

  renderOptionsDropdown() {
    return (
      <div className="dropdown">
        <button className="btn btn-primary dropdown-toggle" type="button" data-toggle="dropdown">Configurations
        <span className="caret"></span></button>
        <ul className="dropdown-menu">
          <li className="dropdown-header">Random Data</li>
          <li><a onClick={this.dropdownClickHandler}>{modes.pureRandom}</a></li>
          <li><a onClick={this.dropdownClickHandler}>??????</a></li>
          <li><a onClick={this.dropdownClickHandler}>??????</a></li>
          <li className="divider"></li>
          <li className="dropdown-header">Functions Visualization</li>
          <li><a onClick={this.dropdownClickHandler}>{modes.polinomials}</a></li>
          <li><a onClick={this.dropdownClickHandler}>{modes.trigonometric}</a></li>
          <li><a onClick={this.dropdownClickHandler}>???????</a></li>
        </ul>
      </div>
    )
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

  onPolinomialsInputChange(event) {
    const { configurations } = this.state;
    configurations.polinomials[event.target.name] = Number(event.target.value);
    this.setState({ configurations });
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
                        value={optionsPureRandom.yAxisTitle}
                        checked={pureRandom.yAxisTitle}
                        onChange={this.onPureRandomCheckBoxChange}/>Show Y-Axis Title</label>
        </div>
        <div className="checkbox">
          <label><input type="checkbox"
                        value={optionsPureRandom.markers}
                        checked={pureRandom.markers}
                        onChange={this.onPureRandomCheckBoxChange}/>Show Point Markers</label>
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

  renderPolinomialsModeConfiguration() {
    const { polinomials } = this.state.configurations;
    return (
      <div className="polinomials">

        {this.renderBasicConfigPolinomials(polinomials)}

        <h3>Functions:</h3>

        {this.renderLinearConfigPolinomials(polinomials)}
        {this.renderQuadraticConfigPolinomials(polinomials)}
        {this.renderCubicConfigPolinomials(polinomials)}

        <button
          type="button"
          className="btn btn-success apply-button"
          onClick={this.updatePolinomialsConfiguration}>
          Apply
        </button>
      </div>
    )
  }

  renderBasicConfigPolinomials(polinomials) {
    return (
      <div className="row basic-config">
        <div className="col-md-4">
          <div className="form-group config-option">
            <label>Min X</label>
              <input type="number"
                     className="form-control"
                     name={optionsPolinomials.min}
                     value={polinomials.min}
                     onChange={this.onPolinomialsInputChange}/>
          </div>
        </div>
        <div className="col-md-4">
          <div className="form-group config-option">
            <label>Max X</label>
              <input type="number"
                     className="form-control"
                     name={optionsPolinomials.max}
                     value={polinomials.max}
                     onChange={this.onPolinomialsInputChange}/>
          </div>
        </div>
        <div className="col-md-4">
          <div className="form-group config-option">
            <label>Count X</label>
              <input type="number"
                     className="form-control"
                     name={optionsPolinomials.number}
                     value={polinomials.number}
                     onChange={this.onPolinomialsInputChange}/>
          </div>
        </div>
      </div>
    );
  }

  renderLinearConfigPolinomials(polinomials) {
    return (
      <div className="function-config">
        <div>
          <p><i>y</i> = <b>A</b> · <i>x</i> + <b>B</b></p>
        </div>
        <div>
          <span className="coefficient">
            A = <input type="number"
                       className="form-control modified"
                       name={optionsPolinomials.linearA}
                       value={polinomials.linearA}
                       onChange={this.onPolinomialsInputChange}/>
          </span>
          <span className="coefficient">
            B = <input type="number"
                       className="form-control modified"
                       name={optionsPolinomials.linearB}
                       value={polinomials.linearB}
                       onChange={this.onPolinomialsInputChange}/>
          </span>
        </div>
      </div>
    );
  }

  renderQuadraticConfigPolinomials(polinomials) {
    return (
      <div className="function-config">
        <p><i>y</i> = <b>A</b> · <i>x</i><sup>2</sup> + <b>B</b> · <i>x</i> + <b>C</b></p>
        <div>
          <span className="coefficient">
            A = <input type="number"
                       className="form-control modified"
                       name={optionsPolinomials.quadraticA}
                       value={polinomials.quadraticA}
                       onChange={this.onPolinomialsInputChange}/>
          </span>
          <span className="coefficient">
            B = <input type="number"
                       className="form-control modified"
                       name={optionsPolinomials.quadraticB}
                       value={polinomials.quadraticB}
                       onChange={this.onPolinomialsInputChange}/>
          </span>
          <span className="coefficient">
            C = <input type="number"
                       className="form-control modified"
                       name={optionsPolinomials.quadraticC}
                       value={polinomials.quadraticC}
                       onChange={this.onPolinomialsInputChange}/>
          </span>
        </div>
      </div>
    );
  }

  renderCubicConfigPolinomials(polinomials) {
    return (
      <div className="function-config">
        <p><i>y</i> = <b>A</b> · <i>x</i><sup>3</sup> + <b>B</b> · <i>x</i><sup>2</sup> + <b>C</b> · <i>x</i> + <b>D</b></p>
        <div>
          <span className="coefficient">
            A = <input type="number"
                       className="form-control modified"
                       name={optionsPolinomials.cubicA}
                       value={polinomials.cubicA}
                       onChange={this.onPolinomialsInputChange}/>
          </span>
          <span className="coefficient">
            B = <input type="number"
                       className="form-control modified"
                       name={optionsPolinomials.cubicB}
                       value={polinomials.cubicB}
                       onChange={this.onPolinomialsInputChange}/>
          </span>
        </div>
        <div>
          <span className="coefficient">
            C = <input type="number"
                       className="form-control modified"
                       name={optionsPolinomials.cubicC}
                       value={polinomials.cubicC}
                       onChange={this.onPolinomialsInputChange}/>
          </span>
          <span className="coefficient">
            D = <input type="number"
                       className="form-control modified"
                       name={optionsPolinomials.cubicD}
                       value={polinomials.cubicD}
                       onChange={this.onPolinomialsInputChange}/>
          </span>
        </div>
      </div>
    );
  }

  renderConfigurationsArea() {
    const { currentMode } = this.state;
    switch (currentMode) {
      case modes.pureRandom: {
        return this.renderPureRandomModeConfiguration();
      }
      case modes.polinomials: {
        return this.renderPolinomialsModeConfiguration();
      }
      default: {
        return null;
      }
    }
  }

	render() {
    console.log("state: ", this.state);
		return(
			<div className="line-page">
        <div className="row">
          <div className="col-sm-4">
            {this.renderOptionsDropdown()}
            <div className="configuration-area">
              {this.renderConfigurationsArea()}
            </div>
          </div>
          <div className="col-sm-8 chart-area">
            <Chart container={'line-chart'} options={this.state.options} update={this.state.rerenderChart}/>
          </div>
        </div>
			</div>
		)
	}
}
