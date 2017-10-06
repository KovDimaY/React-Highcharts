export function generateSeriesForPureRandom() {
  console.log("generateSeriesForPureRandom");

  return [{
    name: 'Brands',
    colorByPoint: true,
    data: [{
        name: 'Microsoft IE',
        y: 56.33
    }, {
        name: 'Chrome',
        y: 24.03,
        sliced: true,
        selected: true
    }, {
        name: 'Firefox',
        y: 10.38
    }, {
        name: 'Safari',
        y: 4.77
    }, {
        name: 'Opera',
        y: 0.91
    }]
  }];
}
