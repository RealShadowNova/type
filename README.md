<div align="center">

![Sapphire Logo](https://cdn.skyra.pw/gh-assets/sapphire-banner.png)

# @sapphire/type

**A type detection utility for JavaScript.**

[![GitHub](https://img.shields.io/github/license/sapphiredev/type)](https://github.com/sapphiredev/type/blob/main/LICENSE.md)
[![codecov](https://codecov.io/gh/sapphiredev/type/branch/main/graph/badge.svg?token=hygqPZuVZ5)](https://codecov.io/gh/sapphiredev/type)
[![npm bundle size](https://img.shields.io/bundlephobia/min/@sapphire/type?logo=webpack&style=flat-square)](https://bundlephobia.com/result?p=@sapphire/type)
[![npm](https://img.shields.io/npm/v/@sapphire/type?color=crimson&logo=npm&style=flat-square)](https://www.npmjs.com/package/@sapphire/type)

</div>

**Table of Contents**

-   [@sapphire/type](#sapphiretype)
    -   [Description](#description)
    -   [Features](#features)
    -   [Installation](#installation)
    -   [Usage](#usage)
        -   [Basic Usage](#basic-usage)
    -   [Buy us some doughnuts](#buy-us-some-doughnuts)
    -   [Contributors ✨](#contributors-%E2%9C%A8)

## Description

Sometimes there is a need to know what a value's type of something is, this package exists to satisfy those needs by implementing a parser that can retrieve the type of the value recursively and process a string similar to TypeScript's types.

## Features

-   Written in TypeScript
-   Bundled with Rollup so it can be used in NodeJS and browsers
-   Offers CommonJS, ESM and UMD bundles
-   Fully tested

## Installation

```sh
yarn add @sapphire/type
# npm install @sapphire/type
```

## Usage

**Note:** While this section uses `require`, the imports match 1:1 with ESM imports. For example `const { Type } = require('@sapphire/type')` equals `import { Type } from '@sapphire/type'`.

**Note:** When using ESM syntax you can also default-import `Type` class: `import Type from '@sapphire/type'`.

**Note:** The internal functions of `getPromiseDetails` and `getProxyDetails` are also exported. If you don't know what these are, then you need not be concerned about this.

### Basic Usage

```typescript
// Import the Type class
const { Type } = require('@sapphire/type');

// Define a Type with an array of two numbers
const type = new Type([1, 2]);

console.log(type.toString());
// Logs: Array<number>
```

---

## Buy us some doughnuts

Sapphire Community is and always will be open source, even if we don't get donations. That being said, we know there are amazing people who may still want to donate just to show their appreciation. Thank you very much in advance!

We accept donations through Open Collective, Ko-fi, PayPal, Patreon and GitHub Sponsorships. You can use the buttons below to donate through your method of choice.

|   Donate With   |                       Address                       |
| :-------------: | :-------------------------------------------------: |
| Open Collective | [Click Here](https://sapphirejs.dev/opencollective) |
|      Ko-fi      |      [Click Here](https://sapphirejs.dev/kofi)      |
|     Patreon     |    [Click Here](https://sapphirejs.dev/patreon)     |
|     PayPal      |     [Click Here](https://sapphirejs.dev/paypal)     |

## Contributors ✨

Thanks goes to these wonderful people ([emoji key](https://allcontributors.org/docs/en/emoji-key)):

<!-- ALL-CONTRIBUTORS-LIST:START - Do not remove or modify this section -->
<!-- prettier-ignore-start -->
<!-- markdownlint-disable -->
<table>
  <tr>
    <td align="center"><a href="https://favware.tech/"><img src="https://avatars.githubusercontent.com/u/4019718?v=4?s=100" width="100px;" alt=""/><br /><sub><b>Jeroen Claassens</b></sub></a><br /><a href="https://github.com/sapphiredev/type/commits?author=favna" title="Code">💻</a></td>
    <td align="center"><a href="https://github.com/PyroTechniac"><img src="https://avatars.githubusercontent.com/u/39341355?v=4?s=100" width="100px;" alt=""/><br /><sub><b>Gryffon Bellish</b></sub></a><br /><a href="https://github.com/sapphiredev/type/commits?author=PyroTechniac" title="Code">💻</a></td>
    <td align="center"><a href="https://github.com/apps/depfu"><img src="https://avatars.githubusercontent.com/in/715?v=4?s=100" width="100px;" alt=""/><br /><sub><b>depfu[bot]</b></sub></a><br /><a href="#maintenance-depfu[bot]" title="Maintenance">🚧</a></td>
    <td align="center"><a href="https://github.com/apps/dependabot"><img src="https://avatars.githubusercontent.com/in/29110?v=4?s=100" width="100px;" alt=""/><br /><sub><b>dependabot[bot]</b></sub></a><br /><a href="#maintenance-dependabot[bot]" title="Maintenance">🚧</a></td>
    <td align="center"><a href="https://github.com/VoltrexMaster"><img src="https://avatars.githubusercontent.com/u/62040526?v=4?s=100" width="100px;" alt=""/><br /><sub><b>Voltrex</b></sub></a><br /><a href="https://github.com/sapphiredev/type/commits?author=VoltrexMaster" title="Code">💻</a></td>
    <td align="center"><a href="https://github.com/vladfrangu"><img src="https://avatars.githubusercontent.com/u/17960496?v=4?s=100" width="100px;" alt=""/><br /><sub><b>Vlad Frangu</b></sub></a><br /><a href="#maintenance-vladfrangu" title="Maintenance">🚧</a></td>
    <td align="center"><a href="https://github.com/apps/renovate"><img src="https://avatars.githubusercontent.com/in/2740?v=4?s=100" width="100px;" alt=""/><br /><sub><b>renovate[bot]</b></sub></a><br /><a href="#maintenance-renovate[bot]" title="Maintenance">🚧</a></td>
  </tr>
  <tr>
    <td align="center"><a href="https://github.com/Lioness100"><img src="https://avatars.githubusercontent.com/u/65814829?v=4?s=100" width="100px;" alt=""/><br /><sub><b>Lioness100</b></sub></a><br /><a href="https://github.com/sapphiredev/type/commits?author=Lioness100" title="Code">💻</a></td>
    <td align="center"><a href="https://github.com/RealShadowNova"><img src="https://avatars.githubusercontent.com/u/46537907?v=4?s=100" width="100px;" alt=""/><br /><sub><b>Hezekiah Hendry</b></sub></a><br /><a href="#tool-RealShadowNova" title="Tools">🔧</a></td>
  </tr>
</table>

<!-- markdownlint-restore -->
<!-- prettier-ignore-end -->

<!-- ALL-CONTRIBUTORS-LIST:END -->

This project follows the [all-contributors](https://github.com/all-contributors/all-contributors) specification. Contributions of any kind welcome!
