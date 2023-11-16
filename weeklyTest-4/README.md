Hosted link: https://rajkumarrj.github.io/module-4/weeklyTest-4/index.html

 HTML and JavaScript code create a webpage for a "Phone Hunting API." 

### HTML Structure:
1. **Metadata:**
   - Charset, viewport settings, and title for better rendering and SEO.

2. **CSS and Fonts:**
   - Links to CSS frameworks (DaisyUI and Tailwind CSS) for styling.
   - Font preloading for the "Poppins" font.

3. **Navigation:**
   - Navbar with the title "Hot Gadgets" and a "Sign Up" button.

4. **Header:**
   - Prominent title, description, and a "Buy Now" button.
   - An image grid with three images.

5. **Search Section:**
   - Input field for searching phones and a "Search" button.

6. **Phone Card Section:**
   - A loading indicator.
   - A container for displaying phone cards, initially empty.

7. **"Show All" Button:**
   - Initially hidden and becomes visible when there are more than 12 phones.

8. **Modals:**
   - A modal dialog for displaying detailed information about a phone.
   - Includes an image container, phone name, brand, specifications, release date, and a close button.

9. **Footer:**
   - Contains social media icons (placeholders) and copyright information.

10. **Script:**
    - Links to an external JavaScript file (`index.js`).
    - Defines a global variable `searchText` and functions for handling search, loading, displaying phones, showing details, and handling "Show All" button click.

### JavaScript (`index.js`):
1. **Search Handling:**
   - `searchHandler` function handles the search functionality.
   - Sets the `searchText` variable, loads phones, and triggers the loading indicator.

2. **Loading Indicator:**
   - `loading` function toggles the visibility of the loading indicator.

3. **Phone Loading:**
   - `loadPhone` function fetches phone data from the API based on the search text.
   - Calls the `displayPhones` function.

4. **Displaying Phones:**
   - `displayPhones` function populates the phone container with cards.
   - Shows the "Show All" button conditionally.

5. **Show All Button:**
   - `showBtn` function triggers a search with the "Show All" option.

6. **Show Details:**
   - `showDetailsHandler` function fetches detailed information about a specific phone.
   - Calls `showPhoneDetails` to display the details in the modal.

7. **Show Phone Details:**
   - `showPhoneDetails` function displays detailed information in the modal.

### Note:
- The code uses `fetch` to interact with an API (`https://openapi.programming-hero.com/api/phones` and `https://openapi.programming-hero.com/api/phone/{id}`).
- Modals are used for displaying detailed information about a phone.
- Tailwind CSS classes are used for styling elements.

