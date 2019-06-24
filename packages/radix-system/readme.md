> WIP

# Radix System

```sh
yarn add @modulz/radix-system
```

#### Theme-aware responsive style props for building design systems

Built on top of [@styled-system/core](https://github.com/styled-system/styled-system/tree/master/packages/core) by [Brent Jackson](https://github.com/jxnblk).

### Install it

Radix System is currently under development, but if you'd like to use it anyway:

```js
# npm
npm install @modulz/radix-system
```

```js
# yarn
yarn add @modulz/radix-system
```

### Features

Radix System is an alternative to Styled System, built on the same [Core package](https://github.com/styled-system/styled-system/tree/master/packages/core) but with a few tweaks:

- Typescript support
- style functions are independent
- `color` style function has been renamed to `textColor`
- `space` has been split into `margin` and `space`
- Theme-aware `variant` API

### Use it

Import style functions:

```js
import styled from 'styled-components';
import { margin, backgroundColor, compose } from '@modulz/radix-system';

const styleProps = compose(
  margin,
  backgroundColor
);
const Box = styled('div')(styleProps);

const App = () => (
  <Box my={4} bg="blue">
    Hey there 👋
  </Box>
);
```

With Typescript:

```js
import styled from 'styled-components';
import {
  margin,
  MarginProps,
  backgroundColor,
  BackgroundColorProps,
  compose,
} from '@modulz/radix-system';

const styleProps = compose(
  margin,
  backgroundColor
);
type BoxProps = MarginProps & BackgroundColorProps;
const Box = styled('div') < BoxProps > styleProps;

const App = () => (
  <Box my={4} bg="blue">
    Hey there 👋
  </Box>
);
```

### Docs

Proper docs coming soon.

---

### License

MIT © [Modulz](https://modulz.app)
