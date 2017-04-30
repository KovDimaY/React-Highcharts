import React from 'react'
import Highcharts from 'highcharts';

export default class PieChart extends React.Component {
	
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

    	const pieStyle = {
			marginLeft: '15%',
            width: '70%',
            height: '500px'
		};

        return (
            <div ref="chart" style={ pieStyle }></div>
        )
    }
}