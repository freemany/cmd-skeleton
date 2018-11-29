const prompts = require('prompts');

module.exports = prompts({
        type: 'number',
        name: 'age',
        message: 'how old are you?'
 });