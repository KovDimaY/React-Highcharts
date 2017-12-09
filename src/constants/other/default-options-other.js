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
        type: 'tilemap',
        inverted: true,
        height: '80%'
    },

    title: {
        text: 'U.S. states by population in 2016'
    },

    subtitle: {
        text: 'Source:<a href="https://simple.wikipedia.org/wiki/List_of_U.S._states_by_population">Wikipedia</a>'
    },

    xAxis: {
        visible: false
    },

    yAxis: {
        visible: false
    },

    colorAxis: {
        dataClasses: [{
            from: 0,
            to: 1000000,
            color: '#F9EDB3',
            name: '< 1M'
        }, {
            from: 1000000,
            to: 5000000,
            color: '#FFC428',
            name: '1M - 5M'
        }, {
            from: 5000000,
            to: 20000000,
            color: '#FF7987',
            name: '5M - 20M'
        }, {
            from: 20000000,
            color: '#FF2371',
            name: '> 20M'
        }]
    },

    tooltip: {
        headerFormat: '',
        pointFormat: 'The population of <b> {point.name}</b> is <b>{point.value}</b>'
    },

    plotOptions: {
        series: {
            dataLabels: {
                enabled: true,
                format: '{point.hc-a2}',
                color: '#000000',
                style: {
                    textOutline: false
                }
            }
        }
    },

    series: [{
        name: '',
        data: [{
            'hc-a2': 'AL',
            name: 'Alabama',
            region: 'South',
            x: 6,
            y: 7,
            value: 4849377
        }, {
            'hc-a2': 'AK',
            name: 'Alaska',
            region: 'West',
            x: 0,
            y: 0,
            value: 737732
        }, {
            'hc-a2': 'AZ',
            name: 'Arizona',
            region: 'West',
            x: 5,
            y: 3,
            value: 6745408
        }, {
            'hc-a2': 'AR',
            name: 'Arkansas',
            region: 'South',
            x: 5,
            y: 6,
            value: 2994079
        }, {
            'hc-a2': 'CA',
            name: 'California',
            region: 'West',
            x: 5,
            y: 2,
            value: 39250017
        }, {
            'hc-a2': 'CO',
            name: 'Colorado',
            region: 'West',
            x: 4,
            y: 3,
            value: 5540545
        }, {
            'hc-a2': 'CT',
            name: 'Connecticut',
            region: 'Northeast',
            x: 3,
            y: 11,
            value: 3596677
        }, {
            'hc-a2': 'DE',
            name: 'Delaware',
            region: 'South',
            x: 4,
            y: 9,
            value: 935614
        }, {
            'hc-a2': 'DC',
            name: 'District of Columbia',
            region: 'South',
            x: 4,
            y: 10,
            value: 7288000
        }, {
            'hc-a2': 'FL',
            name: 'Florida',
            region: 'South',
            x: 8,
            y: 8,
            value: 20612439
        }, {
            'hc-a2': 'GA',
            name: 'Georgia',
            region: 'South',
            x: 7,
            y: 8,
            value: 10310371
        }, {
            'hc-a2': 'HI',
            name: 'Hawaii',
            region: 'West',
            x: 8,
            y: 0,
            value: 1419561
        }, {
            'hc-a2': 'ID',
            name: 'Idaho',
            region: 'West',
            x: 3,
            y: 2,
            value: 1634464
        }, {
            'hc-a2': 'IL',
            name: 'Illinois',
            region: 'Midwest',
            x: 3,
            y: 6,
            value: 12801539
        }, {
            'hc-a2': 'IN',
            name: 'Indiana',
            region: 'Midwest',
            x: 3,
            y: 7,
            value: 6596855
        }, {
            'hc-a2': 'IA',
            name: 'Iowa',
            region: 'Midwest',
            x: 3,
            y: 5,
            value: 3107126
        }, {
            'hc-a2': 'KS',
            name: 'Kansas',
            region: 'Midwest',
            x: 5,
            y: 5,
            value: 2904021
        }, {
            'hc-a2': 'KY',
            name: 'Kentucky',
            region: 'South',
            x: 4,
            y: 6,
            value: 4413457
        }, {
            'hc-a2': 'LA',
            name: 'Louisiana',
            region: 'South',
            x: 6,
            y: 5,
            value: 4649676
        }, {
            'hc-a2': 'ME',
            name: 'Maine',
            region: 'Northeast',
            x: 0,
            y: 11,
            value: 1330089
        }, {
            'hc-a2': 'MD',
            name: 'Maryland',
            region: 'South',
            x: 4,
            y: 8,
            value: 6016447
        }, {
            'hc-a2': 'MA',
            name: 'Massachusetts',
            region: 'Northeast',
            x: 2,
            y: 10,
            value: 6811779
        }, {
            'hc-a2': 'MI',
            name: 'Michigan',
            region: 'Midwest',
            x: 2,
            y: 7,
            value: 9928301
        }, {
            'hc-a2': 'MN',
            name: 'Minnesota',
            region: 'Midwest',
            x: 2,
            y: 4,
            value: 5519952
        }, {
            'hc-a2': 'MS',
            name: 'Mississippi',
            region: 'South',
            x: 6,
            y: 6,
            value: 2984926
        }, {
            'hc-a2': 'MO',
            name: 'Missouri',
            region: 'Midwest',
            x: 4,
            y: 5,
            value: 6093000
        }, {
            'hc-a2': 'MT',
            name: 'Montana',
            region: 'West',
            x: 2,
            y: 2,
            value: 1023579
        }, {
            'hc-a2': 'NE',
            name: 'Nebraska',
            region: 'Midwest',
            x: 4,
            y: 4,
            value: 1881503
        }, {
            'hc-a2': 'NV',
            name: 'Nevada',
            region: 'West',
            x: 4,
            y: 2,
            value: 2839099
        }, {
            'hc-a2': 'NH',
            name: 'New Hampshire',
            region: 'Northeast',
            x: 1,
            y: 11,
            value: 1326813
        }, {
            'hc-a2': 'NJ',
            name: 'New Jersey',
            region: 'Northeast',
            x: 3,
            y: 10,
            value: 8944469
        }, {
            'hc-a2': 'NM',
            name: 'New Mexico',
            region: 'West',
            x: 6,
            y: 3,
            value: 2085572
        }, {
            'hc-a2': 'NY',
            name: 'New York',
            region: 'Northeast',
            x: 2,
            y: 9,
            value: 19745289
        }, {
            'hc-a2': 'NC',
            name: 'North Carolina',
            region: 'South',
            x: 5,
            y: 9,
            value: 10146788
        }, {
            'hc-a2': 'ND',
            name: 'North Dakota',
            region: 'Midwest',
            x: 2,
            y: 3,
            value: 739482
        }, {
            'hc-a2': 'OH',
            name: 'Ohio',
            region: 'Midwest',
            x: 3,
            y: 8,
            value: 11614373
        }, {
            'hc-a2': 'OK',
            name: 'Oklahoma',
            region: 'South',
            x: 6,
            y: 4,
            value: 3878051
        }, {
            'hc-a2': 'OR',
            name: 'Oregon',
            region: 'West',
            x: 4,
            y: 1,
            value: 3970239
        }, {
            'hc-a2': 'PA',
            name: 'Pennsylvania',
            region: 'Northeast',
            x: 3,
            y: 9,
            value: 12784227
        }, {
            'hc-a2': 'RI',
            name: 'Rhode Island',
            region: 'Northeast',
            x: 2,
            y: 11,
            value: 1055173
        }, {
            'hc-a2': 'SC',
            name: 'South Carolina',
            region: 'South',
            x: 6,
            y: 8,
            value: 4832482
        }, {
            'hc-a2': 'SD',
            name: 'South Dakota',
            region: 'Midwest',
            x: 3,
            y: 4,
            value: 853175
        }, {
            'hc-a2': 'TN',
            name: 'Tennessee',
            region: 'South',
            x: 5,
            y: 7,
            value: 6651194
        }, {
            'hc-a2': 'TX',
            name: 'Texas',
            region: 'South',
            x: 7,
            y: 4,
            value: 27862596
        }, {
            'hc-a2': 'UT',
            name: 'Utah',
            region: 'West',
            x: 5,
            y: 4,
            value: 2942902
        }, {
            'hc-a2': 'VT',
            name: 'Vermont',
            region: 'Northeast',
            x: 1,
            y: 10,
            value: 626011
        }, {
            'hc-a2': 'VA',
            name: 'Virginia',
            region: 'South',
            x: 5,
            y: 8,
            value: 8411808
        }, {
            'hc-a2': 'WA',
            name: 'Washington',
            region: 'West',
            x: 2,
            y: 1,
            value: 7288000
        }, {
            'hc-a2': 'WV',
            name: 'West Virginia',
            region: 'South',
            x: 4,
            y: 7,
            value: 1850326
        }, {
            'hc-a2': 'WI',
            name: 'Wisconsin',
            region: 'Midwest',
            x: 2,
            y: 5,
            value: 5778708
        }, {
            'hc-a2': 'WY',
            name: 'Wyoming',
            region: 'West',
            x: 3,
            y: 3,
            value: 584153
        }]
    }]
}

