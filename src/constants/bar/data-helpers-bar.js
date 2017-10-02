import Highcharts from 'highcharts';

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

export function generateSeriesForBalanceSimulation(income, expenses) {
  console.log("generateSeriesForBalanceSimulation", income, expenses);
  let result = [{
      name: "Income",
      data: [income],
      color: Highcharts.getOptions().colors[7]
    }, {
        name: "Expenses",
        data: [expenses],
        color: Highcharts.getOptions().colors[3]
    }, {
        name: "Result",
        data: [income - expenses],
        color: Highcharts.getOptions().colors[1]
    }
  ];

  return result;
}

export function increaseValueWithProbability(value, probability) {
  const randomValue = Math.random() * 100;
  if (randomValue < probability) {
    const randomIncrease = 1.2 - Math.random() * 0.2;
    return Math.round(value * randomIncrease);
  }
  return value;
}

export function newPointsToBalanceSimulation(oldSeries, incomeProbability, expensesProbability) {
  let newIncome = 0;
  let newExpenses = 0;

  const lastIndex = oldSeries[0].data.length - 1;
  const lastIncome = oldSeries[0].data[lastIndex];
  const lastExpenses = oldSeries[1].data[lastIndex];

  newIncome = increaseValueWithProbability(lastIncome, incomeProbability);
  newExpenses = increaseValueWithProbability(lastExpenses, expensesProbability);

  oldSeries[0].data.push(newIncome);
  oldSeries[1].data.push(newExpenses);
  oldSeries[2].data.push(newIncome - newExpenses);

  return oldSeries;
}

export function collectPointsAndCategories(input) {
 const object = {};
  for (let i = 0; i < input.length; i++) {
    if (object[input[i]]) {
      object[input[i]]++;
    } else {
      object[input[i]] = 1;
    }
  }

  const keys = Object.keys(object);
  const result = {
    points: [],
    categories: keys
  };

  for (let i = 0; i < keys.length; i++) {
    const value = object[keys[i]];
    result.points.push(value);
  }

  return result;
}

export function generateSeriesForSymbolsAnalysis(points) {
  return [{
            name: "Symbols",
            data: points
          }];
}
