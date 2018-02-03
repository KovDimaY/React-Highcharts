import React, { Component } from 'react'
import Highcharts from 'highcharts';
import HighchartsMore from 'highcharts/highcharts-more'
import Highcharts3D from 'highcharts/highcharts-3d'
import HighchartsGauge from 'highcharts/modules/solid-gauge'
import HighchartsHeatmap from 'highcharts/modules/heatmap'
import HighchartsTilemap from 'highcharts/modules/tilemap'
import HighchartsFunnel from 'highcharts/modules/funnel'
import HighchartsWordcloud from 'highcharts/modules/wordcloud'
import HighchartsSankey from 'highcharts/modules/sankey'
import HighchartsBellcurve from 'highcharts/modules/histogram-bellcurve'

HighchartsMore(Highcharts)
Highcharts3D(Highcharts)
HighchartsGauge(Highcharts)
HighchartsHeatmap(Highcharts)
HighchartsTilemap(Highcharts)
HighchartsFunnel(Highcharts)
HighchartsWordcloud(Highcharts)
HighchartsSankey(Highcharts)
HighchartsBellcurve(Highcharts)

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
