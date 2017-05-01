import React, { Component } from 'react'
import ReactDOM from 'react-dom'

import PieChart from './charts/pie-chart-2'
import Footer from './partials/footer' 


const pieOptions = {
    chart: {
            plotBackgroundColor: null,
            plotBorderWidth: null,
            plotShadow: false,
            type: 'pie'
        },
        title: {
            text: 'Browser market shares January, 2015 to May, 2015'
        },
        tooltip: {
            pointFormat: '{series.name}: <b>{point.percentage:.1f}%</b>'
        },
        plotOptions: {
            pie: {
                allowPointSelect: true,
                cursor: 'pointer',
                dataLabels: {
                    enabled: false
                },
                showInLegend: true
            }
        },
        series: [{
            name: 'Brands',
            colorByPoint: true,
            data: [{
                name: 'Microsoft IE',
                y: 56.33
            }, {
                name: 'Chrome',
                y: 24.03,
                sliced: true,
                selected: true
            }, {
                name: 'Firefox',
                y: 10.38
            }, {
                name: 'Safari',
                y: 4.77
            }, {
                name: 'Opera',
                y: 0.91
            }]
        }]
};


class Pie extends Component {

	render() {

		return(
			<div>

                <div className="masthead">
                <h3 className="text-muted">React Highcharts Practice</h3>
                <nav>
                  <ul className="nav nav-justified">
                    <li><a href="/">Home</a></li>
                    <li><a href="/line">Line Chart</a></li>
                    <li><a href="/bar">Bar Chart</a></li>
                    <li className="active"><a href="/pie">Pie Chart</a></li>
                    <li><a href="/bubble">Bubble Chart</a></li>
                    <li><a href="/scatter">3D Scatter</a></li>
                    <li><a href="/gauge">Gauge Chart</a></li>
                    <li><a href="/combo">Combination</a></li>
                    <li><a href="/clock">Clock</a></li>    
                  </ul>
                </nav>
              </div>

              <PieChart container={'pie-chart'} options={pieOptions}/><br/>

              <Footer />

			</div>
		)
	}
}

ReactDOM.render(<Pie />, document.getElementById('pie'))