# Icon Library - SVG cleaner

[![Build Status](https://travis-ci.org/ovh-ux/ovh-iconlib-provider-svg-cleaner.svg?branch=master)](https://travis-ci.org/ovh-ux/ovh-iconlib-provider-svg-cleaner)
[![Coverage Status](https://coveralls.io/repos/github/ovh-ux/ovh-iconlib-provider-svg-cleaner/badge.svg?branch=master)](https://coveralls.io/github/ovh-ux/ovh-iconlib-provider-svg-cleaner?branch=master)

[![NPM](https://nodei.co/npm/ovh-iconlib-provider-storage-oss.png)](https://nodei.co/npm/ovh-iconlib-provider-svg-cleaner/)

SVG Cleaner Provider used to define a contract for all svg cleaning process in the Icon Library project.

## SvgCleanerBaseProvider

### Methods to implement

- `abstract` `class` SvgCleanerBaseProvider
    - `abstract` `function` clean(`string` svg)

### Implementations

- [Svgo](https://github.com/ovh-ux/ovh-iconlib-provider-svg-cleaner-svgo#readme) (ovh-iconlib-provider-svg-cleaner-svgo)

## License

See [`LICENSE`](LICENSE) file

---

# Svgo example

## Installation

```bash
npm install --save "ovh-iconlib-provider-svg-cleaner" "ovh-iconlib-provider-svg-cleaner-svgo"
```

## Configuration

```yaml
#config.yml
---
 svg-cleaner:
   default: svgo
   providers:
     -
       name: svgo
       type: ovh-iconlib-provider-svg-cleaner-svgo
       plugins:
         - ovh-iconlib-provider-svg-cleaner-svgo/lib/plugins/agressiveCollapseGroups
         - ovh-iconlib-provider-svg-cleaner-svgo/lib/plugins/removeClipPaths
         - ovh-iconlib-provider-svg-cleaner-svgo/lib/plugins/cleanStyles
```

## Usage

```js
// default instance loaded according to the configuration
const svg = require('ovh-iconlib-provider-svg-cleaner').getInstance();

const dirty = '<svg xmlns="http://www.w3.org/2000/svg">...</svg>';
const pristine = '<svg xmlns="http://www.w3.org/2000/svg">...</svg>';

svg.clean(dirty)
    .then(result => {
        if (result !== pristine) {
            throw new Error('something went wrong');
        }

        ...
    });
```
