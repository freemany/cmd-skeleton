const prompts = require('prompts');

module.exports = prompts({
    type: 'text',
    name: 'meaning',
    message: 'What is the meaning of life?'
});
