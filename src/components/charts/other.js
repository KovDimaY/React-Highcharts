import React, { Component } from 'react'
import ReactDOM from 'react-dom'
import Highcharts from 'highcharts'

import Chart from './chart-abstract'
import SketchColorPicker from '../color-picker'

import {
  heatmap,
  tilemap,
  polar,
  boxplot,
  gauge,
  pyramid,
  wordcloud,
  sankey
} from '../../constants/other/default-options-other'

import {
  modes,
  initialState,
  optionsHeatmap,
  optionsTilemap,
  optionsPolar
} from '../../constants/other/modes-options-other'

import {
  generateSeriesForHeatmap,
  generateSeriesForTilemap
} from '../../constants/other/data-helpers-other'


export default class Other extends Component {
  constructor(props) {
    super(props);
    this.state = initialState;

    this.dropdownClickHandler = this.dropdownClickHandler.bind(this);
    this.onHeatmapCheckBoxChange = this.onHeatmapCheckBoxChange.bind(this);
    this.onTilemapCheckBoxChange = this.onTilemapCheckBoxChange.bind(this);
    this.onPolarCheckBoxChange = this.onPolarCheckBoxChange.bind(this);
    this.onChangeColorHeatmap = this.onChangeColorHeatmap.bind(this);
    this.onChangeColorTilemap = this.onChangeColorTilemap.bind(this);
    this.updateHeatmapConfiguration = this.updateHeatmapConfiguration.bind(this);
    this.updateTilemapConfiguration = this.updateTilemapConfiguration.bind(this);
    this.updatePolarConfiguration = this.updatePolarConfiguration.bind(this);
  }

  componentDidMount() {
    this.initHeatmap();
  }

  initHeatmap() {
    const options = generateSeriesForHeatmap(heatmap, false);

    this.setState({ options }, () => {
      this.updateHeatmapConfiguration();
    });
  }

  initTilemap() {
    const options = tilemap;
    options.series = generateSeriesForTilemap();

    this.setState({ options }, () => {
      this.updateTilemapConfiguration();
    });
  }

  initPolar() {
    const options = polar;

    this.setState({ options }, () => {
      this.updatePolarConfiguration();
    });
  }

  initBoxplot() {
    const options = boxplot;

    this.setState({ options }, () => {
      this.updateBoxplotConfiguration();
    });
  }

  initGauge() {
    const options = gauge;

    this.setState({ options }, () => {
      this.updateGaugeConfiguration();
    });
  }

  initPyramid() {
    const options = pyramid;

    this.setState({ options }, () => {
      this.updatePyramidConfiguration();
    });
  }

  initWordcloud() {
    const options = wordcloud;

    this.setState({ options }, () => {
      this.updateWordcloudConfiguration();
    });
  }

  initSankey() {
    const options = sankey;

    this.setState({ options }, () => {
      this.updateSankeyConfiguration();
    });
  }

  updateHeatmapConfiguration() {
    const { heatmap } = this.state.configurations;
    const { options } = this.state;
    const usualTooltip = {
        formatter: function () {
          return `The intersection of <b>${this.series.xAxis.categories[this.point.x]}</b>
                  and <b>${this.series.yAxis.categories[this.point.y]}</b>
                  has the value <b>${this.point.value}</b>`;
        }
    };
    const diagonalizedTooltip = {
        formatter: function () {
          if (this.point.x === this.point.y) {
            return false;
          }
          return `The correlation between <b>${this.series.xAxis.categories[this.point.x]}</b>
                  and <b>${this.series.yAxis.categories[this.point.y]}</b>
                  has the next coefficient <b>${this.point.value}</b>`;
        }
    };

    options.tooltip = heatmap.diagonalized
      ? diagonalizedTooltip
      : usualTooltip;

    if ((heatmap.diagonalized && !heatmap.alreadyDiagonalized) ||
       (!heatmap.diagonalized && heatmap.alreadyDiagonalized)) {
      options.series = generateSeriesForHeatmap(options, heatmap.diagonalized).series;
    }
    options.title.text = heatmap.title ? 'Randomly generated data' : null;
    options.subtitle.text = heatmap.title ? 'This data is not real' : null;
    options.legend.enabled = heatmap.legend;
    options.tooltip.enabled = heatmap.tooltip;
    options.series[0].dataLabels.enabled = heatmap.dataLabels;
    options.plotOptions.series.animation = heatmap.animation;
    options.xAxis.labels.enabled = heatmap.axisTitles;
    options.yAxis.labels.enabled = heatmap.axisTitles;
    options.colorAxis.minColor = heatmap.minColor;
    options.colorAxis.maxColor = heatmap.maxColor;
    options.series[0].borderColor = heatmap.borderColor;
    heatmap.alreadyDiagonalized = heatmap.diagonalized;
    this.setState({ rerenderChart: true }, () => {
      this.setState({ rerenderChart: false })
    });
  }

