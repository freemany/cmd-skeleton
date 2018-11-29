#!/usr/bin/env node
const cmd = require('commander');

const cmdCloneAction = require('./actions/cmd-clone-action');


cmd
    .action((cmdName, opts) => {
        cmdCloneAction(cmd.args);
    })
    .parse(process.argv);