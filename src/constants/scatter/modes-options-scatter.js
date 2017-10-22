export const modes = {
  scatter3d: "Scattering 3D",
  scatter2d: "Scattering 2D",
  scatterBubble: "Scattering Bubble",
}




export const initialState = {
  options: {},
  rerenderChart: false,
  currentMode: modes.scatter3d,
  configurations: {
    scatter3d: {},
    scatter2d: {},
    scatterBubble: {}
  }
}
