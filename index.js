const LogicalConfig = require('logical-config');
const winston = require('winston');

const yaml = require('js-yaml');
const fs   = require('fs');

module.exports = {
    createLogger: async (config, map) => {
        const parsed = await LogicalConfig.fill(
            config, { winston, ...map }
        );

        return winston.createLogger(parsed);
    },

    createLoggerFromYAMLFile: async (file, map) => {
        const parsed = await LogicalConfig.fill(
            yaml.load(fs.readFileSync(file, 'utf8')),
            { winston, ...map }
        );

        return winston.createLogger(parsed);
    },

    createLoggerFromJSONFile: async (file, map) => {
        const parsed = await LogicalConfig.fill(
            require(`${file}`),
            { winston, ...map }
        );

        return winston.createLogger(parsed);
    }
};

const main = async () => {
    // const conf = {
    //     level: 'info',
    //     levels: '{winston.config.npm.levels}',
    //     format: '{winston.format.simple}',
    //     transports: [ '{winston.transports.Console;[{"level":"info"}]}' ],
    //     exitOnError: true,
    //     silent: false
    // };
    
    const logger = await WinstonLogicalConfig.createLoggerFromYAMLFile('./example.yaml');

    logger.info("test");
};

main();