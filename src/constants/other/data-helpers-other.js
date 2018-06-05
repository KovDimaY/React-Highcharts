import Highcharts from 'highcharts'

export function generateSeriesForHeatmap(options, diagonalized) {
  const width = Math.round(Math.random() * 8) + 2;
  const height = diagonalized ? width : Math.round(Math.random() * 8) + 2;
  const data = [];
  const xCategories = [];
  const yCategories = [];

  for (let i = 0; i < width; i++) {
    if (diagonalized) {
      xCategories.push("Variable " + (i+1));
    } else {
      xCategories.push("xCategory " + (i+1));
    }

    for (let j = 0; j < height; j++) {
      if (i === 0 && diagonalized) yCategories.push("Variable " + (j+1));
      if (i === 0 && !diagonalized) yCategories.push("yCategory " + (j+1));
      if (diagonalized && i < j) {
        const value = Math.round(Math.random() * 100) / 100;
        data.push([i, j, value]);
        data.push([j, i, value]);
      } else if (diagonalized && i === j) {
        data.push([i, j, null]);
      } else if (!diagonalized) {
        const value = Math.round(Math.random() * 100) + 1;
        data.push([i, j, value]);
      }
    }
  }
  options.xAxis.categories = xCategories;
  options.yAxis.categories = yCategories;
  options.series = [{
    name: 'Randomly generated data',
    borderWidth: 1,
    data,
    dataLabels: {
        enabled: true,
        color: '#000000'
    }
  }];

  return options;
}

export function generateSeriesForTilemap() {
  const width = Math.round(Math.random() * 10) + 2;
  const height = Math.round(Math.random() * 7) + 2;
  const probability = 25 + Math.random() * 25;
  const result = [];

  for (let i = 0; i < width; i++) {
    for (let j = 0; j < height; j++) {
      const randomTry = Math.random() * 100;
      const value = Math.round(Math.random() * 99) + 1;
      if (randomTry > probability) {
        result.push([i, j, value]);
      }
    }
  }

  return [{ data: result }];
}

export function generateSeriesForPolar() {
  const possibleOutcomes = [4, 5, 6, 8, 10, 12];
  const randomIndex = Math.round(Math.random() * (possibleOutcomes.length - 1));
  const numberOfPoints = possibleOutcomes[randomIndex];
  const numberOfSeries = Math.round(Math.random() * 4) + 1;
  const result = [];

  for (let i = 0; i < numberOfSeries; i++) {
    const data = [];
    for (let j = 0; j < numberOfPoints; j++) {
      const value = Math.round(Math.random() * 99) + 1;
      data.push(value);
    }
    result.push({
        name: `Random serie ${i+1}`,
        data,
    });
  }

  return result;
}

export function countWords(input, filter) {
  const object = {};
  const inputFinal = input;
  const inputArray = inputFinal.split(/\W+/);
  const filterFinal = filter;

  for (let i = 0; i < inputArray.length; i++) {
    const currentWord = inputArray[i];

    if (currentWord.length > 0 && !filterFinal.includes(currentWord)) {
      if (object[currentWord]) {
        object[currentWord]++;
      } else {
        object[currentWord] = 1;
      }
    }
  }

  const keys = Object.keys(object);
  const result = [];

  for (let i = 0; i < keys.length; i++) {
    const value = object[keys[i]];
    result.push([value, keys[i]]);
  }

  return result;
}

export function generateSeriesForWordCloud(data, limit) {
  data.sort((a, b) => b[0] - a[0]);
  const result = {
    type: 'wordcloud',
    data: []
  };
  for (let i = 0; i < Math.min(data.length, limit); i++) {
    result.data.push({
      name: data[i][1],
      weight: data[i][0]
    });
  }

  return [result];
}

export function generateSeriesPyramid() {
  const result = [];
  let previous = 1000;
  const pointsNumber = 3 + Math.floor(Math.random() * 4);
  for (let i = 0; i < pointsNumber; i += 1) {
    const name = `Category ${i+1}`;
    const decrease = 0.2 + Math.random() * 0.8;
    const value = Math.floor(decrease * previous);
    previous = value;
    result.push([name, value]);
  }
  return result;
}

