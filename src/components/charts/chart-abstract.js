import React, { Component } from 'react'
import Highcharts from 'highcharts';
import HighchartsMore from 'highcharts/highcharts-more'
import Highcharts3D from 'highcharts/highcharts-3d'
HighchartsMore(Highcharts)
Highcharts3D(Highcharts)

export default class Chart extends Component {

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
        return (
            <div ref="chart"></div>
        )
    }
}
