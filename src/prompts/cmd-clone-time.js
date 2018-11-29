const prompts = require('prompts');

module.exports = prompts({
    type: 'text',
    name: 'time',
    message: 'What time will the clone commend?'
});