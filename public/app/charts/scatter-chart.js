import React from 'react'
import Highcharts from 'highcharts';
import $ from 'jquery'

export default class ScatterChart extends React.Component {
    
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

        const scatterStyle = {
            marginLeft: '15%',
            width: '70%',
            height: '500px'
        };

        return (
            <div ref="chart" style={ scatterStyle }></div>
        )
    }
}