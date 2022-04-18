## Project 2

- My data consists of id, Movie title,Language and the catch phrases that a movie entails.
- I created a controller which has getById and getAll functions.
- The form contains apply and reset buttons.
- When the user clicks on apply button the data in the form is fetched and passed to the getAll function. The getAll function then fetches the data and applies the filters that were passed to it.The getById function recieves the id and returns movie on basis of Id paramter.If it is not found then a message is displayed to user.
- The data returned by getAll function is then used to render the table.
- The search for string fields can be done in both uppercase or lowercase as i am converting the input string to lowercase and converting data for comparison to lowercase as well.
