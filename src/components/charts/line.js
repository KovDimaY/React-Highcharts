import React, { Component } from 'react'
import ReactDOM from 'react-dom'

import Chart from './chart-abstract'

import { lineOptions } from '../../constants/default-options'


export default class Line extends Component {

  constructor(props) {
    super(props);
    this.state = {
      options: lineOptions
    }
  }

  randomConfiguration() {
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

  renderChartOptions() {
    return (
      <div className="dropdown">
        <button className="btn btn-default dropdown-toggle" type="button" data-toggle="dropdown">Tutorials
        <span className="caret"></span></button>
        <ul className="dropdown-menu">
          <li className="dropdown-header">Random Data</li>
          <li><a onClick={this.clickHandler}>HTML</a></li>
          <li><a onClick={this.clickHandler}>CSS</a></li>
          <li><a onClick={this.clickHandler}>JavaScript</a></li>
          <li className="divider"></li>
          <li className="dropdown-header">Functions Visualization</li>
          <li><a onClick={this.clickHandler}>About Us</a></li>
          <li><a onClick={this.clickHandler}>About Us</a></li>
          <li><a onClick={this.clickHandler}>About Us</a></li>
        </ul>
      </div>
    )
  }

	render() {
		return(
			<div className="line-page">
        <div className="row">
          <div className="col-sm-4">
            <h3>Configurations:</h3>
            {this.renderChartOptions()}
            <button
              type="button"
              className="btn btn-success"
              onClick={this.randomConfiguration.bind(this)}>
              Success
            </button>
          </div>
          <div className="col-sm-8">
            <Chart container={'line-chart'} options={this.state.options}/>
          </div>
        </div>
			</div>
		)
	}
}
