Hosted link:  https://rajkumarrj.github.io/module-4/leaderBoard/index.html


This code defines a leaderboard application where users can add player information and scores. The application includes a form for adding players, a scoreboard to display player information, and buttons to delete or modify player scores.


### HTML (index.html):

- The HTML document includes a form with inputs for the first name, last name, country, and player score. It also contains a scoreboard section to display player information.

### CSS (style.css):

- The CSS styles define the appearance of the leaderboard application, including styling for the form, inputs, error prompt, buttons, and scoreboard.

### JavaScript (index.js):

1. **Form Submission Event Listener:**
   - The script listens for the form submission event and prevents the default form behavior.
   - It retrieves values from the form inputs and checks if any field is empty. If so, it displays an error prompt.
   - If all fields are filled, it creates a new scoreboard element and appends it to the scoreboard container. The scoreboard element includes player information, a timestamp, and buttons for actions.

2. **Button Event Listeners:**
   - Each button in the scoreboard has an event listener attached. The buttons include a delete button (🗑), and buttons to increase and decrease scores (+5, -5).
   - The `activateBtnEventListener` function is responsible for adding event listeners to these buttons.
   - The delete button removes the corresponding player's entry from the scoreboard.
   - The +5 and -5 buttons modify the player's score accordingly.

3. **Sort Scoreboard Function:**
   - The `sortScoreBoard` function sorts the scoreboard elements based on the player's scores in descending order.

4. **Date and Time Function:**
   - The `generateDateAndTime` function generates and returns a formatted date and time string.

### Additional Notes:

- The application is responsive, adjusting the layout for smaller screens using media queries.


