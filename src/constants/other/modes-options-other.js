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
      borderColor: "#f45b5b"
    },
    tilemap: {},
    polar: {},
    boxplot: {},
    gauge: {},
    pyramid: {},
    wordcloud: {},
    sankey: {}
  }
}
