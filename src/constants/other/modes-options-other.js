export const modes = {
  heatmap: "Heatmap",
}




export const initialState = {
  options: {},
  rerenderChart: false,
  currentMode: modes.heatmap,
  configurations: {
    heatmap: {}
  }
}
