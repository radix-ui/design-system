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
const sat_rate = 100;
const modifier = 10;

// Generate 7 steps only. Steps 8 and 9 aren't generated.
const steps = 7;

const stepsToHide: number[] = [];

const gray = {
  start: 'hsl(208, 7%, 10%)',
  end: 'hsl(206, 5.5%, 28%)',
  curve: '0.555, 0.540, 0.695, 0.295',
  overrides: {
    8: 'hsl(206, 6%, 43.9%)',
  },
};

const red = {
  start: 'hsl(352, 45%, 10.8%)',
  end: 'hsl(353, 80%, 30%)',
  curve: '0.655, 0.340, 0.800, 0.510',
  overrides: {
    9: 'hsl(358, 100%, 68%)',
  },
};

const crimson = {
  start: 'hsl(336, 51%, 10.2%)',
  end: 'hsl(336, 80%, 36%)',
  curve: '0.655, 0.325, 0.815, 0.480',
  overrides: {
    9: 'hsl(339, 90%, 63%)',
  },
};

const pink = {
  start: 'hsl(315, 46%, 10.2%)',
  end: 'hsl(322, 72%, 43%)',
  curve: '0.700, 0.370, 0.820, 0.450',
  overrides: {
    9: 'hsl(325, 80%, 65%)',
  },
};

const purple = {
  start: 'hsl(285, 40%, 10.8%)',
  end: 'hsl(272, 55%, 42%)',
  curve: '0.700, 0.415, 0.925, 0.540',
  overrides: {
    9: 'hsl(275, 70%, 72%)',
  },
};

const violet = {
  start: 'hsl(252, 40%, 13%)',
  end: 'hsl(252, 58%, 50%)',
  curve: '0.635, 0.430, 0.745, 0.465',
  overrides: {
    9: 'hsl(250, 90%, 78%)',
  },
};

const indigo = {
  start: 'hsl(227, 48%, 12.5%)',
  end: 'hsl(225, 62%, 48%)',
  curve: '0.585, 0.305, 0.770, 0.490',
  overrides: {
    9: 'hsl(225, 100%, 75%)',
  },
};

const blue = {
  start: 'hsl(209, 85%, 10%)',
  end: 'hsl(208, 95%, 40%)',
  curve: '0.695, 0.390, 0.695, 0.505',
  overrides: {
    9: 'hsl(206, 98%, 66%)',
  },
};

const turquoise = {
  start: 'hsl(192, 100%, 8%)',
  end: 'hsl(190, 90%, 30%)',
  curve: '0.765, 0.485, 0.805, 0.740',
  overrides: {
    9: 'hsl(188, 94%, 48%)',
  },
};

const teal = {
  start: 'hsl(168, 95%, 7.5%)',
  end: 'hsl(173, 85%, 28.5%)',
  curve: '0.690, 0.315, 0.860, 0.620',
  overrides: {
    9: 'hsl(174, 100%, 40%)',
  },
};

const green = {
  start: 'hsl(140, 55%, 8.8%)',
  end: 'hsl(145, 60%, 38%)',
  curve: '0.650, 0.265, 0.835, 0.450',
  overrides: {
    9: 'hsl(130, 61%, 56%)',
  },
};

const lime = {
  start: 'hsl(76, 95%, 6.5%)',
  end: 'hsl(76, 85%, 40%)',
  curve: '0.640, 0.165, 0.915, 0.470',
  overrides: {
    9: 'hsl(75, 80%, 52%)',
  },
};

const yellow = {
  start: 'hsl(40, 90%, 8%)',
  end: 'hsl(50, 100%, 45%)',
  curve: '0.920, 0.280, 0.900, 0.680',
  overrides: {
    9: 'hsl(50, 100%, 49%)',
  },
};

const orange = {
  start: 'hsl(25, 55%, 10%)',
  end: 'hsl(38, 90%, 48%)',
  curve: '0.770, 0.205, 0.910, 0.465',
  overrides: {
    9: 'hsl(38, 100%, 50%)',
  },
};

