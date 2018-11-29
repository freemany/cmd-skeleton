const colours = require('colors');
const {getArgs} = require('./../lib/utils');

async function showPrompts() {
    const what = await require('./../prompts/cmd-clone-name.js');
    const when = await require('./../prompts/cmd-clone-time.js');
    const colour = await require('./../prompts/cmd-clone-option.js');
    const pets = await require('./../prompts/cmd-clone-pet.js');
    const confirm = await require('./../prompts/cmd-clone-confirm.js');

    return {name: what.name, time: when.time, confirm: confirm.confirm, colour: colour.colour, pet: pets.value};
};

const cmdInstallAction = (args) => {
    args = getArgs(args);

    (async () => {
        const answer = await showPrompts();
        console.log(answer.name.red, ('' + answer.time).blue, (''+ answer.confirm).green, answer.colour, answer.pet, args.length);
        console.log('agrvs: ', args);
    })();
};

module.exports = cmdInstallAction;