> WIP

# Radix System

Radix System is built on top of the popular [Styled System](https://github.com/styled-system/styled-system) library by [Brent Jackson](https://github.com/jxnblk).

Since Styled System releasesd v5, it broke down its library into multiple packages, one of them is `@styled-system/core`. This package exposes all the functions needed to built your own API on top of Styled System, and this is exactly what Radix System does.

The main difference in the Radix System API vs Styled System's are:

- All functions are independent
- Includes Typescript typings
- `color` prop has been renamed to `textColor`
- Different implementation of the `variant` API

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
