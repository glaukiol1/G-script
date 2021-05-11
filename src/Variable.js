class Variable {
    constructor(var_name, var_value, var_type) {
        this.name = var_name;
        this.value = var_value;
        this.type = var_type;
    }

    getValue() {
        return this.value;
    }

    setValue(new_value) {
        if(this.type==='var') {
            this.value=new_value;
        } else {
            throw Error(`Can't reassign value to contant variable`)
        }
    }
}

module.exports = Variable;