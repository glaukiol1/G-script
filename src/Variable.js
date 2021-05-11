class Variable {
    constructor(var_name, var_value) {
        this.name = var_name;
        this.value = var_value;
    }

    getValue() {
        return this.value;
    }

    setValue(new_value) {
        this.value=new_value;
    }
}

module.exports = Variable;