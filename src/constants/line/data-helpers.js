export function generateSeriesForPureRandom() {
  const numberOfSeries = Math.round(Math.random() * 3) + 1;
  let result = [];
  for (let i = 0; i < numberOfSeries; i++) {
    let currentData = [];
    const currentName = `Random Serie ${i + 1}`
    const min = Math.random() * 1000 - 500;
    const max = Math.random() * 1000 + min;
    for (let j = 0; j < 12; j++) {
      const randValue = Math.random() * (max - min) + min;
      const shortValue = Math.round(randValue * 1000) / 1000;
      currentData.push(shortValue);
    }
    result.push({
      name: currentName,
      data: currentData
    });
  }

  return result;
}

export function generateSeriesForStockSimulation(value) {
  const now = Date.now();
  let result = [{
      name: 'AAPL',
      data: [
        [now, value]
      ],
      tooltip: {
          valueDecimals: 2
      }
  }];

  return result;
}

export function generateSeriesForPolinomials(params) {
  const {
    linearA,
    linearB,
    quadraticA,
    quadraticB,
    quadraticC,
    cubicA,
    cubicB,
    cubicC,
    cubicD,
  } = params;
  let linearData = [];
  let quadraticData = [];
  let cubicData = [];
  const step = (params.max - params.min)/params.number;

  for (let i = 0; i < params.number + 1; i++) {
    let x = params.min + step * i;

    // calculate the values for each function
    let linearY = linearA * x + linearB;
    let quadraticY = quadraticA * x * x + quadraticB * x + quadraticC;
    let cubicY = cubicA * x * x * x + cubicB * x * x + cubicC * x + cubicD;

    // making numbers looking nice (2 decimal digits at most)
    linearY = Math.round(linearY * 100) / 100;
    quadraticY = Math.round(quadraticY * 100) / 100;
    cubicY = Math.round(cubicY * 100) / 100;
    x = Math.round(x * 100) / 100;

    // push points iside the data
    linearData.push([x, linearY]);
    quadraticData.push([x, quadraticY]);
    cubicData.push([x, cubicY]);
  }

  return [{
    name: 'Linear',
    data: linearData
  },
  {
    name: 'Quadratic',
    data: quadraticData
  },
  {
    name: 'Cubic',
    data: cubicData
  }];
}

export function generateSeriesForTrigonometric(params) {
  const {
    cosA,
    cosB,
    sinA,
    sinB,
    tanA,
    tanB,
    ctanA,
    ctanB
  } = params;
  let cosData = [];
  let sinData = [];
  let tanData = [];
  let ctanData = [];
  const step = (params.max - params.min)/params.number;

  for (let i = 0; i < params.number + 1; i++) {
    let x = params.min + step * i;

    // calculate the values for each function
    let cosY = cosA * Math.cos(x * cosB);
    let sinY = sinA * Math.sin(x * sinB);
    let tanY = tanA * Math.tan(x * tanB);
    let ctanY = Math.tan(x * ctanB) === 0 ? null : ctanA / Math.tan(x * ctanB);

    // making numbers looking nice (2 decimal digits at most)
    cosY = Math.round(cosY * 100) / 100;
    sinY = Math.round(sinY * 100) / 100;
    tanY = Math.round(tanY * 100) / 100;
    ctanY = Math.round(ctanY * 100) / 100;
    x = Math.round(x * 100) / 100;

    // push points iside the data
    cosData.push([x, cosY]);
    sinData.push([x, sinY]);
    tanData.push([x, tanY]);
    ctanData.push([x, ctanY]);
  }
  return [{
    name: 'Cos(x)',
    data: cosData
  },
  {
    name: 'Sin(x)',
    data: sinData
  },
  {
    name: 'Tg(x)',
    data: tanData
  },
  {
    name: 'Ctg(x)',
    data: ctanData
  }];
}