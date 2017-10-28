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




export const initialState = {
  options: {},
  rerenderChart: false,
  currentMode: modes.heatmap,
  configurations: {
    heatmap: {},
    tilemap: {},
    polar: {},
    boxplot: {},
    gauge: {},
    pyramid: {},
    wordcloud: {},
    sankey: {}
  }
}
