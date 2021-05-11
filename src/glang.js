
/**
 * @description
 * This is the main
 * glang file.
 * This is where all of the files will come together
 * to run a .g file.
 */


/*
    Include Modules
*/
const path = require('path')
const fs = require('fs')
const Variable = require('./Variable')

class Interpreter {
    constructor(file_name,options) {
        this.options = options;
        this.options.indexOf('verbose')!==-1?console.log('Reading File'):''
        this.file = fs.readFileSync(path.join(__dirname, file_name), 'utf8')
        this.options.indexOf('verbose')!==-1?console.log('Read File'):''
        this.vars = {} // Define the variables holder
        this.main()
    }

    lineTypeHandler(line) {
        let variableRegex = /^var|const .* = .*$/i;
        // Object.keys(this.vars).forEach(key=>{
        //     if(line.indexOf(key)!==-1){
        //         line = line.replace(key, this.vars[key].value)
        //     }
        // })
        if(variableRegex.test(line)) {
            this.variableHandler(line)
        } else {
            if (this.options.indexOf('dev:true')!==-1) {
                console.log(Error(`Unexpected Expression`).message+' LINE: '+line)
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
        const indexOfType = line.indexOf(var_type)+var_type.length+1;
        const indexOfAssigner = line.indexOf('=');
        const var_name = line.substring(indexOfType,indexOfAssigner);
        var var_value = line.substring(indexOfAssigner+1)
        var_value=var_value.replace(' ', '')
        this.vars[var_name] = new Variable(var_name,var_value,var_type)
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
