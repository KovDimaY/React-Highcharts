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
    series: []
}

export const configurableRandom2D = {
    chart: {
        type: 'scatter',
        zoomType: 'xy'
    },
    title: {
        text: 'Randomly generated data'
    },
    xAxis: {
        title: {
            enabled: true,
            text: 'Random values (UOM)'
        },
        startOnTick: true,
        endOnTick: true,
        showLastLabel: true
    },
    yAxis: {
        title: {
            enabled: true,
            text: 'Random values (UOM)'
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
                radius: 5,
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
            }
        },
        series: {
            animation: true
        }
    },
    series: []
}

export const configurableRandom3D = {
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
        text: 'Randomly generated data'
    },
    subtitle: {
        text: 'Click and drag the plot area to rotate in space'
    },
    plotOptions: {
        scatter3d: {
            marker: {
                radius: 5,
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
            text: 'Random values (UOM)'
        }
    },
    xAxis: {
        gridLineWidth: 1,
        title: {
            enabled: true,
            text: 'Random values (UOM)'
        }
    },
    zAxis: {
        showFirstLabel: false,
        title: {
            enabled: true,
            text: 'Random values (UOM)'
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

export const configurableRandomBubble = {
    chart: {
        type: 'bubble',
        plotBorderWidth: 1,
        zoomType: 'xy'
    },
    title: {
        text: 'Randomly generated data'
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
            text: 'Random values (UOM)'
        }
    },
    xAxis: {
        gridLineWidth: 1,
        title: {
            enabled: true,
            text: 'Random values (UOM)'
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
    series: []
}

export const shootingSimulation = {
    title: {
        text: 'Highcharts Histogram'
    },
    xAxis: [{
        title: { text: 'Data' },
        alignTicks: false
    }, {
        title: { text: 'Histogram' },
        alignTicks: false,
        opposite: true
    }],

    yAxis: [{
        title: { text: 'Data' }
    }, {
        title: { text: 'Histogram' },
        opposite: true
    }],

    series: [{
        name: 'Histogram',
        type: 'histogram',
        xAxis: 1,
        yAxis: 1,
        baseSeries: 's1',
        zIndex: -1
    }, {
        name: 'Data',
        type: 'scatter',
        data: [
          3.5, 3, 3.2, 3.1, 3.6, 3.9, 3.4, 3.4, 2.9, 3.1, 3.7, 3.4, 3, 3, 4,
          4.4, 3.9, 3.5, 3.8, 3.8, 3.4, 3.7, 3.6, 3.3, 3.4, 3, 3.4, 3.5, 3.4, 3.2,
          3.1, 3.4, 4.1, 4.2, 3.1, 3.2, 3.5, 3.6, 3, 3.4, 3.5, 2.3, 3.2, 3.5, 3.8,
          3, 3.8, 3.2, 3.7, 3.3, 3.2, 3.2, 3.1, 2.3, 2.8, 2.8, 3.3, 2.4, 2.9, 2.7,
          2, 3, 2.2, 2.9, 2.9, 3.1, 3, 2.7, 2.2, 2.5, 3.2, 2.8, 2.5, 2.8, 2.9, 3,
          2.8, 3, 2.9, 2.6, 2.4, 2.4, 2.7, 2.7, 3, 3.4, 3.1, 2.3, 3, 2.5, 2.6, 3,
          2.6, 2.3, 2.7, 3, 2.9, 2.9, 2.5, 2.8, 3.3, 2.7, 3, 2.9, 3, 3, 2.5, 2.9,
          2.5, 3.6, 3.2, 2.7, 3, 2.5, 2.8, 3.2, 3, 3.8, 2.6, 2.2, 3.2, 2.8, 2.8,
          2.7, 3.3, 3.2, 2.8, 3, 2.8, 3, 2.8, 3.8, 2.8, 2.8, 2.6, 3, 3.4, 3.1, 3,
          3.1, 3.1, 3.1, 2.7, 3.2, 3.3, 3, 2.5, 3, 3.4, 3
        ],
        id: 's1',
        marker: {
            radius: 1.5
        }
    }]
}
