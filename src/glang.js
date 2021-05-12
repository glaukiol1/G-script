
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
        this.options!=='line'?this.file = fs.readFileSync(path.join(process.cwd(), file_name), 'utf8'):''
        this.options.indexOf('verbose')!==-1?console.log('Read File'):''
        this.vars = {} // Define the variables holder
        this.options!=='line'?this.main():''
    }

    lineTypeHandler(line,i) {
        let variableRegex = /[var|const] .* = .*$/i;
        let mathRegex = /[0-9 ].*[+|*|/|-| ][0-9].*$/i
        let match = line.match(mathRegex);
        if(match) {
            if(!match[0].split('=')[1]) {
                line = line.replace(match[0], eval(match[0]))
            } else {
                // this is one big line
                line = line.replace(match[0].split('=')[1], match[0].split('=')[1].replace(match[0].split('=')[1], eval(match[0].split('=')[1])))
            }
        }
        console.log(variableRegex.test(line))
        var dontError = false;
        if(variableRegex.test(line)) {
            this.variableHandler(line,i)
        } else {
            Object.keys(this.vars).forEach(key=>{
                if(line.indexOf(key)!==-1){
                    // line = line.replace(key, this.vars[key].value)
                    if(line.indexOf('.')!==-1){
                        const action=line.split('.')[1]
                        var value = this.vars[key].getValue()
                        if(line.indexOf('(')!==-1){
                            const functionname = line.split('.')[1].split('(')[0]
                            var args = line.split('.')[1].split('(')[1]
                            args = args.substring(0, args.length-1)
                            const finalArgs = []
                            args.split(',', 50).forEach(arg=>{
                                if (!isNaN(arg)){
                                    finalArgs.push(parseInt(arg))
                                } else {
                                    finalArgs.push(arg)
                                }
                            })
                            console.log(value[functionname](...finalArgs))
                        } else {
                            console.log(value[action])
                        }
                    } else {
                        console.log(this.vars[key].value)
                    }
                    dontError=true;
                }
            })
            var lineType = new Type(line)
            if(lineType.main('silence')!==`Not valid type!`) {
                console.log(lineType.main().value);
            } else if (!dontError) {
                if (this.options.indexOf('dev:true')!==-1) {
                    console.log(Error(`Unexpected Expression`).message+' LINE: '+line + ' index: '+i)
                } else {
                    console.log(Error(`\nSyntaxError: ${line} is not defined\n\t Line Contents: ${line}\n\t Line Number: ${i+1}`).message)
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
            try {
                this.vars[var_name].setValue(var_value)
            } catch (err) {
                console.error(
                    err.message,
                    '\n\t Line Contents: '+line,
                    '\n\t Line Number: '+(i+1)
                )
                this.options!=='line'?process.exit(1):console.log('\n\t -- In Shell mode, not exiting.')
            }
        } else {
            try {
                this.vars[var_name] = new Variable(var_name,var_value,var_type)
            } catch (err) {
                console.error(
                    err.message,
                    '\n\t Line Contents: '+line,
                    '\n\t Line Number: '+(i+1)
                )
                this.options!=='line'?process.exit(1):console.log('\n\t -- In Shell mode, not exiting.')
            }
        }
    }

    main(line) {
        if(this.options === 'line') {
            this.lineTypeHandler(line,i)
        } else {
            const lines = this.file.split('\n')
            var i=0
            lines.forEach(line=>{
                this.lineTypeHandler(line,i)
                i++
            })
        }
    }
}
module.exports = Interpreter;