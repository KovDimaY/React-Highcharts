import React, { Component } from 'react'
import ReactDOM from 'react-dom'

import Highcharts from 'highcharts'
import HighchartsMore from 'highcharts-more'
import HighchartsGauge from 'highcharts-solid-gauge'
HighchartsMore(Highcharts)
HighchartsGauge(Highcharts)


import GaugeSpeed from './charts/gauge-speedometer'

const speedOptions = {
    chart: {
        type: 'solidgauge'
    },

    title: null,

    pane: {
        center: ['50%', '85%'],
        size: '140%',
        startAngle: -90,
        endAngle: 90,
        background: {
            backgroundColor: (Highcharts.theme && Highcharts.theme.background2) || '#EEE',
            innerRadius: '60%',
            outerRadius: '100%',
            shape: 'arc'
        }
    },

    tooltip: {
        enabled: false
    },

    // the value axis
    yAxis: {
        stops: [
            [0.1, '#55BF3B'], // green
            [0.5, '#DDDF0D'], // yellow
            [0.9, '#DF5353'] // red
        ],
        lineWidth: 0,
        minorTickInterval: null,
        tickAmount: 2,
        title: {
            y: -70
        },
        labels: {
            y: 16
        },
        min: 0,
        max: 200,
        title: {
            text: 'Speed',
            style: { "font-size": "20px"}
        }
    },

    credits: {
        enabled: false
    },

    series: [{
        name: 'Speed',
        data: [190],
        dataLabels: {
            format: '<div style="text-align:center"><span style="font-size:48px;color:' +
                ((Highcharts.theme && Highcharts.theme.contrastTextColor) || 'black') + '">{y}</span><br/>' +
                   '<span style="font-size:16px;color:silver">km/h</span></div>'
        },
        tooltip: {
            valueSuffix: ' km/h'
        }
    }],

    plotOptions: {
        solidgauge: {
            dataLabels: {
                y: 5,
                borderWidth: 0,
                useHTML: true
            }
        }
    }
};

const rpmOptions = {
    chart: {
        type: 'solidgauge'
    },

    title: null,

    pane: {
        center: ['50%', '85%'],
        size: '140%',
        startAngle: -90,
        endAngle: 90,
        background: {
            backgroundColor: (Highcharts.theme && Highcharts.theme.background2) || '#EEE',
            innerRadius: '60%',
            outerRadius: '100%',
            shape: 'arc'
        }
    },

    tooltip: {
        enabled: false
    },

    plotOptions: {
        solidgauge: {
            dataLabels: {
                y: 5,
                borderWidth: 0,
                useHTML: true
            }
        }
    },

    yAxis: {
        stops: [
            [0.1, '#55BF3B'], // green
            [0.5, '#DDDF0D'], // yellow
            [0.9, '#DF5353'] // red
        ],
        lineWidth: 0,
        minorTickInterval: null,
        tickAmount: 2,
        title: {
            y: -70
        },
        labels: {
            y: 16
        },
        min: 0,
        max: 5,
        title: {
            text: 'RPM',
            style: { "font-size": "20px"}
        }
    },

    series: [{
        name: 'RPM',
        data: [1],
        dataLabels: {
            format: '<div style="text-align:center"><span style="font-size:48px;color:' +
                ((Highcharts.theme && Highcharts.theme.contrastTextColor) || 'black') + '">{y:.1f}</span><br/>' +
                   '<span style="font-size:16px;color:silver">* 1000 / min</span></div>'
        },
        tooltip: {
            valueSuffix: ' revolutions/min'
        }
    }]
};

function moveSpeed(chart) {

    // Bring life to the dials
        setInterval(function () {
            // Speed
            var point,
                newVal,
                inc;

            console.log(chart.yAxis);

            if (chart) {
                point = chart.series[0].points[0];
                inc = Math.round((Math.random() - 0.5) * 100);
                newVal = point.y + inc;

                if (newVal < 0 || newVal > 200) {
                    newVal = point.y - inc;
                }

                point.update(newVal);
            }

        }, 2000);
};

function moveRPM(chart) {

    // Bring life to the dials
        setInterval(function () {
            // Speed
            var point,
                newVal,
                inc;
    
            // RPM
            if (chart) {
                point = chart.series[0].points[0];
                inc = Math.random() - 0.5;
                newVal = point.y + inc;

                if (newVal < 0 || newVal > 5) {
                    newVal = point.y - inc;
                }

                point.update(newVal);
            }

        }, 2000);
};



class Gauge extends Component {

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
                    <li><a href="/pie">Pie Chart</a></li>
                    <li><a href="/bubble">Bubble Chart</a></li>
                    <li><a href="/scatter">3D Scatter Chart</a></li>
                    <li className="active"><a href="/gauge">Gauge Chart</a></li>
                    <li><a href="/box">Box Plot</a></li>
                    <li><a href="/clock">Clock</a></li>   
                  </ul>
                </nav>
              </div>

              <div className="col-lg-6">
              <GaugeSpeed container={'speed-chart'} options={speedOptions} function={moveSpeed}/><br/>
              </div>
              <div className="col-lg-6">
              <GaugeSpeed container={'rpm-chart'} options={rpmOptions} function={moveRPM}/><br/>
              </div>

            </div>
        )
    }
}

ReactDOM.render(<Gauge />, document.getElementById('gauge'))