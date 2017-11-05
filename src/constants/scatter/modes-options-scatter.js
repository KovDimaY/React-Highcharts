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
  yAxisTitle: "yAxisTitle",
  markers: "markers",
  area: "area"
}




export const initialState = {
  options: {},
  rerenderChart: false,
  currentMode: modes.scatter3d,
  configurations: {
    pureRandom2D: {
      tooltip: true,
      zoom: true,
      legend: true,
      title: true,
      dataLabels: true,
      animation: true,
      yAxisTitle: true,
      markers: true,
      area: false
    },
    scatter3d: {},
    scatterBubble: {}
  }
}
