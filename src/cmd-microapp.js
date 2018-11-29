#!/usr/bin/env node
const cmd = require('commander');

cmd
    .description('cmd microapp')
    .command('generate [name]', 'install one or more packages').alias('g')
    .parse(process.argv);