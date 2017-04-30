import React from 'react'
import Highcharts from 'highcharts';

export default class GaugeSpeedometer extends React.Component {
	
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

        return (
            <div ref="chart"></div>
        )
    }
}