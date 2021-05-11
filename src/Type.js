const Int = require('./types/Int')
const Str = require('./types/Str')


class Type {
    constructor(value) {
        this.value=value;
    }

    main(opt) {
        if(!isNaN(this.value)) {
            return Int;
        } else if (this.value[0]==='"'&&this.value[this.value.length-1]==='"') {
            return Str;
        } else {
            if(!opt){
                if (opt.includes('silence')) {
                    throw Error(`Not valid type!`)
                }
            } else {
                return `Not valid type!`
            }
        }
    }

    print() {
        console.log(this.value)
    }
}

module.exports = Type;