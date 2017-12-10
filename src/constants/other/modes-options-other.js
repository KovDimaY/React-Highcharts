export const modes = {
  heatmap: "Heatmap",
  tilemap: "Tilemap",
  polar: "Polar",
  boxplot: "Box Plot",
  gauge: "Activity Gauge",
  pyramid: "Pyramid",
  wordcloud: "Word Cloud",
  sankey: "Sankey Diagram"
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
  axisTitles: "axisTitles",
  minColor: "minColor",
  lowColor: "lowColor",
  highColor: "highColor",
  maxColor: "maxColor",
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
      axisTitles: true,
      minColor: "#F9EDB3",
      lowColor: "#FFC428",
      highColor: "#FF7987",
      maxColor: "#FF2371"
    },
    polar: {},
    boxplot: {},
    gauge: {},
    pyramid: {},
    wordcloud: {},
    sankey: {}
  }
}
