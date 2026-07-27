/**
 * 
 * The school library is building a digital catalog to help students search for books. 
 * Every book must store its ISBN number, title, author's name, total number of pages, 
 * book category, and whether the book is currently available for borrowing.
 * 
 * Task:
 * 1. Define a proper type for the book information.
 * 2. Implement a type that you defined on 3 books data.
 * 
 * display the book data using console.log.
 */
const buku = {
    book: (isbn: string, title: string, author: string, totalPages: number, category: string, isAvailable: boolean) => ({
        isbn, title, author, totalPages, category, isAvailable
    })
};

const dataBuku = [
    buku.book("978-3-16-148410-0", "The Great Gatsby", "F. Scott Fitzgerald", 180, "Fiction", true),
    buku.book("978-0-14-044913-6", "Crime and Punishment", "Fyodor Dostoevsky", 430, "Classic Literature", false),
    buku.book("978-0-06-112008-4", "To Kill a Mockingbird", "Harper Lee", 281, "Historical Fiction", true)
];

console.log(dataBuku);