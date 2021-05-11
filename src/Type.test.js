const Type = require('./Type') // Include the Variable class
const Int = require('./types/Int')
const Str = require('./types/Str')

describe('Type Class', ( ) => {
    it('has the correct type', ( ) => {
        expect(new Type('"hello!"').main().value).toEqual('hello!')
        expect(new Type('15').main().value).toEqual(15)
    })
})