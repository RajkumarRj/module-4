Hosted link : https://rajkumarrj.github.io/module-4/imageSearchApp/index.html

Your HTML and JavaScript code creates a simple Image Search App using the Unsplash API.

### HTML Structure (`index.html`):
1. **Metadata:**
   - Charset, viewport settings, and title for better rendering.

2. **Stylesheet:**
   - Links to an external stylesheet (`styles.css`).

3. **Body:**
   - Heading (`<h1>`) with the title "Image Search App."
   - Form with an input field and a "Search" button.
   - Container (`<div class="search-results">`) for displaying search results.
   - "Show more" button (`<button id="show-more-button">Show more</button>`).
   - External JavaScript file linked at the end of the body.


### CSS

1. **Body Styles:**
   - Sets the background color, font family, line height, and removes default margin.

2. **Heading Styles (`h1`):**
   - Defines styles for the main heading, such as font size, weight, and alignment.

3. **Form Styles (`form`):**
   - Flex container styling for centering items.
   - Adds margin at the bottom.

4. **Search Input Styles (`#search-input`):**
   - Specifies styles for the search input field.
   - Defines width, padding, border, box shadow, border radius, font size, and color.

5. **Search Button Styles (`#search-button`):**
   - Defines styles for the search button.
   - Specifies padding, background color, text color, border, font size, box shadow, cursor, border radius, and a transition effect on hover.

6. **Search Results Container Styles (`.search-results`):**
   - Flex container styling for search results.
   - Specifies flex wrap, max width, margin, and padding.

7. **Search Result Item Styles (`.search-result`):**
   - Styles for individual search result items.
   - Defines margin, width, border radius, box shadow, and overflow.

8. **Search Result Hover Effect Styles (`.search-result:hover img`):**
   - Transforms the image to scale slightly on hover.

9. **Image Styles (`search-result img`):**
   - Styles for the images within search result items.
   - Specifies width, height, object fit, and a transition effect for scaling.

10. **Search Result Link Styles (`.search-result a`):**
    - Styles for links within search result items.
    - Specifies padding, display, color, text decoration, and a transition effect on hover.

11. **Search Result Link Hover Effect Styles (`.search-result:hover a`):**
    - Changes the background color of links on hover.

12. **"Show More" Button Styles (`#show-more-button`):**
    - Styles for the "Show more" button.
    - Specifies background color, border, text color, padding, display, margin, text alignment, border radius, cursor, and a transition effect on hover.
    - Initially set to `display: none` and becomes visible when there are more results.

13. **"Show More" Button Hover Effect Styles (`#show-more-button:hover`):**
    - Changes the background color on hover.

14. **Media Queries (`@media`):**
    - Adjusts styles for smaller screens.
    - Reduces the width of search result items on screens with a maximum width of 768px.
    - Adjusts search result width and search input width for screens with a maximum width of 480px.
    - Changes the form direction to column for screens with a maximum width of 480px.

### Javascript



1. **Access Key:**
   - Defines the Unsplash API access key.

2. **DOM Element Selection:**
   - Selects various HTML elements using `document.querySelector` and `document.getElementById`.

3. **Variables:**
   - `inputData`: Stores the current value of the search input.
   - `page`: Keeps track of the current page of search results.

4. **`searchImages` Function:**
   - Asynchronous function responsible for fetching and displaying search results.
   - Gets the search input value and constructs the API URL.
   - Fetches data from the Unsplash API using `fetch`.
   - Clears the existing search results if it's the first page.
   - Iterates through the results and creates HTML elements for each image and its link.
   - Appends the image and link elements to the search results container.
   - Increments the page counter.
   - Displays the "Show more" button if there are more than one page of results.

5. **Event Listeners:**
   - **Form Submission Event:**
     - Listens for the form submission event.
     - Prevents the default form submission behavior.
     - Resets the page counter to 1 and calls the `searchImages` function.

   - **"Show More" Button Click Event:**
     - Listens for a click event on the "Show more" button.
     - Calls the `searchImages` function to fetch and display more results.

