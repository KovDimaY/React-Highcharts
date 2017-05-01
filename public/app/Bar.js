import React, { Component } from 'react'
import ReactDOM from 'react-dom'

import BarChart from './charts/bar-chart'
import Footer from './partials/footer' 


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


class Bar extends Component {

	render() {

		return(
			<div>

                <div className="masthead">
                <h3 className="text-muted">React Highcharts Practice</h3>
                <nav>
                  <ul className="nav nav-justified">
                    <li><a href="/">Home</a></li>
                    <li><a href="/line">Line Chart</a></li>
                    <li className="active"><a href="/bar">Bar Chart</a></li>
                    <li><a href="/pie">Pie Chart</a></li>
                    <li><a href="/bubble">Bubble Chart</a></li>
                    <li><a href="/scatter">3D Scatter</a></li>
                    <li><a href="/gauge">Gauge Chart</a></li>
                    <li><a href="/combo">Combination</a></li>
                    <li><a href="/clock">Clock</a></li>    
                  </ul>
                </nav>
              </div>

              <BarChart container={'bar-chart'} options={barOptions}/><br/>

              <Footer />

			</div>
		)
	}
}

ReactDOM.render(<Bar />, document.getElementById('bar'))