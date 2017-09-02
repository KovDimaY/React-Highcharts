export const pureRandom = {
    chart: {
        type: 'column',
        zoomType: 'x'
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
