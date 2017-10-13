export const pureRandom = {
    chart: {
        type: 'column',
        zoomType: 'xy'
    },
    title: {
        text: ''
    },
    subtitle: {
        text: ''
    },
    xAxis: {
        categories: ['A', 'B', 'C', 'D', 'E']
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
        bar: {
            dataLabels: {
                enabled: true
            },
            enableMouseTracking: true
        },
        column: {
            dataLabels: {
                enabled: true
            },
            enableMouseTracking: true
        },
        series: {
            animation: true
        }
    },
    series: []
};

export const configurableRandom = {
    chart: {
        type: 'column',
        zoomType: 'x'
    },
    title: {
        text: 'Randomly generated data'
    },
    subtitle: {
        text: 'This data is not real'
    },
    legend: {
        enabled: true
    },
    xAxis: {
        categories: []
    },
    yAxis: {
        title: {
            text: 'Random Value (UOM)'
        }
    },
    tooltip: {
        formatter: function () {
          console.log()
            return '<b style="color: ' + this.series.color + '; font-weight: bold;">' +
                    this.series.name + '</b><br>' +
                    this.x + ': ' +
                   '<b>' + this.y + '</b> (UOM)';
        }
    },
    plotOptions: {
        column: {
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

export const balanceSimulation = {
    chart: {
        type: 'column',
        zoomType: 'x'
    },
    title: {
        text: 'Balance Simulation'
    },
    subtitle: {
        text: 'This data is not real'
    },
    legend: {
        enabled: true
    },
    xAxis: {
        categories: ['Jan', 'Feb', 'Mar', 'Apr', 'May', 'Jun', 'Jul', 'Aug', 'Sep', 'Oct', 'Nov', 'Dec']
    },
    yAxis: {
        title: {
            text: 'US Dollars ($)'
        }
    },
    tooltip: {
        formatter: function () {
          console.log()
            return '<b style="color: ' + this.series.color + '; font-weight: bold;">' +
                    this.series.name + '</b><br>' +
                    this.x + ': ' +
                   '<b>' + this.y + '</b> (UOM)';
        }
    },
    plotOptions: {
        column: {
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

export const symbolsAnalysis = {
    chart: {
        type: 'column',
        zoomType: 'xy'
    },
    title: {
        text: ''
    },
    subtitle: {
        text: ''
    },
    xAxis: {
        categories: []
    },
    legend: {
        enabled: false
    },
    yAxis: {
        title: {
            text: 'Count'
        }
    },
    tooltip: {
        pointFormat: '<span style="color:{series.color}">Count</span>: <b>{point.y}</b><br/>'
    },
    plotOptions: {
        bar: {
            dataLabels: {
                enabled: true
            },
            enableMouseTracking: true
        },
        column: {
            dataLabels: {
                enabled: true
            },
            enableMouseTracking: true
        },
        series: {
            animation: true
        }
    },
    series: []
};

export const wordsAnalysis = symbolsAnalysis;

export const interestingFactsOne = {
    chart: {
        type: 'column',
        zoomType: 'xy'
    },
    title: {
        text: 'Interesting'
    },
    subtitle: {
        text: 'Super'
    },
    xAxis: {
        categories: []
    },
    legend: {
        enabled: true
    },
    yAxis: {
        title: {
            text: 'Interesting'
        }
    },
    tooltip: {
        pointFormat: '<span style="color:{series.color}">{series.name}</span>: <b>{point.y}</b> (UOM)<br/>'
    },
    plotOptions: {
        bar: {
            dataLabels: {
                enabled: true
            },
            enableMouseTracking: true
        },
        column: {
            dataLabels: {
                enabled: true
            },
            enableMouseTracking: true
        },
        series: {
            animation: true
        }
    },
    series: [{
        name: 'One',
        data: [
          [2007, 3130000000],
          [2008, 4600000000],
          [2009, 8120000000],
          [2010, 12240000000],
          [2011, 23610000000],
          [2012, 40130000000],
          [2013, 37750000000],
          [2014, 38560000000],
          [2015, 50740000000],
          [2016, 47800000000],
          [2017, 46650000000]
        ]
    }]
};

export const interestingFactsTwo = {
    chart: {
        type: 'column',
        zoomType: 'xy'
    },
    title: {
        text: 'Interesting'
    },
    subtitle: {
        text: 'Super'
    },
    xAxis: {
        categories: []
    },
    legend: {
        enabled: true
    },
    yAxis: {
        title: {
            text: 'Interesting'
        }
    },
    tooltip: {
        pointFormat: '<span style="color:{series.color}">{series.name}</span>: <b>{point.y}</b> (UOM)<br/>'
    },
    plotOptions: {
        bar: {
            dataLabels: {
                enabled: true
            },
            enableMouseTracking: true
        },
        column: {
            dataLabels: {
                enabled: true
            },
            enableMouseTracking: true
        },
        series: {
            animation: true
        }
    },
    series: [{
        name: 'Two',
        data: [
          [2007, 3130000000],
          [2008, 4600000000],
          [2011, 23610000000],
          [2012, 40130000000],
          [2013, 37750000000],
          [2014, 38560000000],
          [2017, 46650000000]
        ]
    }]
};

export const interestingFactsThree = {
    chart: {
        type: 'column',
        zoomType: 'xy'
    },
    title: {
        text: 'Interesting'
    },
    subtitle: {
        text: 'Super'
    },
    xAxis: {
        categories: []
    },
    legend: {
        enabled: true
    },
    yAxis: {
        title: {
            text: 'Interesting'
        }
    },
    tooltip: {
        pointFormat: '<span style="color:{series.color}">{series.name}</span>: <b>{point.y}</b> (UOM)<br/>'
    },
    plotOptions: {
        bar: {
            dataLabels: {
                enabled: true
            },
            enableMouseTracking: true
        },
        column: {
            dataLabels: {
                enabled: true
            },
            enableMouseTracking: true
        },
        series: {
            animation: true
        }
    },
    series: [{
        name: 'Three',
        data: [
          [2009, 8120000000],
          [2010, 12240000000],
          [2011, 23610000000],
          [2012, 40130000000],
          [2014, 38560000000],
          [2015, 50740000000],
          [2017, 46650000000]
        ]
    }]
};
