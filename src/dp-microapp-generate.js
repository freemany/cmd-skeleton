#!/usr/bin/env node

const cmd = require('commander');
const {getArgs} = require('./lib/utils');
const colors = require('colors');
const dpMicroappGenerateAction = require('./actions/dp-microapp-generate');


cmd
    .action((cmdName, opts) => {
        if ('string' === typeof opts) {
            console.log(('Only one argument in this command, `' + opts + '` is invalid, please try again').red);
            return;
        }

        dpMicroappGenerateAction(cmd.args)
    })
    .parse(process.argv);