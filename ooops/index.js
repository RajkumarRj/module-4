class Book {
    constructor(title, author) {
        this.title = title;
        this.author = author;
        this.isAvailable = true;
    }

    // Method to mark the book as borrowed
    borrowBook() {
        if (this.isAvailable) {
            this.isAvailable = false;
            return true; // Book successfully borrowed
        } else {
            return false; // Book not available for borrowing
        }
    }

    // Method to mark the book as returned
    returnBook() {
        this.isAvailable = true;
    }
}

class LibraryMember {
    constructor(name, email) {
        this.name = name;
        this.email = email;
        this.borrowedBooks = [];
    }

    // Method to borrow a book
    borrowBook(book) {
        if (book.borrowBook()) {
            this.borrowedBooks.push(book);
            return true; // Book successfully borrowed
        } else {
            return false; // Book not available for borrowing
        }
    }

    // Method to return a book
    returnBook(book) {
        const index = this.borrowedBooks.indexOf(book);
        if (index !== -1) {
            this.borrowedBooks.splice(index, 1);
            book.returnBook();
            return true; // Book successfully returned
        } else {
            return false; // Book not found in the borrowed list
        }
    }

    // Method to display the list of borrowed books
    displayBorrowedBooks() {
        console.log(`${this.name}'s Borrowed Books:`);
        this.borrowedBooks.forEach(book => {
            console.log(`- ${book.title} by ${book.author}`);
        });
    }
}

class LibraryStaff {
    // Method to add a new book to the library
    static addBook(library, title, author) {
        const newBook = new Book(title, author);
        library.books.push(newBook);
        return newBook;
    }

    // Method to remove a damaged book from the library
    static removeDamagedBook(library, book) {
        const index = library.books.indexOf(book);
        if (index !== -1) {
            library.books.splice(index, 1);
            return true; // Book successfully removed
        } else {
            return false; // Book not found in the library
        }
    }
}

class Library {
    constructor() {
        this.books = [];
    }

    // Method to check the availability of a book
    checkAvailability(book) {
        return book.isAvailable;
    }
}

// Example Usage
const library = new Library();

const book1 = LibraryStaff.addBook(library, "The Great Gatsby", "F. Scott Fitzgerald");
const book2 = LibraryStaff.addBook(library, "To Kill a Mockingbird", "Harper Lee");

const member1 = new LibraryMember("Alice", "alice@email.com");

console.log(library.checkAvailability(book1)); // true

member1.borrowBook(book1);
member1.borrowBook(book2);

console.log(library.checkAvailability(book1)); // false

member1.displayBorrowedBooks();

member1.returnBook(book1);

console.log(library.checkAvailability(book1)); // true

member1.displayBorrowedBooks();

LibraryStaff.removeDamagedBook(library, book2);

console.log(library.books.length); // 1
