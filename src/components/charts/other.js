import React, { Component } from 'react'
import ReactDOM from 'react-dom'
import Highcharts from 'highcharts'

import Chart from './chart-abstract'

import {
  heatmap,
  tilemap,
  polar,
  boxplot,
  pyramid,
  wordcloud,
  sankey
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

  initTilemap() {
    const options = tilemap;

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
    this.setState({ rerenderChart: true }, () => {
      this.setState({ rerenderChart: false })
    })
  }

  updateTilemapConfiguration() {
    this.setState({ rerenderChart: true }, () => {
      this.setState({ rerenderChart: false })
    })
  }

  updatePolarConfiguration() {
    this.setState({ rerenderChart: true }, () => {
      this.setState({ rerenderChart: false })
    })
  }

  updateBoxplotConfiguration() {
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
          <li><a onClick={this.dropdownClickHandler}>{modes.pyramid}</a></li>
          <li><a onClick={this.dropdownClickHandler}>{modes.wordcloud}</a></li>
          <li><a onClick={this.dropdownClickHandler}>{modes.sankey}</a></li>
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
      case modes.tilemap: {
        return <div> TILEMAP </div>;
      }
      case modes.polar: {
        return <div> POLAR </div>;
      }
      case modes.boxplot: {
        return <div> BOXPLOT </div>;
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
