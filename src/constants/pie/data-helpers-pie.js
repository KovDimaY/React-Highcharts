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
  console.log("generateSeriesForClusteringSimulation maxNumber", maxNumber)
  console.log("generateSeriesForClusteringSimulation clusterNumber", clusterNumber)

  return [];
}

export function newPointToClusteringSimulation(series, maxNumber, clusterNumber) {
  console.log("newPointToClusteringSimulation series", series)
  console.log("newPointToClusteringSimulation maxNumber", maxNumber)
  console.log("newPointToClusteringSimulation clusterNumber", clusterNumber)

  return series;
}
