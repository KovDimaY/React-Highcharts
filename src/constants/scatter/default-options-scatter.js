import Highcharts from 'highcharts'

export const pureRandom2D = {
    chart: {
        type: 'scatter',
        zoomType: 'xy'
    },
    title: {
        text: ''
    },
    subtitle: {
        text: ''
    },
    xAxis: {
        title: {
            enabled: true,
            text: ''
        },
        startOnTick: true,
        endOnTick: true,
        showLastLabel: true
    },
    yAxis: {
        title: {
            enabled: true,
            text: ''
        }
    },
    legend: {
        enabled: true
    },
    tooltip: {
        enabled: true
    },
    plotOptions: {
        scatter: {
            marker: {
                radius: 2,
                states: {
                    hover: {
                        enabled: true,
                        lineColor: 'rgb(100,100,100)'
                    }
                }
            },
            states: {
                hover: {
                    marker: {
                        enabled: false
                    }
                }
            },
            tooltip: {
                headerFormat: '<b>{series.name}</b><br>',
                pointFormat: 'x: {point.x}<br>y: {point.y}'
            },
            dataLabels: {
                enabled: true
            }
        },
        series: {
            animation: true
        }
    },
    series: []
}

export const pureRandom3D = {
    chart: {
        renderTo: 'container',
        margin: 100,
        type: 'scatter',
        options3d: {
            enabled: true,
            alpha: 10,
            beta: 30,
            depth: 250,
            viewDistance: 5,
            fitToPlot: false,
            frame: {
                bottom: { size: 1, color: 'rgba(0,0,0,0.02)' },
                back: { size: 1, color: 'rgba(0,0,0,0.04)' },
                side: { size: 1, color: 'rgba(0,0,0,0.06)' }
            }
        }
    },
    title: {
        text: ''
    },
    subtitle: {
        text: 'Click and drag the plot area to rotate in space'
    },
    plotOptions: {
        scatter3d: {
            marker: {
                radius: 2,
                states: {
                    hover: {
                        enabled: true,
                        lineColor: 'rgb(100,100,100)'
                    }
                }
            },
            states: {
                hover: {
                    marker: {
                        enabled: false
                    }
                }
            },
            dataLabels: {
                enabled: true
            },
            width: 10,
            height: 10,
            depth: 10
        },
        series: {
            animation: true
        }
    },
    yAxis: {
        title: {
            enabled: true,
            text: ''
        }
    },
    xAxis: {
        gridLineWidth: 1,
        title: {
            enabled: true,
            text: ''
        }
    },
    zAxis: {
        showFirstLabel: false,
        title: {
            enabled: true,
            text: ''
        }
    },
    legend: {
        enabled: false
    },
    tooltip: {
        enabled: true
    },
    series: []
}

export const pureRandomBubble = {
    chart: {
        type: 'bubble',
        plotBorderWidth: 1,
        zoomType: 'xy'
    },
    title: {
        text: ''
    },
    subtitle: {
        text: ''
    },
    legend: {
        enabled: false
    },
    tooltip: {
        enabled: true
    },
    yAxis: {
        title: {
            enabled: true,
            text: ''
        }
    },
    xAxis: {
        gridLineWidth: 1,
        title: {
            enabled: true,
            text: ''
        }
    },
    plotOptions: {
        bubble: {
            dataLabels: {
                enabled: true
            }
        },
        series: {
            animation: true
        }
    },
    series: [{
        data: [
            [9, 81, 63],
            [98, 5, 89],
            [51, 50, 73],
            [41, 22, 14],
            [58, 24, 20],
            [78, 37, 34],
            [55, 56, 53],
            [18, 45, 70],
            [42, 44, 28],
            [3, 52, 59],
            [31, 18, 97],
            [79, 91, 63],
            [93, 23, 23],
            [44, 83, 22]
        ],
        marker: {
            fillColor: {
                radialGradient: { cx: 0.4, cy: 0.3, r: 0.7 },
                stops: [
                    [0, 'rgba(255,255,255,0.5)'],
                    [1, Highcharts.Color(Highcharts.getOptions().colors[0]).setOpacity(0.5).get('rgba')]
                ]
            }
        }
    }, {
        data: [
            [42, 38, 20],
            [6, 18, 1],
            [1, 93, 55],
            [57, 2, 90],
            [80, 76, 22],
            [11, 74, 96],
            [88, 56, 10],
            [30, 47, 49],
            [57, 62, 98],
            [4, 16, 16],
            [46, 10, 11],
            [22, 87, 89],
            [57, 91, 82],
            [45, 15, 98]
        ],
        marker: {
            fillColor: {
                radialGradient: { cx: 0.4, cy: 0.3, r: 0.7 },
                stops: [
                    [0, 'rgba(255,255,255,0.5)'],
                    [1, Highcharts.Color(Highcharts.getOptions().colors[1]).setOpacity(0.5).get('rgba')]
                ]
            }
        }
    }]
}
