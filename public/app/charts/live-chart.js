import React from 'react'
import Highcharts from 'highcharts';

export default class LiveChart extends React.Component {
	
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

    	const barStyle = {
			width: '80%'
		};

        return (
            <div ref="chart" style={ barStyle }></div>
        )
    }
}