  updateTilemapConfiguration() {
    const { tilemap } = this.state.configurations;
    const { options } = this.state;

    options.title.text = tilemap.title ? 'Randomly generated data' : null;
    options.subtitle.text = tilemap.title ? 'This data is not real' : null;
    options.legend.enabled = tilemap.legend;
    options.tooltip.enabled = tilemap.tooltip;
    options.plotOptions.series.dataLabels.enabled = tilemap.dataLabels;
    options.plotOptions.series.animation = tilemap.animation;
    options.colorAxis.dataClasses[0].color = tilemap.minColor;
    options.colorAxis.dataClasses[1].color = tilemap.lowColor;
    options.colorAxis.dataClasses[2].color = tilemap.highColor;
    options.colorAxis.dataClasses[3].color = tilemap.maxColor;

    this.setState({ rerenderChart: true }, () => {
      this.setState({ rerenderChart: false })
    });
  }

  updatePolarConfiguration() {
    const { polar } = this.state.configurations;
    const { options } = this.state;

    options.title.text = polar.title ? 'Randomly generated data' : null;
    options.subtitle.text = polar.title ? 'This data is not real' : null;
    options.legend.enabled = polar.legend;
    options.tooltip.enabled = polar.tooltip;
    options.plotOptions.series.dataLabels.enabled = polar.dataLabels;
    options.plotOptions.series.animation = polar.animation;

    this.setState({ rerenderChart: true }, () => {
      this.setState({ rerenderChart: false })
    })
  }

  updateBoxplotConfiguration() {
    this.setState({ rerenderChart: true }, () => {
      this.setState({ rerenderChart: false })
    })
  }

  updateGaugeConfiguration() {
    this.setState({ rerenderChart: true }, () => {
      this.setState({ rerenderChart: false })
    })
  }

  updatePyramidConfiguration() {
    this.setState({ rerenderChart: true }, () => {
      this.setState({ rerenderChart: false })
    })
  }

  updateWordcloudConfiguration() {
    this.setState({ rerenderChart: true }, () => {
      this.setState({ rerenderChart: false })
    })
  }

