import {
  interestingFactsTemperature,
  interestingFactsPopulation,
  interestingFactsITGiants
} from '../../constants/line/default-options-line'

export const modes = {
  pureRandom: "Pure Random",
  configurableRandom: "Configurable Random",
  stockSimulation: "Stock Simulation",
  polynomials: "Polynomial Functions",
  trigonometric: "Trigonometric Functions",
  interestingFacts: "Interesting Facts"
}

export const tooltips = {
  pureRandom: "In this mode, you have an opportunity to play with different configurations of the line chart. Use checkboxes to configure the view and press the button to apply changes.",
  configurableRandom: "This mode has fixed options of the chart representation, but you can configure the random generation of data. Just enter all the parameters and press the button to see the result.",
  stockSimulation: "Here you can simulate the trading process of stock markets. Enter the name of the stock, a starting price and params of volatility and you will see how the situation can be changed with the pass of time.",
  polynomials: "This mode gives an opportunity to plot polynomial functions with the given accuracy. Just enter all the coefficients needed, domain borders, number of points on the chart and press the button to plot them.",
  trigonometric: "In this mode, you have an opportunity to plot trigonometric functions with the given accuracy. Just enter all the coefficients needed, domain borders, number of points on the chart and press the button to plot them.",
  interestingFacts: "Here you can see a collection of some interesting facts about different things, represented by line charts. Use radio buttons to change immediately charts with information."
}

export const optionsPureRandom = {
  tooltip: "tooltip",
  zoom: "zoom",
  legend: "legend",
  title: "title",
  dataLabels: "dataLabels",
  animation: "animation",
  yAxisTitle: "yAxisTitle",
  markers: "markers",
  area: "area"
}

export const optionsConfigurableRandom = {
  seriesNumber: "seriesNumber",
  pointsNumber: "pointsNumber",
  min: "min",
  max: "max"
}

export const optionsStockSimulation = {
  name: "name",
  price: "price",
  oscillation: "oscillation",
  frequency: "frequency",
  isRunning: "isRunning"
}

export const optionsPolynomials = {
  min: "min",
  max: "max",
  number: "number",
  linearA: "linearA",
  linearB: "linearB",
  quadraticA: "quadraticA",
  quadraticB: "quadraticB",
  quadraticC: "quadraticC",
  cubicA: "cubicA",
  cubicB: "cubicB",
  cubicC: "cubicC",
  cubicD: "cubicD"
}

export const optionsTrigonometric = {
  min: "min",
  max: "max",
  number: "number",
  cosA: "cosA",
  cosB: "cosB",
  sinA: "sinA",
  sinB: "sinB",
  tanA: "tanA",
  tanB: "tanB",
  ctanA: "ctanA",
  ctanB: "ctanB"
}

export const optionsInterestingFacts = {
  temperature: "temperature",
  population: "population",
  itGiants: "itGiants"
}

export const initialState = {
  options: {},
  rerenderChart: false,
  currentMode: modes.pureRandom,
  configurations: {
    pureRandom: {
      tooltip: true,
      zoom: true,
      legend: true,
      title: true,
      dataLabels: true,
      animation: true,
      yAxisTitle: true,
      markers: true,
      area: false
    },
    configurableRandom: {
      seriesNumber: 3,
      pointsNumber: 10,
      min: -10,
      max: 10
    },
    stockSimulation: {
      name: "Some Very Famous Company",
      price: 1500,
      oscillation: 10,
      frequency: 1,
      isRunning: false
    },
    polynomials: {
      min: -10,
      max: 10,
      number: 100,
      linearA: 1,
      linearB: 1,
      quadraticA: 1,
      quadraticB: 1,
      quadraticC: 1,
      cubicA: 1,
      cubicB: 1,
      cubicC: 1,
      cubicD: 1
    },
    trigonometric: {
      min: -10,
      max: 10,
      number: 100,
      cosA: 1,
      cosB: 1,
      sinA: 1,
      sinB: 1,
      tanA: 1,
      tanB: 1,
      ctanA: 1,
      ctanB: 1
    },
    interestingFacts: {
      temperature: interestingFactsTemperature,
      population: interestingFactsPopulation,
      itGiants: interestingFactsITGiants,
      current: optionsInterestingFacts.temperature
    }
  }
}
