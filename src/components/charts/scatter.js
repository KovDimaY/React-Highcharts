import React, { Component } from 'react'
import ReactDOM from 'react-dom'
import Highcharts from 'highcharts'
import $ from 'jquery'

import Chart from './chart-abstract'

import {
  scatterOptions3D,
  scatterOptions2D,
  scatterOptionsBubble
} from '../../constants/scatter/default-options-scatter'

import {
  modes,
  initialState,
} from '../../constants/scatter/modes-options-scatter'

// Give the points a 3D feel by adding a radial gradient
// Highcharts.getOptions().colors = $.map(Highcharts.getOptions().colors, function (color) {
//     return {
//         radialGradient: {
//             cx: 0.4,
//             cy: 0.3,
//             r: 0.5
//         },
//         stops: [
//             [0, color],
//             [1, Highcharts.Color(color).brighten(-0.2).get('rgb')]
//         ]
//     };
// });



function move(chart) {
// Add mouse events for rotation
 $(chart.container).on('mousedown.hc touchstart.hc', function (eStart) {
    eStart = chart.pointer.normalize(eStart);

    var posX = eStart.pageX,
        posY = eStart.pageY,
        alpha = chart.options.chart.options3d.alpha,
        beta = chart.options.chart.options3d.beta,
        newAlpha,
        newBeta,
        sensitivity = 5; // lower is more sensitive

    $(document).on({
        'mousemove.hc touchdrag.hc': function (e) {
            // Run beta
            newBeta = beta + (posX - e.pageX) / sensitivity;
            chart.options.chart.options3d.beta = newBeta;

            // Run alpha
            newAlpha = alpha + (e.pageY - posY) / sensitivity;
            chart.options.chart.options3d.alpha = newAlpha;

            chart.redraw(false);
        },
        'mouseup touchend': function () {
            $(document).off('.hc');
        }
    });
  });
};


export default class Scattering extends Component {
  constructor(props) {
    super(props);
    this.state = initialState;

    this.dropdownClickHandler = this.dropdownClickHandler.bind(this);
  }

  componentDidMount() {
    this.initScatter3DMode();
  }

  initScatter3DMode() {
    const options = scatterOptions3D;

    this.setState({ options }, () => {
      this.updateScatter3DConfiguration();
    });
  }

  initScatter2DMode() {
    const options = scatterOptions2D;

    this.setState({ options }, () => {
      this.updateScatter2DConfiguration();
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

  updateScatter2DConfiguration() {
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
      case modes.scatter3d: {
        this.initScatter3DMode();
        break;
      }
      case modes.scatter2d: {
        this.initScatter2DMode();
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

  renderOptionsDropdown() {
    return (
      <div className="dropdown">
        <button className="btn btn-primary dropdown-toggle" type="button" data-toggle="dropdown">Configurations
        <span className="caret"></span></button>
        <ul className="dropdown-menu">
          <li className="dropdown-header">Scattering Charts</li>
          <li><a onClick={this.dropdownClickHandler}>{modes.scatter3d}</a></li>
          <li><a onClick={this.dropdownClickHandler}>{modes.scatter2d}</a></li>
          <li><a onClick={this.dropdownClickHandler}>{modes.scatterBubble}</a></li>
        </ul>
      </div>
    )
  }

  renderConfigurationsArea() {
    const { currentMode } = this.state;
    switch (currentMode) {
      case modes.scatter3d: {
        return <div> SCATTER 3D </div>;
      }
      case modes.scatter2d: {
        return <div> SCATTER 2D </div>;
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
