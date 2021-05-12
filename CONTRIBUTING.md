# Contributing

Anyone is welcome to contribute to G-script! Contributions include;

- Staring this repo
- Working on the docs
- Working on the source code
- Reviewing Pull Requests
- Starting new issues

## Guide

Now lets get to contributing! 

In this tutorial, you will do the following;
- fork
- clone
- add a new branch
- make changes
- push them
- make a pull request

1. Fork this project. On the top right corner of our GitHub page, [here](https://github.com/glaukiol1/G-script), and click on the button *fork*, you will get this repo on your GitHub profile.

2. Clone your GitHub repo on your development computer. Open a command line, and type,
```md
git clone https://github.com/<yourusernamehere>/G-script.git
```

3. After you have the your fork of this repo on your computer, we want to make a new branch, and lets name bug-fixes;
```js
$ git branch bug-fixes // this is the branch name

$ git checkout bug-fixes // switch to the new branch

/*
 * when naming branches,
 * make sure you are naming them
 * based on what you are editing
*/
```

4. Make the changes that you want, make sure to write clean and readable code!

5. Push the changes to your fork;
```js
$ git add . // add all the changes

$ git commit -m "I fixed the bug described in #8" // Small description of what you did

$ git push origin bug-fixes // push the changes to github | change bug-fixes with the name of your branch
```

6. Now go to `https://github.com/<yourusernamehere>/G-script`, make sure to replace the `<yourusernamehere>` with your real GitHub username, and you should see a green button saying "Pull Request". Click it, then click the green button again. Now, you are in the PR page, fill in your details about what changes were made, and submit!

Thanks for contributing to G-script!
