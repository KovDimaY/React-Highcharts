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

export function generateDataForSankey(configs) {
  return [
      ['Brazil', 'Portugal', 5 ],
      ['Brazil', 'France', 1 ],
      ['Brazil', 'Spain', 1 ],
      ['Brazil', 'England', 1 ],
      ['Canada', 'Portugal', 1 ],
      ['Canada', 'France', 5 ],
      ['Canada', 'England', 1 ],
      ['Mexico', 'Portugal', 1 ],
      ['Mexico', 'France', 1 ],
      ['Mexico', 'Spain', 5 ],
      ['Mexico', 'England', 1 ],
      ['USA', 'Portugal', 1 ],
      ['USA', 'France', 1 ],
      ['USA', 'Spain', 1 ],
      ['USA', 'England', 5 ],
      ['Portugal', 'Angola', 2 ],
      ['Portugal', 'Senegal', 1 ],
      ['Portugal', 'Morocco', 1 ],
      ['Portugal', 'South Africa', 3 ],
      ['France', 'Angola', 1 ],
      ['France', 'Senegal', 3 ],
      ['France', 'Mali', 3 ],
      ['France', 'Morocco', 3 ],
      ['France', 'South Africa', 1 ],
      ['Spain', 'Senegal', 1 ],
      ['Spain', 'Morocco', 3 ],
      ['Spain', 'South Africa', 1 ],
      ['England', 'Angola', 1 ],
      ['England', 'Senegal', 1 ],
      ['England', 'Morocco', 2 ],
      ['England', 'South Africa', 7 ],
      ['South Africa', 'China', 5 ],
      ['South Africa', 'India', 1 ],
      ['South Africa', 'Japan', 3 ],
      ['Angola', 'China', 5 ],
      ['Angola', 'India', 1 ],
      ['Angola', 'Japan', 3 ],
      ['Senegal', 'China', 5 ],
      ['Senegal', 'India', 1 ],
      ['Senegal', 'Japan', 3 ],
      ['Mali', 'China', 5 ],
      ['Mali', 'India', 1 ],
      ['Mali', 'Japan', 3 ],
      ['Morocco', 'China', 5 ],
      ['Morocco', 'India', 1 ],
      ['Morocco', 'Japan', 3 ]
  ];
}
