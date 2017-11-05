import React, { Component } from 'react'
import ReactDOM from 'react-dom'
import Highcharts from 'highcharts'
import $ from 'jquery'

import Chart from './chart-abstract'

import {
  pureRandom2D,
  scatterOptions3D,
  scatterOptionsBubble
} from '../../constants/scatter/default-options-scatter'

import {
  modes,
  initialState,
  optionsPureRandom2D
} from '../../constants/scatter/modes-options-scatter'

import {
  move,
  generateSeriesForPureRandom2D
} from '../../constants/scatter/data-helpers-scatter'

export default class Scattering extends Component {
  constructor(props) {
    super(props);
    this.state = initialState;

    this.dropdownClickHandler = this.dropdownClickHandler.bind(this);
    this.updatePureRandom2DConfiguration = this.updatePureRandom2DConfiguration.bind(this);
    this.onPureRandom2DCheckBoxChange = this.onPureRandom2DCheckBoxChange.bind(this);
  }

  componentDidMount() {
    this.initPureRandom2DMode();
  }

  initPureRandom2DMode() {
    const options = pureRandom2D;
    options.series = generateSeriesForPureRandom2D();
    this.setState({ options }, () => {
      this.updatePureRandom2DConfiguration();
    });
  }

  initScatter3DMode() {
    const options = scatterOptions3D;

    this.setState({ options }, () => {
      this.updateScatter3DConfiguration();
    });
  }

  initScatterBubbleMode() {
    const options = scatterOptionsBubble;

    this.setState({ options }, () => {
      this.updateScatterBubbleConfiguration();
    });
  }

  updateScatter3DConfiguration() {
    this.setState({ rerenderChart: true }, () => {
      this.setState({ rerenderChart: false })
    })
  }

  updatePureRandom2DConfiguration() {
    const { pureRandom2D } = this.state.configurations;
    const { options } = this.state;
    options.chart.zoomType = pureRandom2D.zoom ? 'xy' : null;
    options.title.text = pureRandom2D.title ? 'Randomly generated data' : null;
    options.subtitle.text = pureRandom2D.title ? 'Randomly generated data' : null;
    options.legend.enabled = pureRandom2D.legend;
    options.yAxis.title.text = pureRandom2D.axisTitle ? 'Random Value (UOM)' : null;
    options.xAxis.title.text = pureRandom2D.axisTitle ? 'Random Value (UOM)' : null;
    options.plotOptions.scatter.marker.radius = pureRandom2D.smallMarkers ? 2 : 5;
    options.plotOptions.scatter.dataLabels.enabled = pureRandom2D.dataLabels;
    options.plotOptions.scatter.enableMouseTracking = pureRandom2D.tooltip;
    options.plotOptions.series.animation = pureRandom2D.animation;
    options.series.forEach((serie) => {
      serie.colorByPoint = pureRandom2D.colors;
    });

    this.setState({ rerenderChart: true }, () => {
      this.setState({ rerenderChart: false })
    })
  }

  updateScatterBubbleConfiguration() {
    this.setState({ rerenderChart: true }, () => {
      this.setState({ rerenderChart: false })
    })
  }

  dropdownClickHandler(input) {
    const mode = input.target.innerHTML;
    const { configurations } = this.state;
    switch (mode) {
      case modes.pureRandom2D: {
        this.initPureRandom2DMode();
        break;
      }
      case modes.scatter3d: {
        this.initScatter3DMode();
        break;
      }
      case modes.scatterBubble: {
        this.initScatterBubbleMode();
        break;
      }
      default: {
        console.log("This mode is not implemented yet");
      }
    }
    this.setState({ currentMode: mode, configurations });
  }

  onPureRandom2DCheckBoxChange(event) {
    const { configurations } = this.state;
    if (configurations.pureRandom2D[event.target.value]) {
      configurations.pureRandom2D[event.target.value] = false;
    } else {
      configurations.pureRandom2D[event.target.value] = true;
    }
    this.setState({ configurations })
  }

