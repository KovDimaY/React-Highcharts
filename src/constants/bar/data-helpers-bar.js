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

export function collectPointsAndCategories(input, caseSensitive, filter) {
  const object = {};
  const inputFinal = caseSensitive ? input : input.toUpperCase();
  const filterFinal = caseSensitive ? filter : filter.toUpperCase();

  for (let i = 0; i < inputFinal.length; i++) {
    const currentChar = inputFinal[i];

    if (!filterFinal.includes(currentChar)) {
      if (object[currentChar]) {
        object[currentChar]++;
      } else {
        object[currentChar] = 1;
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

export function sortAndCutPoints(data, limit) {
  data.sort((a, b) => b[0] - a[0]);
  const result = {
    categories: [],
    points: []
  }
  for (let i = 0; i < Math.min(data.length, limit); i++) {
    result.points.push(data[i][0]);
    result.categories.push(data[i][1]);
  }

  return result;
}

export function generateSeriesForSymbolsAnalysis(points) {
  return [{
            name: "The most frequent characters",
            data: points
          }];
}

export function collectWordsAndCategories(input, caseSensitive, filter) {
  const object = {};
  const inputFinal = caseSensitive ? input : input.toUpperCase();
  const inputArray = inputFinal.split(/\W+/);
  const filterFinal = caseSensitive
    ? filter
    : filter.map(element => element.toUpperCase());

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

export function generateSeriesForWordsAnalysis(words) {
  return [{
            name: "The most frequent words",
            data: words
          }];
}

export function sortAndCutWords(data, limit) {
  data.sort((a, b) => b[0] - a[0]);
  const result = {
    categories: [],
    words: []
  }
  for (let i = 0; i < Math.min(data.length, limit); i++) {
    result.words.push(data[i][0]);
    result.categories.push(data[i][1]);
  }

  return result;
}
