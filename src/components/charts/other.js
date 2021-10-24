import React, { Component } from 'react';
import Highcharts from 'highcharts';
import TagsInput from 'react-tagsinput';

import Chart from './chart-abstract';
import SketchColorPicker from '../color-picker';

import {
  heatmap,
  tilemap,
  polar,
  boxplot,
  gauge,
  pyramid,
  wordcloud,
  sankey,
  clock,
} from '../../constants/other/default-options-other';

import {
  modes,
  initialState,
  optionsHeatmap,
  optionsTilemap,
  optionsWordcloud,
  optionsPolar,
  optionsBoxplot,
  optionsPyramid,
  optionsGauge,
  optionsSankey,
} from '../../constants/other/modes-options-other';

import {
  generateSeriesForHeatmap,
  generateSeriesForTilemap,
  generateSeriesForPolar,
  generateInitialDataBoxplot,
  generateRandomPointsBoxplot,
  generateBoxplotSeries,
  averageLineBoxplot,
  countWords,
  generateSeriesForWordCloud,
  generateSeriesPyramid,
  analyzeGaugeText,
  generateDataForSankey,
  generateSeriesForClock,
} from '../../constants/other/data-helpers-other';

import { limitNumericalInput } from '../../constants/shared/helpers';

export default class Other extends Component {
  constructor(props) {
    super(props);
    this.state = initialState;

    this.dropdownClickHandler = this.dropdownClickHandler.bind(this);
    this.initBoxplot = this.initBoxplot.bind(this);
    this.onAddPointsBoxplot = this.onAddPointsBoxplot.bind(this);
    this.onHeatmapCheckBoxChange = this.onHeatmapCheckBoxChange.bind(this);
    this.onTilemapCheckBoxChange = this.onTilemapCheckBoxChange.bind(this);
    this.onPolarCheckBoxChange = this.onPolarCheckBoxChange.bind(this);
    this.onBoxplotSelectChange = this.onBoxplotSelectChange.bind(this);
    this.onBoxplotInputChange = this.onBoxplotInputChange.bind(this);
    this.onPyramidCheckBoxChange = this.onPyramidCheckBoxChange.bind(this);
    this.onChangeColorHeatmap = this.onChangeColorHeatmap.bind(this);
    this.onChangeColorTilemap = this.onChangeColorTilemap.bind(this);
    this.onWordcloudInputChange = this.onWordcloudInputChange.bind(this);
    this.onWordcloudTagsChange = this.onWordcloudTagsChange.bind(this);
    this.onGaugeInputChange = this.onGaugeInputChange.bind(this);
    this.onSankeyInputChange = this.onSankeyInputChange.bind(this);
    this.updateHeatmapConfiguration = this.updateHeatmapConfiguration.bind(this);
    this.updateTilemapConfiguration = this.updateTilemapConfiguration.bind(this);
    this.updatePolarConfiguration = this.updatePolarConfiguration.bind(this);
    this.updatePyramidConfiguration = this.updatePyramidConfiguration.bind(this);
    this.updateWordcloudConfiguration = this.updateWordcloudConfiguration.bind(this);
    this.updateGaugeConfiguration = this.updateGaugeConfiguration.bind(this);
    this.refreshGaugeCongifuration = this.refreshGaugeCongifuration.bind(this);
    this.updateSankeyConfiguration = this.updateSankeyConfiguration.bind(this);
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
    options.series = generateSeriesForPolar();

    this.setState({ options }, () => {
      this.updatePolarConfiguration();
    });
  }

  initBoxplot() {
    const options = boxplot;
    const { configurations } = this.state;
    this.boxplotData = generateInitialDataBoxplot(configurations.boxplot);

    this.setState({ options }, () => {
      this.updateBoxplotConfiguration();
    });
  }

  initGauge() {
    const options = gauge;

    this.setState({ options }, () => {
      this.refreshGaugeCongifuration();
    });
  }

