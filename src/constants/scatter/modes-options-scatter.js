export const modes = {
  pureRandom2D: 'Pure Random 2D',
  pureRandom3D: 'Pure Random 3D',
  pureRandomBubble: 'Pure Random Bubble',
  configurableRandom: 'Configurable Random',
  shootingSimulation: 'Shooting Simulation',
};

export const optionsPureRandom2D = {
  tooltip: 'tooltip',
  zoom: 'zoom',
  legend: 'legend',
  title: 'title',
  dataLabels: 'dataLabels',
  animation: 'animation',
  axisTitle: 'axisTitle',
  smallMarkers: 'smallMarkers',
  colors: 'colors',
};

export const optionsPureRandom3D = {
  tooltip: 'tooltip',
  legend: 'legend',
  title: 'title',
  dataLabels: 'dataLabels',
  animation: 'animation',
  axisTitle: 'axisTitle',
  smallMarkers: 'smallMarkers',
  colors: 'colors',
};

export const optionsPureRandomBubble = {
  tooltip: 'tooltip',
  zoom: 'zoom',
  legend: 'legend',
  title: 'title',
  dataLabels: 'dataLabels',
  animation: 'animation',
  axisTitle: 'axisTitle',
  colors: 'colors',
};

export const optionsConfigurableRandom = {
  chartType: 'chartType',
  seriesNumber: 'seriesNumber',
  pointsNumber: 'pointsNumber',
};

export const optionsShootingSimulation = {
  minX: 'minX',
  maxX: 'maxX',
  minY: 'minY',
  maxY: 'maxY',
  bins: 'bins',
  disabled: 'disabled',
};

export const initialState = {
  options: {},
  defaultColors: undefined,
  rerenderChart: false,
  currentMode: modes.pureRandom2D,
  configurations: {
    pureRandom2D: {
      tooltip: true,
      zoom: true,
      legend: true,
      title: true,
      dataLabels: true,
      animation: true,
      axisTitle: true,
      smallMarkers: true,
      colors: false,
    },
    pureRandom3D: {
      tooltip: true,
      legend: true,
      title: true,
      dataLabels: true,
      animation: true,
      axisTitle: true,
      smallMarkers: true,
      colors: false,
    },
    pureRandomBubble: {
      tooltip: true,
      zoom: true,
      legend: true,
      title: true,
      dataLabels: true,
      animation: true,
      axisTitle: true,
      colors: false,
    },
    configurableRandom: {
      chartType: '2D',
      seriesNumber: 3,
      pointsNumber: 10,
    },
    shootingSimulation: {
      minX: 0,
      maxX: 100,
      minY: 0,
      maxY: 100,
      bins: 10,
      disabled: false,
    },
  },
};
