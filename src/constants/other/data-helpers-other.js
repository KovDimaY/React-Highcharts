export function generateSeriesForHeatmap(options) {
  const width = Math.round(Math.random() * 8) + 2;
  const height = Math.round(Math.random() * 8) + 2;
  const data = [];
  const xCategories = [];
  const yCategories = [];
  
  for (let i = 0; i < width; i++) {
    xCategories.push("xCategory " + i);
    // xCategories.push("");
    
    for (let j = 0; j < height; j++) {
      if (i === 0) yCategories.push("yCategory " + j);
      // if (i === 0) yCategories.push("");
      const value = Math.round(Math.random() * 100) + 1;
      data.push([i, j, value]);
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