# Winston Logical Config

See [Logical Config](https://github.com/nathan-fiscaletti/logical-config) for more information.

## Install

```sh
$ yarn add winston-logical-config
```

## Example

`config.yaml`
```yaml
level: 'info'
levels: '{winston.config.npm.levels}'
format: '{winston.format.simple}'
transports:
  - '{winston.transports.Console;[{"level":"info"}]}'
exitOnError: true
silent: false
```

`example.js`
```js
const WinstonLogicalConfig = require('winston-logical-config');

const main() => async () => {
    const logger = await WinstonLogicalConfig
                     .createLoggerFromYAMLFile('./example.yaml');

    logger.info('test');
};

main();
```