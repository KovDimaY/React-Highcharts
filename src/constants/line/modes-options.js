export const modes = {
  pureRandom: "Pure Random",
  stockSimulation: "Stock Simulation",
  polinomials: "Polinomial Functions",
  trigonometric: "Trigonometric Functions",
  interestingFacts: "Interesting Facts"
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
    },
    polinomials: {
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
    }
  }
}

export const optionsPureRandom = {
  tooltip: "tooltip",
  zoom: "zoom",
  legend: "legend",
  title: "title",
  dataLabels: "dataLabels",
  animation: "animation",
  yAxisTitle: "yAxisTitle",
  markers: "markers"
}

export const optionsPolinomials = {
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
