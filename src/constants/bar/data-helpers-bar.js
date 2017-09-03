export function generateSeriesForPureRandom() {
  const numberOfSeries = Math.round(Math.random() * 3) + 1;
  let result = [];
  for (let i = 0; i < numberOfSeries; i++) {
    let currentData = [];
    const currentName = `Random Serie ${i + 1}`
    const min = Math.random() * 1000 - 500;
    const max = Math.random() * 1000 + min;
    for (let j = 0; j < 5; j++) {
      const randValue = Math.random() * (max - min) + min;
      const shortValue = Math.round(randValue * 1000) / 1000;
      currentData.push(shortValue);
    }
    result.push({
      name: currentName,
      data: currentData
    });
  }

  return result;
}

export function generateSeriesForConfigurableRandom(params) {
  const {
    seriesNumber,
    categoriesNumber,
    min,
    max
  } = params;
  let result = [];
  for (let i = 0; i < seriesNumber; i++) {
    let currentData = [];
    const currentName = `Random Serie ${i + 1}`;
    for (let j = 0; j < categoriesNumber; j++) {
      const randValue = Math.random() * (max - min) + min;
      const shortValue = Math.round(randValue * 1000) / 1000;
      currentData.push(shortValue);
    }
    result.push({
      name: currentName,
      data: currentData
    });
  }

  return result;
}

export function generateCategoriesConfigurableRandom(number) {
  let result = [];
  for (let i = 0; i < number; i++) {
    result.push(`Category ${i+1}`);
  }
  return result;
}
