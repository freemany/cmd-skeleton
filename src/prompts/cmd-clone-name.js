const prompts = require('prompts');

module.exports = prompts({
    type: 'text',
    name: 'name',
    message: "Please choose one of these names for your project ?",
    validate: value => ['hello', 'hola', 'hi'].indexOf(value) < 0 ? 'Please choose hello, hola or hi' : true
});