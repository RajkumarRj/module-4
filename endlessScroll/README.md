Hosted link: https://rajkumarrj.github.io/module-4/endlessScroll/index.html


This HTML document creates a simple web page for an "Endless Scroll" feature using HTML, CSS, and JavaScript. 

1. **HTML Structure:**
   - The document starts with the usual HTML5 doctype and includes the necessary metadata.
   - It has a `<head>` section that includes meta tags for character set and viewport settings, a title element, and a link to an external font.
   - The `<body>` section contains:
      - An `<h1>` element with the title "ENDLESS SCROLL."
      - A loader `<div>` with an embedded `<img>` for a spinning loader animation (displayed while content is being loaded).
      - An empty `<div>` with the class "img-container" for displaying images loaded dynamically.
      - A `<script>` element at the end for hiding the loader once the window has finished loading.

2. **CSS Styling:**
   - The CSS styles are defined in the `<style>` tag within the `<head>` section.
   - It imports the "Dosis" and "Sedgwick Ave Display" fonts from Google Fonts.
   - Styles are defined for the body, h1, loader, and img-container.
   - The `@media` query adjusts styles for screens with a maximum width of 600 pixels, making the layout responsive.

3. **JavaScript:**
   - A `<script>` tag at the end of the body contains a simple JavaScript snippet.
   - The `window.onload` function hides the loader (`display='none'`) once the window has finished loading.

4. **External Script:**
   - The document references an external JavaScript file (`index.js`) using the `defer` attribute. This script likely contains the logic for fetching and appending images, enabling endless scrolling.


The JavaScript code you provided is responsible for fetching and displaying images from the Unsplash API with an endless scroll feature. 

1. **HTML Elements:**
   - `imageContainer`: Represents the container (`<div>`) where the images will be displayed.
   - `loader`: Represents the loader (`<div>`) that is displayed while images are being loaded.

2. **Variables:**
   - `photosArray`: An array to store the fetched photos from the Unsplash API.
   - `ready`: A flag to indicate whether the page is ready to load more images.
   - `imagesLoaded`: The count of images that have been loaded.
   - `totalImages`: The total number of images in the `photosArray`.
   - `count`: The number of images to fetch from the Unsplash API in each request.
   - `apikey`: Your Unsplash API key.
   - `apiUrl`: The URL for fetching random photos from Unsplash.

3. **Functions:**
   - `setAttribute(element, attributes)`: A utility function to set attributes for an HTML element.
   - `imageLoaded()`: A function that gets called when an image is loaded. It increments `imagesLoaded` and sets the `ready` flag when all images are loaded.
   - `displayPhotos()`: A function to display the fetched photos on the web page. It creates `<a>` (anchor) and `<img>` (image) elements for each photo, sets their attributes, and appends them to the `imageContainer`.
   - `getPhotos()`: An asynchronous function that fetches photos from the Unsplash API using `fetch` and updates the `photosArray`. It then calls `displayPhotos()` to display the fetched photos.
  
4. **Event Listeners:**
   - `window.addEventListener("scroll", ...)`: Listens for the scroll event on the window. When the user scrolls to the bottom of the page (`window.scrollY + window.innerHeight >= document.body.offsetHeight`) and the page is ready (`ready` is true), it sets `ready` to false and calls `getPhotos()` to fetch more images.

5. **Initialization:**
   - The `getPhotos()` function is called initially to fetch and display the first set of images.

