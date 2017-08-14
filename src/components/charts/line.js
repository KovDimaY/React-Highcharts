import React, { Component } from 'react'
import ReactDOM from 'react-dom'

import Chart from './chart-abstract'

import { lineOptions } from '../../constants/default-options'

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
  dataLabels: "dataLabels"
}

export default class Line extends Component {

  constructor(props) {
    super(props);
    this.state = {
      options: lineOptions,
      rerenderChart: false,
      currentMode: modes.pureRandom,
      configurations: {
        pureRandom: {
          tooltip: false,
          zoom: true,
          legend: true,
          title: true,
          dataLabels: true,
        }
      }
    }

    this.dropdownClickHandler = this.dropdownClickHandler.bind(this)
    this.buildPureRandomConfiguration = this.buildPureRandomConfiguration.bind(this)
    this.onCheckBoxChange = this.onCheckBoxChange.bind(this)
  }

  buildPureRandomConfiguration() {
    const { pureRandom } = this.state.configurations;
    const result = {
        chart: {
            type: 'line',
            zoomType: pureRandom.zoom ? 'xy' : null
        },
        title: {
            text: pureRandom.title ? 'Randomly generated data' : null
        },
        subtitle: {
            text: pureRandom.title ? 'This data is not real' : null
        },
        xAxis: {
            categories: ['Jan', 'Feb', 'Mar', 'Apr', 'May', 'Jun', 'Jul', 'Aug', 'Sep', 'Oct', 'Nov', 'Dec']
        },
        legend: {
            enabled: pureRandom.legend
        },
        yAxis: {
            title: {
                text: 'Temperature (°C)'
            }
        },
        plotOptions: {
            line: {
                dataLabels: {
                    enabled: pureRandom.dataLabels
                },
                enableMouseTracking: pureRandom.tooltip
            }
        },
        series: [{
            name: 'Tokyo',
            data: [7.0, 6.9, 9.5, 14.5, 18.4, 21.5, 25.2, 26.5, 23.3, 18.3, 13.9, 9.6]
        }, {
            name: 'London',
            data: [3.9, 4.2, 5.7, 8.5, 11.9, 15.2, 17.0, 16.6, 14.2, 10.3, 6.6, 4.8]
        }]
    }

    this.setState({ options: result, rerenderChart: true }, () => {
      this.setState({ rerenderChart: false })
    })
  }

  dropdownClickHandler(input) {
    const mode = input.target.innerHTML;
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
          <li><a onClick={this.dropdownClickHandler}>CSS</a></li>
          <li><a onClick={this.dropdownClickHandler}>JavaScript</a></li>
          <li className="divider"></li>
          <li className="dropdown-header">Functions Visualization</li>
          <li><a onClick={this.dropdownClickHandler}>{modes.polinomials}</a></li>
          <li><a onClick={this.dropdownClickHandler}>{modes.trigonometric}</a></li>
          <li><a onClick={this.dropdownClickHandler}>About Us</a></li>
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
                        onChange={this.onCheckBoxChange}/>Show Title</label>
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
                        value={options.dataLabels}
                        checked={pureRandom.dataLabels}
                        onChange={this.onCheckBoxChange}/>Show Data Labels</label>
        </div>

        <button
          type="button"
          className="btn btn-success apply-button"
          onClick={this.buildPureRandomConfiguration}>
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
