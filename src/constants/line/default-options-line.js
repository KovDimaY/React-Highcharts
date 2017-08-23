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
        text: 'Source: www.holiday-weather.com'
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
        data: [5,	6,	9,	14,	18,	21,	25,	26,	23,	18,	12,	8]
    }, {
        name: 'London',
        data: [5,	7,	9,	11,	14,	16,	19,	19,	17,	13,	10,	7]
    }, {
        name: 'Kiev',
        data: [-5,	-3,	2,	8,	15,	18,	19,	18,	14,	8,	2,	-2]
    }, {
        name: 'Barcelona',
        data: [10,	10,	12,	13,	16,	20,	23,	24,	22,	18,	13,	11]
    }, {
        name: 'Dubai',
        data: [19,	20,	23,	26,	31,	33,	35,	36,	33,	29,	25,	21]
    }, {
        name: 'Moscow',
        data: [-8,	-7,	-2,	6,	13,	18,	19,	17,	12,	6,	-1,	-6]
    }, {
        name: 'Toronto',
        data: [-3,	-3,	1,	7,	14,	16,	21,	21,	18,	11,	5,	-1]
    }]
}
