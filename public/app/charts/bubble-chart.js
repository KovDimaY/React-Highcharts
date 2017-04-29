import React from 'react'
import Highcharts from 'highcharts';

export default class BubbleChart extends React.Component {
    
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

        const bubbleStyle = {
            width: '75%',
            height: '500px'
        };

        return (
            <div ref="chart" style={ bubbleStyle }></div>
        )
    }
}