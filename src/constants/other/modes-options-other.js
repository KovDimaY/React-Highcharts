export const modes = {
  heatmap: "Heatmap",
  tilemap: "Tilemap",
  polar: "Polar",
  boxplot: "Box Plot"
}




export const initialState = {
  options: {},
  rerenderChart: false,
  currentMode: modes.heatmap,
  configurations: {
    heatmap: {},
    tilemap: {},
    polar: {},
    boxplot: {}
  }
}
