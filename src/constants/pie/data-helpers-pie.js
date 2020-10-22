import { pi } from './pi-digits';

export function generateSeriesForPureRandom() {
  const numberOfSeries = Math.round(Math.random() * 5) + 2;
  let currentData = [];

  for (let i = 0; i < numberOfSeries; i++) {
    const currentName = `Random Serie ${i + 1}`;
    const randValue = Math.random() * 1000;

    currentData.push({
      name: currentName,
      y: randValue,
    });
  }

  return [
    {
      name: 'Random Value',
      colorByPoint: true,
      data: currentData,
    },
  ];
}

export function generateSeriesForConfigurableRandom(params) {
  const { seriesNumber } = params;
  let currentData = [];

  for (let i = 0; i < seriesNumber; i++) {
    const currentName = `Random Serie ${i + 1}`;
    const randValue = Math.random() * 1000;

    currentData.push({
      name: currentName,
      y: randValue,
    });
  }

  return [
    {
      name: 'Random Value',
      colorByPoint: true,
      data: currentData,
    },
  ];
}

export function generateSeriesForClusteringSimulation(maxNumber, clusterNumber) {
  const randValue = Math.random() * maxNumber;
  const clusterSize = maxNumber / clusterNumber;
  const cluster = Math.ceil(randValue / clusterSize);
  const clusterName = `Cluster ${cluster}`;
  const data = [];

  for (let i = 0; i < clusterNumber; i++) {
    const currentName = `Cluster ${i + 1}`;
    const value = currentName === clusterName ? 1 : 0;
    data.push({
      name: currentName,
      y: value,
    });
  }

  return [
    {
      name: 'Clusters',
      colorByPoint: true,
      data,
    },
  ];
}

export function newPointToClusteringSimulation(options, maxNumber, clusterNumber) {
  const { series, subtitle } = options;

  const randValue = Math.random() * maxNumber;
  const clusterSize = maxNumber / clusterNumber;
  const cluster = Math.ceil(randValue / clusterSize);
  const clusterName = `Cluster ${cluster}`;
  const shortValue = Math.floor(randValue * 1000) / 1000;

  series[0].data.forEach(point => {
    if (point.name === clusterName) {
      point.y += 1;
    }
  });

  subtitle.text = `The last generated value ${shortValue} goes to ${clusterName}`;

  return options;
}

const primeFactors = function (number) {
  if (number === 0) return [-1];

  var factors = [];
  var divisor = 2;

  if (Number.isInteger(number)) {
    if (number < 0) number *= -1;

    while (number > 1) {
      if (number % divisor === 0) {
        factors.push(divisor);
        number = number / divisor;
      } else {
        divisor++;
      }
    }
  }

  return factors;
};

export function generateSeriesForPrimeFactorization(options, params) {
  const accumulation = {};
  const factors = primeFactors(params.input);

  factors.forEach(factor => {
    if (accumulation[factor]) {
      accumulation[factor] += 1;
    } else {
      accumulation[factor] = 1;
    }
  });

  const data = [];
  const keys = Object.keys(accumulation);
  for (let i = 0; i < keys.length; i++) {
    const currentName = keys[i];
    const value = accumulation[keys[i]];
    data.push({
      name: currentName,
      y: value,
    });
  }

  options.subtitle.text = `Prime factors of ${params.input}`;
  options.series = [
    {
      name: 'Factors Distribution',
      colorByPoint: true,
      data,
    },
  ];

  return options;
}

export function generateSeriesForIrrationalAnalysis(options, params) {
  const accumulation = {};

  for (let i = 0; i < params.input; i++) {
    if (accumulation[pi[i]]) {
      accumulation[pi[i]] += 1;
    } else {
      accumulation[pi[i]] = 1;
    }
  }

  const data = [];
  const keys = Object.keys(accumulation);
  for (let i = 0; i < keys.length; i++) {
    const currentName = keys[i];
    const value = accumulation[keys[i]];
    data.push({
      name: currentName,
      y: value,
    });
  }

  options.subtitle.text = `Distribution of the first ${params.input} ${
    params.input === 1 ? 'digit' : 'digits'
  } of the number Pi`;

  options.series = [
    {
      name: 'Digits Distribution',
      colorByPoint: true,
      data,
    },
  ];

  return options;
}
