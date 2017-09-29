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
            text: 'Rendom Value (UOM)'
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
