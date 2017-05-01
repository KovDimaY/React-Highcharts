import React, { Component } from 'react'
import ReactDOM from 'react-dom'

import Highcharts from 'highcharts'
import HighchartsMore from 'highcharts-more'
HighchartsMore(Highcharts)

import ClockChart from './charts/clock'
import Footer from './partials/footer' 

var now = getNow();

const clockOptions = {
    chart: {
        type: 'gauge',
        plotBackgroundColor: null,
        plotBackgroundImage: null,
        plotBorderWidth: 0,
        plotShadow: false,
        height: 500
    },

    credits: {
        enabled: false
    },

    title: {
        text: 'The Highcharts clock'
    },

    pane: {
        background: [{
            // default background
        }, {
            // reflex for supported browsers
            backgroundColor: Highcharts.svg ? {
                radialGradient: {
                    cx: 0.5,
                    cy: -0.4,
                    r: 1.9
                },
                stops: [
                    [0.5, 'rgba(255, 255, 255, 0.2)'],
                    [0.5, 'rgba(200, 200, 200, 0.2)']
                ]
            } : null
        }]
    },

    yAxis: {
        labels: {
            distance: -35,
            style: { "color": "black", "cursor": "default", "fontSize": "24px", "font-weight": "bold"}
        },
        min: 0,
        max: 12,
        lineWidth: 0,
        showFirstLabel: false,

        minorTickInterval: 'auto',
        minorTickWidth: 2,
        minorTickLength: 5,
        minorTickPosition: 'inside',
        minorGridLineWidth: 0,
        minorTickColor: '#666',

        tickInterval: 1,
        tickWidth: 3,
        tickPosition: 'inside',
        tickLength: 10,
        tickColor: '#666',
        title: {
            text: 'Powered by<br/>Highcharts<br/>& Dmytro Kovalenko ;)',
            style: {
                color: '#BBB',
                fontWeight: 'normal',
                fontSize: '12px',
                lineHeight: '14px'
            },
            y: 10
        }
    },

    tooltip: {
        enabled: false
    },

    series: [{
        data: [{
            id: 'hour',
            y: now.hours,
            dial: {
                radius: '60%',
                baseWidth: 12,
                baseLength: '50%',
                rearLength: '10%',
                backgroundColor: "black"
            },
        }, {
            id: 'minute',
            y: now.minutes,
            dial: {
                radius: '95%',
                baseWidth: 10,
                baseLength: '50%',
                rearLength: '10%',
                backgroundColor: "black"
            }
        }, {
            id: 'second',
            y: now.seconds,
            dial: {
                radius: '100%',
                baseWidth: 2,
                rearLength: '20%'
            }
        }],
        animation: false,
        dataLabels: {
            enabled: false
        }
    }]

};

/**
 * Get the current time
 */
function getNow() {
    var now = new Date();

    return {
        hours: now.getHours() + now.getMinutes() / 60,
        minutes: now.getMinutes() * 12 / 60 + now.getSeconds() * 12 / 3600,
        seconds: now.getSeconds() * 12 / 60
    };
}

/**
 * Pad numbers
 */
function pad(number, length) {
    // Create an array of the remaining length + 1 and join it with 0's
    return new Array((length || 2) + 1 - String(number).length).join(0) + number;
}

// Move
function move(chart) {
    setInterval(function () {

        now = getNow();

        if (chart.axes) { // not destroyed
            var hour = chart.get('hour'),
                minute = chart.get('minute'),
                second = chart.get('second'),
                // run animation unless we're wrapping around from 59 to 0
                animation = now.seconds === 0 ?
                    false : {
                        easing: 'easeOutBounce'
                    };

            // Cache the tooltip text
            chart.tooltipText =
                pad(Math.floor(now.hours), 2) + ':' +
                pad(Math.floor(now.minutes * 5), 2) + ':' +
                pad(now.seconds * 5, 2);


            hour.update(now.hours, true, animation);
            minute.update(now.minutes, true, animation);
            second.update(now.seconds, true, animation);
        }

    }, 1000);
};

/**
 * Easing function from https://github.com/danro/easing-js/blob/master/easing.js
 */
Math.easeOutBounce = function (pos) {
    if ((pos) < (1 / 2.75)) {
        return (7.5625 * pos * pos);
    }
    if (pos < (2 / 2.75)) {
        return (7.5625 * (pos -= (1.5 / 2.75)) * pos + 0.75);
    }
    if (pos < (2.5 / 2.75)) {
        return (7.5625 * (pos -= (2.25 / 2.75)) * pos + 0.9375);
    }
    return (7.5625 * (pos -= (2.625 / 2.75)) * pos + 0.984375);
};



class Clock extends Component {

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
                    <li><a href="/scatter">3D Scatter</a></li>
                    <li><a href="/gauge">Gauge Chart</a></li>
                    <li><a href="/combo">Combination</a></li>
                    <li className="active"><a href="/clock">Clock</a></li>   
                  </ul>
                </nav>
              </div>

              
                <ClockChart container={'clock'} options={clockOptions} function={move}/>

                <Footer />
              

            </div>
        )
    }
}

ReactDOM.render(<Clock />, document.getElementById('clock'))