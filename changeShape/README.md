Hosted link: https://rajkumarrj.github.io/module-4/changeShape/index.html



1. The HTML document starts with the usual structure declaration (`<!DOCTYPE html>`) and specifies the document's language as English (`<html lang="en">`).

2. In the `<head>` section, the character encoding is set to UTF-8, and a meta viewport tag is included for responsive design. The title of the webpage is set to "Change Shape and Color."

3. Inside the `<style>` tags within the `<head>` section, various CSS styles are defined:
   - The universal selector `*` resets padding and margin to 0 and uses `box-sizing: border-box` for all elements.
   - The `.container` class is applied to a `<div>` element, setting it to take up the full width and 100% of the viewport height (`100vh`). This element acts as a container for the circle and buttons.
   - The `.container` class is further styled to use flexbox, with a column layout, 25 pixels of vertical gap between child elements, and center alignment for both content justification and item alignment.
   - Styles for the buttons are defined, adding minimal padding.
   - The `#circle` selector targets a specific `<div>` element with the ID "circle." It sets its dimensions to 150x150 pixels, gives it a circular shape using `border-radius`, and initially sets its background color to green.
   - Two additional classes, `.inner` and `.triangle`, are defined for changing the shape of the inner element.

4. Inside the `<body>` section:
   - A `<div>` element with the class "container" acts as a container for the circle and buttons.
   - Inside this container, there's a circular element with the ID "circle," which contains an inner `<div>` element with the class "inner."
   - Two buttons with the IDs "change-color" and "change-shape" allow users to change the color and shape of the circle.

5. In the `<script>` section at the end of the document, JavaScript code is included to handle the interactivity of the webpage. It performs the following actions:
   - An array `color` is defined, containing different color names.
   - An `index` variable is initialized to 0, which is used to keep track of the current color in the `color` array.
   - A boolean variable `isTriangle` is set to `false`, initially indicating that the shape is not a triangle.
   - Event listeners are added to the "change-shape" and "change-color" buttons to trigger the respective functions when clicked.
   - The `changeColor` function changes the background color of the circle to the next color in the `color` array and updates the `index`.
   - The `changeShape` function toggles the shape between the circle and the triangle by changing the class of the inner element.