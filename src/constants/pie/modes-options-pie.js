export const modes = {
  pureRandom: "Pure Random"
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
    }
  }
}
