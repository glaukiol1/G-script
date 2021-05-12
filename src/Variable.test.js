const Variable = require('./Variable') // Include the Variable class

const vars = {} // Define the main "vars" object, where the vars will live

const test_vars = [ // Define the test variables
    {
        name: 'variableOne',
        value: '"variableOne.value"',
        type: 'var'
    },
    {
        name: 'variableTwo',
        value: '"variableTwo.value"',
        type: 'const'
    }
]
test_vars.forEach( (cur_var) => {
    vars[cur_var.name] = new Variable(cur_var.name, cur_var.value, cur_var.type)
})

describe('Variable Class', ( ) => {

    it('has arguments of type Variable', ( ) => {
        expect( vars['variableOne'] instanceof Variable ).toBe(true)
    })

    it('matches the test_vars values', ( ) => {
        expect(vars['variableOne'].getValue()).toEqual('variableOne.value')
        expect(vars['variableTwo'].getValue()).toEqual('variableTwo.value')
    })

    it('does not reassign if the variable is a constant', ( ) => {
        expect( () => {vars['variableTwo'].setValue('hello')}).toThrow(`Can't reassign value to contant variable`)
    })

    it('can reassign variable values to non-constant vars', ( ) => {
        vars['variableOne'].setValue('"variableOne.reassigned.value"')
        expect(vars['variableOne'].getValue()).toEqual('variableOne.reassigned.value')
    })
})