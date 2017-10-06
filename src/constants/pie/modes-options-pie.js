export const modes = {
  pureRandom: "Pure Random",
  configurableRandom: "Configurable Random"
}

export const optionsPureRandom = {
  tooltip: "tooltip",
  threeDimensions: "threeDimensions",
  legend: "legend",
  title: "title",
  dataLabels: "dataLabels",
  animation: "animation",
  donut: "donut"
}

export const optionsConfigurableRandom = {
  seriesNumber: "seriesNumber"
}

export const initialState = {
  options: {},
  rerenderChart: false,
  currentMode: modes.pureRandom,
  configurations: {
    pureRandom: {
      tooltip: true,
      threeDimensions: true,
      legend: true,
      title: true,
      dataLabels: true,
      animation: true,
      donut: true
    },
    configurableRandom: {
      seriesNumber: 3
    }
  }
}