export const polar = {

    chart: {
        polar: true
    },

    title: {
        text: 'Highcharts Polar Chart'
    },

    pane: {
        startAngle: 0,
        endAngle: 360
    },

    xAxis: {
        tickInterval: 45,
        min: 0,
        max: 360,
        labels: {
            formatter: function () {
                return this.value + '°';
            }
        }
    },

    yAxis: {
        min: 0
    },

    plotOptions: {
        series: {
            pointStart: 0,
            pointInterval: 45
        },
        column: {
            pointPadding: 0,
            groupPadding: 0
        }
    },

    series: [{
        type: 'column',
        name: 'Column',
        data: [8, 7, 6, 5, 4, 3, 2, 1],
        pointPlacement: 'between'
    }, {
        type: 'line',
        name: 'Line',
        data: [1, 2, 3, 4, 5, 6, 7, 8]
    }, {
        type: 'area',
        name: 'Area',
        data: [1, 8, 2, 7, 3, 6, 4, 5]
    }]
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
        text: 'Activity',
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
        positioner: function (labelWidth) {
            return {
                x: (this.chart.chartWidth - labelWidth) / 2,
                y: (this.chart.chartHeight - labelWidth + 40) / 2
            };
        }
    },
    pane: {
        startAngle: 0,
        endAngle: 360,
        background: [{ // Track for Move
            outerRadius: '112%',
            innerRadius: '88%',
            backgroundColor: Highcharts.Color(Highcharts.getOptions().colors[0])
                .setOpacity(0.3)
                .get(),
            borderWidth: 0
        }, { // Track for Exercise
            outerRadius: '87%',
            innerRadius: '63%',
            backgroundColor: Highcharts.Color(Highcharts.getOptions().colors[1])
                .setOpacity(0.3)
                .get(),
            borderWidth: 0
        }, { // Track for Stand
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
        }
    },

    series: [{
        name: 'Move',
        data: [{
            color: Highcharts.getOptions().colors[0],
            radius: '112%',
            innerRadius: '88%',
            y: 80
        }]
    }, {
        name: 'Exercise',
        data: [{
            color: Highcharts.getOptions().colors[1],
            radius: '87%',
            innerRadius: '63%',
            y: 65
        }]
    }, {
        name: 'Stand',
        data: [{
            color: Highcharts.getOptions().colors[2],
            radius: '62%',
            innerRadius: '38%',
            y: 50
        }]
    }]
}

