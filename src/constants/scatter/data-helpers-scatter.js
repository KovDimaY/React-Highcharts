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

export function move(chart) {
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
