import React, { Component } from 'react'
import ReactDOM from 'react-dom'

import LiveChart from './charts/live-chart'


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

class Home extends Component {

	render() {

		return(
			<div>

                <div className="masthead">
                <h3 className="text-muted">Project name</h3>
                    <nav>
                      <ul className="nav nav-justified">
                        <li className="active"><a href="/">Home</a></li>
                        <li><a href="/line">Line Chart</a></li>
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


				<LiveChart container={'live-chart'} options={liveOptions}/>

			</div>
		)
	}
}

ReactDOM.render(<Home />, document.getElementById('home'))