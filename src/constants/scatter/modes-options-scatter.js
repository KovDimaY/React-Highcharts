export const modes = {
  pureRandom2D: "Pure Random 2D",
  scatter3d: "Scattering 3D",
  scatterBubble: "Scattering Bubble"
}

export const optionsPureRandom2D = {
  tooltip: "tooltip",
  zoom: "zoom",
  legend: "legend",
  title: "title",
  dataLabels: "dataLabels",
  animation: "animation",
  axisTitle: "axisTitle",
  smallMarkers: "smallMarkers",
  colors: "colors"
}




export const initialState = {
  options: {},
  rerenderChart: false,
  currentMode: modes.pureRandom2D,
  configurations: {
    pureRandom2D: {
      tooltip: true,
      zoom: true,
      legend: true,
      title: true,
      dataLabels: true,
      animation: true,
      axisTitle: true,
      smallMarkers: true,
      colors: false
    },
    scatter3d: {},
    scatterBubble: {}
  }
}
