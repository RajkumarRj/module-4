Hosted link : https://rajkumarrj.github.io/module-4/dadJokes/index.html




### HTML (index.html)
- The HTML file defines the structure of the webpage.
- It includes a `<div>` with an id of "container" containing a `<p>` element with an id of "val" and a `<button>` with an id of "but".
- External styles are linked from "style.css", and the JavaScript logic is linked from "index.js".

### CSS (style.css)
- The CSS file provides styling for the webpage.
- It sets the background color, font styles, and layout for the body.
- The container div has a rounded shape, a background gradient, and box shadows to create a visually appealing card-like structure.
- The `<p>` element inside the container has styling for text alignment, color, and font size.
- The `<button>` has styling for positioning, margin, padding, color, and hover effects.

### JavaScript (index.js)
- The JavaScript file contains the logic for fetching dad jokes from an API and updating the content on the webpage.
- It defines constants for the button (`btn`) and the paragraph (`ans`) elements, and the API access key.
- The `options` object includes the HTTP method and headers for the API request.
- The `url` variable contains the API endpoint for dad jokes.
- The `jokes` function is an asynchronous function that fetches a dad joke from the API and updates the content on the webpage.
- Before fetching, it updates the text content of the paragraph and the button to indicate that the joke is being fetched.
- It uses a try-catch block to handle errors during the fetch operation and updates the content accordingly.
- Finally, regardless of success or failure, it resets the button text to its original state.
- An event listener is added to the button, so when it is clicked, the `jokes` function is invoked.

