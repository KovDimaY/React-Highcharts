export const modes = {
  pureRandom: "Pure Random",
  configurableRandom: "Configurable Random",
  balanceSimulation: "Balance Simulation",
  symbolsAnalysis: "Symbols Analysis",
  wordsAnalysis: "Words Analysis"
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
  incomeProbability: "incomeProbability",
  expensesProbability: "expensesProbability",
  initIncome: "initIncome",
  initExpenses: "initExpenses",
  isRunning: "isRunning"
}

export const optionsSymbolsAnalysis = {
  text: "text",
  limit: "limit",
  filter: "filter",
  caseSensitive: "caseSensitive"
}

export const optionsWordsAnalysis = optionsSymbolsAnalysis;

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
    balanceSimulation: {
      incomeProbability: 10,
      expensesProbability: 10,
      initIncome: 1500,
      initExpenses: 1400,
      isRunning: false
    },
    symbolsAnalysis: {
      text: "Enter here your text to analyze its symbols set...",
      limit: 10,
      filter: "",
      caseSensitive: true
    },
    wordsAnalysis: {
      text: "Enter here your text to analyze its words set...",
      limit: 10,
      filter: [],
      caseSensitive: true
    }
  }
}
