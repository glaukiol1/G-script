const Type = require('./Type')

const restricedNames = [
    'var',
    '1',
    '2',
    '3',
    '4',
    '5',
    '6',
    '7',
    '8',
    '9',
    '0',
    'if',
    '=',
    ' ',
    '',
]
const regExpCheck = /"[A-Za-z0-9!@#\$%\^\&*\)\(+=._-]"/;
const regExpCheck2 = /[0-9!@#\$%\^\&*\)\(+=._-]/;
class Variable {
    constructor(var_name, var_value, var_type) {
        if (restricedNames.indexOf(var_name)!==-1) {
            throw new Error(`Variable name is rescricted.`)
        } else if (regExpCheck.test(var_name)||regExpCheck2.test(var_name)) {
            throw new Error(`Variable name is rescricted.`)
        }
        this.name = var_name;
        this.var_type = var_type;
        this.typeC = new Type(var_value);
        try {
            this.type = this.typeC.main()
        } catch (err) {
            throw Error(err)
        }
        this.value = this.type.value;
    }

    getValue() {
        return this.value;
    }

    setValue(new_value) {
        if(this.var_type==='var') {
            this.typeC = new Type(new_value);
            try {
                this.type = this.typeC.main()
            } catch (err) {
                throw Error(err)
            }
            this.value = this.type.value;
        } else {
            throw Error(`Can't reassign value to contant variable`)
        }
    }
}

module.exports = Variable;