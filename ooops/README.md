Hosted link: https://rajkumarrj.github.io/module-4/ooops/index.html


### Classes:

#### 1. Book Class:
- **Properties:**
  - `title`: Title of the book.
  - `author`: Author of the book.
  - `isAvailable`: Availability status of the book (true if available, false if borrowed).

  - **Methods:**
    - `borrowBook()`: Marks the book as borrowed if it's available.
    - `returnBook()`: Marks the book as returned.

#### 2. LibraryMember Class:
- **Properties:**
  - `name`: Name of the library member.
  - `email`: Email of the library member.
  - `borrowedBooks`: List of books currently borrowed by the member.

  - **Methods:**
    - `borrowBook(book)`: Borrows a book if it's available.
    - `returnBook(book)`: Returns a book.
    - `displayBorrowedBooks()`: Displays the list of borrowed books for the member.

#### 3. LibraryStaff Class:
- **Static Methods:**
  - `addBook(library, title, author)`: Adds a new book to the library.
  - `removeDamagedBook(library, book)`: Removes a damaged book from the library.

#### 4. Library Class:
- **Properties:**
  - `books`: Array to store the books in the library.

  - **Methods:**
    - `checkAvailability(book)`: Checks the availability of a book.

### Example Usage:
1. **Library Initialization:**
   
   const library = new Library();
   

2. **Adding Books to the Library:**
   
   const book1 = LibraryStaff.addBook(library, "The Great Gatsby", "F. Scott Fitzgerald");
   const book2 = LibraryStaff.addBook(library, "To Kill a Mockingbird", "Harper Lee");
   

3. **Library Member Interaction:**
   
   const member1 = new LibraryMember("Alice", "alice@email.com");

   member1.borrowBook(book1);
   member1.borrowBook(book2);
   member1.displayBorrowedBooks();

   member1.returnBook(book1);
   member1.displayBorrowedBooks();
   

4. **Library Staff Interaction:**
   
   LibraryStaff.removeDamagedBook(library, book2);
   
