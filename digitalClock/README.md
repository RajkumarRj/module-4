Hosted link:https://rajkumarrj.github.io/module-4/digitalClock/index.html

This HTML, CSS, and JavaScript code creates a digital clock with a stylish and responsive design.

**HTML (index.html):**
- The HTML document defines the structure of the digital clock with separate div elements for hours, minutes, seconds, and the AM/PM indicator.

**JavaScript (index.js):**
- The JavaScript code updates the clock every second using the `updateClock` function.
- It fetches the current hours, minutes, and seconds using `new Date()` and formats them with leading zeros if needed.
- The AM/PM indicator is determined based on whether the current hours are greater than 12.
- The `setTimeout` function is used to update the clock every second.

**CSS (style.css):**
- The CSS styles define the appearance of the digital clock and its background.
- The body has a background image with a cover size and some styling adjustments.
- The clock elements are styled with colors, opacity, and box shadows to create a visually appealing design.
- The clock digits are displayed in a flex container.

