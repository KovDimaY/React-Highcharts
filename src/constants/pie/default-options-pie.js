export const pureRandom = {
    chart: {
        plotBackgroundColor: null,
        plotBorderWidth: null,
        plotShadow: false,
        type: 'pie',
        options3d: {
            enabled: true,
            alpha: 45,
            beta: 0
        }
    },
    title: {
        text: ''
    },
    subtitle: {
        text: ''
    },
    tooltip: {
        enabled: true,
        pointFormat: '{series.name}: <b>{point.percentage:.1f}%</b>'
    },
    legend: {
        enabled: true
    },
    plotOptions: {
        pie: {
            allowPointSelect: true,
            cursor: 'pointer',
            depth: 35,
            dataLabels: {
                enabled: true,
                format: '{point.percentage:.1f}%'
            },
            innerSize: '30%',
            showInLegend: true
        },
        series: {
            animation: true
        }
    },
    series: []
};

export const configurableRandom = {
    chart: {
        plotBackgroundColor: null,
        plotBorderWidth: null,
        plotShadow: false,
        type: 'pie'
    },
    title: {
        text: 'Randomly generated data'
    },
    subtitle: {
        text: 'This data is not real'
    },
    tooltip: {
        enabled: true,
        pointFormat: 'Value: <b>{point.y:.1f}</b><br/>' +
                     'Percent: <b>{point.percentage:.1f}%</b>'
    },
    legend: {
        enabled: true
    },
    plotOptions: {
        pie: {
            allowPointSelect: true,
            cursor: 'pointer',
            showInLegend: true,
            dataLabels: {
                enabled: true
            },
        },
        series: {
            animation: true
        }
    },
    series: []
};

export const clusteringSimulation = {
    chart: {
        plotBackgroundColor: null,
        plotBorderWidth: null,
        plotShadow: false,
        type: 'pie'
    },
    title: {
        text: 'Simple Clustering Simulation'
    },
    subtitle: {
        text: 'This data is generated randomly'
    },
    tooltip: {
        enabled: true,
        pointFormat: 'Count: <b>{point.y}</b><br/>' +
                     'Percent: <b>{point.percentage:.1f}%</b>'
    },
    legend: {
        enabled: true
    },
    plotOptions: {
        pie: {
            allowPointSelect: true,
            cursor: 'pointer',
            showInLegend: true,
            dataLabels: {
                enabled: false
            },
        },
        series: {
            animation: true
        }
    },
    series: [{
      name: 'Clusters',
      colorByPoint: true,
      data: [{
        name: 'Cluster 1',
        y: 1
      },{
        name: 'Cluster 2',
        y: 4
      },{
        name: 'Cluster 3',
        y: 2
      }]
    }]
};

export const primeFactorization = {
  chart: {
      plotBackgroundColor: null,
      plotBorderWidth: null,
      plotShadow: false,
      type: 'pie'
  },
  title: {
      text: 'Simple Clustering Simulation'
  },
  subtitle: {
      text: 'Lalala subtitle'
  },
  tooltip: {
      enabled: true,
      pointFormat: 'Count: <b>{point.y}</b><br/>' +
                   'Percent: <b>{point.percentage:.1f}%</b>'
  },
  legend: {
      enabled: true
  },
  plotOptions: {
      pie: {
          allowPointSelect: true,
          cursor: 'pointer',
          showInLegend: true,
          dataLabels: {
              enabled: false
          },
      },
      series: {
          animation: true
      }
  },
  series: []
}

export const irrationalAnalysis = {
  chart: {
      plotBackgroundColor: null,
      plotBorderWidth: null,
      plotShadow: false,
      type: 'pie'
  },
  title: {
      text: 'Distribution of digits of the number Pi'
  },
  subtitle: {
      text: 'THis is subtitle'
  },
  tooltip: {
      enabled: true,
      pointFormat: 'Count: <b>{point.y}</b><br/>' +
                   'Percent: <b>{point.percentage:.1f}%</b>'
  },
  legend: {
      enabled: true
  },
  plotOptions: {
      pie: {
          allowPointSelect: true,
          cursor: 'pointer',
          showInLegend: true,
          dataLabels: {
              enabled: false
          },
      },
      series: {
          animation: true
      }
  },
  series: []
}

