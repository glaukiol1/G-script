# src/glang.js Docs

This is the main G-Lang (Or G-Script) file. It is used as the interpreter of single lines, or a whole `.g` file.

## Classes & Functions

These are the classes and functions that `src/gland.js` has;

### `Interpreter` (Class)

This is the one and only class of this file. It takes two arguments;
```js
 file_name & options
```

___file_name___: This is either the name of the `.g` file, or the line that is going to be ran (by the shell), if the `options` argument has contains a string `"line"`, the file_name will be converted to the _line_ that is going to be ran.

___options___: These are the options that you pass to the Interpreter class, this is a string. Currently, these are the options available;
```js
'verbose' // get more loggs on whats happening
'line' // run a single line
'dev:true' // dont throw whole stack errors and dont quit on a error
```

This class is automatically ran if the option `line` is not provided, but if it is provided, you would have to manually call the `main()` function, providing the line to run as a argument. 
