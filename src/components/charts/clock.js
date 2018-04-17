import React, { Component } from 'react'
import ReactDOM from 'react-dom'
import Highcharts from 'highcharts'

import Chart from './chart-abstract'

export default class Clock extends Component {
	render() {
		return(
			<div>
				<Chart container={'clock'} />
			</div>
		)
	}
}
