#!/usr/bin/env node
const cmd = require('commander');

const cmdInstallAction = require('./actions/cmd-install-action');


cmd
    .action((cmdName, opts) => {
        cmdInstallAction(cmd.args);
    })
    .parse(process.argv);

