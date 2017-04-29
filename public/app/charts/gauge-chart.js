import React from 'react'
import Highcharts from 'highcharts';

export default class GaugeChart extends React.Component {
	
	componentDidMount() {
        this.chart = new Highcharts[this.props.type || "Chart"](
            this.refs.chart,
            this.props.options,
            this.props.function
        );
    }

    componentWillUnmount() {
        this.chart.destroy();
    }

    render() {

    	const gaugeStyle = {
			width: '75%',
            height: '500px'
		};

        return (
            <div ref="chart" style={ gaugeStyle }></div>
        )
    }
}