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

const gray = {
  start: 'hsl(206, 20%, 98.8%)',
  end: 'hsl(206, 10%, 80.0%)',
  curve: '0.630, 0.575, 0.495, 0.115',

  // You can override scale steps from 1 to 9 like this:
  // overrides: {
  //   8: 'hsl(0, 100%, 50%)',
  // },
};

const red = {
  start: 'hsl(351, 100%, 98.5%)',
  end: 'hsl(355, 82%, 71.7%)',
  curve: '0.655, 0.340, 0.800, 0.510',
  overrides: {},
};

const crimson = {
  start: 'hsl(332, 100%, 98.5%)',
  end: 'hsl(336, 80%, 70.0%)',
  curve: '0.655, 0.325, 0.815, 0.480',
  overrides: {},
};

const pink = {
  start: 'hsl(322, 100%, 98.5%)',
  end: 'hsl(322, 84%, 68.9%)',
  curve: '0.700, 0.370, 0.820, 0.450',
  overrides: {},
};

const purple = {
  start: 'hsl(280, 100%, 99.0%)',
  end: 'hsl(272, 66%, 68.1%)',
  curve: '0.700, 0.415, 0.925, 0.540',
  overrides: {},
};

const violet = {
  start: 'hsl(252, 100%, 99.0%)',
  end: 'hsl(252, 82%, 72.2%)',
  curve: '0.690, 0.375, 0.745, 0.465',
  overrides: {},
};

const indigo = {
  start: 'hsl(226, 100%, 99.0%)',
  end: 'hsl(226, 76%, 70.2%)',
  curve: '0.585, 0.305, 0.770, 0.490',
};

const blue = {
  start: 'hsl(206, 100%, 98.8%)',
  end: 'hsl(206, 97%, 68.3%)',
  curve: '0.695, 0.390, 0.695, 0.505',
  overrides: {},
};

const turquoise = {
  start: 'hsl(185, 78%, 97.8%)',
  end: 'hsl(188, 68%, 59.2%)',
  curve: '0.765, 0.485, 0.805, 0.740',
  overrides: {},
};

const teal = {
  start: 'hsl(165, 100%, 97.5%)',
  end: 'hsl(172, 54%, 50.0%)',
  curve: '0.690, 0.315, 0.860, 0.620',
  overrides: {},
};

const green = {
  start: 'hsl(130, 100%, 97.5%)',
  end: 'hsl(144, 48%, 55.8%)',
  curve: '0.645, 0.260, 0.860, 0.630',
  overrides: {},
};

const lime = {
  start: 'hsl(85, 86%, 96.5%)',
  end: 'hsl(76, 74%, 48.9%)',
  curve: '0.425, 0.150, 0.860, 0.605',
  overrides: {},
};

const yellow = {
  start: 'hsl(55, 100%, 95.5%)',
  end: 'hsl(52, 88%, 51.7%)',
  curve: '0.830, 0.585, 0.660, 0.820',
  overrides: {},
};

const orange = {
  start: 'hsl(40, 100%, 97.0%)',
  end: 'hsl(36, 96%, 53.9%)',
  curve: '0.555, 0.270, 0.710, 0.510',
  overrides: {},
};

const brown = {
  start: 'hsl(30, 75%, 98.0%)',
  end: 'hsl(28, 61%, 61.6%)',
  curve: '0.700, 0.415, 0.745, 0.465',
  overrides: {},
};

const bronze = {
  start: 'hsl(18, 100%, 98.5%)',
  end: 'hsl(16, 39%, 64.0%)',
  curve: '0.590, 0.415, 0.720, 0.475',
  overrides: {},
};

const gold = {
  start: 'hsl(50, 75%, 98.0%)',
  end: 'hsl(36, 37%, 60.0%)',
  curve: '0.700, 0.415, 0.745, 0.465',
  overrides: {},
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
