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
  return [{
      name: '',
      data: [{
          'hc-a2': 'AL',
          name: 'Alabama',
          region: 'South',
          x: 6,
          y: 7,
          value: 4849377
      }, {
          'hc-a2': 'AK',
          name: 'Alaska',
          region: 'West',
          x: 0,
          y: 0,
          value: 737732
      }, {
          'hc-a2': 'AZ',
          name: 'Arizona',
          region: 'West',
          x: 5,
          y: 3,
          value: 6745408
      }, {
          'hc-a2': 'AR',
          name: 'Arkansas',
          region: 'South',
          x: 5,
          y: 6,
          value: 2994079
      }, {
          'hc-a2': 'CA',
          name: 'California',
          region: 'West',
          x: 5,
          y: 2,
          value: 39250017
      }, {
          'hc-a2': 'CO',
          name: 'Colorado',
          region: 'West',
          x: 4,
          y: 3,
          value: 5540545
      }, {
          'hc-a2': 'CT',
          name: 'Connecticut',
          region: 'Northeast',
          x: 3,
          y: 11,
          value: 3596677
      }, {
          'hc-a2': 'DE',
          name: 'Delaware',
          region: 'South',
          x: 4,
          y: 9,
          value: 935614
      }, {
          'hc-a2': 'DC',
          name: 'District of Columbia',
          region: 'South',
          x: 4,
          y: 10,
          value: 7288000
      }, {
          'hc-a2': 'FL',
          name: 'Florida',
          region: 'South',
          x: 8,
          y: 8,
          value: 20612439
      }, {
          'hc-a2': 'GA',
          name: 'Georgia',
          region: 'South',
          x: 7,
          y: 8,
          value: 10310371
      }, {
          'hc-a2': 'HI',
          name: 'Hawaii',
          region: 'West',
          x: 8,
          y: 0,
          value: 1419561
      }, {
          'hc-a2': 'ID',
          name: 'Idaho',
          region: 'West',
          x: 3,
          y: 2,
          value: 1634464
      }, {
          'hc-a2': 'IL',
          name: 'Illinois',
          region: 'Midwest',
          x: 3,
          y: 6,
          value: 12801539
      }, {
          'hc-a2': 'IN',
          name: 'Indiana',
          region: 'Midwest',
          x: 3,
          y: 7,
          value: 6596855
      }, {
          'hc-a2': 'IA',
          name: 'Iowa',
          region: 'Midwest',
          x: 3,
          y: 5,
          value: 3107126
      }, {
          'hc-a2': 'KS',
          name: 'Kansas',
          region: 'Midwest',
          x: 5,
          y: 5,
          value: 2904021
      }, {
          'hc-a2': 'KY',
          name: 'Kentucky',
          region: 'South',
          x: 4,
          y: 6,
          value: 4413457
      }, {
          'hc-a2': 'LA',
          name: 'Louisiana',
          region: 'South',
          x: 6,
          y: 5,
          value: 4649676
      }, {
          'hc-a2': 'ME',
          name: 'Maine',
          region: 'Northeast',
          x: 0,
          y: 11,
          value: 1330089
      }, {
          'hc-a2': 'MD',
          name: 'Maryland',
          region: 'South',
          x: 4,
          y: 8,
          value: 6016447
      }, {
          'hc-a2': 'MA',
          name: 'Massachusetts',
          region: 'Northeast',
          x: 2,
          y: 10,
          value: 6811779
      }, {
          'hc-a2': 'MI',
          name: 'Michigan',
          region: 'Midwest',
          x: 2,
          y: 7,
          value: 9928301
      }, {
          'hc-a2': 'MN',
          name: 'Minnesota',
          region: 'Midwest',
          x: 2,
          y: 4,
          value: 5519952
      }, {
          'hc-a2': 'MS',
          name: 'Mississippi',
          region: 'South',
          x: 6,
          y: 6,
          value: 2984926
      }, {
          'hc-a2': 'MO',
          name: 'Missouri',
          region: 'Midwest',
          x: 4,
          y: 5,
          value: 6093000
      }, {
          'hc-a2': 'MT',
          name: 'Montana',
          region: 'West',
          x: 2,
          y: 2,
          value: 1023579
      }, {
          'hc-a2': 'NE',
          name: 'Nebraska',
          region: 'Midwest',
          x: 4,
          y: 4,
          value: 1881503
      }, {
          'hc-a2': 'NV',
          name: 'Nevada',
          region: 'West',
          x: 4,
          y: 2,
          value: 2839099
      }, {
          'hc-a2': 'NH',
          name: 'New Hampshire',
          region: 'Northeast',
          x: 1,
          y: 11,
          value: 1326813
      }, {
          'hc-a2': 'NJ',
          name: 'New Jersey',
          region: 'Northeast',
          x: 3,
          y: 10,
          value: 8944469
      }, {
          'hc-a2': 'NM',
          name: 'New Mexico',
          region: 'West',
          x: 6,
          y: 3,
          value: 2085572
      }, {
          'hc-a2': 'NY',
          name: 'New York',
          region: 'Northeast',
          x: 2,
          y: 9,
          value: 19745289
      }, {
          'hc-a2': 'NC',
          name: 'North Carolina',
          region: 'South',
          x: 5,
          y: 9,
          value: 10146788
      }, {
          'hc-a2': 'ND',
          name: 'North Dakota',
          region: 'Midwest',
          x: 2,
          y: 3,
          value: 739482
      }, {
          'hc-a2': 'OH',
          name: 'Ohio',
          region: 'Midwest',
          x: 3,
          y: 8,
          value: 11614373
      }, {
          'hc-a2': 'OK',
          name: 'Oklahoma',
          region: 'South',
          x: 6,
          y: 4,
          value: 3878051
      }, {
          'hc-a2': 'OR',
          name: 'Oregon',
          region: 'West',
          x: 4,
          y: 1,
          value: 3970239
      }, {
          'hc-a2': 'PA',
          name: 'Pennsylvania',
          region: 'Northeast',
          x: 3,
          y: 9,
          value: 12784227
      }, {
          'hc-a2': 'RI',
          name: 'Rhode Island',
          region: 'Northeast',
          x: 2,
          y: 11,
          value: 1055173
      }, {
          'hc-a2': 'SC',
          name: 'South Carolina',
          region: 'South',
          x: 6,
          y: 8,
          value: 4832482
      }, {
          'hc-a2': 'SD',
          name: 'South Dakota',
          region: 'Midwest',
          x: 3,
          y: 4,
          value: 853175
      }, {
          'hc-a2': 'TN',
          name: 'Tennessee',
          region: 'South',
          x: 5,
          y: 7,
          value: 6651194
      }, {
          'hc-a2': 'TX',
          name: 'Texas',
          region: 'South',
          x: 7,
          y: 4,
          value: 27862596
      }, {
          'hc-a2': 'UT',
          name: 'Utah',
          region: 'West',
          x: 5,
          y: 4,
          value: 2942902
      }, {
          'hc-a2': 'VT',
          name: 'Vermont',
          region: 'Northeast',
          x: 1,
          y: 10,
          value: 626011
      }, {
          'hc-a2': 'VA',
          name: 'Virginia',
          region: 'South',
          x: 5,
          y: 8,
          value: 8411808
      }, {
          'hc-a2': 'WA',
          name: 'Washington',
          region: 'West',
          x: 2,
          y: 1,
          value: 7288000
      }, {
          'hc-a2': 'WV',
          name: 'West Virginia',
          region: 'South',
          x: 4,
          y: 7,
          value: 1850326
      }, {
          'hc-a2': 'WI',
          name: 'Wisconsin',
          region: 'Midwest',
          x: 2,
          y: 5,
          value: 5778708
      }, {
          'hc-a2': 'WY',
          name: 'Wyoming',
          region: 'West',
          x: 3,
          y: 3,
          value: 584153
      }]
  }];
}
