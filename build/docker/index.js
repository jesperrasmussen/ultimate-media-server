const fs = require('fs');
const cwd = require('cwd');

const y2j  = require('json2yaml');
const chalk = require('chalk');

const cfgPath = cwd('build/docker/docker-compose.json');
const dcPath = cwd('docker-compose.yml');
const dcObj = require(cfgPath);

console.log('Converting to yaml...');
const yamlStr = y2j.stringify(dcObj);

console.log('Writing to ' + dcPath + '...');
fs.writeFileSync(dcPath, yamlStr);
console.log(chalk.green('Successfully generated docker-compose.yml'));