export const pyramid = {
    chart: {
        type: 'pyramid'
    },
    title: {
        text: 'Sales pyramid',
        x: -50
    },
    plotOptions: {
        series: {
            dataLabels: {
                enabled: true,
                format: '<b>{point.name}</b> ({point.y:,.0f})',
                color: (Highcharts.theme && Highcharts.theme.contrastTextColor) || 'black',
                softConnector: true
            },
            center: ['40%', '50%'],
            width: '80%'
        }
    },
    legend: {
        enabled: false
    },
    series: [{
        name: 'Unique users',
        data: [
            ['Website visits',      15654],
            ['Downloads',            4064],
            ['Requested price list', 1987],
            ['Invoice sent',          976],
            ['Finalized',             846]
        ]
    }]
}

export const wordcloud = {
    series: [{
        type: 'wordcloud',
        data: [
          {"name":"Lorem","weight":1},
          {"name":"ipsum","weight":1},
          {"name":"dolor","weight":1},
          {"name":"sit","weight":2},
          {"name":"amet","weight":2},
          {"name":"consectetur","weight":2},
          {"name":"adipiscing","weight":1},
          {"name":"elit","weight":2},
          {"name":"Aenean","weight":1},
          {"name":"bibendum","weight":1},
          {"name":"erat","weight":3},
          {"name":"ac","weight":4},
          {"name":"justo","weight":2},
          {"name":"sollicitudin","weight":2},
          {"name":"quis","weight":1},
          {"name":"lacinia","weight":2},
          {"name":"ligula","weight":1},
          {"name":"fringilla","weight":1},
          {"name":"Pellentesque","weight":1},
          {"name":"hendrerit","weight":2},
          {"name":"nisi","weight":1},
          {"name":"vitae","weight":3},
          {"name":"posuere","weight":2},
          {"name":"condimentum","weight":2},
          {"name":"lectus","weight":1},
          {"name":"urna","weight":1},
          {"name":"accumsan","weight":2},
          {"name":"libero","weight":1},
          {"name":"rutrum","weight":1},
          {"name":"commodo","weight":1},
          {"name":"mi","weight":2},
          {"name":"lacus","weight":1},
          {"name":"pretium","weight":5},
          {"name":"Phasellus","weight":1},
          {"name":"ultrices","weight":1},
          {"name":"sed","weight":1},
          {"name":"semper","weight":1},
          {"name":"Praesent","weight":3},
          {"name":"ut","weight":3},
          {"name":"tristique","weight":2},
          {"name":"magna","weight":1},
          {"name":"Donec","weight":1},
          {"name":"nisl","weight":1},
          {"name":"tellus","weight":3},
          {"name":"sagittis","weight":1},
          {"name":"tempus","weight":1},
          {"name":"eget","weight":3},
          {"name":"Sed","weight":1},
          {"name":"ornare","weight":2},
          {"name":"gravida","weight":1},
          {"name":"Curabitur","weight":2},
          {"name":"iaculis","weight":1},
          {"name":"metus","weight":1},
          {"name":"purus","weight":2},
          {"name":"est","weight":1},
          {"name":"laoreet","weight":1},
          {"name":"Quisque","weight":1},
          {"name":"augue","weight":1},
          {"name":"eros","weight":3},
          {"name":"malesuada","weight":1},
          {"name":"facilisis","weight":2},
          {"name":"mauris","weight":1},
          {"name":"Mauris","weight":1},
          {"name":"molestie","weight":1},
          {"name":"nulla","weight":1},
          {"name":"quam","weight":1},
          {"name":"placerat","weight":1},
          {"name":"sem","weight":1},
          {"name":"in","weight":1},
          {"name":"mattis","weight":1},
          {"name":"non","weight":2},
          {"name":"odio","weight":2},
          {"name":"Nunc","weight":1},
          {"name":"aliquet","weight":1},
          {"name":"nec","weight":3},
          {"name":"auctor","weight":1},
          {"name":"congue","weight":1},
          {"name":"sapien","weight":2},
          {"name":"dictum","weight":1},
          {"name":"massa","weight":2},
          {"name":"fermentum","weight":1},
          {"name":"luctus","weight":1},
          {"name":"et","weight":2},
          {"name":"nunc","weight":1},
          {"name":"In","weight":1},
          {"name":"consequat","weight":2},
          {"name":"interdum","weight":1},
          {"name":"Ut","weight":1},
          {"name":"neque","weight":1},
          {"name":"dui","weight":1},
          {"name":"maximus","weight":1},
          {"name":"id","weight":1},
          {"name":"Nullam","weight":1},
          {"name":"vel","weight":1},
          {"name":"lorem","weight":1},
          {"name":"","weight":1}
        ]
    }],
    title: {
        text: 'Wordcloud of Lorem Ipsum'
    }
}

