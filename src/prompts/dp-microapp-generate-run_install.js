const prompts = require('prompts');

module.exports = prompts({
    type: 'confirm',
    name: 'value',
    message: 'Run npm install after clone?',
    initial: true,
});