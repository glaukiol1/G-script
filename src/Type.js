const Int = require('./types/Int')
const Str = require('./types/Str')


class Type {
    constructor(value) {
        this.value=value;
    }

    main() {
        if(!isNaN(this.value)) {
            return Int;
        } else if (this.value[0]==='"'&&this.value[this.value.length-1]==='"') {
            return Str;
        } else {
            throw Error(`Not valid type! ${this.value}`)
        }
    }
}

module.exports = Type;