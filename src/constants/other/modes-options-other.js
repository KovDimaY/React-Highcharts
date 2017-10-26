export const modes = {
  heatmap: "Heatmap",
  tilemap: "Tilemap",
  polar: "Polar"
}




export const initialState = {
  options: {},
  rerenderChart: false,
  currentMode: modes.heatmap,
  configurations: {
    heatmap: {},
    tilemap: {},
    polar: {}
  }
}
