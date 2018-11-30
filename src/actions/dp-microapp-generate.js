const colours = require('colors');
const {getArgs} = require('./../lib/utils');

async function showPrompts() {
    const baseUrl = await require('./../prompts/dp-microapp-generate-base_url.js');
    const runInstall = await require('./../prompts/dp-microapp-generate-run_install.js');

    return {baseUrl: baseUrl.value, runInstall: runInstall.value};
};

const dpMicroappGenerate = (args) => {

    const argv = getArgs(args);

    (async () => {
        const answer = await showPrompts();
        console.log('Action: microapp name: ' + argv[0].yellow + ' Base url = ' + answer.baseUrl.green + ', Run npm install: ' + ('' + answer.runInstall).blue);

        const servicePromise = require('./../services/dp-microa-generate-service');
        (async () => {
            const result = await servicePromise;

            if (true === result) {
                console.log('Success!!!'.green);
            } else {
                console.log('Failed'.red);
            }
        })();
    })();
};

module.exports = dpMicroappGenerate;