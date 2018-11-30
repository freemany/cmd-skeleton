const prompts = require('prompts');

module.exports = prompts({
    type: 'text',
    name: 'value',
    message: 'What is the base url?'
});