export function analyzeGaugeText(configs) {
  const {
    text,
    chars: charsMax,
    digits: digitMax,
    symbols: symbolsMax
  } = configs;
  let rawChars = 0;
  let rawDigits = 0;
  let rawSymbols = 0;
  for (let i = 0; i < text.length; i += 1) {
    if ((/\d/).test(text[i])) {
      rawDigits += 1;
    } else if ((/\w/).test(text[i])) {
      rawChars += 1;
    } else {
      rawSymbols += 1;
    }
  }
  const chars = Math.floor(rawChars * 1000 / charsMax) / 10;
  const digits = Math.floor(rawDigits * 1000 / digitMax) / 10;
  const symbols = Math.floor(rawSymbols * 1000 / symbolsMax) / 10;
  return { chars, digits, symbols };
}

function updateBasedOnConnections(points) {
  const helper = {};
  points.forEach((point) => {
    if (!helper[point[1]]) {
      helper[point[1]] = true;
    }
  });

  return Object.keys(helper);
}

export function generateDataForSankey(configs) {
  const { numberNodes, numberLevels, density } = configs;
  let count = 1;
  let result = [];
  let previousNodes = [];
  for (let node = 0; node < numberNodes; node += 1) {
    previousNodes.push(`L1-N${node + 1}`);
  }

  for (let level = 1; level < numberLevels; level += 1) {
    const connectionsOnLevel = [];
    previousNodes.forEach((base) => {
      for (let node = 0; node < numberNodes; node += 1) {
        const target = `L${level + 1}-N${node + 1}`;
        const weight = Math.floor(1 + Math.random() * 10);
        if (Math.random() * 100 <= density) {
          connectionsOnLevel.push([base, target, weight]);
        }
      }
    });
    previousNodes = updateBasedOnConnections(connectionsOnLevel);
    result = result.concat(connectionsOnLevel);
  }

  return result;
}

export function getNow() {
  var now = new Date();

  return {
      hours: now.getHours() + now.getMinutes() / 60,
      minutes: now.getMinutes() * 12 / 60 + now.getSeconds() * 12 / 3600,
      seconds: now.getSeconds() * 12 / 60
  };
}

export function pad(number, length) {
  // Create an array of the remaining length + 1 and join it with 0's
  return new Array((length || 2) + 1 - String(number).length).join(0) + number;
}

// Move cloack arrows
export function move(chart) {
  setInterval(function () {
    const now = getNow();

    if (chart.axes) { // not destroyed
      var hour = chart.get('hour'),
        minute = chart.get('minute'),
        second = chart.get('second'),
        // run animation unless we're wrapping around from 59 to 0
        animation = now.seconds === 0
          ? false
          : { easing: 'easeOutBounce' };

      // Cache the tooltip text
      chart.tooltipText =
        pad(Math.floor(now.hours), 2) + ':' +
        pad(Math.floor(now.minutes * 5), 2) + ':' +
        pad(now.seconds * 5, 2);

      hour.update(now.hours, true, animation);
      minute.update(now.minutes, true, animation);
      second.update(now.seconds, true, animation);
    }
  }, 1000);
};

/**
 * Easing function from https://github.com/danro/easing-js/blob/master/easing.js
 */
Math.easeOutBounce = function (pos) {
    if ((pos) < (1 / 2.75)) {
        return (7.5625 * pos * pos);
    }
    if (pos < (2 / 2.75)) {
        return (7.5625 * (pos -= (1.5 / 2.75)) * pos + 0.75);
    }
    if (pos < (2.5 / 2.75)) {
        return (7.5625 * (pos -= (2.25 / 2.75)) * pos + 0.9375);
    }
    return (7.5625 * (pos -= (2.625 / 2.75)) * pos + 0.984375);
};


