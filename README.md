<div align="center">
  <h1>G-Lang</h1>
  <p>G-Lang is a programming langauge written fully in JavaScript. </p>
  <br>
  <p align="center">
    <img src="https://img.shields.io/badge/license-MIT-orange.svg"/>
    <img src="https://img.shields.io/badge/PRs-welcome-brightgreen.svg">
    <img alt="language" src="https://img.shields.io/badge/language-Javascript-purple.svg">
  </p>
</div>


## :zap: Setup

G-Lang is still in development, but you can still test it out.

### The G-Script interpreter

A interpreter is used to run your `.g` files.

```sh
$ git clone https://github.com/glaukiol1/G-script # clone this repo
$ cd G-script # go into the dir
$ cd src # go into the src dir
$ node glang.js dev:true test.g # start the interpreter
```

or if your using deno(make sure you allow the permissions)
```sh
$ deno run glang.js
```

`dev:true` can also be `dev:false`, its ment to display more data. Also you can put `verbose` instead of `dev:true` to get more loggs on whats happening.


### Interactive Shell

You can use the G-Script shell by running the src/shell.js file. This will open a interactive shell in the command line, you can test statements here.

## Docs

<details>
  <summary><b>Variables</b></summary>
  <br>
  
  A variable is a method of storage, you can store data in a variable, and later access it. There are two types of variables, *constant* ones and *non-constant* ones.
  
  - Constant Variables are variables that cant be changed, after they are defined their value will stay the same, and never change.
  - Non-constant Varivales on the other hand, they can be redefined at any time!
  
  Variables are assigned to a _data type_, which you can find in the section below.
  ```js
  var hello = "Hello!" // This is a Non-constant variable
  const hello = "Hello!" // This is a constant variable
  ```
  
  You can access the variables by the variable name, like so, `hello`.
  
  To redefine a variable, run,
  ```js
  var hello = "Hello 2!"
  ```
  
</details>

<details>
  <summary><b>Data types</b></summary>
  <br>
  
  These are the currently supported data types in G-Lang;
  
  - Int (Number)
  - Str (String)
  - Bool (Boolean) `true` `false`
  - Obj (Object) `{"Test": "hello!"}`
  
</details>

You can call all traditional JavaScript functions on your variables, for example, you can run `string.substring(0,6)` in G-Lang, it will automatically run the JavaScript function for you.
