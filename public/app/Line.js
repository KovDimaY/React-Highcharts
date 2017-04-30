import React, { Component } from 'react'
import ReactDOM from 'react-dom'

import LineChart from './charts/line-chart'


const lineOptions = {
    chart: {
        type: 'line'
    },
    title: {
        text: 'Monthly Average Temperature'
    },
    subtitle: {
        text: 'Source: WorldClimate.com'
    },
    xAxis: {
        categories: ['Jan', 'Feb', 'Mar', 'Apr', 'May', 'Jun', 'Jul', 'Aug', 'Sep', 'Oct', 'Nov', 'Dec']
    },
    yAxis: {
        title: {
            text: 'Temperature (°C)'
        }
    },
    plotOptions: {
        line: {
            dataLabels: {
                enabled: true
            },
            enableMouseTracking: false
        }
    },
    series: [{
        name: 'Tokyo',
        data: [7.0, 6.9, 9.5, 14.5, 18.4, 21.5, 25.2, 26.5, 23.3, 18.3, 13.9, 9.6]
    }, {
        name: 'London',
        data: [3.9, 4.2, 5.7, 8.5, 11.9, 15.2, 17.0, 16.6, 14.2, 10.3, 6.6, 4.8]
    }]
};


class Line extends Component {

	render() {

		return(
			<div>

                <div className="masthead">
                    <h3 className="text-muted">React Highcharts Practice</h3>
                    <nav>
                      <ul className="nav nav-justified">
                        <li><a href="/">Home</a></li>
                        <li className="active"><a href="/line">Line Chart</a></li>
                        <li><a href="/bar">Bar Chart</a></li>
                        <li><a href="/pie">Pie Chart</a></li>
                        <li><a href="/bubble">Bubble Chart</a></li>
                        <li><a href="/scatter">3D Scatter Chart</a></li>
                        <li><a href="/gauge">Gauge Chart</a></li>
                        <li><a href="/box">Box Plot</a></li>
                        <li><a href="/clock">Clock</a></li>   
                      </ul>
                    </nav>
                  </div>

				<LineChart container={'line-chart'} options={lineOptions}/>


			</div>
		)
	}
}

ReactDOM.render(<Line />, document.getElementById('line'))