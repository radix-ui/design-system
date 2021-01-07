import React from 'react';
import { Box } from '../../components/Box';
import { Flex } from '../../components/Flex';
import { Text } from '../../components/Text';
import { ScrollArea } from '../../components/Scrollbar';
import { createCeaser } from './ceaser';
import * as curves from './curves';
import generate from './generate.js';
import bezier from 'bezier-easing';
import { EyeClosedIcon, EyeOpenIcon, CodeIcon, BlendingModeIcon } from '@modulz/radix-icons';
import chroma from 'chroma-js';

// Constants for color generation
const steps = 7;
const sat_rate = 100;
const modifier = 10;

const gray = {
  hue_start: 206,
  hue_end: 206,
  sat_start: 0.5,
  sat_end: 5,
  sat_curve: '0.630, 0.575, 0.495, 0.115',
  lum_start: 99,
  lum_end: 82,
  overrides: {
    8: 'hsl(206,6%,56%)',
    9: 'hsl(206,6%,44%)',
  },
};

const red = {
  hue_start: 351,
  hue_end: 355,
  sat_start: 3,
  sat_end: 49,
  sat_curve: '0.655, 0.340, 0.800, 0.510',
  lum_start: 100,
  lum_end: 95,
  overrides: {
    9: 'hsl(356, 80%, 47%)',
  },
};

const crimson = {
  hue_start: 332,
  hue_end: 336,
  sat_start: 3,
  sat_end: 51,
  sat_curve: '0.655, 0.325, 0.815, 0.480',
  lum_start: 100,
  lum_end: 94,
  overrides: {
    9: 'hsl(336,79%,46%)',
  },
};

const pink = {
  hue_start: 322,
  hue_end: 322,
  sat_start: 3,
  sat_end: 55,
  sat_curve: '0.700, 0.370, 0.820, 0.450',
  lum_start: 100,
  lum_end: 95,
  overrides: {
    8: 'hsl(322,75%,60%)',
    9: 'hsl(322,80%,44%)',
  },
};

const purple = {
  hue_start: 280,
  hue_end: 272,
  sat_start: 2,
  sat_end: 47,
  sat_curve: '0.700, 0.415, 0.925, 0.540',
  lum_start: 100,
  lum_end: 89,
};

const violet = {
  hue_start: 252,
  hue_end: 252,
  sat_start: 2,
  sat_end: 48,
  sat_curve: '0.690, 0.375, 0.745, 0.465',
  lum_start: 100,
  lum_end: 95,
  overrides: {
    9: 'hsl(250, 55%, 48%)',
  },
};

const indigo = {
  hue_start: 226,
  hue_end: 226,
  sat_start: 2,
  sat_end: 49,
  sat_curve: '0.585, 0.305, 0.770, 0.490',
  lum_start: 100,
  lum_end: 93,
};

const blue = {
  hue_start: 206,
  hue_end: 206,
  sat_start: 2.5,
  sat_end: 62,
  sat_curve: '0.695, 0.390, 0.695, 0.505',
  lum_start: 100,
  lum_end: 99,
  overrides: {
    9: 'hsl(211,100%,44%)',
  },
};

const turquoise = {
  hue_start: 185,
  hue_end: 188,
  sat_start: 3.5,
  sat_end: 64,
  sat_curve: '0.765, 0.485, 0.805, 0.740',
  lum_start: 99.5,
  lum_end: 87,
  overrides: {
    8: 'hsl(190, 88%, 40%)',
    9: 'hsl(190, 90%, 30%)',
  },
};

const teal = {
  hue_start: 165,
  hue_end: 172,
  sat_start: 5,
  sat_end: 70,
  sat_curve: '0.690, 0.315, 0.860, 0.620',
  lum_start: 100,
  lum_end: 77,
  overrides: {
    8: 'hsl(173, 82%, 36%)',
    9: 'hsl(174, 100%, 24.5%)',
  },
};

