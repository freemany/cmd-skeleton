const Spinner = require('cli-spinner').Spinner;
const spinner = new Spinner('\033[0;33mProcessing... %s\033[0m');

spinner.setSpinnerString('|/-\\');
spinner.start();

const servicePromise = new Promise((resolve) => {
        setTimeout(() => {
        spinner.stop(true);
        console.log('Job done!'.blue);

        resolve(true);
    }, 2000);
});

module.exports = servicePromise;