# Winston Logical Config

See [Logical Config](https://github.com/nathan-fiscaletti/logical-config) for more information.

## Install

```sh
$ yarn add winston-logical-config
```

## Example

`config.yaml`
```yaml
level: 'debug'
levels: '{winston.config.npm.levels}'
format: '{winston.format.cli;[{"colors":{"info":"blue","error":"red"}}]}'
transports:
  - '{winston.transports.Console;[{"level":"debug"}]}'
exitOnError: true
silent: false
```

`example.js`
```js
const WinstonLogicalConfig = require('./');

const main = async () => {
    const logger = await WinstonLogicalConfig
                     .createLoggerFromYAMLFile('./example.yaml');

    logger.info('test');
};

main();
```