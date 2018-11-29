const prompts = require('prompts');

module.exports = prompts({
    type: 'confirm',
    name: 'confirm',
    message: 'Are you sure ?',
    initial: true,
});