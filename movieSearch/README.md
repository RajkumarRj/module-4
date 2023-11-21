Hosted link : https://rajkumarrj.github.io/module-4/movieSearch/index.html


Certainly! Your HTML code sets up the structure for a Movie Guide App. 

1. **HTML Structure:**
   - `<!DOCTYPE html>`: Defines the document type and version of HTML.
   - `<html lang="en">`: The root element of the HTML document, indicating the document's language is English.
   - `<head>`: Contains meta-information about the HTML document, such as the character set, viewport settings, and the title of the page.
     - `<meta name="viewport" content="width=device-width, initial-scale=1.0" />`: Configures the viewport for better responsiveness on different devices.
     - `<title>`: Sets the title of the webpage.
     - `<link>`: Links external resources.
       - Links the "Poppins" font from Google Fonts.
       - Links an external stylesheet ("style.css").

2. **Body Content:**
   - `<body>`: Contains the content of the HTML document.
     - `<div class="container">`: Serves as the main container for the content.
       - `<div class="search-container">`: Contains the search input and button.
         - `<input type="text" placeholder="Enter movie name here..." id="movie-name" value="dark knight" />`: Input field for entering the movie name.
         - `<button id="search-btn">Search</button>`: Button for initiating the movie search.
       - `<div id="result"></div>`: Placeholder div where the search results will be displayed.
   
   - `<script src="index.js"></script>`: Links an external JavaScript file ("index.js") to provide interactivity and functionality to the webpage.

3. **External Resources:**
   - The code uses the "Poppins" font from Google Fonts.
   - It also links an external stylesheet ("style.css") for styling.




The provided CSS code is responsible for styling the Movie Guide App. 

1. **Global Styling:**
   - `*`: Applies the following styles to all elements.
     - `padding: 0;`, `margin: 0;`: Removes default padding and margin.
     - `box-sizing: border-box;`: Ensures that padding and border are included in the element's total width and height.
     - `font-family: "Poppins", sans-serif;`: Sets the default font family for the document.

2. **Body Styling:**
   - `body`: Styles the body element.
     - `height: 100vh;`: Sets the height of the body to 100% of the viewport height.
     - `background: linear-gradient(#c02e2e 50%, #000000 50%);`: Applies a linear gradient background.

3. **Container Styling:**
   - `.container`: Styles the main container for the content.
     - `font-size: 16px;`: Sets the default font size.
     - `width: 90vw;`, `max-width: 37.5em;`: Sets the width of the container with a maximum width for larger screens.
     - `padding: 3em 1.8em;`: Adds padding to the container.
     - `background-color: #201f28;`: Sets the background color.
     - `position: absolute;`, `transform: translate(-50%, -50%);`, `top: 50%;`, `left: 50%;`: Positions the container at the center of the viewport.
     - `border-radius: 0.6em;`: Adds rounded corners.
     - `box-shadow: 1.2em 2em 3em rgba(0, 0, 0, 0.2);`: Applies a box shadow for depth.

4. **Search Container Styling:**
   - `.search-container`: Styles the search input and button.
     - `display: grid;`, `grid-template-columns: 9fr 3fr;`, `gap: 1.2em;`: Creates a grid layout with two columns for the input and button.
     - Styling for the input and button.

5. **Result Styling:**
   - `#result`: Styles the result div.
     - `color: #ffffff;`: Sets the text color to white.

6. **Responsive Design:**
   - `@media screen and (max-width: 600px)`: Applies styles for screens with a maximum width of 600px.
     - Adjusts the font size for smaller screens.
     - Modifies the layout for smaller screens.



This JavaScript code is for a Movie app. 

1. **Initialization:**
   - The code starts by getting references to HTML elements using `document.getElementById`.
     ```javascript
     let movieNameRef = document.getElementById("movie-name");
     let searchBtn = document.getElementById("search-btn");
     let result = document.getElementById("result");
     ```

2. **Fetch Function:**
   - There's a function named `getMovie` that is responsible for fetching movie data from the OMDB API.
   - It first checks if the movie name input field is empty. If it is, it displays a message asking the user to enter a movie name.
   - If the input field is not empty, it constructs the API URL with the provided API key and the entered movie name.
   - It then uses the `fetch` function to make an asynchronous request to the OMDB API.
   - The response is parsed as JSON, and the data is used to dynamically generate HTML content.
   - If the movie exists in the database (`data.Response == "True"`), it displays information about the movie, including its title, poster, rating, details, genre, plot, and cast.
   - If the movie doesn't exist, it displays an error message.
   - If an error occurs during the fetch process, it displays a generic error message.
     ```javascript
     let getMovie = () => {
       // ... (see detailed explanation above)
     };
     ```

3. **Event Listeners:**
   - There are two event listeners:
     - One attached to the "Search" button (`searchBtn`), triggering the `getMovie` function when the button is clicked.
     - Another attached to the `window` object, triggering the `getMovie` function when the window is loaded.
     ```javascript
     searchBtn.addEventListener("click", getMovie);
     window.addEventListener("load", getMovie);
     ```