  initPyramid() {
    const options = pyramid;
    options.series[0].data = generateSeriesPyramid();

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

  initClock() {
    const options = clock;

    this.setState({ options }, () => {
      this.updateClockConfiguration();
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
      },
    };
    const diagonalizedTooltip = {
      formatter: function () {
        if (this.point.x === this.point.y) {
          return false;
        }
        return `The correlation between <b>${this.series.xAxis.categories[this.point.x]}</b>
                  and <b>${this.series.yAxis.categories[this.point.y]}</b>
                  has the next coefficient <b>${this.point.value}</b>`;
      },
    };

    options.tooltip = heatmap.diagonalized ? diagonalizedTooltip : usualTooltip;

    if (
      (heatmap.diagonalized && !heatmap.alreadyDiagonalized) ||
      (!heatmap.diagonalized && heatmap.alreadyDiagonalized)
    ) {
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
      this.setState({ rerenderChart: false });
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
      this.setState({ rerenderChart: false });
    });
  }

  updatePolarConfiguration() {
    const { polar } = this.state.configurations;
    const { options } = this.state;
    const circleLableFormatter = {
      formatter: function () {
        return this.value + '°';
      },
    };

    options.title.text = polar.title ? 'Randomly generated data' : null;
    options.subtitle.text = polar.title ? 'This data is not real' : null;
    options.legend.enabled = polar.legend;
    options.tooltip.enabled = polar.tooltip;
    options.plotOptions.series.dataLabels.enabled = polar.dataLabels;
    options.plotOptions.series.animation = polar.animation;
    options.plotOptions.series.pointStart = polar.spiderMode ? undefined : 0;
    options.plotOptions.series.pointInterval = polar.spiderMode
      ? undefined
      : 360 / options.series[0].data.length;
    options.xAxis.tickInterval = polar.spiderMode ? undefined : 360 / options.series[0].data.length;
    options.xAxis.categories = polar.spiderMode
      ? options.series[0].data.map((item, i) => `Random Category ${i + 1}`)
      : undefined;
    options.xAxis.min = polar.spiderMode ? undefined : 0;
    options.xAxis.max = polar.spiderMode ? undefined : 360;
    options.xAxis.labels = polar.spiderMode ? {} : circleLableFormatter;
    options.yAxis.gridLineInterpolation = polar.spiderMode ? 'polygone' : 'circle';
    options.series.forEach(serie => {
      if (polar.chartType === 'Line') {
        serie.type = 'line';
      } else if (polar.chartType === 'Area') {
        serie.type = 'area';
      } else {
        serie.type = 'column';
      }
    });

    this.setState({ rerenderChart: true }, () => {
      this.setState({ rerenderChart: false });
    });
  }

  updateBoxplotConfiguration() {
    const { options, configurations } = this.state;

    options.series = generateBoxplotSeries(this.boxplotData, configurations.boxplot);
    options.yAxis.plotLines = configurations.boxplot.showAverage
      ? averageLineBoxplot(this.boxplotData)
      : [];

    this.setState({ rerenderChart: true }, () => {
      this.setState({ rerenderChart: false });
    });
  }

  onAddPointsBoxplot(event) {
    const { boxplot } = this.state.configurations;
    const { min, max, target } = boxplot;
    const { options } = this.state;
    const amount = Number(event.target.dataset.amount);
    const newPoints = generateRandomPointsBoxplot(min, max, amount);
    this.boxplotData[target] = this.boxplotData[target].concat(newPoints);
    const message = `Last added values to the boxplot #${target}: ${newPoints.reduce(
      (result, element) => `${result}, ${element}`
    )}`;

    options.series = generateBoxplotSeries(this.boxplotData, boxplot);
    options.yAxis.plotLines = boxplot.showAverage ? averageLineBoxplot(this.boxplotData) : [];
    options.subtitle.text = message;

    this.setState({ options, rerenderChart: true }, () => {
      this.setState({ rerenderChart: false });
    });
  }

  updateGaugeConfiguration() {
    const { options, configurations } = this.state;

    const { chars, digits, symbols } = analyzeGaugeText(configurations.gauge);

    options.series[0].data[0].y = chars > 100 ? 100 : chars;
    options.series[1].data[0].y = digits > 100 ? 100 : digits;
    options.series[2].data[0].y = symbols > 100 ? 100 : symbols;

    this.setState({ rerenderChart: true }, () => {
      this.setState({ rerenderChart: false });
    });
  }

