const Type = require('./Type')
class Variable {
    constructor(var_name, var_value, var_type) {
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
            this.value=new_value;
        } else {
            throw Error(`Can't reassign value to contant variable`)
        }
    }
}

module.exports = Variable;