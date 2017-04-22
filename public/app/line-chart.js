import React from 'react'
import Highcharts from 'highcharts';

export default class LineChart extends React.Component {
	
	componentDidMount() {
        this.chart = new Highcharts[this.props.type || "Chart"](
            this.refs.chart,
            this.props.options
        );
    }

    componentWillUnmount() {
        this.chart.destroy();
    }

    render() {

        const lineStyle = {
            width: '60%'
        };

        return (
            <div ref="chart" style={ lineStyle }></div>
        )
    }
}