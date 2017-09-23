export const modes = {
  pureRandom: "Pure Random",
  configurableRandom: "Configurable Random",
  balanceSimulation: "Balance Simulation"
}

export const optionsPureRandom = {
  vertical: "vertical",
  tooltip: "tooltip",
  zoom: "zoom",
  legend: "legend",
  title: "title",
  dataLabels: "dataLabels",
  animation: "animation",
  yAxisTitle: "yAxisTitle"
}

export const optionsConfigurableRandom = {
  seriesNumber: "seriesNumber",
  categoriesNumber: "categoriesNumber",
  min: "min",
  max: "max"
}

export const optionsBalanceSimulation = {
  seriesNumber: "seriesNumber",
  categoriesNumber: "categoriesNumber",
  min: "min",
  max: "max"
}

export const initialState = {
  options: {},
  rerenderChart: false,
  currentMode: modes.pureRandom,
  configurations: {
    pureRandom: {
      vertical: true,
      tooltip: true,
      zoom: true,
      legend: true,
      title: true,
      dataLabels: true,
      animation: true,
      yAxisTitle: true
    },
    configurableRandom: {
      seriesNumber: 3,
      categoriesNumber: 5,
      min: -10,
      max: 10
    },
  }
}
