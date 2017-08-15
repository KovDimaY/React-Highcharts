import React, { Component } from 'react'
import ReactDOM from 'react-dom'

import Chart from './chart-abstract'

import {
  pureRandom,
  polinomials
} from '../../constants/default-options-line'

const modes = {
  pureRandom: "Pure Random",
  polinomials: "Polinomial Functions",
  trigonometric: "Trigonometric Functions"
}

const options = {
  tooltip: "tooltip",
  zoom: "zoom",
  legend: "legend",
  title: "title",
  dataLabels: "dataLabels",
  animation: "animation",
  yAxisTitle: "yAxisTitle",
  markers: "markers"
}

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

    this.dropdownClickHandler = this.dropdownClickHandler.bind(this)
    this.updatePureRandomConfiguration = this.updatePureRandomConfiguration.bind(this)
    this.onCheckBoxChange = this.onCheckBoxChange.bind(this)
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

  generateSeriesForPureRandom() {
    const numberOfSeries = Math.round(Math.random() * 3) + 1;
    let result = [];
    for (let i = 0; i < numberOfSeries; i++) {
      let currentData = [];
      const currentName = `Random Serie ${i + 1}`
      const min = Math.random() * 1000 - 500;
      const max = Math.random() * 1000 + min;
      for (let j = 0; j < 12; j++) {
        const randValue = Math.random() * (max - min) + min;
        const shortValue = Math.round(randValue * 1000) / 1000;
        currentData.push(shortValue);
      }
      result.push({
        name: currentName,
        data: currentData
      });
    }

    return result;
  }

  generateSeriesForPolinomials(params) {
    const {
      linearA,
      linearB,
      quadraticA,
      quadraticB,
      quadraticC,
      cubicA,
      cubicB,
      cubicC,
      cubicD,
    } = params;
    let linearData = [];
    let quadraticData = [];
    let cubicData = [];
    const step = (params.max - params.min)/params.number;

    for (let i = 0; i < params.number; i++) {
      let x = params.min + step * i;
      let linearY = linearA * x + linearB;
      let quadraticY = quadraticA * x * x + quadraticB * x + quadraticC;
      let cubicY = cubicA * x * x * x + cubicB * x * x + cubicC * x + cubicD;
      linearY = Math.round(linearY * 100) / 100;
      quadraticY = Math.round(quadraticY * 100) / 100;
      cubicY = Math.round(cubicY * 100) / 100;
      x = Math.round(x * 100) / 100;
      linearData.push([x, linearY]);
      quadraticData.push([x, quadraticY]);
      cubicData.push([x, cubicY]);
    }

    return [{
      name: 'Linear',
      data: linearData
    },
    {
      name: 'Quadratic',
      data: quadraticData
    },
    {
      name: 'Cubic',
      data: cubicData
    }];
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

  onCheckBoxChange(event) {
    const { configurations } = this.state;
    if (configurations.pureRandom[event.target.value]) {
      configurations.pureRandom[event.target.value] = false;
    } else {
      configurations.pureRandom[event.target.value] = true;
    }
    this.setState({ configurations })
  }

  renderPureRandomMode() {
    const { pureRandom } = this.state.configurations;
    return (
      <div className="pure-random">
        <div className="checkbox">
          <label><input type="checkbox"
                        value={options.title}
                        checked={pureRandom.title}
                        onChange={this.onCheckBoxChange}/>Show Chart Title</label>
        </div>
        <div className="checkbox">
          <label><input type="checkbox"
                        value={options.yAxisTitle}
                        checked={pureRandom.yAxisTitle}
                        onChange={this.onCheckBoxChange}/>Show Y-Axis Title</label>
        </div>
        <div className="checkbox">
          <label><input type="checkbox"
                        value={options.markers}
                        checked={pureRandom.markers}
                        onChange={this.onCheckBoxChange}/>Show Point Markers</label>
        </div>
        <div className="checkbox">
          <label><input type="checkbox"
                        value={options.dataLabels}
                        checked={pureRandom.dataLabels}
                        onChange={this.onCheckBoxChange}/>Show Data Labels</label>
        </div>
        <div className="checkbox">
          <label><input type="checkbox"
                        value={options.legend}
                        checked={pureRandom.legend}
                        onChange={this.onCheckBoxChange}/>Show Legend</label>
        </div>
        <div className="checkbox">
          <label><input type="checkbox"
                        value={options.tooltip}
                        checked={pureRandom.tooltip}
                        onChange={this.onCheckBoxChange}/>Enable Tooltip</label>
        </div>
        <div className="checkbox">
          <label><input type="checkbox"
                        value={options.zoom}
                        checked={pureRandom.zoom}
                        onChange={this.onCheckBoxChange}/>Enable Zoom</label>
        </div>
        <div className="checkbox">
          <label><input type="checkbox"
                        value={options.animation}
                        checked={pureRandom.animation}
                        onChange={this.onCheckBoxChange}/>Enable Animation</label>
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

  renderConfigurationsArea() {
    const { currentMode } = this.state;
    switch (currentMode) {
      case modes.pureRandom: {
        return this.renderPureRandomMode();
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