const brown = {
  start: 'hsl(15, 40%, 11%)',
  end: 'hsl(28, 48%, 45%)',
  curve: '0.700, 0.415, 0.745, 0.465',
  overrides: {
    9: 'hsl(28, 58%, 60%)',
  },
};

const bronze = {
  start: 'hsl(10, 20%, 11.5%)',
  end: 'hsl(18, 25%, 45%)',
  curve: '0.590, 0.415, 0.720, 0.475',
  overrides: {
    9: 'hsl(18, 45%, 63%)',
  },
};

const gold = {
  start: 'hsl(42, 15%, 10%)',
  end: 'hsl(36, 28%, 45.0%)',
  curve: '0.700, 0.415, 0.745, 0.465',
  overrides: {
    9: 'hsl(35, 48%, 64%)',
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
  // Contrast of white on 800 background
  white: number;
  // Contrast of black on 800 background
  black: number;
};

function Scale({ name, scale }: ScaleProps) {
  const [isEnabled, setIsEnabled] = React.useState(true);
  const [showCode, setShowCode] = React.useState(false);
  const [curve, setCurve] = React.useState(scale.curve);
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

    const startColor = chroma(scale.start);
    const endColor = chroma(scale.end);

    const hsvScale = {
      hue_start: startColor.hsv()[0],
      sat_start: startColor.hsv()[1] * 100,
      lum_start: startColor.hsv()[2] * 100,
      hue_end: endColor.hsv()[0],
      sat_end: endColor.hsv()[1] * 100,
      lum_end: endColor.hsv()[2] * 100,
    };

    let newColors = generate({
      specs: {
        steps,
        sat_rate,
        modifier,
        ...hsvScale,
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
        hueRange: [chroma(scale.start).hsv()[0], chroma(scale.end).hsv()[0]],
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
          hueRange: [chroma(scale.start).hsv()[0], chroma(scale.end).hsv()[0]],
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
        white: chroma.contrast(step800, '#ffffff'),
        black: chroma.contrast(step800, '#000000'),
      };

      setContrastInfo(contrastInfo);
    }
  }, [isEnabled]);

  React.useEffect(() => {
    if (isEnabled) {
      colors.forEach((color, index) => {
        document.documentElement.style.setProperty(`--colors-${name}${index + 1}00`, color.hex);
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
          white: chroma.contrast(step800, '#ffffff'),
          black: chroma.contrast(step800, '#000000'),
        };

        setContrastInfo(contrastInfo);
      }
    }
  }, [isEnabled, name, colors]);

  React.useEffect(() => {
    [1, 2, 3, 4, 5, 6, 7, 8, 9]
      .filter((step) => stepsToHide.includes(step))
      .forEach((step) => {
        const computedStyles = getComputedStyle(document.documentElement);
        document.documentElement.style.setProperty(
          `--colors-${name}${step}00`,
          computedStyles.getPropertyValue(`--colors-loContrast`)
        );
      });
  }, [colors]);

  return (
    <Box css={{ m: '$3' }}>
      <Flex css={{ my: '$2', color: '$hiContrast' }}>
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
                        ? 'black'
                        : 'white'
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
                    (contrastInfo['white'] >= 3
                      ? `AA Large Text Pass ${contrastInfo['white'].toFixed(2)}`
                      : `AA Large Text Fail ${contrastInfo['white'].toFixed(2)}`)
                }
                {
                  // Lime, yellow, orange 800 contrast with black
                  index === 7 &&
                    contrastInfo &&
                    (name === 'lime' || name === 'yellow' || name === 'orange') &&
                    (contrastInfo['black'] >= 3
                      ? `AA Large Text Pass ${contrastInfo['black'].toFixed(2)}`
                      : `AA Large Text Fail ${contrastInfo['black'].toFixed(2)}`)
                }
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
