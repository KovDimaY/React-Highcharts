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
