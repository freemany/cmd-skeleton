const colours = require('colors');
const {getArgs} = require('./../lib/utils');

async function showPrompts() {
    const life = await require('./../prompts/cmd-install-life.js');
    const age = await require('./../prompts/cmd-install-age.js');

    return {meaning: life.meaning, age: age.age};
};

const cmdInstallAction = (args) => {
    args = getArgs(args);

    (async () => {
        const answer = await showPrompts();
        console.log(answer.meaning.red, ('' + answer.age).blue, args.length);
    })();
};

module.exports = cmdInstallAction;