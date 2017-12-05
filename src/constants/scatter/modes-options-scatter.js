export const modes = {
  pureRandom2D: "Pure Random 2D",
  pureRandom3D: "Pure Random 3D",
  pureRandomBubble: "Pure Random Bubble",
  configurableRandom: "Configurable Random"
}

export const optionsPureRandom2D = {
  tooltip: "tooltip",
  zoom: "zoom",
  legend: "legend",
  title: "title",
  dataLabels: "dataLabels",
  animation: "animation",
  axisTitle: "axisTitle",
  smallMarkers: "smallMarkers",
  colors: "colors"
}

export const optionsPureRandom3D = {
  tooltip: "tooltip",
  legend: "legend",
  title: "title",
  dataLabels: "dataLabels",
  animation: "animation",
  axisTitle: "axisTitle",
  smallMarkers: "smallMarkers",
  colors: "colors"
};

export const optionsPureRandomBubble = {
  tooltip: "tooltip",
  zoom: "zoom",
  legend: "legend",
  title: "title",
  dataLabels: "dataLabels",
  animation: "animation",
  axisTitle: "axisTitle",
  colors: "colors"
}

export const optionsConfigurableRandom = {
  seriesNumber: "seriesNumber",
  pointsNumber: "pointsNumber"
}



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
      colors: false
    },
    pureRandom3D: {
      tooltip: true,
      legend: true,
      title: true,
      dataLabels: true,
      animation: true,
      axisTitle: true,
      smallMarkers: true,
      colors: false
    },
    pureRandomBubble: {
      tooltip: true,
      zoom: true,
      legend: true,
      title: true,
      dataLabels: true,
      animation: true,
      axisTitle: true,
      colors: false
    },
    configurableRandom: {
      seriesNumber: 3,
      pointsNumber: 10
    },
  }
}
