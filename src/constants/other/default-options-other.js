import Highcharts from 'highcharts'


export const heatmap = {
    chart: {
        type: 'heatmap',
        plotBorderWidth: 1
    },
    title: {
        text: 'Randomly generated data'
    },
    subtitle: {
        text: 'This data is not real'
    },
    xAxis: {
        categories: [],
        labels: {
        	enabled: true
        }
    },
    yAxis: {
        categories: [],
        title: null,
        labels: {
        	enabled: true
        }
    },
    colorAxis: {
        min: 0,
        minColor: '#FFFFFF',
        maxColor: Highcharts.getOptions().colors[0]
    },
    legend: {
        enabled: true,
        align: 'right',
        layout: 'vertical',
        margin: 0,
        verticalAlign: 'top',
        y: 40,
        symbolHeight: 280
    },
    tooltip: {
        enabled: true,
        formatter: function () {
          if (this.point.value === null) {
            return false;
          }
          return `The intersection of <b>${this.series.xAxis.categories[this.point.x]}</b>
                  and <b>${this.series.yAxis.categories[this.point.y]}</b>
                  has the value <b>${this.point.value}</b>`;
        }
    },
    plotOptions: {
        series: {
            animation: true
        }
    },
    series: []
}

export const tilemap = {
    chart: {
        type: 'tilemap'
    },
    title: {
        text: ''
    },
    subtitle: {
        text: ''
    },
    xAxis: {
        visible: false
    },
    yAxis: {
        visible: false
    },
    legend: {
        enabled: true,
    },
    colorAxis: {
        dataClasses: [{
            from: 0,
            to: 25,
            color: '#F9EDB3',
            name: '< 25'
        }, {
            from: 25,
            to: 50,
            color: '#FFC428',
            name: '25 - 50'
        }, {
            from: 50,
            to: 75,
            color: '#FF7987',
            name: '50 - 75'
        }, {
            from: 75,
            color: '#FF2371',
            name: '> 75'
        }]
    },
    tooltip: {
        headerFormat: '',
        pointFormat: 'The value of the cell ({point.x};{point.y}) is <b>{point.value}</b> (UOM)'
    },
    plotOptions: {
        series: {
            dataLabels: {
                enabled: true,
                style: {
                    textOutline: false
                }
            }
        }
    },

    series: []
}

export const polar = {
    chart: {
        polar: true
    },
    title: {
        text: ''
    },
    subtitle: {
        text: ''
    },
    pane: {
        startAngle: 0,
        endAngle: 360
    },
    legend: {
        enabled: true,
    },
    tooltip: {
      enabled: true,
    },
    xAxis: {
        tickInterval: 45,
        min: 0,
        max: 360,
        tickmarkPlacement: 'on',
        lineWidth: 0,
        labels: {}
    },
    yAxis: {
        gridLineInterpolation: 'polygon',
        min: 0
    },
    plotOptions: {
        series: {
            pointStart: 0,
            pointInterval: 45,
            dataLabels: {
                enabled: true,
            }
        },
        column: {
            pointPadding: 0,
            groupPadding: 0,
            stacking: 'normal',
        },
        area: {
          stacking: 'normal',
        }
    },
    series: []
}

export const boxplot = {

    chart: {
        type: 'boxplot'
    },

    title: {
        text: 'Highcharts Box Plot Example'
    },

    legend: {
        enabled: false
    },

    xAxis: {
        categories: ['1', '2', '3', '4', '5'],
        title: {
            text: 'Experiment No.'
        }
    },

    yAxis: {
        title: {
            text: 'Observations'
        },
        plotLines: [{
            value: 932,
            color: 'red',
            width: 1,
            label: {
                text: 'Theoretical mean: 932',
                align: 'center',
                style: {
                    color: 'gray'
                }
            }
        }]
    },

    series: [{
        name: 'Observations',
        data: [
            [760, 801, 848, 895, 965],
            [733, 853, 939, 980, 1080],
            [714, 762, 817, 870, 918],
            [724, 802, 806, 871, 950],
            [834, 836, 864, 882, 910]
        ],
        tooltip: {
            headerFormat: '<em>Experiment No {point.key}</em><br/>'
        }
    }, {
        name: 'Outlier',
        color: Highcharts.getOptions().colors[0],
        type: 'scatter',
        data: [ // x, y positions where 0 is the first category
            [0, 644],
            [4, 718],
            [4, 951],
            [4, 969]
        ],
        marker: {
            fillColor: 'white',
            lineWidth: 1,
            lineColor: Highcharts.getOptions().colors[0]
        },
        tooltip: {
            pointFormat: 'Observation: {point.y}'
        }
    }]

}

