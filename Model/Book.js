export class Book {
    constructor(title, author, genre, year, id = Date.now(), isFavorite = false, isBorrowed = false) {
        this.id = id;
        this.title = title;
        this.author = author;
        this.genre = genre;
        this.year = year;
        this.isFavorite = isFavorite;
        this.isBorrowed = isBorrowed;
    }

    // Getters
    getTitle() { return this.title; }
    getAuthor() { return this.author; }
    getGenre() { return this.genre; }
    getYear() { return this.year; }
    getId() { return this.id; }
    getIsFavorite() { return this.isFavorite; }
    getIsBorrowed() { return this.isBorrowed; }

    // Setters
    setTitle(title) { this.title = title; }
    setAuthor(author) { this.author = author; }
    setGenre(genre) { this.genre = genre; }
    setYear(year) { this.year = year; }
    setIsFavorite(isFavorite) { this.isFavorite = isFavorite; }
    setIsBorrowed(isBorrowed) { this.isBorrowed = isBorrowed; }
}