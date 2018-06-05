import { move } from './data-helpers-other.js'

export const modes = {
  heatmap: "Heatmap",
  tilemap: "Tilemap",
  polar: "Polar",
  boxplot: "Box Plot",
  gauge: "Activity Gauge",
  pyramid: "Pyramid",
  wordcloud: "Word Cloud",
  sankey: "Sankey Diagram",
  clock: "Clock Simulation"
}

export const optionsHeatmap = {
  tooltip: "tooltip",
  title: "title",
  dataLabels: "dataLabels",
  animation: "animation",
  legend: "legend",
  axisTitles: "axisTitles",
  minColor: "minColor",
  maxColor: "maxColor",
  borderColor: "borderColor",
  diagonalized: "diagonalized",
  alreadyDiagonalized: "alreadyDiagonalized",
}

export const optionsTilemap = {
  tooltip: "tooltip",
  title: "title",
  dataLabels: "dataLabels",
  animation: "animation",
  legend: "legend",
  minColor: "minColor",
  lowColor: "lowColor",
  highColor: "highColor",
  maxColor: "maxColor",
}

export const optionsPolar = {
  chartType: "chartType",
  tooltip: "tooltip",
  title: "title",
  dataLabels: "dataLabels",
  animation: "animation",
  legend: "legend",
  spiderMode: "spiderMode",
}

export const optionsBoxplot = {
  target: "target",
  min: "min",
  max: "max",
  outliers: "outliers",
  showAverage: "showAverage",
}

export const optionsWordcloud = {
  text: "text",
  limit: "limit",
  filter: "filter",
}

export const optionsPyramid = {
  tooltip: "tooltip",
  title: "title",
  dataLabels: "dataLabels",
  animation: "animation",
  legend: "legend",
  allowPointSelect: "allowPointSelect"
}

export const optionsGauge = {
  text: "text",
  chars: "chars",
  digits: "digits",
  symbols: "symbols"
}

export const optionsSankey = {
  numberNodes: "numberNodes",
  numberLevels: "numberLevels",
  density: "density",
  linkOpacity: "linkOpacity",
  curveFactor: "curveFactor"
}

export const optionsClock = {
  speed: "speed"
}

export const initialState = {
  options: {},
  rerenderChart: false,
  currentMode: modes.heatmap,
  configurations: {
    heatmap: {
      tooltip: true,
      title: true,
      dataLabels: true,
      animation: true,
      legend: true,
      axisTitles: true,
      minColor: "#ffffff",
      maxColor: "#f45b5b",
      borderColor: "#f45b5b",
      diagonalized: false,
      alreadyDiagonalized: false
    },
    tilemap: {
      tooltip: true,
      title: true,
      dataLabels: true,
      animation: true,
      legend: true,
      minColor: "#F9EDB3",
      lowColor: "#FFC428",
      highColor: "#FF7987",
      maxColor: "#FF2371"
    },
    polar: {
      chartType: "Line",
      tooltip: true,
      title: true,
      dataLabels: true,
      animation: true,
      legend: true,
      spiderMode: false
    },
    boxplot: {
      target: 1,
      min: 0,
      max: 100,
      outliers: true,
      showAverage: true,
    },
    gauge: {
      text: "Enter here your text to see its char analysis on the chart...",
      chars: 500,
      digits: 50,
      symbols: 100
    },
    pyramid: {
      tooltip: true,
      title: true,
      dataLabels: true,
      animation: true,
      legend: true,
      allowPointSelect: true
    },
    wordcloud: {
      text: "Enter here your text to plot its words set on the chart...",
      limit: 10,
      filter: []
    },
    sankey: {
      numberNodes: 5,
      numberLevels: 3,
      density: 50,
      linkOpacity: 0.5,
      curveFactor: 0.33
    },
    clock: {
      speed: 1000,
      function: move
    }
  }
}
