const Type = require('./Type')
class Variable {
    constructor(var_name, var_value, var_type) {
        this.name = var_name;
        this.value = var_value;
        this.var_type = var_type;
        this.typeC = new Type(this.value);
        this.type = this.typeC.main()
    }

    getValue() {
        return this.value;
    }

    setValue(new_value) {
        if(this.var_type==='var') {
            this.value=new_value;
        } else {
            throw Error(`Can't reassign value to contant variable`)
        }
    }
}

module.exports = Variable;