export const sankey = {

    title: {
        text: 'Highcharts Sankey Diagram'
    },
    series: [{
        keys: ['from', 'to', 'weight'],
        data: [
            ['Brazil', 'Portugal', 5 ],
            ['Brazil', 'France', 1 ],
            ['Brazil', 'Spain', 1 ],
            ['Brazil', 'England', 1 ],
            ['Canada', 'Portugal', 1 ],
            ['Canada', 'France', 5 ],
            ['Canada', 'England', 1 ],
            ['Mexico', 'Portugal', 1 ],
            ['Mexico', 'France', 1 ],
            ['Mexico', 'Spain', 5 ],
            ['Mexico', 'England', 1 ],
            ['USA', 'Portugal', 1 ],
            ['USA', 'France', 1 ],
            ['USA', 'Spain', 1 ],
            ['USA', 'England', 5 ],
            ['Portugal', 'Angola', 2 ],
            ['Portugal', 'Senegal', 1 ],
            ['Portugal', 'Morocco', 1 ],
            ['Portugal', 'South Africa', 3 ],
            ['France', 'Angola', 1 ],
            ['France', 'Senegal', 3 ],
            ['France', 'Mali', 3 ],
            ['France', 'Morocco', 3 ],
            ['France', 'South Africa', 1 ],
            ['Spain', 'Senegal', 1 ],
            ['Spain', 'Morocco', 3 ],
            ['Spain', 'South Africa', 1 ],
            ['England', 'Angola', 1 ],
            ['England', 'Senegal', 1 ],
            ['England', 'Morocco', 2 ],
            ['England', 'South Africa', 7 ],
            ['South Africa', 'China', 5 ],
            ['South Africa', 'India', 1 ],
            ['South Africa', 'Japan', 3 ],
            ['Angola', 'China', 5 ],
            ['Angola', 'India', 1 ],
            ['Angola', 'Japan', 3 ],
            ['Senegal', 'China', 5 ],
            ['Senegal', 'India', 1 ],
            ['Senegal', 'Japan', 3 ],
            ['Mali', 'China', 5 ],
            ['Mali', 'India', 1 ],
            ['Mali', 'Japan', 3 ],
            ['Morocco', 'China', 5 ],
            ['Morocco', 'India', 1 ],
            ['Morocco', 'Japan', 3 ]
        ],
        type: 'sankey',
        name: 'Sankey demo series'
    }]

}
