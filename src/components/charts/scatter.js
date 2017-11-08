import React, { Component } from 'react'
import ReactDOM from 'react-dom'
import Highcharts from 'highcharts'
import $ from 'jquery'

import Chart from './chart-abstract'

import {
  pureRandom2D,
  pureRandom3D,
  pureRandomBubble
} from '../../constants/scatter/default-options-scatter'

import {
  modes,
  initialState,
  optionsPureRandom2D,
  optionsPureRandom3D,
  optionsPureRandomBubble
} from '../../constants/scatter/modes-options-scatter'

import {
  move,
  convertColorsTo3D,
  convertColorsToBubbles,
  convertColorsToFlat,
  generateSeriesForPureRandom2D,
  generateSeriesForPureRandom3D,
  generateSeriesForPureRandomBubble
} from '../../constants/scatter/data-helpers-scatter'

export default class Scattering extends Component {
  constructor(props) {
    super(props);
    this.state = initialState;
    this.state.defaultColors = Highcharts.getOptions().colors.slice();
    this.dropdownClickHandler = this.dropdownClickHandler.bind(this);
    this.updatePureRandom2DConfiguration = this.updatePureRandom2DConfiguration.bind(this);
    this.updatePureRandom3DConfiguration = this.updatePureRandom3DConfiguration.bind(this);
    this.updatePureRandomBubbleConfiguration = this.updatePureRandomBubbleConfiguration.bind(this);
    this.onPureRandom2DCheckBoxChange = this.onPureRandom2DCheckBoxChange.bind(this);
    this.onPureRandom3DCheckBoxChange = this.onPureRandom3DCheckBoxChange.bind(this);
    this.onPureRandomBubbleCheckBoxChange = this.onPureRandomBubbleCheckBoxChange.bind(this);
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

  initPureRandom3DMode() {
    const options = pureRandom3D;
    options.series = generateSeriesForPureRandom3D();
    this.setState({ options }, () => {
      this.updatePureRandom3DConfiguration();
    });
  }

  initPureRandomBubbleMode() {
    const options = pureRandomBubble;
    options.series = generateSeriesForPureRandomBubble();
    this.setState({ options }, () => {
      this.updatePureRandomBubbleConfiguration();
    });
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
    options.tooltip.enabled = pureRandom2D.tooltip;
    options.plotOptions.series.animation = pureRandom2D.animation;
    options.series.forEach((serie) => {
      serie.colorByPoint = pureRandom2D.colors;
    });

    this.setState({ rerenderChart: true }, () => {
      this.setState({ rerenderChart: false })
    })
  }

  updatePureRandom3DConfiguration() {
    const { pureRandom3D } = this.state.configurations;
    const { options } = this.state;
    options.title.text = pureRandom3D.title ? 'Randomly generated data' : null;
    options.subtitle.text = pureRandom3D.title ? 'Click and drag the plot area to rotate in space' : null;
    options.legend.enabled = pureRandom3D.legend;
    options.yAxis.title.text = pureRandom3D.axisTitle ? 'Random Value (UOM)' : null;
    options.xAxis.title.text = pureRandom3D.axisTitle ? 'Random Value (UOM)' : null;
    options.zAxis.title.text = pureRandom3D.axisTitle ? 'Random Value (UOM)' : null;
    options.plotOptions.scatter3d.marker.radius = pureRandom3D.smallMarkers ? 2 : 5;
    options.plotOptions.scatter3d.dataLabels.enabled = pureRandom3D.dataLabels;
    options.tooltip.enabled = pureRandom3D.tooltip;
    options.plotOptions.series.animation = pureRandom3D.animation;
    options.series.forEach((serie, i) => {
      serie.colorByPoint = pureRandom3D.colors;
    });

    this.setState({ rerenderChart: true }, () => {
      this.setState({ rerenderChart: false })
    })
  }

  updatePureRandomBubbleConfiguration() {
    const { pureRandomBubble } = this.state.configurations;
    const { options } = this.state;
    options.chart.zoomType = pureRandomBubble.zoom ? 'xy' : null;
    options.title.text = pureRandomBubble.title ? 'Randomly generated data' : null;
    options.subtitle.text = pureRandomBubble.title ? 'Randomly generated data' : null;
    options.legend.enabled = pureRandomBubble.legend;
    options.yAxis.title.text = pureRandomBubble.axisTitle ? 'Random Value (UOM)' : null;
    options.xAxis.title.text = pureRandomBubble.axisTitle ? 'Random Value (UOM)' : null;
    options.plotOptions.bubble.dataLabels.enabled = pureRandomBubble.dataLabels;
    options.tooltip.enabled = pureRandomBubble.tooltip;
    options.plotOptions.series.animation = pureRandomBubble.animation;
    options.series.forEach((serie, i) => {
      serie.colorByPoint = pureRandomBubble.colors;
    });

    this.setState({ rerenderChart: true }, () => {
      this.setState({ rerenderChart: false })
    })
  }

  dropdownClickHandler(input) {
    const mode = input.target.innerHTML;
    const { configurations, defaultColors } = this.state;
    switch (mode) {
      case modes.pureRandom2D: {
        convertColorsToFlat(defaultColors);
        this.initPureRandom2DMode();
        break;
      }
      case modes.pureRandom3D: {
        convertColorsTo3D(defaultColors);
        this.initPureRandom3DMode();
        break;
      }
      case modes.pureRandomBubble: {
        convertColorsToBubbles(defaultColors);
        this.initPureRandomBubbleMode();
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

  onPureRandom3DCheckBoxChange(event) {
    const { configurations } = this.state;
    if (configurations.pureRandom3D[event.target.value]) {
      configurations.pureRandom3D[event.target.value] = false;
    } else {
      configurations.pureRandom3D[event.target.value] = true;
    }
    this.setState({ configurations })
  }

  onPureRandomBubbleCheckBoxChange(event) {
    const { configurations } = this.state;
    if (configurations.pureRandomBubble[event.target.value]) {
      configurations.pureRandomBubble[event.target.value] = false;
    } else {
      configurations.pureRandomBubble[event.target.value] = true;
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
          <li><a onClick={this.dropdownClickHandler}>{modes.pureRandom3D}</a></li>
          <li><a onClick={this.dropdownClickHandler}>{modes.pureRandomBubble}</a></li>
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

  renderPureRandom3DModeConfiguration() {
    const { pureRandom3D } = this.state.configurations;
    return (
      <div className="pure-random">
        <div className="checkbox">
          <label><input type="checkbox"
                        value={optionsPureRandom3D.title}
                        checked={pureRandom3D.title}
                        onChange={this.onPureRandom3DCheckBoxChange}/>Show Chart Title</label>
        </div>
        <div className="checkbox">
          <label><input type="checkbox"
                        value={optionsPureRandom3D.axisTitle}
                        checked={pureRandom3D.axisTitle}
                        onChange={this.onPureRandom3DCheckBoxChange}/>Show Axis Titles</label>
        </div>
        <div className="checkbox">
          <label><input type="checkbox"
                        value={optionsPureRandom3D.dataLabels}
                        checked={pureRandom3D.dataLabels}
                        onChange={this.onPureRandom3DCheckBoxChange}/>Show Data Labels</label>
        </div>
        <div className="checkbox">
          <label><input type="checkbox"
                        value={optionsPureRandom3D.legend}
                        checked={pureRandom3D.legend}
                        onChange={this.onPureRandom3DCheckBoxChange}/>Show Legend</label>
        </div>
        <div className="checkbox">
          <label><input type="checkbox"
                        value={optionsPureRandom3D.tooltip}
                        checked={pureRandom3D.tooltip}
                        onChange={this.onPureRandom3DCheckBoxChange}/>Enable Tooltip</label>
        </div>
        <div className="checkbox">
          <label><input type="checkbox"
                        value={optionsPureRandom3D.animation}
                        checked={pureRandom3D.animation}
                        onChange={this.onPureRandom3DCheckBoxChange}/>Enable Animation</label>
        </div>
        <div className="checkbox">
          <label><input type="checkbox"
                        value={optionsPureRandom3D.smallMarkers}
                        checked={pureRandom3D.smallMarkers}
                        onChange={this.onPureRandom3DCheckBoxChange}/>Small Markers</label>
        </div>
    		<div className="checkbox">
    		  <label><input type="checkbox"
                        value={optionsPureRandom3D.colors}
                        checked={pureRandom3D.colors}
                        onChange={this.onPureRandom3DCheckBoxChange}/>Color Per Point</label>
    		</div>

        <button
          type="button"
          className="btn btn-success apply-button"
          onClick={this.updatePureRandom3DConfiguration}>
          Apply
        </button>
      </div>
    )
  }

  renderPureRandomBubbleModeConfiguration() {
    const { pureRandomBubble } = this.state.configurations;
    return (
      <div className="pure-random">
        <div className="checkbox">
          <label><input type="checkbox"
                        value={optionsPureRandomBubble.title}
                        checked={pureRandomBubble.title}
                        onChange={this.onPureRandomBubbleCheckBoxChange}/>Show Chart Title</label>
        </div>
        <div className="checkbox">
          <label><input type="checkbox"
                        value={optionsPureRandomBubble.axisTitle}
                        checked={pureRandomBubble.axisTitle}
                        onChange={this.onPureRandomBubbleCheckBoxChange}/>Show Axis Titles</label>
        </div>
        <div className="checkbox">
          <label><input type="checkbox"
                        value={optionsPureRandomBubble.dataLabels}
                        checked={pureRandomBubble.dataLabels}
                        onChange={this.onPureRandomBubbleCheckBoxChange}/>Show Data Labels</label>
        </div>
        <div className="checkbox">
          <label><input type="checkbox"
                        value={optionsPureRandomBubble.legend}
                        checked={pureRandomBubble.legend}
                        onChange={this.onPureRandomBubbleCheckBoxChange}/>Show Legend</label>
        </div>
        <div className="checkbox">
          <label><input type="checkbox"
                        value={optionsPureRandomBubble.tooltip}
                        checked={pureRandomBubble.tooltip}
                        onChange={this.onPureRandomBubbleCheckBoxChange}/>Enable Tooltip</label>
        </div>
        <div className="checkbox">
          <label><input type="checkbox"
                        value={optionsPureRandomBubble.zoom}
                        checked={pureRandomBubble.zoom}
                        onChange={this.onPureRandomBubbleCheckBoxChange}/>Enable Zoom</label>
        </div>
        <div className="checkbox">
          <label><input type="checkbox"
                        value={optionsPureRandomBubble.animation}
                        checked={pureRandomBubble.animation}
                        onChange={this.onPureRandomBubbleCheckBoxChange}/>Enable Animation</label>
        </div>
        <div className="checkbox">
          <label><input type="checkbox"
                        value={optionsPureRandomBubble.colors}
                        checked={pureRandomBubble.colors}
                        onChange={this.onPureRandomBubbleCheckBoxChange}/>Color Per Bubble</label>
        </div>

        <button
          type="button"
          className="btn btn-success apply-button"
          onClick={this.updatePureRandomBubbleConfiguration}>
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
      case modes.pureRandom3D: {
        return this.renderPureRandom3DModeConfiguration();
      }
      case modes.pureRandomBubble: {
        return this.renderPureRandomBubbleModeConfiguration();
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
