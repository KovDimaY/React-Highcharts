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
        pointFormat: '{series.name}: <b>{point.percentage:.1f}%</b>'
    },
    legend: {
        enabled: true
    },
    plotOptions: {
        pie: {
            allowPointSelect: true,
            cursor: 'pointer',
            showInLegend: true
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
        text: 'Randomly generated data'
    },
    subtitle: {
        text: 'This data is not real'
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
            showInLegend: true
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