const green = {
  hue_start: 130,
  hue_end: 144,
  sat_start: 5,
  sat_end: 55,
  sat_curve: '0.645, 0.260, 0.860, 0.630',
  lum_start: 100,
  lum_end: 77,
  overrides: {
    8: 'hsl(145, 62%, 41%)',
    9: 'hsl(148, 69%, 30%)',
  },
};

const lime = {
  hue_start: 85,
  hue_end: 76,
  sat_start: 6,
  sat_end: 85,
  sat_curve: '0.425, 0.150, 0.860, 0.605',
  lum_start: 99.5,
  lum_end: 85,
  overrides: {
    8: 'hsl(77, 85%, 47%)',
    9: 'hsl(78, 80%, 25%)',
  },
};

const yellow = {
  hue_start: 55,
  hue_end: 52,
  sat_start: 9,
  sat_end: 90,
  sat_curve: '0.830, 0.585, 0.660, 0.820',
  lum_start: 100,
  lum_end: 94,
  overrides: {
    8: 'hsl(52, 99%, 52%)',
    9: 'hsl(40, 80%, 32%)',
  },
};

const orange = {
  hue_start: 40,
  hue_end: 36,
  sat_start: 6,
  sat_end: 90,
  sat_curve: '0.555, 0.270, 0.710, 0.510',
  lum_start: 100,
  lum_end: 98,
  overrides: {
    8: 'hsl(38, 100%, 54%)',
    9: 'hsl(27, 65%, 36%)',
  },
};

const brown = {
  hue_start: 30,
  hue_end: 28,
  sat_start: 3,
  sat_end: 55,
  sat_curve: '0.700, 0.415, 0.745, 0.465',
  lum_start: 99.5,
  lum_end: 85,
  overrides: {
    8: 'hsl(28, 48%, 52%)',
    9: 'hsl(20, 50%, 37%)',
  },
};

const bronze = {
  hue_start: 18,
  hue_end: 16,
  sat_start: 3,
  sat_end: 36,
  sat_curve: '0.590, 0.415, 0.720, 0.475',
  lum_start: 100,
  lum_end: 78,
  overrides: {
    8: 'hsl(16, 28%, 52%)',
    9: 'hsl(16, 30%, 43%)',
  },
};

const gold = {
  hue_start: 50,
  hue_end: 36,
  sat_start: 3,
  sat_end: 40,
  sat_curve: '0.700, 0.415, 0.745, 0.465',
  lum_start: 99.5,
  lum_end: 75,
  overrides: {
    8: 'hsl(36, 30%, 52%)',
    9: 'hsl(36, 26%, 40%)',
  },
};

export function ColorTools() {
  return (
    <Box
      id="fixedParent"
      css={{
        position: 'fixed',
        // top: '36px',
        top: '0',
        right: '0',
        bottom: '0',
        width: '250px',
        borderLeft: '1px solid $canvas',
        backgroundColor: '$loContrast',
      }}
    >
      <ScrollArea>
        <Scale name="gray" scale={gray} />
        <Scale name="red" scale={red} />
        <Scale name="crimson" scale={crimson} />
        <Scale name="pink" scale={pink} />
        <Scale name="purple" scale={purple} />
        <Scale name="violet" scale={violet} />
        <Scale name="indigo" scale={indigo} />
        <Scale name="blue" scale={blue} />
        <Scale name="turquoise" scale={turquoise} />
        <Scale name="teal" scale={teal} />
        <Scale name="green" scale={green} />
        <Scale name="lime" scale={lime} />
        <Scale name="yellow" scale={yellow} />
        <Scale name="orange" scale={orange} />
        <Scale name="brown" scale={brown} />
        <Scale name="bronze" scale={bronze} />
        <Scale name="gold" scale={gold} />
      </ScrollArea>
    </Box>
  );
}

type ScaleProps = {
  name: string;
  scale: Omit<typeof red, 'overrides'> & { overrides?: Record<string, string> };
};

type BezierParams = [number, number, number, number];

type ContrastInfo = {
  // Contrast of 900 text on 100 background
  '100': number;
  // Contrast of 900 text on 200 background
  '200': number;
  // Contrast of hiContrast on 800 background
  hiContrast: number;
  // Contrast of loContrast on 800 background
  loContrast: number;
};

