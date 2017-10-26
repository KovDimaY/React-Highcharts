export const modes = {
  heatmap: "Heatmap",
  tilemap: "Tilemap"
}




export const initialState = {
  options: {},
  rerenderChart: false,
  currentMode: modes.heatmap,
  configurations: {
    heatmap: {},
    tilemap: {}
  }
}
