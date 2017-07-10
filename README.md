# FriendFinder

## Description on how to use the app
This friend finder app asks you a series of personality questions, and based on your answers will match you will your best friend, also providing a picture. 
## Requirements
#### Add a simple description of what the HW requirements were
1. 10 questions that give you a scale of 1 to 5 based on how much you agrees or disagrees with a question.

2. A `server.js` file should require the basic npm packages we've used in class: `express`, `body-parser` and `path`.

3. Your `htmlRoutes.js` file should include two routes:

* A GET Route to `/survey` which should display the survey page.
* A default USE route that leads to `home.html` which displays the home page. 

4. Your `apiRoutes.js` file should contain two routes:

* A GET route with the url `/api/friends`. This will be used to display a JSON of all possible friends.
* A POST routes `/api/friends`. This will be used to handle incoming survey results. This route will also be used to handle the compatibility logic. 

5. You should save the data in your app as an array of objects. Each of these objects should roughly follow the format below.

6. Determine the user's most compatible friend.

7. Display the result as a modal pop-up with both the name and picture of the closest match. 

## Technologies Used
- Jquery for Dom Manipulation
- AJAX for API GET requests

```
