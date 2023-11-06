Hosted link :



**HTML (index.html):**
- The HTML document defines a webpage with a title, links to an external stylesheet (styles.css), and a script file (script.js).
- Within the `<body>` tag, there's a container with two main sections:
  - "inputs-wrapper" contains an input field for entering a birthdate and a button to calculate the age.
  - "outputs-wrapper" displays the calculated age in years, months, and days.

**CSS (styles.css):**
- CSS styles are defined to control the appearance and layout of the webpage:
  - The `*` selector sets padding and margin to 0 and uses `box-sizing: border-box` for all elements to ensure consistent box models.
  - The background color of the page is set to teal.
  - The "container" class is styled to be centered on the page with specific dimensions, padding, and box-shadow.
  - Styles are applied to elements within the container, such as input fields and buttons.
  - The "outputs-wrapper" displays the age components (years, months, days) with specific styling.

**JavaScript (script.js):**
- The JavaScript code handles the age calculation based on the birthdate entered by the user.
- A constant `months` array is defined to represent the number of days in each month, considering leap years.
- The `ageCalculate` function is triggered when the "Calculate" button is clicked. It calculates the age based on the current date and the input birthdate.
- It checks if the birthdate is in the future and handles leap years using the `leapChecker` function.
- The calculated age is displayed in years, months, and days using the `displayResult` function.

Here's a summary of what the code does:
1. It takes a user's input, their birthdate.
2. It calculates the age based on the current date.
3. It considers leap years when calculating the number of days in February.
4. It displays the age in years, months, and days.