export const interestingFactsOne = {
  chart: {
      type: 'pie'
  },
  title: {
      text: 'Earth Area Composition'
  },
  subtitle: {
      text: 'Source: <a href="https://en.wikipedia.org">Wikipedia</a>'
  },
  yAxis: {
      title: {
          text: 'Area in km2'
      }
  },
  plotOptions: {
      pie: {
          shadow: false,
          center: ['50%', '50%']
      }
  },
  tooltip: {
      valueSuffix: ' km2'
  },
  series: [{
      name: 'Total',
      data: [
        {
          name: "Oceans",
          y: 361934000,
          color: "#4d9ce6"
        },
        {
          name: "Continents",
          y: 148989799,
          color: "#268712"
        }
      ],
      size: '60%',
      dataLabels: {
          formatter: function () {
              return '<b>' + this.point.name + ':</b> ' +
                  Math.round(this.percentage * 100) / 100 + '%';
          },
          color: '#ffffff',
          distance: -30
      }
  }, {
      name: 'Area',
      data: [{
        name: "Pacific Ocean",
        y: 168723000,
        color: "#63a8e9"
      },
      {
        name: "Atlantic Ocean",
        y: 85133000,
        color: "#79b4ec"
      },
      {
        name: "Indian Ocean",
        y: 70560000,
        color: "#8fc1ef"
      },
      {
        name: "Southern Ocean",
        y: 21960000,
        color: "#a6cdf2"
      },
      {
        name: "Arctic Ocean",
        y: 15558000,
        color: "#bcdaf5"
      },
      {
        name: "Asia",
        y: 44391162,
        color: "#2c9d15"
      },
      {
        name: "Africa",
        y: 30244049,
        color: "#32b418"
      },
      {
        name: "North America",
        y: 24247039,
        color: "#39ca1c"
      },
      {
        name: "South America",
        y: 17821029,
        color: "#3fe01f"
      },
      {
        name: "Antarctica",
        y: 14245000,
        color: "#52e335"
      },
      {
        name: "Europe",
        y: 10354636,
        color: "#65e74b"
      },
      {
        name: "Australia",
        y: 7686884,
        color: "#79ea62"
      },],
      size: '80%',
      innerSize: '60%',
      dataLabels: {
          formatter: function () {
              return '<b>' + this.point.name + ':</b> ' +
                  Math.round(this.percentage * 100) / 100 + '%';
          }
      },
      id: 'versions'
  }],
  responsive: {
      rules: [{
          condition: {
              maxWidth: 400
          },
          chartOptions: {
              series: [{
                  id: 'versions',
                  dataLabels: {
                      enabled: false
                  }
              }]
          }
      }]
  }
};

export const interestingFactsTwo = {
  chart: {
      plotBackgroundColor: null,
      plotBorderWidth: null,
      plotShadow: false,
      type: 'pie'
  },
  title: {
      text: 'Earth Population by Continents, 2017'
  },
  subtitle: {
      text: 'Source: <a href="https://www.thoughtco.com/continents-by-area-and-size-ranking-1435142">ThoughtCo.</a>'
  },
  tooltip: {
      pointFormat: '{series.name}: <b>{point.y}</b> people'
  },
  plotOptions: {
      pie: {
          allowPointSelect: true,
          cursor: 'pointer',
          dataLabels: {
              enabled: true,
              format: '<b>{point.name}</b>: {point.percentage:.1f} %'
          }
      }
  },
  series: [{
      name: 'Population',
      colorByPoint: true,
      data: [{
          name: 'Asia',
          y: 4406273622
      }, {
          name: 'Africa',
          y: 1215770813
      }, {
          name: 'Europe',
          y: 747364363
      }, {
          name: 'North America',
          y: 574836055
      }, {
          name: 'South America',
          y: 418537818
      }, {
          name: 'Australia',
          y: 23232413
      }]
  }]
};

export const interestingFactsThree = {
  chart: {
      plotBackgroundColor: null,
      plotBorderWidth: null,
      plotShadow: false,
      type: 'pie'
  },
  title: {
      text: 'Composition of the Earth Atmosphere'
  },
  subtitle: {
      text: 'Source: <a href="http://climate.ncsu.edu/edu/k12/.AtmComposition">Climate Education</a>'
  },
  legend: {
      enabled: true
  },
  tooltip: {
      pointFormat: '{series.name}: <b>{point.y}%</b>'
  },
  plotOptions: {
      pie: {
          allowPointSelect: true,
          cursor: 'pointer',
          dataLabels: {
              enabled: true,
              format: '<b>{point.name}</b>: {point.y} %'
          },
          showInLegend: true
      }
  },
  series: [{
      name: 'Concentration',
      colorByPoint: true,
      data: [{
          name: 'Nitrogen',
          y: 78.1,
          color: "#134e86"
      }, {
          name: 'Oxygen',
          y: 20.9,
          color: "#1969b3"
      }, {
          name: 'Argon',
          y: 0.9,
          color: "#2083df"
      }, {
          name: 'Carbon dioxide',
          y: 0.09349,
          color: "#4d9ce6"
      }, {
          name: 'Neon',
          y: 0.004675,
          color: "#79b4ec"
      },
      {
          name: 'Helium',
          y: 0.001299,
          color: "#8fc1ef"
      },
      {
          name: 'Methane',
          y: 0.000442,
          color: "#a6cdf2"
      },
      {
          name: 'Other',
          y: 0.000094,
          color: "#bcdaf5"
      }]
  }]
};

