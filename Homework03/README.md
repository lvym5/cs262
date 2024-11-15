# CS 262 - Homework03

This homework is based on [these instructions](https://cs.calvin.edu/courses/cs/262/kvlinden/09is/homework.html).

Answers to the homework questions: 
a. What are the (active) URLs for your data service?

This is the default route [lab9mcaboy-craacse4aefjbabb.canadacentral-01.azurewebsites.net](https://lab9mcaboy-craacse4aefjbabb.canadacentral-01.azurewebsites.net)

This is to view all players [lab9mcaboy-craacse4aefjbabb.canadacentral-01.azurewebsites.net/players](https://lab9mcaboy-craacse4aefjbabb.canadacentral-01.azurewebsites.net/players)

This is to view player 1 [lab9mcaboy-craacse4aefjbabb.canadacentral-01.azurewebsites.net/players/1](https://lab9mcaboy-craacse4aefjbabb.canadacentral-01.azurewebsites.net/players/1)

This is to find player -1 [lab9mcaboy-craacse4aefjbabb.canadacentral-01.azurewebsites.net/players/-1](https://lab9mcaboy-craacse4aefjbabb.canadacentral-01.azurewebsites.net/players/-1)

This is the not found route [lab9mcaboy-craacse4aefjbabb.canadacentral-01.azurewebsites.net/blob](https://lab9mcaboy-craacse4aefjbabb.canadacentral-01.azurewebsites.net/blob)

This is the route that was added for Homework 3: [lab9mcaboy-craacse4aefjbabb.canadacentral-01.azurewebsites.net/property](https://lab9mcaboy-craacse4aefjbabb.canadacentral-01.azurewebsites.net/property)


b. Which of these endpoints implement actions that are idempotent? nullipotent?

Get endpoints (like read player properties) are idempotent and also nullipotent. Update (like updating a player) is idempotent and delete is idempotent. 

c. Is the service RESTful? If not, why not? If so, what key features make it RESTful.

Yes. It is because we use JSON to transfer data, we use HTTP commands, we use urls to get objects, and everything is stateless.

d. Is there any evidence in your implementation of an impedance mismatch?

I believe that there is a possiblity to have impedance mismatch but since mine was so simple since I'm taking direct objects as the same as a table row, it is simple enough to not suffer from that. 