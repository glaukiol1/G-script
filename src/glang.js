
/**
 * @description
 * This is the main
 * glang file.
 * This is where all of the files will come together
 * to run a .g file.
 */

const fs = require('fs')
const path = require('path')

class Interpreter {
    constructor(file_name,options) {
        this.options = options;
        this.options.indexOf('verbose')!==-1?console.log('Reading File'):''
        this.file = fs.readFileSync(path.join(__dirname, file_name), 'utf8')
        this.options.indexOf('verbose')!==-1?console.log('Read File'):''
        this.main()
    }

    main = () => {
        console.log(this.file)
    }
}

const pvg = process.argv;
const pvgl = process.argv.length
const opt = pvg[pvgl-2];

if (pvg[pvgl-1].indexOf('.g')!==-1) {
    new Interpreter(pvg[pvgl-1]);
} else {
    throw Error(`The argument at position [-1] does not contain ".g"! FATAL`)
}
