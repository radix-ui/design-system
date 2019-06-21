> WIP

# Radix System

```sh
yarn add @modulz/radix-system
```

Radix System is built on top of the popular [Styled System](https://github.com/styled-system/styled-system) library by [Brent Jackson](https://github.com/jxnblk).

Styled System v5 now contains several sub-packages, one of them is `@styled-system/core`. This package exposes all the functions needed to built your own API on top of Styled System, and this is exactly what Radix System does.

Features of Radix System:

- style functions are independent
- each Style function has a Typescript interface
- `color` prop has been renamed to `textColor`
- `space` has been split into `margin` and `space`
- custom `variant` API implementation

The [Radix](https://modulz-radix.netlify.com/docs/getting-started) Design System is on top of this.

### Develop

#### Install dependencies

```sh
yarn
```

#### Watch compiled lib

```sh
yarn watch
```

> Useful when developing in `link` mode

### Build

#### Run build

```sh
yarn build
```

---

### License

MIT © [Modulz](https://modulz.app)
