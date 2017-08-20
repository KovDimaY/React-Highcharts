import React, { Component } from 'react'
import Highstock from 'highcharts/highstock';


export default class Stock extends Component {

		componentDidMount() {
      this.chart = new Highstock.StockChart(
          this.refs.stock,
          this.props.options
      );
    }

		componentWillUpdate(nextProps, nextState) {
			this.chart = new Highstock.StockChart(
          this.refs.stock,
          nextProps.options
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
          <div ref="stock" className={this.props.container}></div>
      )
    }
}
