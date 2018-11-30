#!/usr/bin/env node
const cmd = require('commander');

cmd
    .description('Micro app commands')
    .command('generate [name]', 'install micro app skeleton').alias('g')
    .parse(process.argv);