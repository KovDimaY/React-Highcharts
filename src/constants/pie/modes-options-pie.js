import {
  interestingFactsOne,
  interestingFactsTwo,
  interestingFactsThree,
  interestingFactsFour,
  interestingFactsFive,
  interestingFactsSix
} from '../../constants/pie/default-options-pie'

export const modes = {
  pureRandom: "Pure Random",
  configurableRandom: "Configurable Random",
  clusteringSimulation: "Clustering Simulation",
  primeFactorization: "Prime Factorization",
  irrationalAnalysis: "Irrational Analysis",
  interestingFacts: "Interesting facts"
}

export const tooltips = {
  pureRandom: "Generate random data.",
  configurableRandom: "Generate random data with ability to configure the number of series.",
  clusteringSimulation: "Simple Clustering Simulation.",
  primeFactorization: "Find prime factors of the number.",
  irrationalAnalysis: "Get distribution of digits of the number Pi.",
  interestingFacts: "Some very interesting facts from our life."
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

export const optionsClusteringSimulation = {
  maxNumber: "maxNumber",
  clusterNumber: "clusterNumber",
  isRunning: "isRunning",
  frequency: "frequency"
}

export const optionsPrimeFactorization = {
  input: "input"
}

export const optionsIrrationalAnalysis = optionsPrimeFactorization;

export const optionsInterestingFacts = {
  first: "first",
  second: "second",
  third: "third",
  fourth: "fourth",
  fifth: "fifth",
  sixth: "sixth",
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
    },
    clusteringSimulation: {
      maxNumber: 100,
      clusterNumber: 5,
      frequency: 3,
      isRunning: false
    },
    primeFactorization: {
      input: 120
    },
    irrationalAnalysis: {
      input: 10
    },
    interestingFacts: {
      first: interestingFactsOne,
      second: interestingFactsTwo,
      third: interestingFactsThree,
      fourth: interestingFactsFour,
      fifth: interestingFactsFive,
      sixth: interestingFactsSix,
      current: optionsInterestingFacts.first
    }
  }
}