function Scale({ name, scale }: ScaleProps) {
  const [isEnabled, setIsEnabled] = React.useState(true);
  const [showCode, setShowCode] = React.useState(false);
  const [curve, setCurve] = React.useState(scale.sat_curve);
  const [colors, setColors] = React.useState<ReturnType<typeof generate>>([]);
  const [contrastInfo, setContrastInfo] = React.useState<ContrastInfo>();

  const originalColors = React.useRef<string[]>([]);

  React.useEffect(() => {
    if (originalColors.current.length === 0) {
      const computedStyles = getComputedStyle(document.documentElement);
      originalColors.current = [
        computedStyles.getPropertyValue(`--colors-${name}100`),
        computedStyles.getPropertyValue(`--colors-${name}200`),
        computedStyles.getPropertyValue(`--colors-${name}300`),
        computedStyles.getPropertyValue(`--colors-${name}400`),
        computedStyles.getPropertyValue(`--colors-${name}500`),
        computedStyles.getPropertyValue(`--colors-${name}600`),
        computedStyles.getPropertyValue(`--colors-${name}700`),
        computedStyles.getPropertyValue(`--colors-${name}800`),
        computedStyles.getPropertyValue(`--colors-${name}900`),
      ];
    }
  }, []);

  React.useEffect(() => {
    const newCurveParams = curve.split(',').map(parseFloat) as BezierParams;

    const [x1, y1, x2, y2] = newCurveParams;
    const lumCurveParams = [1 - x2, 1 - y2, 1 - x1, 1 - y1] as BezierParams;

    let newColors = generate({
      specs: {
        steps,
        sat_rate,
        modifier,
        ...scale,
        hue_curve: bezier(...newCurveParams),
        sat_curve: bezier(...newCurveParams),
        lum_curve: bezier(...lumCurveParams),
      },
    });

    // Push 800 and 900 into the scale
    [originalColors.current[7], originalColors.current[8]].forEach((color, index) => {
      index = index + 7;

      // Copying from generate.js to match scale object format
      const contrastWhite = chroma.contrast(color, 'white').toFixed(2);
      const contrastBlack = chroma.contrast(color, 'black').toFixed(2);
      const displayColor = parseFloat(contrastWhite) >= 4.5 ? 'white' : 'black';
      const colorObj = {
        hex: chroma(color).hex(),
        hue: chroma(color).hsv()[0],
        sat: chroma(color).hsv()[1],
        lum: chroma(color).hsv()[2],
        hsv: chroma(color).hsv(),
        hsl: chroma(color).hsl(),
        rgb: chroma(color).rgb(),
        hueRange: [scale.hue_start, scale.hue_end],
        steps,
        label: modifier * index,
        contrastBlack,
        contrastWhite,
        displayColor,
      };
      newColors[index] = colorObj;
    });

    // Push overrides into the scale too
    const overrides = (scale as any).overrides as Record<string, string>;
    if (overrides) {
      Object.keys(overrides).forEach((key) => {
        const index = parseInt(key);
        const color = overrides[index];

        // Copying from generate.js to match scale object format
        const contrastWhite = chroma.contrast(color, 'white').toFixed(2);
        const contrastBlack = chroma.contrast(color, 'black').toFixed(2);
        const displayColor = parseFloat(contrastWhite) >= 4.5 ? 'white' : 'black';
        const colorObj = {
          hex: chroma(color).hex(),
          hue: chroma(color).hsv()[0],
          sat: chroma(color).hsv()[1],
          lum: chroma(color).hsv()[2],
          hsv: chroma(color).hsv(),
          hsl: chroma(color).hsl(),
          rgb: chroma(color).rgb(),
          hueRange: [scale.hue_start, scale.hue_end],
          steps,
          label: modifier * index,
          contrastBlack,
          contrastWhite,
          displayColor,
        };
        newColors[index - 1] = colorObj;
      });
    }

    setColors(newColors);
  }, [scale, curve]);

  React.useEffect(() => {
    if (!isEnabled) {
      document.documentElement.style.setProperty(`--colors-${name}100`, originalColors.current[0]);
      document.documentElement.style.setProperty(`--colors-${name}200`, originalColors.current[1]);
      document.documentElement.style.setProperty(`--colors-${name}300`, originalColors.current[2]);
      document.documentElement.style.setProperty(`--colors-${name}400`, originalColors.current[3]);
      document.documentElement.style.setProperty(`--colors-${name}500`, originalColors.current[4]);
      document.documentElement.style.setProperty(`--colors-${name}600`, originalColors.current[5]);
      document.documentElement.style.setProperty(`--colors-${name}700`, originalColors.current[6]);
      document.documentElement.style.setProperty(`--colors-${name}800`, originalColors.current[7]);
      document.documentElement.style.setProperty(`--colors-${name}900`, originalColors.current[8]);

      // Get contrast ratios
      const step100 = originalColors.current[0];
      const step200 = originalColors.current[1];
      const step800 = originalColors.current[7];
      const step900 = originalColors.current[8];
      const computedStyles = getComputedStyle(document.documentElement);
      const hiContrast = computedStyles.getPropertyValue(`--colors-hiContrast`);
      const loContrast = computedStyles.getPropertyValue(`--colors-loContrast`);
      const contrastInfo = {
        '100': chroma.contrast(step100, step900),
        '200': chroma.contrast(step200, step900),
        hiContrast: chroma.contrast(step800, hiContrast),
        loContrast: chroma.contrast(step800, loContrast),
      };

      setContrastInfo(contrastInfo);
    }
  }, [isEnabled]);

  React.useEffect(() => {
    if (isEnabled) {
      colors.forEach((color, index) => {
        document.documentElement.style.setProperty(`--colors-${name}${index + 1}00`, color.hex);
        //
        // if (index > 1 && index < 6) {
        //   document.documentElement.style.setProperty(`--colors-${name}${index + 1}00`, '#fff');
        // }
      });

      if (colors.length) {
        // Get contrast ratios
        const step100 = colors[0].hex;
        const step200 = colors[1].hex;
        const step800 = colors[7]?.hex || originalColors.current[7];
        const step900 = colors[8]?.hex || originalColors.current[8];
        const computedStyles = getComputedStyle(document.documentElement);
        const hiContrast = computedStyles.getPropertyValue(`--colors-hiContrast`);
        const loContrast = computedStyles.getPropertyValue(`--colors-loContrast`);
        const contrastInfo = {
          '100': chroma.contrast(step100, step900),
          '200': chroma.contrast(step200, step900),
          hiContrast: chroma.contrast(step800, hiContrast),
          loContrast: chroma.contrast(step800, loContrast),
        };

        setContrastInfo(contrastInfo);
      }
    }
  }, [isEnabled, name, colors]);

  return (
    <Box css={{ m: '$3' }}>
      <Flex css={{ my: '$2' }}>
        <Text
          size="2"
          css={{ fontWeight: 500, lineHeight: '15px', textTransform: 'capitalize', mr: 'auto' }}
        >
          {name}
        </Text>
        <Box onClick={() => setShowCode(!showCode)} css={{ m: '-$1', mr: '$1', p: '$1' }}>
          {showCode ? <CodeIcon /> : <BlendingModeIcon />}
        </Box>
        <Box
          data-color-visibility-button
          onClick={(event) => {
            if (event.altKey) {
              document
                .querySelectorAll('[data-color-visibility-button]')
                .forEach((button) => (button as HTMLButtonElement).click());
            } else {
              setIsEnabled(!isEnabled);
            }
          }}
          css={{ m: '-$1', p: '$1' }}
        >
          {isEnabled ? <EyeOpenIcon /> : <EyeClosedIcon />}
        </Box>
      </Flex>
      {colors.map((color, index) => {
        const [h, s, l] = color.hsl;
        return (
          <Box
            key={index}
            css={{
              width: '100%',
              height: 25,
              backgroundColor: showCode ? 'transparent' : `var(--colors-${name}${index + 1}00)`,
            }}
          >
            {showCode && (
              <Text
                css={{
                  fontSize: '10px',
                  width: '100%',
                  display: 'block',
                  fontFamily: '$mono',
                  lineHeight: '25px',
                  whiteSpace: 'nowrap',
                }}
              >
                {`
                $${name}${index + 1}00:
                'hsl(${h.toFixed()},
                ${(s * 100).toFixed()}%,
                ${(l * 100).toFixed(1)}%)',`}
              </Text>
            )}
            {!showCode && (index <= 1 || index === 7) && (
              <Text
                css={{
                  fontSize: '10px',
                  width: '100%',
                  display: 'block',
                  fontFamily: '$mono',
                  lineHeight: '25px',
                  textAlign: 'right',
                  paddingRight: '5px',
                  color:
                    index === 7 && contrastInfo
                      ? name === 'lime' || name === 'yellow' || name === 'orange'
                        ? '$hiContrast'
                        : '$loContrast'
                      : `var(--colors-${name}900)`,
                }}
              >
                {
                  // Step 100 contrast
                  index === 0 &&
                    contrastInfo &&
                    (contrastInfo['100'] >= 4.5
                      ? `AA Pass ${contrastInfo['100'].toFixed(2)}`
                      : `AA Fail ${contrastInfo['100'].toFixed(2)}`)
                }
                {
                  // Step 200 contrast
                  index === 1 &&
                    contrastInfo &&
                    (contrastInfo['200'] >= 4.5
                      ? `AA Pass ${contrastInfo['200'].toFixed(2)}`
                      : `AA Fail ${contrastInfo['200'].toFixed(2)}`)
                }
                {
                  // Step 800 contrast with white
                  index === 7 &&
                    contrastInfo &&
                    name !== 'lime' &&
                    name !== 'yellow' &&
                    name !== 'orange' &&
                    (contrastInfo['loContrast'] >= 3
                      ? `AA Large Text Pass ${contrastInfo['loContrast'].toFixed(2)}`
                      : `AA Large Text Fail ${contrastInfo['loContrast'].toFixed(2)}`)
                }
                {
                  // Lime, yellow, orange 800 contrast with black
                  index === 7 &&
                    contrastInfo &&
                    (name === 'lime' || name === 'yellow' || name === 'orange') &&
                    (contrastInfo['hiContrast'] >= 3
                      ? `AA Large Text Pass ${contrastInfo['hiContrast'].toFixed(2)}`
                      : `AA Large Text Fail ${contrastInfo['hiContrast'].toFixed(2)}`)
                }
                {/* {index === 7 &&
                  contrastInfo &&
                  `AA Pass ${Math.max(
                    contrastInfo['hiContrast'],
                    contrastInfo['loContrast']
                  ).toFixed(2)}`} */}
              </Text>
            )}
          </Box>
        );
      })}
      <Curve
        defaultCurve={curve}
        onChange={(newCurve) => {
          setCurve(newCurve);
          setIsEnabled(true);
        }}
      />
    </Box>
  );
}

type CurveProps = {
  defaultCurve: string;
  onChange: (newCurve: string) => void;
};

function Curve({ defaultCurve, onChange }: CurveProps) {
  const canvasRef = React.useRef<HTMLCanvasElement>(null);
  const codeRef = React.useRef<HTMLDivElement>(null);

  React.useEffect(() => {
    if (canvasRef.current && codeRef.current) {
      createCeaser(canvasRef.current, codeRef.current, defaultCurve, onChange);
    }
  }, [codeRef, canvasRef]);

  return (
    <Box css={{ position: 'relative', WebkitUserSelect: 'none', mb: '$5' }}>
      <Box css={{ display: 'block' }} as="canvas" width="200" height="250" ref={canvasRef} />
      <Text
        size="1"
        ref={codeRef}
        css={{
          left: 0,
          bottom: 0,
          fontFamily: '$mono',
          position: 'absolute',
          WebkitUserSelect: 'text',
          width: 200,
        }}
      />
    </Box>
  );
}
