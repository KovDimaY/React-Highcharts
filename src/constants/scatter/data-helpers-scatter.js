import Highcharts from 'highcharts';

// Give the points a 3D feel by adding a radial gradient
export function convertColorsTo3D(colors) {
  Highcharts.getOptions().colors = colors.map(color => {
    return {
      radialGradient: { cx: 0.4, cy: 0.3, r: 0.5 },
      stops: [
        [0, color],
        [1, Highcharts.Color(color).brighten(-0.3).get('rgb')],
      ],
    };
  });
}

// Give the points a pretty look and feel by adding a radial gradient
export function convertColorsToBubbles(colors) {
  Highcharts.getOptions().colors = colors.map(color => {
    return {
      radialGradient: { cx: 0.4, cy: 0.3, r: 0.7 },
      stops: [
        [0, 'rgba(255,255,255,0.5)'],
        [1, Highcharts.Color(color).setOpacity(0.5).get('rgba')],
      ],
    };
  });
}

export function convertColorsToFlat(colors) {
  Highcharts.getOptions().colors = colors.slice();
}

export function move(chart) {
  // Add mouse events for rotation
  // eslint-disable-next-line no-undef
  $(chart.container).on('mousedown.hc touchstart.hc', function (eStart) {
    eStart = chart.pointer.normalize(eStart);

    var posX = eStart.pageX,
      posY = eStart.pageY,
      alpha = chart.options.chart.options3d.alpha,
      beta = chart.options.chart.options3d.beta,
      newAlpha,
      newBeta,
      sensitivity = 5; // lower is more sensitive

    // eslint-disable-next-line no-undef
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
        $(document).off('.hc'); // eslint-disable-line no-undef
      },
    });
  });
}

export function generateSeriesForPureRandom2D(series, points) {
  const randomSeries = Math.round(Math.random() * 4) + 1;
  const randomPoints = Math.round(Math.random() * 199) + 1;
  const numberOfSeries = series || randomSeries;
  const numberOfPoints = points || randomPoints;
  let result = [];
  for (let i = 0; i < numberOfSeries; i++) {
    let currentData = [];
    const currentName = `Random Serie ${i + 1}`;
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
      data: currentData,
    });
  }

  return result;
}

export function generateSeriesForPureRandom3D(series, points) {
  const randomSeries = Math.round(Math.random() * 4) + 1;
  const randomPoints = Math.round(Math.random() * 199) + 1;
  const numberOfSeries = series || randomSeries;
  const numberOfPoints = points || randomPoints;
  let result = [];
  for (let i = 0; i < numberOfSeries; i++) {
    let currentData = [];
    const currentName = `Random Serie ${i + 1}`;
    const minX = Math.random() * 1000 - 500;
    const maxX = Math.random() * 1000 + minX;
    const minY = Math.random() * 1000 - 500;
    const maxY = Math.random() * 1000 + minY;
    const minZ = Math.random() * 1000 - 500;
    const maxZ = Math.random() * 1000 + minZ;
    for (let j = 0; j < numberOfPoints; j++) {
      const randX = Math.random() * (maxX - minX) + minX;
      const randY = Math.random() * (maxY - minY) + minY;
      const randZ = Math.random() * (maxZ - minZ) + minZ;
      const shortX = Math.round(randX * 1000) / 1000;
      const shortY = Math.round(randY * 1000) / 1000;
      const shortZ = Math.round(randZ * 1000) / 1000;
      currentData.push([shortX, shortY, shortZ]);
    }
    result.push({
      name: currentName,
      data: currentData,
    });
  }

  return result;
}

export function generateSeriesForPureRandomBubble(series, points) {
  const randomSeries = Math.round(Math.random() * 4) + 1;
  const randomPoints = Math.round(Math.random() * 19) + 1;
  const numberOfSeries = series || randomSeries;
  const numberOfPoints = points || randomPoints;
  let result = [];
  for (let i = 0; i < numberOfSeries; i++) {
    let currentData = [];
    const currentName = `Random Serie ${i + 1}`;
    const minX = Math.random() * 1000 - 500;
    const maxX = Math.random() * 1000 + minX;
    const minY = Math.random() * 1000 - 500;
    const maxY = Math.random() * 1000 + minY;
    const minZ = Math.random() * 100;
    const maxZ = Math.random() * 100 + minZ;
    for (let j = 0; j < numberOfPoints; j++) {
      const randX = Math.random() * (maxX - minX) + minX;
      const randY = Math.random() * (maxY - minY) + minY;
      const randZ = Math.random() * (maxZ - minZ) + minZ;
      const shortX = Math.round(randX * 1000) / 1000;
      const shortY = Math.round(randY * 1000) / 1000;
      const shortZ = Math.round(randZ);
      currentData.push([shortX, shortY, shortZ]);
    }
    result.push({
      name: currentName,
      data: currentData,
    });
  }

  return result;
}

export function generateSeriesForConfigurableRandom(options) {
  const { chartType, seriesNumber, pointsNumber } = options;
  switch (chartType) {
    case '2D':
      return generateSeriesForPureRandom2D(seriesNumber, pointsNumber);
    case '3D':
      return generateSeriesForPureRandom3D(seriesNumber, pointsNumber);
    case 'Bubble':
      return generateSeriesForPureRandomBubble(seriesNumber, pointsNumber);
    default:
      return [];
  }
}

export function generateShotsByParams(number, minX, maxX, minY, maxY) {
  const result = [];
  for (let i = 0; i < number; i += 1) {
    const rawX = minX + Math.random() * (maxX - minX);
    const rawY = minY + Math.random() * (maxY - minY);
    const x = Math.floor(rawX * 100) / 100;
    const y = Math.floor(rawY * 100) / 100;
    result.push([x, y]);
  }
  return result;
}

export function generateHistogramByParamsAndData(data, bins, minX, maxX, minY, maxY) {
  const values = [];
  const categories = [];
  const step = (maxX - minX) / bins;
  for (let i = 0; i < bins; i += 1) {
    const rawX = minX + i * step;
    const rawX2 = minX + (i + 1) * step;
    const x = Math.floor(rawX * 100) / 100;
    const x2 = Math.floor(rawX2 * 100) / 100;
    categories.push(`${x}-${x2}`);
    values.push(0);
  }

  data.forEach(point => {
    const diff = point[0] - minX;
    const index = Math.floor(diff / step);
    values[index] += 1;
  });

  return { categories, values };
}
