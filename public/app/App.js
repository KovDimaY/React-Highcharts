import React, { Component } from 'react'
import ReactDOM from 'react-dom'

import BarChart from './bar-chart'
import LineChart from './line-chart'


class App extends Component {

	render() {

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

        

		return(
			<div>
				<h3>This part is from React:</h3>

				<BarChart container={'bar-chart'} options={barOptions}/><br/><br/><br/><br/><br/><br/>

				<LineChart container={'line-chart'} options={lineOptions}/>

			</div>
		)
	}
}

ReactDOM.render(<App />, document.getElementById('app'))