export const interestingFactsFour = {
  chart: {
      plotBackgroundColor: null,
      plotBorderWidth: null,
      plotShadow: false,
      type: 'pie',
      options3d: {
          enabled: true,
          alpha: 45,
          beta: 0
      }
  },
  title: {
      text: 'Chemical Composition of Earth'
  },
  legend: {
      enabled: true
  },
  tooltip: {
      pointFormat: '{series.name}: <b>{point.y}%</b>'
  },
  plotOptions: {
      pie: {
          allowPointSelect: true,
          cursor: 'pointer',
          depth: 35,
          dataLabels: {
              enabled: true,
              format: '<b>{point.name}</b>: {point.y} %'
          },
          showInLegend: true
      }
  },
  series: [{
      name: 'Concentration',
      colorByPoint: true,
      data: [{
          name: 'Iron (Fe)',
          y: 35
      }, {
          name: 'Oxygen (O)',
          y: 28
      }, {
          name: 'Magnesium (Mg)',
          y: 17
      }, {
          name: 'Silicon (Si)',
          y: 14.3
      }, {
          name: 'Sulfur (S)',
          y: 2.7
      },
      {
          name: 'Nickel (Ni)',
          y: 2.7
      },
      {
          name: 'Calcium (Ca)',
          y: 0.6
      },
      {
          name: 'Aluminium (Al)',
          y: 0.4
      },
      {
          name: 'Other Elements',
          y: 0.6
      }]
  }]
};

export const interestingFactsFive = {
  chart: {
      plotBackgroundColor: null,
      plotBorderWidth: null,
      plotShadow: false,
      type: 'pie',
      options3d: {
          enabled: true,
          alpha: 45,
          beta: 0
      }
  },
  title: {
      text: 'Chemical Composition of Human'
  },
  legend: {
      enabled: true
  },
  tooltip: {
      pointFormat: '{series.name}: <b>{point.y}%</b>'
  },
  subtitle: {
      text: 'Source: <a href="https://en.wikipedia.org/wiki/Composition_of_the_human_body">Wikipedia</a>'
  },
  plotOptions: {
      pie: {
          allowPointSelect: true,
          cursor: 'pointer',
          depth: 35,
          dataLabels: {
              enabled: true,
              format: '<b>{point.name}</b>: {point.y} %'
          },
          showInLegend: true
      }
  },
  series: [{
      name: 'Concentration',
      colorByPoint: true,
      data: [{
          name: 'Oxygen (O)',
          y: 65.0
      }, {
          name: 'Carbon (C)',
          y: 18.5
      }, {
          name: 'Hydrogen (H)',
          y: 9.5
      }, {
          name: 'Nitrogen (N)',
          y: 3.2
      }, {
          name: 'Phosphorus (P)',
          y: 1.0
      },
      {
          name: 'Potassium (K)',
          y: 0.4
      },
      {
          name: 'Sulfur (S)',
          y: 0.3
      },
      {
          name: 'Sodium (Na)',
          y: 0.2
      },
      {
          name: 'Other Elements',
          y: 0.3
      }]
  }]
};

export const interestingFactsSix = {
  chart: {
      plotBackgroundColor: null,
      plotBorderWidth: null,
      plotShadow: false,
      type: 'pie'
  },
  title: {
      text: 'Human Life Time'
  },
  legend: {
      enabled: false
  },
  tooltip: {
      pointFormat: 'Absolute: <b>{point.y} years</b><br/> Percentage: <b>{point.percentage:.2f}%</b>'
  },
  subtitle: {
      text: 'Assume one lives 78 years'
  },
  plotOptions: {
      pie: {
          allowPointSelect: true,
          cursor: 'pointer',
          innerSize: '50%',
          dataLabels: {
              enabled: true,
              format: '<b>{point.name}</b>'
          },
          showInLegend: true
      }
  },
  series: [{
      name: 'Concentration',
      colorByPoint: true,
      data: [{
          name: 'Sleping',
          y: 28.3
      }, {
          name: 'Working',
          y: 10.5
      }, {
          name: 'TV, Games, SM',
          y: 9
      }, {
          name: 'Doing Chores',
          y: 6
      }, {
          name: 'Eating',
          y: 4
      },
      {
          name: 'Education',
          y: 4.5
      },
      {
          name: 'Grooming',
          y: 2.5
      },
      {
          name: 'Shopping',
          y: 2.5
      },
      {
          name: 'Transportations',
          y: 1.8
      },
      {
          name: 'LEFT FOR YOU!',
          y: 9,
          color: "#b3b3b3"
      }]
  }]
};
