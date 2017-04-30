import React from 'react'
import Highcharts from 'highcharts';

export default class GaugeSpeed extends React.Component {
	
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
			marginLeft: '15%',
            width: '70%',
            height: '500px'
		};

        return (
            <div ref="chart" style={ gaugeStyle }></div>
        )
    }
}