const interpreter = require('./glang')
const Interpreter = new interpreter('<shell>', 'line')
const main = () => {
    const readline = require("readline");

    const rl = readline.createInterface({
        input: process.stdin,
        output: process.stdout
    });

    rl.question("G-Lang >>> ", function saveInput(line) {
        Interpreter.main(line)
        rl.close()
        main()
    });
}

main()