class Book {
    constructor(author) {
        this.author = author;
    }
    // getter
    get writer() {
        return this.author;
    }
    // setter
    set writer(updatedAuthor) {
        this.author = updatedAuthor;
    }
}

const book = new Book("sajib");
book.author = 'sojol'
console.log(book.writer);