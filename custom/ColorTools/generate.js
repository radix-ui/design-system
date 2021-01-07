import chroma from 'chroma-js';

function distribute(value, rangeA, rangeB) {
  const [fromLow, fromHigh] = Array.from(rangeA);
  const [toLow, toHigh] = Array.from(rangeB);

  const result = toLow + ((value - fromLow) / (fromHigh - fromLow)) * (toHigh - toLow);

  if (toLow < toHigh) {
    if (result < toLow) {
      return toLow;
    }
    if (result > toHigh) {
      return toHigh;
    }
  } else {
    if (result > toLow) {
      return toLow;
    }
    if (result < toHigh) {
      return toHigh;
    }
  }

  return result;
}

export default function generate({ specs }) {
  function generateNumberOfSteps(curve, steps) {
    var array = [];
    for (var step in Array.from(Array(steps).keys())) {
      const value = curve(step / (steps - 1));
      array.push(value);
    }
    array.reverse();
    return array;
  }

  var lum_array = generateNumberOfSteps(specs.lum_curve, specs.steps);
  var sat_array = generateNumberOfSteps(specs.sat_curve, specs.steps);
  var hue_array = generateNumberOfSteps(specs.hue_curve, specs.steps);
  var lum_array_adjusted = [];
  var sat_array_adjusted = [];
  var hue_array_adjusted = [];

  for (var index in lum_array) {
    const step = lum_array[index];
    lum_array_adjusted.push(
      distribute(step, [0, 1], [specs.lum_end * 0.01, specs.lum_start * 0.01], true)
    );
  }

  for (var index in sat_array) {
    const step = sat_array[index];
    var sat_step = distribute(step, [0, 1], [specs.sat_start * 0.01, specs.sat_end * 0.01], true);

    sat_step = sat_step * (specs.sat_rate * 0.01);
    sat_array_adjusted.push(sat_step);
  }

  for (var index in hue_array) {
    const step = hue_array[index];
    hue_array_adjusted.push(distribute(step, [0, 1], [specs.hue_start, specs.hue_end]));
  }

  sat_array_adjusted.reverse();
  hue_array_adjusted.reverse();

  lum_array = lum_array_adjusted;
  sat_array = sat_array_adjusted;
  hue_array = hue_array_adjusted;

  var colorMap = [];

  for (var index in lum_array) {
    var step = lum_array[index];

    var params = {
      hue: hue_array[index],
      saturation: sat_array[index],
      luminosity: lum_array[index],
    };

    if (params.saturation > 1) {
      params.saturation = 1;
    }

    var hex = chroma(chroma.hsv([params.hue, params.saturation, params.luminosity]));
    var hexRGB = chroma(chroma.hsv([params.hue, params.saturation, params.luminosity])).rgb();

    const contrastWhite = chroma.contrast(hex, 'white').toFixed(2);
    const contrastBlack = chroma.contrast(hex, 'black').toFixed(2);

    var displayColor = '';
    if (contrastWhite >= 4.5) {
      displayColor = 'white';
    } else {
      displayColor = 'black';
    }

    var colorObj = {
      hex: chroma(hex).hex(),
      hue: chroma(hex).hsv()[0],
      sat: chroma(hex).hsv()[1],
      lum: chroma(hex).hsv()[2],
      hsv: chroma(hex).hsv(),
      hsl: chroma(hex).hsl(),
      rgb: chroma(hex).rgb(),
      hueRange: [specs.hue_start, specs.hue_end],
      steps: specs.steps,
      label: specs.modifier * index,
      contrastBlack: contrastBlack,
      contrastWhite: contrastWhite,
      displayColor: displayColor,
    };
    colorMap.push(colorObj);
  }

  return colorMap;
}
