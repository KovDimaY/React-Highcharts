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

export function generateSeriesForPureRandom2D() {
  const numberOfSeries = Math.round(Math.random() * 4) + 1;
  const numberOfPoints = Math.round(Math.random() * 199) + 1;
  let result = [];
  for (let i = 0; i < numberOfSeries; i++) {
    let currentData = [];
    const currentName = `Random Serie ${i + 1}`
    const minX = Math.random() * 1000 - 500;
    const maxX = Math.random() * 1000 + minX;
    const minY = Math.random() * 1000 - 500;
    const maxY = Math.random() * 1000 + minY;
    for (let j = 0; j < numberOfPoints; j++) {
      const randX = Math.random() * (maxX - minX) + minX;
      const randY = Math.random() * (maxY - minY) + minY;
      const shortX = Math.round(randX * 1000) / 1000;
      const shortY = Math.round(randY * 1000) / 1000;
      currentData.push([shortX, shortY]);
    }
    result.push({
      name: currentName,
      data: currentData
    });
  }

  return result;
}
