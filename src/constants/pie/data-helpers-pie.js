export function generateSeriesForPureRandom() {
  const numberOfSeries = Math.round(Math.random() * 5) + 2;
  let currentData = [];

  for (let i = 0; i < numberOfSeries; i++) {
    const currentName = `Random Serie ${i + 1}`
    const randValue = Math.random() * 1000;

    currentData.push({
      name: currentName,
      y: randValue
    });
  }

  return [{
    name: 'Random Value',
    colorByPoint: true,
    data: currentData
  }];
}

export function generateSeriesForConfigurableRandom(params) {
  const { seriesNumber } = params;
  let currentData = [];

  for (let i = 0; i < seriesNumber; i++) {
    const currentName = `Random Serie ${i + 1}`
    const randValue = Math.random() * 1000;

    currentData.push({
      name: currentName,
      y: randValue
    });
  }

  return [{
    name: 'Random Value',
    colorByPoint: true,
    data: currentData
  }];
}

export function generateSeriesForClusteringSimulation(maxNumber, clusterNumber) {
  const randValue = Math.random() * maxNumber;
  const clusterSize = maxNumber / clusterNumber;
  const cluster = Math.ceil(randValue / clusterSize);
  const clusterName = `Cluster ${cluster}`;
  const data = [];

  for (let i = 0; i < clusterNumber; i++) {
    const currentName = `Cluster ${i+1}`;
    const value = currentName === clusterName ? 1 : 0;
    data.push({
      name: currentName,
      y: value
    });
  }

  return [{
    name: 'Clusters',
    colorByPoint: true,
    data
  }];
}

export function newPointToClusteringSimulation(options, maxNumber, clusterNumber) {
  const { series, subtitle } = options;

  const randValue = Math.random() * maxNumber;
  const clusterSize = maxNumber / clusterNumber;
  const cluster = Math.ceil(randValue / clusterSize);
  const clusterName = `Cluster ${cluster}`;
  const shortValue = Math.floor(randValue * 1000) / 1000;

  series[0].data.forEach((point) => {
    if (point.name === clusterName) {
      point.y += 1;
    }
  })

  subtitle.text = `The last generated value ${shortValue} goes to ${clusterName}`;

  return options;
}