export function generateSeriesForClock(options) {
  let now = getNow();
  return [{
     data: [{
         id: 'hour',
         y: now.hours,
         dial: {
             radius: '60%',
             baseWidth: 12,
             baseLength: '50%',
             rearLength: '10%',
             backgroundColor: "black"
         },
     }, {
         id: 'minute',
         y: now.minutes,
         dial: {
             radius: '95%',
             baseWidth: 10,
             baseLength: '50%',
             rearLength: '10%',
             backgroundColor: "black"
         }
     }, {
         id: 'second',
         y: now.seconds,
         dial: {
             radius: '100%',
             baseWidth: 2,
             rearLength: '20%'
         }
     }],
     animation: false,
     dataLabels: {
         enabled: false
     }
  }];
}

const generateRandomPointsBoxplot = (min, max, numberOfPoints) => {
  const result = [];
  for (let i = 0; i < numberOfPoints; i += 1) {
    const rawRandValue = min + (Math.random() * (max - min));
    const randomValue = Math.round(rawRandValue * 100) / 100;
    result.push(randomValue);
  }
  return result;
}

const getMedianOfDataSet = (data) => {
  if (data.length % 2 === 0) {
    const leftCentral = data[data.length / 2 - 1];
    const rightCentral = data[data.length / 2];
    return (leftCentral + rightCentral) / 2;
  }
  return data[(data.length + 1) / 2 - 1];
}

const calculateStatistics = (data, outliers) => {
  // TODO - implement
  const result = {};
  const statistics = [];
  const sortedData = data.sort((a, b) => a - b);
  const leftMedIndex = Math.floor(sortedData.length / 2);
  const rightMedIndex = Math.ceil(sortedData.length / 2);
  statistics.push(sortedData[0]); // min
  statistics.push(getMedianOfDataSet(sortedData.slice(0, leftMedIndex))); // q1
  statistics.push(getMedianOfDataSet(sortedData)); // med
  statistics.push(getMedianOfDataSet(sortedData.slice(rightMedIndex, sortedData.length))); // q75
  statistics.push(sortedData[sortedData.length - 1]); // max

  result.statistics = statistics;
  result.outliers = [];
  return result;
}

export function generateInitialDataBoxplot(options) {
  const { min, max } = options;
  const NUMBER_OF_BOXPLOTS = 4;
  const result = {};
  for (let i = 0; i < NUMBER_OF_BOXPLOTS; i += 1) {
    result[i + 1] = generateRandomPointsBoxplot(min, max, 5);
  }
  return result;
}

export function addNewPointsBoxplot(oldData, target, amount, min, max) {
  const newPoints = generateRandomPointsBoxplot(min, max, amount);
  oldData[target] = oldData[target].concat(newPoints);
  return oldData;
}

export function generateBoxplotSeries(data, options) {
  const result = {};
  Object.keys(data).forEach((boxplot) => {
    result[boxplot] = calculateStatistics(data[boxplot], options.outliers);
  });

  return [{
    name: 'Statistics',
    data: Object.keys(result).map(boxplot => result[boxplot].statistics),
    tooltip: {
      headerFormat: '<em>Boxplot {point.key}</em><br/>'
    }
  }, {
    name: 'Outlier',
    color: Highcharts.getOptions().colors[0],
    type: 'scatter',
    data: Object.keys(result).map(boxplot => result[boxplot].outliers),
    marker: {
      fillColor: 'white',
      lineWidth: 2,
      lineColor: Highcharts.getOptions().colors[0]
    },
    tooltip: {
      pointFormat: 'Value: {point.y}'
    }
  }];
}

export function averageLineBoxplot(data) {
  let sum = 0;
  let count = 0;
  Object.keys(data).forEach((boxplot) => {
    data[boxplot].forEach((point) => {
      sum += point;
      count += 1;
    });
  });

  if (count > 0) {
    const average = Math.round(sum * 100 / count) / 100;
    return [{
      value: average,
      color: 'red',
      width: 2,
      zIndex: 5,
      label: {
        text: `Global average: ${average}`,
        align: 'center',
        style: {
          color: 'gray'
        }
      }
    }]
  }
  return [];
}