const interpreter = require('./glang')
const Interpreter = new interpreter('<shell>.g', 'line')

console.log(
    `
    G-Lang (Or G-Script) Shell.\n\ttype .exit to exit
    ` 
)

const main = () => {

    const readline = require("readline");

    const rl = readline.createInterface({
        input: process.stdin,
        output: process.stdout
    });

    rl.question("G-Lang >>> ", function saveInput(line) {
        if (line.includes('.exit')) {
            console.log(`\n\t !Exiting!`)
            process.exit(0)
        }
        Interpreter.main(line)
        rl.close()
        main()
    });
}

main()