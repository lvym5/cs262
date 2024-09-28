# CS 262 - Lab 4

This lab is based on [these instructions](https://cs.calvin.edu/courses/cs/262/kvlinden/04analysis/lab.html).

No hacks were made.

Answers to the lab questions:

a. The Screen (Stack.Screen) construct is used to register the individual pages of an application.
b. The route concept is analogous to URLs on the web.
c. No becuase using the fat arrow syntax sets up `navigation.navigate("Details")` as a callback for when the button is clicked. Otherwise, it would just call the function when binding the event listener, i.e. not be reactive to user interaction and just navigate to Details immediately.
d. Using the FlatList element, which it set up to render each movie as its title. 
e. Because the selected move object is passed into the details screen through the route params, and the respective information for the movie selected is retrieved via route.params.title, etc.