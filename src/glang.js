
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
const Type = require('./Type')

class Interpreter {
    constructor(file_name,options) {
        this.options = options;
        this.options.indexOf('verbose')!==-1?console.log('Reading File'):''
        this.file = fs.readFileSync(path.join(__dirname, file_name), 'utf8')
        this.options.indexOf('verbose')!==-1?console.log('Read File'):''
        this.vars = {} // Define the variables holder
        this.main()
    }

    lineTypeHandler(line,i) {
        let variableRegex = /^var|const .* = .*$/i;
        var dontError = false;
        if(variableRegex.test(line)) {
            this.variableHandler(line,i)
        } else {
            Object.keys(this.vars).forEach(key=>{
                if(line.indexOf(key)!==-1){
                    // line = line.replace(key, this.vars[key].value)
                    console.log(this.vars[key].value)
                    dontError=true;
                }
            })
            var lineType = new Type(line)
            if(lineType.main('silence')!==`Not valid type!`) {
                lineType.print()
            } else if (!dontError) {
                if (this.options.indexOf('dev:true')!==-1) {
                    console.log(Error(`Unexpected Expression`).message+' LINE: '+line + ' index: '+i)
                } else {
                    console.log(Error(`\nERROR: Unexpected Expression\n\t Line Contents: ${line}\n\t Line Number: ${i+1}`).message)
                }
            }
        }
    }

    variableHandler(line,i) {
        var var_type;
        if(line.indexOf('var')!==-1){
            var_type='var'
        } else if (line.indexOf('const')!==-1) {
            var_type='const'
        }
        const indexOfType = line.indexOf(var_type)+var_type.length+1;
        const indexOfAssigner = line.indexOf('=');
        const var_name = line.substring(indexOfType,indexOfAssigner-1);
        var var_value = line.substring(indexOfAssigner+1)
        for(let i=0;i<5;i++){
            var_value=var_value.replace(' ', '')
        }
        if(this.vars[var_name]){
            this.vars[var_name].setValue(var_value)
        } else {
            try {
                this.vars[var_name] = new Variable(var_name,var_value,var_type)
            } catch (err) {
                console.log(
                    err.message,
                    '\n\t Line Contents: '+line,
                    '\n\t Line Number: '+(i+1)
                )
                process.exit(1)
            }
        }
    }

    main() {
        const lines = this.file.split('\n')
        var i=0
        lines.forEach(line=>{
            this.lineTypeHandler(line,i)
            i++
        })
    }
}

const pvg = process.argv;
const pvgl = process.argv.length
const opt = pvg[pvgl-2];

if (pvg[pvgl-1].indexOf('.g')!==-1) {
    new Interpreter(pvg[pvgl-1], opt);
} else {
    console.log('\n\t'+Error(`ERROR FATAL: The argument at position [-1] is not a glang file (.g).\n`).message)
}
