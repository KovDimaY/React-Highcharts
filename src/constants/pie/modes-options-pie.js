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
  pureRandom: "In this mode, you have an opportunity to play with different configurations of the pie chart. Use checkboxes to customize the view and press the button to apply changes.",
  configurableRandom: "This mode has fixed options of the chart representation, but you can configure the random generation of data. Just enter all the parameters and press the button to see the result.",
  clusteringSimulation: "Here you can see in real time the process of clusterization of random numbers. Enter params, press the \"Start\" button and watch how the distibution will change during the simulation.",
  primeFactorization: "This mode gives an opportunity to analyze the composition of the number provided by the user in sense of prime factors. You just have to enter the number and the chart will show the distribution of its prime factors.",
  irrationalAnalysis: "In this mode, you have an opportunity to analyze digits of the decimal representation of the well known irrational number Pi. You have to provide the number of how many digits you want to analyze and the chart will show you the distribution of the first digits of Pi.",
  interestingFacts: "Here you can see a collection of some interesting facts about different things, represented by pie charts. Use radio buttons to change immediately charts with the info."
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
