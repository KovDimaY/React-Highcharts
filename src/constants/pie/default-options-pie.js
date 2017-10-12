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
      text: 'Distibution of digits of the number Pi'
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