  updateSankeyConfiguration() {
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
      case modes.tilemap: {
        this.initTilemap();
        break;
      }
      case modes.polar: {
        this.initPolar();
        break;
      }
      case modes.boxplot: {
        this.initBoxplot();
        break;
      }
      case modes.gauge: {
        this.initGauge();
        break;
      }
      case modes.pyramid: {
        this.initPyramid();
        break;
      }
      case modes.wordcloud: {
        this.initWordcloud();
        break;
      }
      case modes.sankey: {
        this.initSankey();
        break;
      }
      default: {
        console.log("This mode is not implemented yet");
      }
    }
    this.setState({ currentMode: mode, configurations });
  }

  onHeatmapCheckBoxChange(event) {
    const { configurations } = this.state;
    if (configurations.heatmap[event.target.value]) {
      configurations.heatmap[event.target.value] = false;
    } else {
      configurations.heatmap[event.target.value] = true;
    }
    this.setState({ configurations })
  }

  onTilemapCheckBoxChange(event) {
    const { configurations } = this.state;
    if (configurations.tilemap[event.target.value]) {
      configurations.tilemap[event.target.value] = false;
    } else {
      configurations.tilemap[event.target.value] = true;
    }
    this.setState({ configurations });
  }

  onChangeColorHeatmap(key, color) {
    const { configurations } = this.state;
    if (typeof key === "string" && configurations.heatmap[key]) {
      configurations.heatmap[key] = color.hex;
    }
    this.setState({ configurations });
  }

  onChangeColorTilemap(key, color) {
    const { configurations } = this.state;
    if (typeof key === "string" && configurations.tilemap[key]) {
      configurations.tilemap[key] = color.hex;
    }
    this.setState({ configurations });
  }

  onPolarCheckBoxChange(event) {
    const { configurations } = this.state;
    if (event.target.name === optionsPolar.chartType) {
      configurations.polar[event.target.name] = event.target.value;
    } else {
      if (configurations.polar[event.target.value]) {
        configurations.polar[event.target.value] = false;
      } else {
        configurations.polar[event.target.value] = true;
      }
    }
    this.setState({ configurations });
  }

  renderOptionsDropdown() {
    return (
      <div className="dropdown">
        <button className="btn btn-primary dropdown-toggle" type="button" data-toggle="dropdown">Configurations
        <span className="caret"></span></button>
        <ul className="dropdown-menu">
          <li className="dropdown-header">Other Charts</li>
          <li><a onClick={this.dropdownClickHandler}>{modes.heatmap}</a></li>
          <li><a onClick={this.dropdownClickHandler}>{modes.tilemap}</a></li>
          <li><a onClick={this.dropdownClickHandler}>{modes.polar}</a></li>
          <li><a onClick={this.dropdownClickHandler}>{modes.boxplot}</a></li>
          <li><a onClick={this.dropdownClickHandler}>{modes.gauge}</a></li>
          <li><a onClick={this.dropdownClickHandler}>{modes.pyramid}</a></li>
          <li><a onClick={this.dropdownClickHandler}>{modes.wordcloud}</a></li>
          <li><a onClick={this.dropdownClickHandler}>{modes.sankey}</a></li>
        </ul>
      </div>
    )
  }

  renderHeatmapConfiguration() {
    const { heatmap } = this.state.configurations;
    return (
      <div className="other-heatmap-container">
        <div className="checkboxes other-heatmap">
          <div className="checkbox">
            <label><input type="checkbox"
                          value={optionsHeatmap.title}
                          checked={heatmap.title}
                          onChange={this.onHeatmapCheckBoxChange}/>Show Chart Title</label>
          </div>
          <div className="checkbox">
            <label><input type="checkbox"
                          value={optionsHeatmap.axisTitles}
                          checked={heatmap.axisTitles}
                          onChange={this.onHeatmapCheckBoxChange}/>Show Axis Titles</label>
          </div>
          <div className="checkbox">
            <label><input type="checkbox"
                          value={optionsHeatmap.dataLabels}
                          checked={heatmap.dataLabels}
                          onChange={this.onHeatmapCheckBoxChange}/>Show Data Labels</label>
          </div>
          <div className="checkbox">
            <label><input type="checkbox"
                          value={optionsHeatmap.legend}
                          checked={heatmap.legend}
                          onChange={this.onHeatmapCheckBoxChange}/>Show Legend</label>
          </div>
          <div className="checkbox">
            <label><input type="checkbox"
                          value={optionsHeatmap.tooltip}
                          checked={heatmap.tooltip}
                          onChange={this.onHeatmapCheckBoxChange}/>Enable Tooltip</label>
          </div>
          <div className="checkbox">
            <label><input type="checkbox"
                          value={optionsHeatmap.animation}
                          checked={heatmap.animation}
                          onChange={this.onHeatmapCheckBoxChange}/>Enable Animation</label>
          </div>
          <div className="checkbox">
            <label><input type="checkbox"
                          value={optionsHeatmap.diagonalized}
                          checked={heatmap.diagonalized}
                          onChange={this.onHeatmapCheckBoxChange}/>Correlation Mode</label>
          </div>
        </div>

        <div className="color-pickers">
          <div className="color-picker-item">
            <label>
              Min Color
              <SketchColorPicker
                color={ heatmap.minColor }
                onChangeColor={this.onChangeColorHeatmap}
                identificator={optionsHeatmap.minColor}
                presetColors={Highcharts.getOptions().colors}/>
            </label>
          </div>
          <div className="color-picker-item">
            <label>
              Max Color
              <SketchColorPicker
                color={ heatmap.maxColor }
                onChangeColor={this.onChangeColorHeatmap}
                identificator={optionsHeatmap.maxColor}
                presetColors={Highcharts.getOptions().colors}/>
            </label>
          </div>
          <div className="color-picker-item">
            <label>
              Border Color
              <SketchColorPicker
                color={ heatmap.borderColor }
                onChangeColor={this.onChangeColorHeatmap}
                identificator={optionsHeatmap.borderColor}
                presetColors={Highcharts.getOptions().colors}/>
            </label>
          </div>
        </div>

        <button
          type="button"
          className="btn btn-success apply-button position-dynamic"
          onClick={this.updateHeatmapConfiguration}>
          Apply
        </button>
      </div>
    )
  }

  renderTilemapConfiguration() {
    const { tilemap } = this.state.configurations;
    return (
      <div className="other-tilemap-container">
        <div className="checkboxes other-tilemap">
          <div className="checkbox">
            <label><input type="checkbox"
                          value={optionsTilemap.title}
                          checked={tilemap.title}
                          onChange={this.onTilemapCheckBoxChange}/>Show Chart Title</label>
          </div>
          <div className="checkbox">
            <label><input type="checkbox"
                          value={optionsTilemap.dataLabels}
                          checked={tilemap.dataLabels}
                          onChange={this.onTilemapCheckBoxChange}/>Show Data Labels</label>
          </div>
          <div className="checkbox">
            <label><input type="checkbox"
                          value={optionsTilemap.legend}
                          checked={tilemap.legend}
                          onChange={this.onTilemapCheckBoxChange}/>Show Legend</label>
          </div>
          <div className="checkbox">
            <label><input type="checkbox"
                          value={optionsTilemap.tooltip}
                          checked={tilemap.tooltip}
                          onChange={this.onTilemapCheckBoxChange}/>Enable Tooltip</label>
          </div>
          <div className="checkbox">
            <label><input type="checkbox"
                          value={optionsTilemap.animation}
                          checked={tilemap.animation}
                          onChange={this.onTilemapCheckBoxChange}/>Enable Animation</label>
          </div>
        </div>

        <div className="color-pickers">
          <div className="color-picker-item-tilemap">
            <label>
              Min Color
              <SketchColorPicker
                color={tilemap.minColor}
                onChangeColor={this.onChangeColorTilemap}
                identificator={optionsTilemap.minColor}
                presetColors={Highcharts.getOptions().colors}/>
            </label>
          </div>
          <div className="color-picker-item-tilemap">
            <label>
              Low Color
              <SketchColorPicker
                color={tilemap.lowColor}
                onChangeColor={this.onChangeColorTilemap}
                identificator={optionsTilemap.lowColor}
                presetColors={Highcharts.getOptions().colors}/>
            </label>
          </div>
          <div className="color-picker-item-tilemap">
            <label>
              High Color
              <SketchColorPicker
                color={tilemap.highColor}
                onChangeColor={this.onChangeColorTilemap}
                identificator={optionsTilemap.highColor}
                presetColors={Highcharts.getOptions().colors}/>
            </label>
          </div>
          <div className="color-picker-item-tilemap">
            <label>
              Max Color
              <SketchColorPicker
                color={tilemap.maxColor}
                onChangeColor={this.onChangeColorTilemap}
                identificator={optionsTilemap.maxColor}
                presetColors={Highcharts.getOptions().colors}/>
            </label>
          </div>
        </div>

        <button
          type="button"
          className="btn btn-success apply-button position-dynamic"
          onClick={this.updateTilemapConfiguration}>
          Apply
        </button>
      </div>
    )
  }

  renderPolarConfiguration() {
    const { polar } = this.state.configurations;
    return (
      <div className="other-polar-container">
        <div className="form-group config-option polar-type-selector">
          <label>Type of the Chart:</label>
          <select
            className="form-control"
            onChange={this.onPolarCheckBoxChange}
            name={optionsPolar.chartType}>
            <option>Line</option>
            <option>Area</option>
            <option>Column</option>
          </select>
        </div>
        <div className="checkboxes other-polar">
          <div className="checkbox">
            <label><input type="checkbox"
                          value={optionsPolar.title}
                          checked={polar.title}
                          onChange={this.onPolarCheckBoxChange}/>Show Chart Title</label>
          </div>
          <div className="checkbox">
            <label><input type="checkbox"
                          value={optionsPolar.dataLabels}
                          checked={polar.dataLabels}
                          onChange={this.onPolarCheckBoxChange}/>Show Data Labels</label>
          </div>
          <div className="checkbox">
            <label><input type="checkbox"
                          value={optionsPolar.legend}
                          checked={polar.legend}
                          onChange={this.onPolarCheckBoxChange}/>Show Legend</label>
          </div>
          <div className="checkbox">
            <label><input type="checkbox"
                          value={optionsPolar.tooltip}
                          checked={polar.tooltip}
                          onChange={this.onPolarCheckBoxChange}/>Enable Tooltip</label>
          </div>
          <div className="checkbox">
            <label><input type="checkbox"
                          value={optionsPolar.animation}
                          checked={polar.animation}
                          onChange={this.onPolarCheckBoxChange}/>Enable Animation</label>
          </div>
        </div>

        <button
          type="button"
          className="btn btn-success apply-button"
          onClick={this.updatePolarConfiguration}>
          Apply
        </button>
      </div>
    )
  }

  renderConfigurationsArea() {
    const { currentMode } = this.state;
    switch (currentMode) {
      case modes.heatmap: {
        return this.renderHeatmapConfiguration();
      }
      case modes.tilemap: {
        return this.renderTilemapConfiguration();
      }
      case modes.polar: {
        return this.renderPolarConfiguration();
      }
      case modes.boxplot: {
        return <div> BOXPLOT </div>;
      }
      case modes.gauge: {
        return <div> GAUGE </div>;
      }
      case modes.pyramid: {
        return <div> PYRAMID </div>;
      }
      case modes.wordcloud: {
        return <div> WORDCLOUD </div>;
      }
      case modes.sankey: {
        return <div> SANKEY </div>;
      }
      default: {
        return null;
      }
    }
  }

  render() {
    console.log("other state: ", this.state);
    return (
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
