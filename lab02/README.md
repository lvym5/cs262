# CS 262 - Lab 2

This lab is based on [this source](http://cs.calvin.edu/curriculum/cs/262/kvlinden/02management/lab.html).

It makes a photo opening react-native app.

## Answers to the lab questions

1. What does the main component function in this application return?
    It returns an HTML view with a certain style applied and some text within 
    that says "Hello world!"

2. What is the value of using core components? Note that these components are not standard ReactJS components.
    They are very reusable, allow developers to easily personilize their 
    environment, and cleanly abstract common functionality.

3. Do you see any of the technologies from last unit’s guide that are used here to specify the styling of the application?
    Using a pair of curly braces and writing `<stylesheet object>.<desired styles collection>` allows us to specify the styling of elements. In last week's guide, this was written as `<ThemedView style={styles.titleContainer}>`
    
4. How are curly braces ({}) used in the JSX code.
    Curly braces are used in JSX code to let us insert peices of JS code into the HTML being constructed.    

5. What is the purpose of the asynchronous (Asyc) methods?
    Asynchronous methods allow you to have parts of the function that are not done in serial with the rest of the function. This allows parts of a function to be done concurrently because you are marking a function as going to do something that can be done separately. These can be rejoined and waited on also to let the code rendevous.

6. Does this application code use hooks? If so, explain where; if not, explain why not.
    Yes, the useState hook was used for `selectedImage` and it's respective setter `setSelectedImage`. This hook allowed us to modify the `selectedImage` variable in the `pickImageAsync` function using `setSelectedImage`.

7. Identify one anonymous function in the code.
    One anonymous function in this code was where `pickImageAsync` was initialized to the anonymous function that handled calling `launchImageLibraryAsync` and working with the result.