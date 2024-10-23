# CS 262 - Lab 5

This lab is based on [these instructions](https://cs.calvin.edu/courses/cs/262/kvlinden/05design/lab.html).

We added the about page button to the right of the header bar and made it a cat icon instead of a question mark.

Answers to the lab questions:

a. Of what benefit was the refactoring phase of this lab?
    The refactoring showed us how to decouple various pieces of the project so that they don't all crowd a single file and can be more easily handled individually.
b. What do the export commands do?
    They allow us to modularize our JS code by marking certain parts of code as being able to be imported into another file.
c. This application uses stack navigation. What does the stack do here? What is the deepest this stack can get in this application?
    The stack keeps track of what pages we've visted in the order we visited them. The page we're on is the top of the stack and the home page is the bottom. The stack can only get 2 deep in this application, i.e. the home page then the about or description page.