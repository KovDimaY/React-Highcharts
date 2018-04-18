import React, { Component } from 'react'
import ReactDOM from 'react-dom'
import Highcharts from 'highcharts'
import JSONEditor from 'jsoneditor'

import Chart from './chart-abstract'

const defaultOptions = {
	chart: {
		height: '400px',
	},
	title: {
			text: 'Solar Employment Growth by Sector, 2010-2016'
	},
	legend: {
			layout: 'vertical',
			align: 'right',
			verticalAlign: 'middle'
	},
	series: [{
			name: 'Installation',
			data: [43934, 52503, 57177, 69658, 97031, 119931, 137133, 154175]
	}, {
			name: 'Manufacturing',
			data: [24916, 24064, 29742, 29851, 32490, 30282, 38121, 40434]
	}, {
			name: 'Sales & Distribution',
			data: [11744, 17722, 16005, 19771, 20185, 24377, 32147, 39387]
	}, {
			name: 'Project Development',
			data: [null, null, 7988, 12169, 15112, 22452, 34400, 34227]
	}, {
			name: 'Other',
			data: [12908, 5948, 8105, 11248, 8989, 11816, 18274, 18111]
	}],
};

export default class Playground extends Component {
	constructor(props) {
		super(props);
		this.state = {
			options: defaultOptions
		};
	}

	componentDidMount() {
		var container = document.getElementById("jsoneditor");
		var options = {
			mode: 'code'
		};
		const editor = new JSONEditor(container, options);
		editor.set({
			"Array": [1, 2, 3],
			"Boolean": true,
			"Null": null,
			"Number": 123,
			"Object": {"a": "b", "c": "d"},
			"String": "Hello World"
		});
	}

	renderConfigurationsArea() {
		return (
		  <div className="other-clock-container">
			<div className="checkboxes other-clock">
			  CLOCK CONFIG
				<div id="jsoneditor" style={{width: "400px", height: "400px"}}></div>
			</div>
			<button
			  type="button"
			  className="btn btn-success apply-button position-dynamic"
			  onClick={() => {}}>
			  Apply
			</button>
		  </div>
		);
	}

	render() {
		console.log("other state: ", this.state);
		return (
			<div className="playground" key={`other-chart-${this.state.currentMode}`}>
			<div className="row">
				<div className="col-sm-4">
					<div className="configuration-area">
						{this.renderConfigurationsArea()}
					</div>
				</div>

				<div className="col-sm-8 chart-area">
				<Chart container={'playground-chart'}
						options={this.state.options}
						update={this.state.rerenderChart}/>
				</div>
			</div>
			</div>
		)
	}
}
