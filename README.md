<div align="center">
  <h1>G-Lang</h1>
  <p>G-Lang (G-Script) is a programming langauge written fully in JavaScript. </p>
  <br>
  <p align="center">
    <img src="https://img.shields.io/badge/license-MIT-orange.svg"/>
    <img src="https://img.shields.io/badge/PRs-welcome-brightgreen.svg">
    <img alt="language" src="https://img.shields.io/badge/language-Javascript-purple.svg">
  </p>
</div>


## :zap: Setup

G-Lang is still in development, but you can still test it out.

There is a npm package, namely `g-script`, that you can download.
```js
$ npm i -g g-script // install the package using the -g arugment!
```

After that, you now have access to the `glang` command. Command Usage;
```sh
$ glang <options> < run | shell > <filename>
```
- _\<options>_: `verbose` `verbose;dev:true` `dev:true` `verbose;line` `line`
- _\<run | shell>_: `run <filename.g>`: runs a file | `shell`: runs a interactive shell.

Example commands;
```sh
$ glang run hello.g # run a glang file
$ glang shell # run the glang shell
$ glang verbose run hello.g # run a file in verbose mode
$ glang dev:true run hello.g # run a file in dev mode
```

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


## Want to Contribute?

To start contributing, follow the below guidelines: 

**1.**  Fork [this](https://github.com/glaukiol1/G-script.git) repository.

**2.**  Clone your forked copy of the project.

     $ git clone https://github.com/<your_user_name>/G-script.git

     
**3.** Checkout into a new branch 

     $ git checkout -b <branch_name>

**4.** Make your changes

**5.** Add and commit your changes

     $ git add . && git commit -m "<your_message>"
     
**6.** Push Code to Github under your branch 

     $ git push origin <branch_name>   
