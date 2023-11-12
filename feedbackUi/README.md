Hosted Link: 

This code creates a simple feedback UI with three rating options (Unhappy, Neutral, Satisfied) represented by icons. Users can click on one of the rating options, and upon clicking the "Send Review" button, a thank-you message and the selected feedback are displayed.

Here's a breakdown of the code:

**HTML (index.html):**
- The HTML document defines a webpage with a title, links to an external stylesheet (style.css), and a script file (index.js).
- The page contains a container with a heading ("Feedback UI"), a ratings container with three rating options, and a "Send Review" button.

**CSS (style.css):**
- The CSS styles define the appearance of the feedback UI.
- The body has a light cyan background with dark green text. The content is centered using flexbox.
- The container has a semi-transparent white background, a box shadow, padding, and rounded corners.
- Styles are applied to the heading, ratings container, individual ratings, and the "Send Review" button. Active and hover styles are defined for better user interaction.

**JavaScript (index.js):**
- JavaScript is used to handle the interactivity of the feedback UI.
- Event listeners are added to each rating element to track the user's selection. The `removeActive` function ensures that only the selected rating has the "active" class.
- Clicking the "Send Review" button triggers an event that displays a thank-you message and the selected feedback in the container.
