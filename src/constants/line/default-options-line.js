export const pureRandom = {
    chart: {
        type: 'line',
        zoomType: 'xy'
    },
    title: {
        text: 'Randomly generated data'
    },
    subtitle: {
        text: 'This data is not real'
    },
    xAxis: {
        categories: ['Jan', 'Feb', 'Mar', 'Apr', 'May', 'Jun', 'Jul', 'Aug', 'Sep', 'Oct', 'Nov', 'Dec']
    },
    legend: {
        enabled: true
    },
    yAxis: {
        title: {
            text: 'Random Value (UOM)'
        }
    },
    tooltip: {
        pointFormat: '<span style="color:{series.color}">{series.name}</span>: <b>{point.y}</b> (UOM)<br/>'
    },
    plotOptions: {
        line: {
            dataLabels: {
                enabled: true
            },
            enableMouseTracking: true
        },
        series: {
            animation: true,
            marker: {
                enabled: true
            }
        }
    },
    series: []
};

export const stockSimulation = {
    rangeSelector: {
        selected: 1
    },
    title: {
        text: 'Simulation'
    },
    navigator: {
        enabled: true
    },
    rangeSelector: {
        enabled: true,
        buttons: [{
        	type: 'second',
        	count: 30,
        	text: '30sec'
        }, {
        	type: 'minute',
        	count: 1,
        	text: '1min'
        }, {
        	type: 'minute',
        	count: 5,
        	text: '5min'
        }, {
        	type: 'minute',
        	count: 10,
        	text: '5min'
        }, {
        	type: 'hour',
        	count: 1,
        	text: '1h'
        }, {
        	type: 'all',
        	text: 'All'
        }],
        buttonTheme: {
            width: 60
        },
    },
    tooltip: {
        valueDecimals: 2,
        valuePrefix: '$',
        valueSuffix: ' USD'
    },
    plotOptions: {
        series: {
            animation: false,
            marker: {
                enabled: true
            }
        }
    },
    series: []
}

export const functions = {
    chart: {
        type: 'line',
        zoomType: 'xy'
    },
    title: {
        text: 'Functions'
    },
    subtitle: {
        text: 'Discrete representation with the given accuracy'
    },
    yAxis: {
        title: {
            text: null
        }
    },
    tooltip: {
        formatter: function () {
            return '<b style="color: ' + this.series.color + '">' +
                    this.series.name + '</b><br>' +
                   'x = <b>' + this.x + '</b><br>' +
                   'f(x) = <b>' + this.y + '</b>';
        }
    },
    series: []
};

export const interestingFacts = {
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
}
