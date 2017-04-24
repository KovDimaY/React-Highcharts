import React, { Component } from 'react'
import ReactDOM from 'react-dom'

import Header from './partials/header'
import BarChart from './charts/bar-chart'
import LineChart from './charts/line-chart'
import LiveChart from './charts/live-chart'
import PieChart from './charts/pie-chart'



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

const liveOptions = {
    chart: {
        events: {
            load: function () {

                // set up the updating of the chart each second
                var series = this.series[0];
                setInterval(function () {
                    var x = (new Date()).getTime(), // current time
                        y = Math.round(Math.random() * 100);
                    series.addPoint([x, y], true, true);
                }, 1000);
            }
        }
    },

    rangeSelector: {
        buttons: [{
            count: 1,
            type: 'minute',
            text: '1M'
        }, {
            count: 5,
            type: 'minute',
            text: '5M'
        }, {
            type: 'all',
            text: 'All'
        }],
        inputEnabled: false,
        selected: 0
    },

    title: {
        text: 'Live random data'
    },

    exporting: {
        enabled: false
    },

    series: [{
        name: 'Random data',
        data: (function () {
            // generate an array of random data
            var data = [],
                time = (new Date()).getTime(),
                i;

            for (i = -999; i <= 0; i += 1) {
                data.push([
                    time + i * 1000,
                    Math.round(Math.random() * 100)
                ]);
            }
            return data;
        }())
    }]
};

const pieData = [
{
	name: "Firefox",
	y: 6
},
{
	name: "MSIE",
	y: 4
},
{
	name: "Safari",
	y: 4
},
{
	name: "Opera",
	y: 1
},
{
	name: "Chrome",
	y: 7
}
]

class Home extends Component {

	constructor(props) {
		super(props);

		this.state = {
			pieData
		};
	}

	render() {

		return(
			<div>

                <Header />

				<h3>Bar:</h3>

				<BarChart container={'bar-chart'} options={barOptions}/><br/><br/><br/><br/><br/><br/>


				<LiveChart container={'live-chart'} options={liveOptions}/>

			</div>
		)
	}
}

ReactDOM.render(<Home />, document.getElementById('home'))