const LogicalConfig = require('logical-config');
const winston = require('winston');

const yaml = require('js-yaml');
const fs   = require('fs');

module.exports = {
    createLogger: async (config, data) => {
        const parsed = await LogicalConfig.fill({
            input: config,
            data: { winston, ...data }
        });

        return winston.createLogger(parsed);
    },

    createLoggerFromYAMLFile: async (file, data) => {
        const parsed = await LogicalConfig.fill({
            input: yaml.load(fs.readFileSync(file, 'utf8')),
            data: { winston, ...data }
        });

        return winston.createLogger(parsed);
    },

    createLoggerFromJSONFile: async (file, data) => {
        const parsed = await LogicalConfig.fill({
            input: require(`${file}`),
            data: { winston, ...data }
        });

        return winston.createLogger(parsed);
    }
};