  renderOptionsDropdown() {
    return (
      <div className="dropdown">
        <button className="btn btn-primary dropdown-toggle" type="button" data-toggle="dropdown">Configurations
        <span className="caret"></span></button>
        <ul className="dropdown-menu">
          <li className="dropdown-header">Scattering Charts</li>
          <li><a onClick={this.dropdownClickHandler}>{modes.pureRandom2D}</a></li>
          <li><a onClick={this.dropdownClickHandler}>{modes.scatter3d}</a></li>
          <li><a onClick={this.dropdownClickHandler}>{modes.scatterBubble}</a></li>
        </ul>
      </div>
    )
  }

  renderPureRandom2DModeConfiguration() {
    const { pureRandom2D } = this.state.configurations;
    return (
      <div className="pure-random">
        <div className="checkbox">
          <label><input type="checkbox"
                        value={optionsPureRandom2D.title}
                        checked={pureRandom2D.title}
                        onChange={this.onPureRandom2DCheckBoxChange}/>Show Chart Title</label>
        </div>
        <div className="checkbox">
          <label><input type="checkbox"
                        value={optionsPureRandom2D.axisTitle}
                        checked={pureRandom2D.axisTitle}
                        onChange={this.onPureRandom2DCheckBoxChange}/>Show Axis Titles</label>
        </div>
        <div className="checkbox">
          <label><input type="checkbox"
                        value={optionsPureRandom2D.dataLabels}
                        checked={pureRandom2D.dataLabels}
                        onChange={this.onPureRandom2DCheckBoxChange}/>Show Data Labels</label>
        </div>
        <div className="checkbox">
          <label><input type="checkbox"
                        value={optionsPureRandom2D.legend}
                        checked={pureRandom2D.legend}
                        onChange={this.onPureRandom2DCheckBoxChange}/>Show Legend</label>
        </div>
        <div className="checkbox">
          <label><input type="checkbox"
                        value={optionsPureRandom2D.tooltip}
                        checked={pureRandom2D.tooltip}
                        onChange={this.onPureRandom2DCheckBoxChange}/>Enable Tooltip</label>
        </div>
        <div className="checkbox">
          <label><input type="checkbox"
                        value={optionsPureRandom2D.zoom}
                        checked={pureRandom2D.zoom}
                        onChange={this.onPureRandom2DCheckBoxChange}/>Enable Zoom</label>
        </div>
        <div className="checkbox">
          <label><input type="checkbox"
                        value={optionsPureRandom2D.animation}
                        checked={pureRandom2D.animation}
                        onChange={this.onPureRandom2DCheckBoxChange}/>Enable Animation</label>
        </div>
        <div className="checkbox">
          <label><input type="checkbox"
                        value={optionsPureRandom2D.smallMarkers}
                        checked={pureRandom2D.smallMarkers}
                        onChange={this.onPureRandom2DCheckBoxChange}/>Small Markers</label>
        </div>
    		<div className="checkbox">
    		  <label><input type="checkbox"
    						value={optionsPureRandom2D.colors}
    						checked={pureRandom2D.colors}
    						onChange={this.onPureRandom2DCheckBoxChange}/>Color Per Point</label>
    		</div>

        <button
          type="button"
          className="btn btn-success apply-button"
          onClick={this.updatePureRandom2DConfiguration}>
          Apply
        </button>
      </div>
    )
  }

  renderConfigurationsArea() {
    const { currentMode } = this.state;
    switch (currentMode) {
      case modes.pureRandom2D: {
        return this.renderPureRandom2DModeConfiguration();
      }
      case modes.scatter3d: {
        return <div> SCATTER 3D </div>;
      }
      case modes.scatterBubble: {
        return <div> SCATTER BUBBLE </div>;
      }
      default: {
        return null;
      }
    }
  }

	render() {
    console.log("scatter state: ", this.state);
    return(
			<div className="scatter-page" key={`scatter-chart-${this.state.currentMode}`}>
        <div className="row">
          <div className="col-sm-4">
            {this.renderOptionsDropdown()}
            <div className="configuration-area">
              {this.renderConfigurationsArea()}
            </div>
          </div>
          <div className="col-sm-8 chart-area">
            <Chart container={'scattering-chart'}
                   options={this.state.options}
                   update={this.state.rerenderChart}
                   function={move}/>
          </div>
        </div>
			</div>
		)
	}
}
