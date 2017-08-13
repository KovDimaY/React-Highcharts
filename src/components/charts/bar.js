import React, { Component } from 'react'
import ReactDOM from 'react-dom'

import Chart from './chart-abstract'


const barOptions = {
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
};


export default class Bar extends Component {
	render() {
		return(
			<div>
				<Chart container={'bar-chart'} options={barOptions}/>
			</div>
		)
	}
}
