import React, { Component } from 'react'
import Highcharts from 'highcharts';
import HighchartsMore from 'highcharts/highcharts-more'
import Highcharts3D from 'highcharts/highcharts-3d'
import HighchartsGauge from 'highcharts/modules/solid-gauge'
HighchartsMore(Highcharts)
Highcharts3D(Highcharts)
HighchartsGauge(Highcharts)

export default class Chart extends Component {

		componentDidMount() {
      this.chart = new Highcharts[this.props.type || "Chart"](
          this.refs.chart,
          this.props.options,
          this.props.function
      );
			Highcharts.setOptions({
				lang: {
					numericSymbols: [' K', ' M', ' B', ' T']
				}
			});
    }

		componentWillUpdate(nextProps, nextState) {
			this.chart = new Highcharts[nextProps.type || "Chart"](
          this.refs.chart,
          nextProps.options,
          nextProps.function
      );
		}

		shouldComponentUpdate(nextProps, nextState) {
			return nextProps.update;
		}

    componentWillUnmount() {
        this.chart.destroy();
    }

    render() {
      return (
          <div ref="chart" className={this.props.container}></div>
      )
    }
}
