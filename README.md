# G-Lang (Or G-Script)

G-Lang is a programming langauge written fully in JavaScript. It will be a powerful langauge once the development stage is finished.

## Setup

G-Lang is still in development, but you can still test it out.

```sh
$ git clone https://github.com/glaukiol1/G-script
$ cd G-script
$ cd src
$ node glang.js dev:true test.g
```
dev:true can also be dev:false, its ment to display more data. Also you can put "verbose" instead of dev:true to get more loggs on whats happening.

Soon there will be a interactive shell, in which you dont need a .g file to run and test commands.

## Docs

<details>
  <summary><b>Variables</b></summary>
  <br>
  
  A variable is a method of storage, you can store data in a variable, and later access it. There are two types of variables, *constant* ones and *non-constant* ones.
  
  - Constant Variables are variables that cant be changed, after they are defined their value will stay the same, and never change.
  - Non-constant Varivales on the other hand, they can be redefined at any time!
  
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