  refreshGaugeCongifuration() {
    const { options, configurations } = this.state;

    configurations.gauge.text = 'Enter here your text to see its char analysis on the chart...';
    configurations.gauge.chars = 500;
    configurations.gauge.digits = 50;
    configurations.gauge.symbols = 100;

    const { chars, digits, symbols } = analyzeGaugeText(configurations.gauge);

    options.series[0].data[0].y = chars > 100 ? 100 : chars;
    options.series[1].data[0].y = digits > 100 ? 100 : digits;
    options.series[2].data[0].y = symbols > 100 ? 100 : symbols;

    this.setState({ rerenderChart: true, configurations }, () => {
      this.setState({ rerenderChart: false });
    });
  }

  updatePyramidConfiguration() {
    const { pyramid } = this.state.configurations;
    const { options } = this.state;

    options.title.text = pyramid.title ? 'Randomly generated data' : null;
    options.subtitle.text = pyramid.title ? 'This data is not real' : null;
    options.legend.enabled = pyramid.legend;
    options.tooltip.enabled = pyramid.tooltip;
    options.plotOptions.series.dataLabels.enabled = pyramid.dataLabels;
    options.plotOptions.series.animation = pyramid.animation;
    options.plotOptions.pyramid.allowPointSelect = pyramid.allowPointSelect;

    this.setState({ rerenderChart: true }, () => {
      this.setState({ rerenderChart: false });
    });
  }

  updateWordcloudConfiguration() {
    const { options, configurations } = this.state;
    const { text, limit, filter } = configurations.wordcloud;

    const rawData = countWords(text, filter);
    options.series = generateSeriesForWordCloud(rawData, limit);
    options.title.text = 'Word Cloud Chart';

    this.setState({ options, rerenderChart: true }, () => {
      this.setState({ rerenderChart: false });
    });
  }

  updateSankeyConfiguration() {
    const { sankey } = this.state.configurations;
    const { options } = this.state;
    options.series[0].data = generateDataForSankey(sankey);

    options.plotOptions.sankey.linkOpacity = sankey.linkOpacity;
    options.plotOptions.sankey.curveFactor = sankey.curveFactor;

    this.setState({ rerenderChart: true }, () => {
      this.setState({ rerenderChart: false });
    });
  }

