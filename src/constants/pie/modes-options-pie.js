export const modes = {
  pureRandom: "Pure Random",
  configurableRandom: "Configurable Random",
  clusteringSimulation: "Clustering Simulation",
  primeFactorization: "Prime Factorization",
  irrationalAnalysis: "Irrational Analysis",
  interestingFacts: "Interesting facts"
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

export const optionsIrrationalAnalysis = {
  input: "input"
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
    }
  }
}
