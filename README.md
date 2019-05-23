> WIP

# Radix

This repository is a [monorepo](https://github.com/babel/babel/blob/master/doc/design/monorepo.md) powered by [Lerna](https://github.com/lerna/lerna) and [yarn workspaces](https://yarnpkg.com/lang/en/docs/cli/workspaces/).

## Contributing

There are many ways to contribute to the Radix and it's packages. Please first [create an issue](https://github.com/modulz/radix/issues/new) with your proposal, and from there we can start a conversation.

#### Getting Started

Bootstrap the repo by simply running:

```shell
yarn             # Installs dependencies and links packages
yarn start       # Develop Radix & it's Website
```

**Other Packages**

Check the `readme.md` of other packages, like `@modulz/radix-icons`, to get more details on contributing.

#### Publishing

We use `lerna publish` for managing the versions of packages in the monorepo. Since we also use [conventional-commits](https://www.conventionalcommits.org), changelogs will be generated automatically.

Once all commits have been made, from the root of the monorepo simply run:

```shell
yarn release         # prompts modified packages, generates changelogs and publishes to npm
yarn release:github  # does same as above, but also generates a github release
```

> _Please [follow these instructions](https://github.com/lerna/lerna/tree/master/commands/version#--github-release) by Lerna to authenticate for Github Releases._

### License

MIT © [Modulz](https://modulz.app)