  updateClockConfiguration() {
    const { clock } = this.state.configurations;
    const { options } = this.state;
    options.series = generateSeriesForClock(clock);
    options.function = clock.function;

    this.setState({ rerenderChart: true }, () => {
      this.setState({ rerenderChart: false });
    });
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
      case modes.clock: {
        this.initClock();
        break;
      }
      default: {
        console.log('This mode is not implemented yet');
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
    this.setState({ configurations });
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
    if (typeof key === 'string' && configurations.heatmap[key]) {
      configurations.heatmap[key] = color.hex;
    }
    this.setState({ configurations });
  }

  onChangeColorTilemap(key, color) {
    const { configurations } = this.state;
    if (typeof key === 'string' && configurations.tilemap[key]) {
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

  onBoxplotSelectChange(event) {
    const { configurations } = this.state;
    if (event.target.name === optionsBoxplot.target) {
      configurations.boxplot[event.target.name] = Number(event.target.value);
      this.setState({ configurations });
    } else {
      if (configurations.boxplot[event.target.value]) {
        configurations.boxplot[event.target.value] = false;
      } else {
        configurations.boxplot[event.target.value] = true;
      }
      this.setState({ configurations, rerenderChart: true }, () => {
        this.updateBoxplotConfiguration();
      });
    }
  }

  onBoxplotInputChange(event) {
    const { configurations } = this.state;
    if (event.target.name === optionsBoxplot.min) {
      limitNumericalInput(
        configurations.boxplot,
        event.target.name,
        event.target.value,
        -1000000,
        configurations.boxplot.max,
        false
      );
    } else if (event.target.name === optionsBoxplot.max) {
      limitNumericalInput(
        configurations.boxplot,
        event.target.name,
        event.target.value,
        configurations.boxplot.min,
        1000000,
        false
      );
    } else {
      configurations.boxplot[event.target.name] = event.target.value;
    }

    this.setState({ configurations });
  }

  onPyramidCheckBoxChange(event) {
    const { configurations } = this.state;
    if (configurations.pyramid[event.target.value]) {
      configurations.pyramid[event.target.value] = false;
    } else {
      configurations.pyramid[event.target.value] = true;
    }

    this.setState({ configurations });
  }

  onWordcloudInputChange(event) {
    const { configurations } = this.state;
    const newValue =
      event.target.value === ''
        ? 'Enter here your text to plot its words set on the chart...'
        : event.target.value;
    if (event.target.name === 'limit') {
      limitNumericalInput(configurations.wordcloud, event.target.name, newValue, 1, 1000, true);
    } else {
      configurations.wordcloud[event.target.name] = newValue;
    }

    this.setState({ configurations });
  }

  onGaugeInputChange(event) {
    const { configurations } = this.state;
    const newValue =
      event.target.value === ''
        ? 'Enter here your text to see its char analysis on the chart...'
        : event.target.value;
    if (event.target.name !== 'text') {
      limitNumericalInput(configurations.gauge, event.target.name, newValue, 1, 10000, true);
    } else {
      configurations.gauge[event.target.name] = newValue;
    }

    this.setState({ configurations }, () => {
      this.updateGaugeConfiguration();
    });
  }

  onWordcloudTagsChange(newTags) {
    const { configurations } = this.state;
    const lastTag = newTags[newTags.length - 1];
    const alreadyExist = configurations.wordcloud.filter.includes(lastTag);
    const deleted = configurations.wordcloud.filter.length > newTags.length;
    if (!alreadyExist || deleted) {
      configurations.wordcloud.filter = newTags;
    }

    this.setState({ configurations });
  }

  onSankeyInputChange(event) {
    const { configurations } = this.state;
    configurations.sankey[event.target.name] = event.target.value;

    this.setState({ configurations });
  }

  renderOptionsDropdown() {
    return (
      <div className="dropdown">
        <button className="btn btn-primary dropdown-toggle" type="button" data-toggle="dropdown">
          Configurations
          <span className="caret"></span>
        </button>
        <ul className="dropdown-menu">
          <li className="dropdown-header">Other Charts</li>
          <li>
            <span onClick={this.dropdownClickHandler}>{modes.heatmap}</span>
          </li>
          <li>
            <span onClick={this.dropdownClickHandler}>{modes.tilemap}</span>
          </li>
          <li>
            <span onClick={this.dropdownClickHandler}>{modes.polar}</span>
          </li>
          <li>
            <span onClick={this.dropdownClickHandler}>{modes.boxplot}</span>
          </li>
          <li>
            <span onClick={this.dropdownClickHandler}>{modes.gauge}</span>
          </li>
          <li>
            <span onClick={this.dropdownClickHandler}>{modes.pyramid}</span>
          </li>
          <li>
            <span onClick={this.dropdownClickHandler}>{modes.wordcloud}</span>
          </li>
          <li>
            <span onClick={this.dropdownClickHandler}>{modes.sankey}</span>
          </li>
          <li>
            <span onClick={this.dropdownClickHandler}>{modes.clock}</span>
          </li>
        </ul>
      </div>
    );
  }

  renderHeatmapConfiguration() {
    const { heatmap } = this.state.configurations;
    return (
      <div className="other-heatmap-container">
        <div className="checkboxes other-heatmap">
          <div className="checkbox">
            <label>
              <input
                type="checkbox"
                value={optionsHeatmap.title}
                checked={heatmap.title}
                onChange={this.onHeatmapCheckBoxChange}
              />
              Show Chart Title
            </label>
          </div>
          <div className="checkbox">
            <label>
              <input
                type="checkbox"
                value={optionsHeatmap.axisTitles}
                checked={heatmap.axisTitles}
                onChange={this.onHeatmapCheckBoxChange}
              />
              Show Axis Titles
            </label>
          </div>
          <div className="checkbox">
            <label>
              <input
                type="checkbox"
                value={optionsHeatmap.dataLabels}
                checked={heatmap.dataLabels}
                onChange={this.onHeatmapCheckBoxChange}
              />
              Show Data Labels
            </label>
          </div>
          <div className="checkbox">
            <label>
              <input
                type="checkbox"
                value={optionsHeatmap.legend}
                checked={heatmap.legend}
                onChange={this.onHeatmapCheckBoxChange}
              />
              Show Legend
            </label>
          </div>
          <div className="checkbox">
            <label>
              <input
                type="checkbox"
                value={optionsHeatmap.tooltip}
                checked={heatmap.tooltip}
                onChange={this.onHeatmapCheckBoxChange}
              />
              Enable Tooltip
            </label>
          </div>
          <div className="checkbox">
            <label>
              <input
                type="checkbox"
                value={optionsHeatmap.animation}
                checked={heatmap.animation}
                onChange={this.onHeatmapCheckBoxChange}
              />
              Enable Animation
            </label>
          </div>
          <div className="checkbox">
            <label>
              <input
                type="checkbox"
                value={optionsHeatmap.diagonalized}
                checked={heatmap.diagonalized}
                onChange={this.onHeatmapCheckBoxChange}
              />
              Correlation Mode
            </label>
          </div>
        </div>

        <div className="color-pickers">
          <div className="color-picker-item">
            <label>
              Min Color
              <SketchColorPicker
                color={heatmap.minColor}
                onChangeColor={this.onChangeColorHeatmap}
                identificator={optionsHeatmap.minColor}
                presetColors={Highcharts.getOptions().colors}
              />
            </label>
          </div>
          <div className="color-picker-item">
            <label>
              Max Color
              <SketchColorPicker
                color={heatmap.maxColor}
                onChangeColor={this.onChangeColorHeatmap}
                identificator={optionsHeatmap.maxColor}
                presetColors={Highcharts.getOptions().colors}
              />
            </label>
          </div>
          <div className="color-picker-item">
            <label>
              Border Color
              <SketchColorPicker
                color={heatmap.borderColor}
                onChangeColor={this.onChangeColorHeatmap}
                identificator={optionsHeatmap.borderColor}
                presetColors={Highcharts.getOptions().colors}
              />
            </label>
          </div>
        </div>

        <button
          type="button"
          className="btn btn-success apply-button position-dynamic"
          onClick={this.updateHeatmapConfiguration}
        >
          Apply
        </button>
      </div>
    );
  }

  renderTilemapConfiguration() {
    const { tilemap } = this.state.configurations;
    return (
      <div className="other-tilemap-container">
        <div className="checkboxes other-tilemap">
          <div className="checkbox">
            <label>
              <input
                type="checkbox"
                value={optionsTilemap.title}
                checked={tilemap.title}
                onChange={this.onTilemapCheckBoxChange}
              />
              Show Chart Title
            </label>
          </div>
          <div className="checkbox">
            <label>
              <input
                type="checkbox"
                value={optionsTilemap.dataLabels}
                checked={tilemap.dataLabels}
                onChange={this.onTilemapCheckBoxChange}
              />
              Show Data Labels
            </label>
          </div>
          <div className="checkbox">
            <label>
              <input
                type="checkbox"
                value={optionsTilemap.legend}
                checked={tilemap.legend}
                onChange={this.onTilemapCheckBoxChange}
              />
              Show Legend
            </label>
          </div>
          <div className="checkbox">
            <label>
              <input
                type="checkbox"
                value={optionsTilemap.tooltip}
                checked={tilemap.tooltip}
                onChange={this.onTilemapCheckBoxChange}
              />
              Enable Tooltip
            </label>
          </div>
          <div className="checkbox">
            <label>
              <input
                type="checkbox"
                value={optionsTilemap.animation}
                checked={tilemap.animation}
                onChange={this.onTilemapCheckBoxChange}
              />
              Enable Animation
            </label>
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
                presetColors={Highcharts.getOptions().colors}
              />
            </label>
          </div>
          <div className="color-picker-item-tilemap">
            <label>
              Low Color
              <SketchColorPicker
                color={tilemap.lowColor}
                onChangeColor={this.onChangeColorTilemap}
                identificator={optionsTilemap.lowColor}
                presetColors={Highcharts.getOptions().colors}
              />
            </label>
          </div>
          <div className="color-picker-item-tilemap">
            <label>
              High Color
              <SketchColorPicker
                color={tilemap.highColor}
                onChangeColor={this.onChangeColorTilemap}
                identificator={optionsTilemap.highColor}
                presetColors={Highcharts.getOptions().colors}
              />
            </label>
          </div>
          <div className="color-picker-item-tilemap">
            <label>
              Max Color
              <SketchColorPicker
                color={tilemap.maxColor}
                onChangeColor={this.onChangeColorTilemap}
                identificator={optionsTilemap.maxColor}
                presetColors={Highcharts.getOptions().colors}
              />
            </label>
          </div>
        </div>

        <button
          type="button"
          className="btn btn-success apply-button position-dynamic"
          onClick={this.updateTilemapConfiguration}
        >
          Apply
        </button>
      </div>
    );
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
            name={optionsPolar.chartType}
          >
            <option>Line</option>
            <option>Area</option>
            <option>Column</option>
          </select>
        </div>
        <div className="checkboxes other-polar">
          <div className="checkbox">
            <label>
              <input
                type="checkbox"
                value={optionsPolar.title}
                checked={polar.title}
                onChange={this.onPolarCheckBoxChange}
              />
              Show Chart Title
            </label>
          </div>
          <div className="checkbox">
            <label>
              <input
                type="checkbox"
                value={optionsPolar.dataLabels}
                checked={polar.dataLabels}
                onChange={this.onPolarCheckBoxChange}
              />
              Show Data Labels
            </label>
          </div>
          <div className="checkbox">
            <label>
              <input
                type="checkbox"
                value={optionsPolar.legend}
                checked={polar.legend}
                onChange={this.onPolarCheckBoxChange}
              />
              Show Legend
            </label>
          </div>
          <div className="checkbox">
            <label>
              <input
                type="checkbox"
                value={optionsPolar.tooltip}
                checked={polar.tooltip}
                onChange={this.onPolarCheckBoxChange}
              />
              Enable Tooltip
            </label>
          </div>
          <div className="checkbox">
            <label>
              <input
                type="checkbox"
                value={optionsPolar.animation}
                checked={polar.animation}
                onChange={this.onPolarCheckBoxChange}
              />
              Enable Animation
            </label>
          </div>
          <div className="checkbox">
            <label>
              <input
                type="checkbox"
                value={optionsPolar.spiderMode}
                checked={polar.spiderMode}
                onChange={this.onPolarCheckBoxChange}
              />
              Use Spider Net Mode
            </label>
          </div>
        </div>

        <button
          type="button"
          className="btn btn-success apply-button"
          onClick={this.updatePolarConfiguration}
        >
          Apply
        </button>
      </div>
    );
  }

  renderBoxPlotConfiguration() {
    const { boxplot } = this.state.configurations;
    return (
      <div className="other-boxplot">
        <div className="form-group config-option target-group-selector">
          <label>Target:</label>
          <select
            className="form-control"
            onChange={this.onBoxplotSelectChange}
            name={optionsBoxplot.target}
          >
            <option>1</option>
            <option>2</option>
            <option>3</option>
          </select>
        </div>

        <div className="row">
          <div className="col-md-6 special-small">
            <div className="form-group config-option">
              <label>Min</label>
              <input
                type="number"
                data-type={optionsBoxplot.min}
                className="form-control"
                name={optionsBoxplot.min}
                value={boxplot.min}
                onChange={this.onBoxplotInputChange}
              />
            </div>
          </div>
          <div className="col-md-6 special-small">
            <div className="form-group config-option">
              <label>Max</label>
              <input
                type="number"
                data-type={optionsBoxplot.max}
                className="form-control"
                name={optionsBoxplot.max}
                value={boxplot.max}
                onChange={this.onBoxplotInputChange}
              />
            </div>
          </div>
        </div>

        <div className="row basic-config shot-container">
          <div className="col-md-6 special-small">
            <button
              type="button"
              className="btn btn-primary shot"
              data-amount={1}
              onClick={this.onAddPointsBoxplot}
            >
              1 shot
            </button>
          </div>
          <div className="col-md-6 special-small">
            <button
              type="button"
              className="btn btn-primary shot"
              data-amount={10}
              onClick={this.onAddPointsBoxplot}
            >
              10 shots
            </button>
          </div>
        </div>

        <div className="checkboxes other-heatmap">
          <div className="checkbox">
            <label>
              <input
                type="checkbox"
                value={optionsBoxplot.outliers}
                checked={boxplot.outliers}
                onChange={this.onBoxplotSelectChange}
              />
              Outliers
            </label>
          </div>

          <div className="checkbox">
            <label>
              <input
                type="checkbox"
                value={optionsBoxplot.showAverage}
                checked={boxplot.showAverage}
                onChange={this.onBoxplotSelectChange}
              />
              Global average
            </label>
          </div>
        </div>

        <button
          type="button"
          className="btn btn-success apply-button position-dynamic"
          onClick={this.initBoxplot}
        >
          Restart
        </button>
      </div>
    );
  }

  renderWordcloudConfiguration() {
    const { wordcloud } = this.state.configurations;
    return (
      <div className="other-wordcloud">
        <div className="form-group config-option">
          <label>Text for plotting</label>
          <textarea
            className="form-control input-textarea"
            name={optionsWordcloud.text}
            value={wordcloud.text}
            onChange={this.onWordcloudInputChange}
          />
        </div>

        <div className="form-group config-option">
          <label>Filter next words</label>
          <TagsInput value={wordcloud.filter} onChange={this.onWordcloudTagsChange} />
        </div>

        <div className="form-group config-option">
          <label>Number of words</label>
          <input
            type="number"
            className="form-control"
            name={optionsWordcloud.limit}
            value={wordcloud.limit}
            onChange={this.onWordcloudInputChange}
          />
        </div>

        <button
          type="button"
          className="btn btn-success apply-button position-dynamic"
          onClick={this.updateWordcloudConfiguration}
        >
          Apply
        </button>
      </div>
    );
  }

  renderGaugeConfiguration() {
    const { gauge } = this.state.configurations;
    return (
      <div className="other-gauge">
        <div className="form-group config-option">
          <label>Text for plotting</label>
          <textarea
            className="form-control input-textarea"
            name={optionsGauge.text}
            value={gauge.text}
            onChange={this.onGaugeInputChange}
          />
        </div>

        <div className="form-group config-option">
          <label>Characters goal</label>
          <input
            type="number"
            className="form-control"
            name={optionsGauge.chars}
            value={gauge.chars}
            onChange={this.onGaugeInputChange}
          />
        </div>

        <div className="form-group config-option">
          <label>Symbols goal</label>
          <input
            type="number"
            className="form-control"
            name={optionsGauge.symbols}
            value={gauge.symbols}
            onChange={this.onGaugeInputChange}
          />
        </div>

        <div className="form-group config-option">
          <label>Digits goal</label>
          <input
            type="number"
            className="form-control"
            name={optionsGauge.digits}
            value={gauge.digits}
            onChange={this.onGaugeInputChange}
          />
        </div>

        <button
          type="button"
          className="btn btn-success apply-button position-dynamic"
          onClick={this.refreshGaugeCongifuration}
        >
          Refresh
        </button>
      </div>
    );
  }

  renderPyramidConfiguration() {
    const { pyramid } = this.state.configurations;
    return (
      <div className="other-pyramid-container">
        <div className="checkboxes other-pyramid">
          <div className="checkbox">
            <label>
              <input
                type="checkbox"
                value={optionsPyramid.title}
                checked={pyramid.title}
                onChange={this.onPyramidCheckBoxChange}
              />
              Show Chart Title
            </label>
          </div>
          <div className="checkbox">
            <label>
              <input
                type="checkbox"
                value={optionsPyramid.dataLabels}
                checked={pyramid.dataLabels}
                onChange={this.onPyramidCheckBoxChange}
              />
              Show Data Labels
            </label>
          </div>
          <div className="checkbox">
            <label>
              <input
                type="checkbox"
                value={optionsPyramid.legend}
                checked={pyramid.legend}
                onChange={this.onPyramidCheckBoxChange}
              />
              Show Legend
            </label>
          </div>
          <div className="checkbox">
            <label>
              <input
                type="checkbox"
                value={optionsPyramid.tooltip}
                checked={pyramid.tooltip}
                onChange={this.onPyramidCheckBoxChange}
              />
              Enable Tooltip
            </label>
          </div>
          <div className="checkbox">
            <label>
              <input
                type="checkbox"
                value={optionsPyramid.animation}
                checked={pyramid.animation}
                onChange={this.onPyramidCheckBoxChange}
              />
              Enable Animation
            </label>
          </div>
          <div className="checkbox">
            <label>
              <input
                type="checkbox"
                value={optionsPyramid.allowPointSelect}
                checked={pyramid.allowPointSelect}
                onChange={this.onPyramidCheckBoxChange}
              />
              Allow Point Selection
            </label>
          </div>
        </div>

        <button
          type="button"
          className="btn btn-success apply-button"
          onClick={this.updatePyramidConfiguration}
        >
          Apply
        </button>
      </div>
    );
  }

  renderSankeyConfiguration() {
    const { sankey } = this.state.configurations;
    return (
      <div className="other-sankey-container">
        <div className="checkboxes other-sankey">
          <div className="form-group config-option">
            <label>
              Number of nodes: <span>{sankey.numberNodes}</span>
            </label>
            <input
              type="range"
              className="slider"
              min="2"
              max="10"
              name={optionsSankey.numberNodes}
              value={sankey.numberNodes}
              onChange={this.onSankeyInputChange}
            />
          </div>
          <div className="form-group config-option">
            <label>
              Number of levels: <span>{sankey.numberLevels}</span>
            </label>
            <input
              type="range"
              className="slider"
              min="2"
              max="5"
              name={optionsSankey.numberLevels}
              value={sankey.numberLevels}
              onChange={this.onSankeyInputChange}
            />
          </div>
          <div className="form-group config-option">
            <label>
              Density: <span>{sankey.density}%</span>
            </label>
            <input
              type="range"
              className="slider"
              min="10"
              max="100"
              name={optionsSankey.density}
              value={sankey.density}
              onChange={this.onSankeyInputChange}
            />
          </div>
          <div className="form-group config-option">
            <label>
              Link opacity: <span>{sankey.linkOpacity}</span>
            </label>
            <input
              type="range"
              className="slider"
              min="0"
              max="1"
              step="0.01"
              name={optionsSankey.linkOpacity}
              value={sankey.linkOpacity}
              onChange={this.onSankeyInputChange}
            />
          </div>
          <div className="form-group config-option">
            <label>
              Curve factor: <span>{sankey.curveFactor}</span>
            </label>
            <input
              type="range"
              className="slider"
              min="0"
              max="1"
              step="0.01"
              name={optionsSankey.curveFactor}
              value={sankey.curveFactor}
              onChange={this.onSankeyInputChange}
            />
          </div>
        </div>

        <button
          type="button"
          className="btn btn-success apply-button position-dynamic"
          onClick={this.updateSankeyConfiguration}
        >
          Apply
        </button>
      </div>
    );
  }

  renderClockConfiguration() {
    return (
      <div className="other-clock-container">
        <div className="checkboxes other-clock">CLOCK CONFIG</div>
        <button
          type="button"
          className="btn btn-success apply-button position-dynamic"
          onClick={this.updateSankeyConfiguration}
        >
          Apply
        </button>
      </div>
    );
  }

  renderConfigurationsArea() {
    const { currentMode } = this.state;
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
        return this.renderBoxPlotConfiguration();
      }
      case modes.gauge: {
        return this.renderGaugeConfiguration();
      }
      case modes.pyramid: {
        return this.renderPyramidConfiguration();
      }
      case modes.wordcloud: {
        return this.renderWordcloudConfiguration();
      }
      case modes.sankey: {
        return this.renderSankeyConfiguration();
      }
      case modes.clock: {
        return this.renderClockConfiguration();
      }
      default: {
        return null;
      }
    }
  }

  render() {
    console.log('other state: ', this.state);
    return (
      <div className="other-page" key={`other-chart-${this.state.currentMode}`}>
        <div className="row">
          <div className="col-sm-4">
            {this.renderOptionsDropdown()}
            <div className="configuration-area">{this.renderConfigurationsArea()}</div>
          </div>

          <div className="col-sm-8 chart-area">
            <Chart
              container={'others-chart'}
              options={this.state.options}
              update={this.state.rerenderChart}
              function={this.state.options.function}
            />
          </div>
        </div>
      </div>
    );
  }
}
