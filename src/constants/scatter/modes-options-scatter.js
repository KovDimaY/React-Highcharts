export const modes = {
  pureRandom2D: "Pure Random 2D",
  pureRandom3D: "Pure Random 3D",
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

export const optionsPureRandom3D = optionsPureRandom2D;





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
    pureRandom3D: {
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
    scatterBubble: {}
  }
}
