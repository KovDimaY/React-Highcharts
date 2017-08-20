import React, { Component } from 'react'
import Highstock from 'highcharts/highstock';
import $ from 'jquery'

export default class Stock extends Component {

		componentDidMount() {
			const copyOfOptions = $.extend(true, {}, this.props.options);
      this.chart = new Highstock.StockChart(
          this.refs.stock,
          copyOfOptions
      );
    }

		componentWillUpdate(nextProps, nextState) {
			const copyOfOptions = $.extend(true, {}, nextProps.options);
			this.chart = new Highstock.StockChart(
          this.refs.stock,
          copyOfOptions
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
