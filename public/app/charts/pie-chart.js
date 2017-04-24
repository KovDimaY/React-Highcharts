import React from 'react'
import Highcharts from 'highcharts';

export default class PieChart extends React.Component {
	
    constructor(props) {
        super(props);
        this.chart = undefined;
    }


	componentDidMount() {
        this.chart = new Highcharts[this.props.type || "Chart"](
            chart: {
                type: 'pie'
            },
            title: 'Browser Market share',
            yAxis: {
                title: {
                    text: 'Total percent market share'
                }
            },
            plotOptions: {
                pie: {
                    shadow: false
                }
            },
            series: [{
                name: 'Browsers',
                //data: this.props.data,
                size: '100%',
                innerSize: '85%',
                showInLegend:true,
                dataLabels: {
                    enabled: true
                }
            }]
        );
    }

    componentWillUnmount() {
        this.chart.destroy();
    }

    render() {

    	const barStyle = {
			width: '80%'
		};

        return (
            <div ref="chart" style={ barStyle }></div>
        )
    }
}