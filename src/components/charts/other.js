import React, { Component } from 'react'
import ReactDOM from 'react-dom'
import Highcharts from 'highcharts'

import Chart from './chart-abstract'

import {
  heatmap
} from '../../constants/other/default-options-other'

import {
  modes,
  initialState,
} from '../../constants/other/modes-options-other'


export default class Other extends Component {
  constructor(props) {
    super(props);
    this.state = initialState;

    this.dropdownClickHandler = this.dropdownClickHandler.bind(this);
  }

  componentDidMount() {
    this.initHeatmap();
  }

  initHeatmap() {
    const options = heatmap;

    this.setState({ options }, () => {
      this.updateHeatmapConfiguration();
    });
  }

  updateHeatmapConfiguration() {
    this.setState({ rerenderChart: true }, () => {
      this.setState({ rerenderChart: false })
    })
  }

  dropdownClickHandler(input) {
    const mode = input.target.innerHTML;
    const { configurations } = this.state;
    switch (mode) {
      case modes.heatmap: {
        this.initHeatmap();
        break;
      }
      default: {
        console.log("This mode is not implemented yet");
      }
    }
    this.setState({ currentMode: mode, configurations });
  }

  renderOptionsDropdown() {
    return (
      <div className="dropdown">
        <button className="btn btn-primary dropdown-toggle" type="button" data-toggle="dropdown">Configurations
        <span className="caret"></span></button>
        <ul className="dropdown-menu">
          <li className="dropdown-header">Other Charts</li>
          <li><a onClick={this.dropdownClickHandler}>{modes.heatmap}</a></li>
        </ul>
      </div>
    )
  }

  renderConfigurationsArea() {
    const { currentMode } = this.state;
    switch (currentMode) {
      case modes.heatmap: {
        return <div> HEATMAP </div>;
      }
      default: {
        return null;
      }
    }
  }

  render() {
    console.log("other state: ", this.state);
    return(
			<div className="other-page" key={`other-chart-${this.state.currentMode}`}>
        <div className="row">
          <div className="col-sm-4">
            {this.renderOptionsDropdown()}
            <div className="configuration-area">
              {this.renderConfigurationsArea()}
            </div>
          </div>
          <div className="col-sm-8 chart-area">
            <Chart container={'others-chart'}
                   options={this.state.options}
                   update={this.state.rerenderChart}/>
          </div>
        </div>
			</div>
		)
	}
}
