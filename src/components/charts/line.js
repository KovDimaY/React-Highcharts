import React, { Component } from 'react'
import ReactDOM from 'react-dom'

import Chart from './chart-abstract'

import { lineOptions } from '../../constants/default-options'

const modes = {
  pureRandom: "Pure Random",
  polinomials: "Polinomial Functions",
  trigonometric: "Trigonometric Functions"
}

export default class Line extends Component {

  constructor(props) {
    super(props);
    this.state = {
      options: lineOptions,
      currentMode: modes.pureRandom,
      configurations: {
        pureRandom: {
          tooltip: false,
          zoom: true,
          legend: true,
          title: true,

        }
      }
    }
  }

  applyConfiguration() {
    this.setState({ options: {
        title: {
            text: 'Fruit Consumption'
        },
        xAxis: {
            categories: ['Apples', 'Bananas', 'Oranges', 'Grapes']
        },
        yAxis: {
            title: {
                text: 'Fruit eaten'
            }
        },
        chart: {
            type: 'bar'
        },
        series: [{
            name: 'Dima',
            data: [1, 3, 4, 3]
        }, {
            name: 'Tanya',
            data: [5, 7, 3, 1]
        }, {
            name: 'Masha',
            data: [3, 5, 6, 4]
        }]
    } })
  }

  clickHandler(input) {
    console.log(input.target)
  }

  renderOptionsDropdown() {
    return (
      <div className="dropdown">
        <button className="btn btn-primary dropdown-toggle" type="button" data-toggle="dropdown">Configurations
        <span className="caret"></span></button>
        <ul className="dropdown-menu">
          <li className="dropdown-header">Random Data</li>
          <li><a onClick={this.clickHandler}>{modes.pureRandom}</a></li>
          <li><a onClick={this.clickHandler}>CSS</a></li>
          <li><a onClick={this.clickHandler}>JavaScript</a></li>
          <li className="divider"></li>
          <li className="dropdown-header">Functions Visualization</li>
          <li><a onClick={this.clickHandler}>{modes.polinomials}</a></li>
          <li><a onClick={this.clickHandler}>{modes.trigonometric}</a></li>
          <li><a onClick={this.clickHandler}>About Us</a></li>
        </ul>
      </div>
    )
  }

  renderConfigurationsArea() {
    return (
      <div className="configuration-area">

        <button
          type="button"
          className="btn btn-success apply-button"
          onClick={this.applyConfiguration.bind(this)}>
          Apply
        </button>
      </div>
    )
  }

	render() {
		return(
			<div className="line-page">
        <div className="row">
          <div className="col-sm-4">
            {this.renderOptionsDropdown()}
            {this.renderConfigurationsArea()}
          </div>
          <div className="col-sm-8 chart-area">
            <Chart container={'line-chart'} options={this.state.options}/>
          </div>
        </div>
			</div>
		)
	}
}
