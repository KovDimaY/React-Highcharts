import React from 'react'
import Highcharts from 'highcharts';
import $ from 'jquery'

export default class ScatterChart extends React.Component {
    
    componentDidMount() {
        this.chart = new Highcharts[this.props.type || "Chart"](
            this.refs.chart,
            this.props.options
        );

        // Add mouse events for rotation
        $(this.chart.container).on('mousedown.hc touchstart.hc', function (eStart) {
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
    }

    componentWillUnmount() {
        this.chart.destroy();
    }

    render() {

        const scatterStyle = {
            marginLeft: '15%',
            width: '70%',
            height: '500px'
        };

        return (
            <div ref="chart" style={ scatterStyle }></div>
        )
    }
}