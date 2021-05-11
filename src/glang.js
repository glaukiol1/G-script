
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

    lineTypeHandler(line) {
        let variableRegex = /^var|const .* = .*$/i;
        if(variableRegex.test(line)) {
            this.variableHandler(line)
        } else {
            if (this.options.indexOf('dev:true')!==-1) {
                console.log(Error(`Unexpected Expression`).message)
            } else {
                throw Error(`Unexpected Expression`)
            }
        }
    }

    variableHandler(line) {
        var var_type;
        if(line.indexOf('var')!==-1){
            var_type='var'
        } else if (line.indexOf('const')!==-1) {
            var_type='const'
        }
        console.log(var_type)
    }

    main() {
        const lines = this.file.split('\n')
        lines.forEach(line=>{
            this.lineTypeHandler(line)
        })
    }
}

const pvg = process.argv;
const pvgl = process.argv.length
const opt = pvg[pvgl-2];

if (pvg[pvgl-1].indexOf('.g')!==-1) {
    new Interpreter(pvg[pvgl-1], opt);
} else {
    throw Error(`The argument at position [-1] does not contain ".g"! FATAL`)
}
