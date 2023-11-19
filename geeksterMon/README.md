Hosted link: https://rajkumarrj.github.io/module-4/geeksterMon-4/index.html



1. **Document Type Declaration:**
   - `<!DOCTYPE html>`: Declares the document type and version of HTML.

2. **HTML Document Structure:**
   - `<html lang="en">`: Defines the HTML document and specifies the language as English.
   
3. **Head Section:**
   - `<head>`: Contains meta-information about the document and links to external resources.
     - `<meta charset="UTF-8">`: Specifies the character encoding.
     - `<meta name="viewport" content="width=device-width, initial-scale=1.0">`: Sets the viewport properties for responsive design.
     - `<link rel="stylesheet" href="style.css">`: Links an external stylesheet for styling.
     - `<title>GeeksterMon</title>`: Sets the title of the web page.
     - `<script defer src="index.js"></script>`: Includes a JavaScript file with the `defer` attribute, meaning it will be executed after the HTML is parsed.

4. **Body Section:**
   - `<body>`: Contains the content of the web page.
   
5. **Content Wrapper:**
   - `<div class="content-wrapper">`: Wraps the entire content for styling purposes.

6. **Header Section:**
   - `<header>`: Contains the header of the page.
     - `<h1>GeeksterMon</h1>`: The main title of the page.

7. **Main Section:**
   - `<main>`: Contains the main content of the page.
     - **Pokemon Type Filter Form:**
       - `<form id="pokemon-type-filter">`: A form for filtering Pokémon by type.
         - `<select name="type" class="type-filter">`: Dropdown menu for selecting Pokémon types.
         - `<option value="">Types</option>`: Default option in the dropdown.
         - `<input type="submit" value="Filter by Type"/>`: Submit button for the type filter.
         - `<button onClick="window.location.reload();">Reset</button>`: Button for resetting the filter by reloading the page.
     - **Pokemon Search Form:**
       - `<form id="pokemon-search-form" class="" action="" method="GET">`: Form for searching Pokémon by name.
         - `<input id="pokemon-search-input" type="text" name="" placeholder="Enter Pokémon Name"/>`: Text input for entering Pokémon names.
     - `<section class="form-spacers"></section>`: A section for spacing purposes.
     - `<section id="pokedex"></section>`: A section with the id "pokedex" where Pokémon information will be displayed.

8. **Closing Tags:**
   - Closing tags for `</main>`, `</div>`, and `</body>`, and `</html>`.



This is a stylesheet (`style.css`) that provides styling for the HTML document you've shared earlier. 

1. **Fonts:**
   - Imports two fonts from Google Fonts: 'Grandstander' with a weight of 600 and 'Roboto'.

2. **Global Styles:**
   - Applies a common style to all elements (`*`).
     - Sets the font family to a series of fallback fonts.
     - Sets the text color to a shade of gray (`#555555`).

3. **Wrapper Styles:**
   - Styles for the `.content-wrapper` class.
     - `display: block;` ensures it is a block-level element.
     - `margin`, `max-height`, and `max-width` control the positioning and size.

4. **Body Styles:**
   - Basic styling for the `body` element, setting the background color to white.

5. **Page Title Styles:**
   - Styles for the `h1` element.
     - Uses the 'Grandstander' font.
     - Aligns the text to the center.
     - Sets the font size, margin-top, and margin-bottom.

6. **Search Bar and Type Filter Styles:**
   - Styles for the search bar (`#pokemon-search-form`) and type filter (`#pokemon-type-filter`).
     - Aligns text to the center.

7. **Link Styles:**
   - Removes text decoration from links (`a`).
   - Changes link color on hover.

8. **Form Spacer Styles:**
   - Adds height to the `.form-spacers` class.

9. **Pokedex Styles:**
   - Styles for the `#pokedex` section.
     - Uses flexbox to create a responsive layout with space around items.

10. **Flip Card Styles:**
   - Styles for creating a card flip effect.
     - Uses `perspective` for a 3D effect.
     - `opacity` controls the transparency of the card.
     - Defines the transition effect and transform style.

11. **Pokemon Type Styles:**
   - Styles for different Pokemon types using their respective IDs.
     - Background color represents the type color.

12. **Specific Pokemon Type Styles:**
   - Styles for individual Pokemon types, each identified by its own ID (e.g., `#grass`, `#bug`, `#fire`, etc.).



This JavaScript code is designed to work with an HTML page to create a Pokémon-themed Pokedex. 

1. **API URLs:**
   - `pokeTypeURL`: The base URL for fetching Pokémon types from the PokeAPI.
   - `pokeQueryParams`: A URLSearchParams object to handle query parameters from the window location.
   - `typeParams`: Another URLSearchParams object to handle type-specific queries from the window location.

2. **DOM Elements:**
   - `pokedex`: Represents the element with the ID 'pokedex' where Pokémon cards will be displayed.
   - `pokemonSearchForm`: Represents the form element with the ID 'pokemon-search-form'.
   - `pokemonTypeFilter`: Represents the select element with the class 'type-filter'.

3. **Arrays and Sets:**
   - `pokemonArray`: An array to store Pokémon data fetched from the PokeAPI.
   - `uniqueTypes`: A Set to store unique Pokémon types.

4. **Fetching Pokémon Data:**
   - `fetchPokemon`: Fetches data for the first 151 Pokémon from the PokeAPI.
   - The data includes details like front image, Pokémon ID, name, type, abilities, and a URL for additional information.

5. **Filtering Pokémon:**
   - `pokemonSearchForm` listens for user input and filters Pokémon based on the entered name.
   - `clearPokedex`: Clears the current content of the Pokedex.
   - `createPokemonCards`: Creates Pokémon cards based on the filtered Pokémon data.
   - `createPokemonCard`: Creates individual Pokémon cards with front and back faces.

6. **Generating Pokémon Types:**
   - `generateTypes`: Populates the type filter dropdown with unique Pokémon types.

7. **Event Listeners:**
   - An event listener is attached to the input in the `pokemonSearchForm` to dynamically filter Pokémon as the user types.

8. **Function Execution:**
   - The `fetchPokemon` function is executed to initially populate the Pokedex with the first 151 Pokémon.
   - The `generateTypes` function is called to populate the type filter dropdown.
