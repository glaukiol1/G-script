const Int = require('./types/Int')
const Str = require('./types/Str')
const Bool = require('./types/Bool')
const Obj = require('./types/Obj')

class Type {
    constructor(value) {
        this.value=value;
    }

    main(opt) {
        if(!isNaN(this.value)) {
            return new Int(parseInt(this.value));
        } else if (this.value[0]==='"'&&this.value[this.value.length-1]==='"') {
            return new Str(this.value.substring(1,this.value.length-1));
        } else if (this.value.includes('true')||this.value.includes('false')) {
            if (this.value.indexOf('true')!==-1){
                return new Bool(true)
            } else if (this.value.indexOf('false')!==-1) {
                return new Bool(false)
            }
        } else if (this.value.includes('{')&&this.value.includes('}')) {
            return new Obj(JSON.parse(this.value))
        } else {
            if(opt){
                if (!opt.includes('silence')) {
                    throw Error(`Not valid type!`)
                } else {
                    return `Not valid type!`
                }
            } else {
                throw Error(`Not valid type!`)
            }
        }
    }

    print() {
        console.log(this.value)
    }
}

module.exports = Type;