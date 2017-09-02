export const pureRandom = {
    title: {
        text: ''
    },
    subtitle: {
        text: ''
    },
    xAxis: {
        categories: ['Apples', 'Bananas', 'Oranges', 'Grapes']
    },
    legend: {
        enabled: true
    },
    yAxis: {
        title: {
            text: 'Fruit eaten'
        }
    },
    chart: {
        type: 'bar'
    },
    plotOptions: {
        line: {
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
    series: [{
        name: 'Dima',
        data: [1, 3, 4, 3]
    }, {
        name: 'Tanya',
        data: [5, 7, 3, 1]
    }, {
        name: 'Masha',
        data: [3, 5, 6, 4]
    }]
};
