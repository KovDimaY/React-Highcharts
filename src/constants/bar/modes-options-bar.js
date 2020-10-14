import {
  interestingFactsOne,
  interestingFactsTwo,
  interestingFactsThree,
} from '../../constants/bar/default-options-bar';

export const modes = {
  pureRandom: 'Pure Random',
  configurableRandom: 'Configurable Random',
  balanceSimulation: 'Balance Simulation',
  symbolsAnalysis: 'Symbols Analysis',
  wordsAnalysis: 'Words Analysis',
  interestingFacts: 'Interesting Facts',
};

export const tooltips = {
  pureRandom:
    'In this mode, you have an opportunity to play with different configurations of the bar chart. Use checkboxes to customize the view and press the button to apply changes.',
  configurableRandom:
    'This mode has fixed options of the chart representation, but you can configure the random generation of data. Just enter all the parameters and press the button to see the result.',
  balanceSimulation:
    'Here you can simulate balance behavior of the home or company bookkeeping. Enter a starting income and spendings, press the "Start" button and see how the situation will change during the next 12 months. ',
  symbolsAnalysis:
    'This mode gives an opportunity to analyze the most frequent characters in the text provided by the user. You can customize the number of the most frequent chars, disable case sensitiveness and even filter chars which you are not interested in.',
  wordsAnalysis:
    'In this mode, you have an opportunity to analyze the most frequent words in the text provided. You can customize the number of the most frequent words, disable case sensitiveness and even filter words which you are not interested in.',
  interestingFacts:
    'Here you can see a collection of some interesting facts about different things, represented by bar charts. Use radio buttons to change immediately charts with the info.',
};

export const optionsPureRandom = {
  vertical: 'vertical',
  tooltip: 'tooltip',
  zoom: 'zoom',
  legend: 'legend',
  title: 'title',
  dataLabels: 'dataLabels',
  animation: 'animation',
  yAxisTitle: 'yAxisTitle',
  stacking: 'stacking',
};

export const optionsConfigurableRandom = {
  seriesNumber: 'seriesNumber',
  categoriesNumber: 'categoriesNumber',
  min: 'min',
  max: 'max',
};

export const optionsBalanceSimulation = {
  incomeProbability: 'incomeProbability',
  expensesProbability: 'expensesProbability',
  initIncome: 'initIncome',
  initExpenses: 'initExpenses',
  isRunning: 'isRunning',
};

export const optionsSymbolsAnalysis = {
  text: 'text',
  limit: 'limit',
  filter: 'filter',
  caseSensitive: 'caseSensitive',
};

export const optionsWordsAnalysis = optionsSymbolsAnalysis;

export const optionsInterestingFacts = {
  first: 'first',
  second: 'second',
  third: 'third',
};

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
      stacking: false,
    },
    configurableRandom: {
      seriesNumber: 3,
      categoriesNumber: 5,
      min: -10,
      max: 10,
    },
    balanceSimulation: {
      incomeProbability: 10,
      expensesProbability: 10,
      initIncome: 1500,
      initExpenses: 1400,
      isRunning: false,
    },
    symbolsAnalysis: {
      text: 'Enter here your text to analyze its symbols set...',
      limit: 10,
      filter: '',
      caseSensitive: true,
    },
    wordsAnalysis: {
      text: 'Enter here your text to analyze its words set...',
      limit: 10,
      filter: [],
      caseSensitive: true,
    },
    interestingFacts: {
      first: interestingFactsOne,
      second: interestingFactsTwo,
      third: interestingFactsThree,
      current: optionsInterestingFacts.first,
    },
  },
};
