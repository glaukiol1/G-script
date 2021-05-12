#!/usr/bin/node
const Interpreter = require('./glang')
const pvg = process.argv;
const pvgl = process.argv.length
const opt = pvg[pvgl-3];
const typ = pvg[pvgl-2];

if (typ.toLowerCase() === 'run') {
    if (pvg[pvgl-1].indexOf('.g')!==-1) {
        new Interpreter(pvg[pvgl-1], opt);
    } else if (!opt==="line"){
        console.log('\n\t'+Error(`ERROR FATAL: The argument at position [-1] is not a glang file (.g).\n`).message)
    }
} else if (pvg[pvgl-1].toLowerCase() === 'shell') {
    require('./shell')
}
    


