Hosted link : https://rajkumarrj.github.io/module-4/autoSaveTextarea/index.html



- The HTML file includes a textarea element with the ID "text" and a placeholder for initial instructions.
- The style section contains basic styling to center the content in the middle of the page.
- The script section contains JavaScript code that performs the auto-save functionality.
  - `const val = document.getElementById("text");`: Retrieves the textarea element by its ID.
  - `function localMemory()`: Defines a function called `localMemory` to save the content of the textarea to local storage.
  - `localStorage.setItem("textarea", val.value);`: Stores the textarea content in the local storage with the key "textarea."
  - `val.value = localStorage.getItem("textarea", val.value);`: Retrieves the saved content from local storage and sets it as the initial value of the textarea.
  - `val.addEventListener("input", localMemory);`: Listens for the "input" event on the textarea and calls the `localMemory` function, which updates the local storage with the latest content.
