const Variable = require('./Variable') // Include the Variable class

const vars = {} // Define the main "vars" object, where the vars will live

const test_vars = [ // Define the test variables
    {
        name: 'variable1',
        value: 'variable1.value'
    },
    {
        name: 'variable2',
        value: 'variable2.value'
    }
]
test_vars.forEach( (cur_var) => {
    vars[cur_var.name] = new Variable(cur_var.name, cur_var.value)
})

describe('Variable Class', ( ) => {

    it('has arguments of type Variable', ( ) => {
        expect( vars['variable1'] instanceof Variable ).toBe(true)
    })

    it('matches the test_vars values', ( ) => {
        expect(vars['variable1'].getValue()).toEqual('variable1.value')
        expect(vars['variable2'].getValue()).toEqual('variable2.value')
    })
})