export const gauge = {
    chart: {
        type: 'solidgauge',
        marginTop: 50
    },
    title: {
        text: 'Text analysis',
        style: {
            fontSize: '24px'
        }
    },
    tooltip: {
        borderWidth: 0,
        backgroundColor: 'none',
        shadow: false,
        style: {
            fontSize: '16px'
        },
        pointFormat: '{series.name}<br><span style="font-size:2em; color: {point.color}; font-weight: bold">{point.y}%</span>',
        positioner: function (labelWidth, labelHeight) {
            return {
                x: (this.chart.chartWidth - labelWidth) / 2,
                y: (this.chart.chartHeight - labelHeight + 40) / 2
            };
        }
    },
    pane: {
        startAngle: 0,
        endAngle: 360,
        background: [{ // Track for Letters
            outerRadius: '112%',
            innerRadius: '88%',
            backgroundColor: Highcharts.Color(Highcharts.getOptions().colors[0])
                .setOpacity(0.3)
                .get(),
            borderWidth: 0
        }, { // Track for Symbols
            outerRadius: '87%',
            innerRadius: '63%',
            backgroundColor: Highcharts.Color(Highcharts.getOptions().colors[1])
                .setOpacity(0.3)
                .get(),
            borderWidth: 0
        }, { // Track for Digits
            outerRadius: '62%',
            innerRadius: '38%',
            backgroundColor: Highcharts.Color(Highcharts.getOptions().colors[2])
                .setOpacity(0.3)
                .get(),
            borderWidth: 0
        }]
    },

    yAxis: {
        min: 0,
        max: 100,
        lineWidth: 0,
        tickPositions: []
    },

    plotOptions: {
        solidgauge: {
            dataLabels: {
                enabled: false
            },
            linecap: 'round',
            stickyTracking: false,
            rounded: true
        },
        series: {
            animation: false
        }
    },

    series: [{
        name: 'Letters',
        data: [{
            color: Highcharts.getOptions().colors[0],
            radius: '112%',
            innerRadius: '88%',
            y: 0
        }]
    }, {
        name: 'Symbols',
        data: [{
            color: Highcharts.getOptions().colors[1],
            radius: '87%',
            innerRadius: '63%',
            y: 0
        }]
    }, {
        name: 'Digits',
        data: [{
            color: Highcharts.getOptions().colors[2],
            radius: '62%',
            innerRadius: '38%',
            y: 0
        }]
    }]
}

export const pyramid = {
    chart: {
        type: 'pyramid'
    },
    title: {
        text: ''
    },
    subtitle: {
        text: ''
    },
    legend: {
        enabled: true,
    },
    tooltip: {
      enabled: true,
    },
    plotOptions: {
        pyramid: {
          allowPointSelect: true,
        },
        series: {
            dataLabels: {
                enabled: true,
                format: '<b>{point.name}</b> ({point.y:,.0f})',
                color: (Highcharts.theme && Highcharts.theme.contrastTextColor) || 'black',
                softConnector: true
            }
        }
    },
    series: [{
        name: 'Pyramid Series',
        showInLegend: true,
        data: []
    }]
}

export const wordcloud = {
    series: [{
        type: 'wordcloud',
        data: [{ name: 'init', weight: 1 }]
    }],
    title: {
        text: ''
    },
    legend: {
        enabled: false
    },
    tooltip: {
      enabled: false,
    }
}

export const sankey = {
    title: {
        text: 'Highcharts Sankey Diagram'
    },
    plotOptions: {
      sankey: {
        linkOpacity: 0.5,
        curveFactor: 0.33
      }
    },
    tooltip: {
        enabled: true,
        formatter: function () {
          if (this.key) {
            return `<b>${this.key}</b><br/>
                    Total weight: <b>${this.point.sum}</b>`;
          }
          return `<b style="color:${this.color}">${this.series.name}</b><br/>
                  From <b>${this.point.from}</b> to <b>${this.point.to}</b><br/>
                  Weight: <b>${this.point.weight}</b>`;
        }
    },
    series: [{
        keys: ['from', 'to', 'weight'],
        data: [],
        type: 'sankey',
        name: 'Random link'
    }]
}
