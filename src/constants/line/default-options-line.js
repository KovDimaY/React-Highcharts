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

export const interestingFactsTemperature = {
    chart: {
        type: 'line'
    },
    title: {
        text: 'Monthly Average Temperature'
    },
    subtitle: {
        text: 'Source: holiday-weather.com'
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
            enableMouseTracking: true
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

export const interestingFactsPopulation = {
    chart: {
        type: 'line'
    },
    title: {
        text: 'Population by Country'
    },
    subtitle: {
        text: 'Source: ourworldindata.org'
    },
    xAxis: {
      title: {
          text: 'Years'
      }
    },
    yAxis: {
        title: {
            text: 'Population (number of people)'
        }
    },
    plotOptions: {
        line: {
            dataLabels: {
                enabled: false
            },
            enableMouseTracking: true
        }
    },
    series: [{
        name: 'China',
        data: [
          [1500, 103000000],
          [1600, 160000000],
          [1700, 138000000],
          [1750, 225000000],
          [1800, 330000000],
          [1850, 412000000],
          [1900, 400000000],
          [1910, 423000000],
          [1920, 472000000],
          [1930, 489000000],
          [1940, 518770000],
          [1950, 546815000],
          [1960, 667070000],
          [1970, 818315000],
          [1980, 981861000],
          [1990, 1135185000],
          [2000, 1262645000]
        ]
    },
    {
        name: 'India',
        data: [
          [1500, 110000000],
          [1600, 135000000],
          [1700, 165000000],
          [1850, 235800017],
          [1900, 284500000],
          [1910, 302100000],
          [1920, 305600000],
          [1930, 336400000],
          [1940, 386800000],
          [1950, 359000000],
          [1960, 434000000],
          [1970, 541000000],
          [1980, 679000000],
          [1990, 839000000],
          [2000, 1004124000]
        ]
    },
    {
        name: 'USA',
        data: [
          [1800, 6000000],
          [1850, 23579000],
          [1900, 76391000],
          [1910, 92787000],
          [1920, 106881000],
          [1930, 123668000],
          [1940, 132637000],
          [1950, 152271000],
          [1960, 180671000],
          [1970, 205052000],
          [1980, 227726000],
          [1990, 250131000],
          [2000, 282158000]
        ]
    },
    {
        name: 'Germany',
        data: [
          [1500, 12000000],
          [1600, 16000000],
          [1700, 15000000],
          [1750, 15000000],
          [1800, 18000000],
          [1850, 33746000],
          [1900, 54388000],
          [1910, 62884000],
          [1920, 60894000],
          [1930, 65084000],
          [1940, 69835000],
          [1950, 68374572],
          [1960, 72480869],
          [1970, 77783164],
          [1980, 78297904],
          [1990, 79380394],
          [2000, 82187909]
        ]
    }]
}
