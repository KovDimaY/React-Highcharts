import {
  interestingFactsOne,
  interestingFactsTwo,
  interestingFactsThree
} from '../../constants/bar/default-options-bar'

export const modes = {
  pureRandom: "Pure Random",
  configurableRandom: "Configurable Random",
  balanceSimulation: "Balance Simulation",
  symbolsAnalysis: "Symbols Analysis",
  wordsAnalysis: "Words Analysis",
  interestingFacts: "Interesting Facts"
}

export const tooltips = {
  pureRandom: "Generate random data.",
  configurableRandom: "Generate random data with ability to configure range, number of series and categories.",
  balanceSimulation: "Analyze expenses and income.",
  symbolsAnalysis: "Analyze the quantity of symbols in text.",
  wordsAnalysis: "Analyze the quantity of words in text.",
  interestingFacts: "Some very interesting facts from our life."
}

export const optionsPureRandom = {
  vertical: "vertical",
  tooltip: "tooltip",
  zoom: "zoom",
  legend: "legend",
  title: "title",
  dataLabels: "dataLabels",
  animation: "animation",
  yAxisTitle: "yAxisTitle",
  stacking: "stacking"
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

export const optionsInterestingFacts = {
  first: "first",
  second: "second",
  third: "third"
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
      yAxisTitle: true,
      stacking: false
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
    },
    interestingFacts: {
      first: interestingFactsOne,
      second: interestingFactsTwo,
      third: interestingFactsThree,
      current: optionsInterestingFacts.first
    }
  }
}
