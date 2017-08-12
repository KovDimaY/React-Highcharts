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

	render() {
		return(
			<div className="line-page">
        <div className="row">
          <div className="col-sm-4">
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
