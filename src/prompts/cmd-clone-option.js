const prompts = require('prompts');

module.exports = prompts({
    type: 'select',
    name: 'colour',
    message: 'Pick a color',
    choices: [
        { title: 'Red', value: 'red' },
        { title: 'Green', value: 'green', disabled: true },
        { title: 'Blue', value: 'blue' }
    ],
    initial: 1
});




