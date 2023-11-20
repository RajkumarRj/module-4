Hosted link : https://rajkumarrj.github.io/module-4/cardInformation/index.html


This HTML file creates a simple webpage for displaying user information. Users can enter their information, and the entered data is stored in the local storage, allowing it to persist even if the page is reloaded or closed. Here's a breakdown of the code:

- The HTML file contains a structure with a container div and various fields for user information.
- The CSS styles provide a clean and centered layout for the user information card.
- The JavaScript script retrieves stored user information from local storage if available. If not, it prompts the user to enter their information, stores it in local storage, and displays it on the card.

Here's a summary of the key elements:

1. **Fields for User Information:**
   - The user information is displayed in a series of div elements with the class "field."
   - Each field has two spans: one for the label and one for the user's answer.

2. **JavaScript Logic:**
   - The script starts by checking if there is stored user information in local storage (`localStorage.getItem("userInformation")`).
   - If stored information exists, it is parsed from JSON, and the corresponding fields on the card are populated with the stored data.
   - If no stored information is found, the `getData` function is called, which prompts the user to enter their information and stores it in local storage.
   - The entered information is then displayed on the card.

3. **Local Storage Usage:**
   - User information is stored in local storage using `localStorage.setItem("userInformation", JSON.stringify(userInfo));`.
   - The stored information is retrieved and parsed using `const userInfo = JSON.parse(storedInfo);`.

4. **Prompt for User Input:**
   - If no stored information is found, the `getData` function prompts the user to enter their first name, last name, country, phone number, state, city, and village.

