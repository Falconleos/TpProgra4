export class Book {
    static counter = 0;

    #id;
    #title;
    #author;
    #genre;
    #year;
    #isFavorite; 

    constructor(title, author, genre, year, isFavorite = false) {
        this.#id = Book.counter++;
        this.#title = title;
        this.#author = author;
        this.#genre = genre;
        this.#year = year;
        this.#isFavorite = isFavorite;
    }

    getId = () => {
        return this.#id;
    }
    getTitle = () => {
        return this.#title;
    }
    getAuthor = () => {
        return this.#author;
    }
    getGenre = () => {
        return this.#genre;
    }
    getYear = () => {
        return this.#year;
    }
    getIsFavorite = () => {
        return this.#isFavorite;
    }

    setTitle = (title) => {
        this.#title = title;
    }
    setAuthor = (author) => {
        this.#author = author;
    }
    setGenre = (genre) => {
        this.#genre = genre;
    }
    setYear = (year) => {
        this.#year = year;
    }
    setIsFavorite = (isFavorite) => {
        this.#isFavorite = Boolean(isFavorite);
    }

    #imprimir() {
        console.log(`Libro: ${this.#id}\nTitle: ${this.#title}\nAuthor: ${this.#author}\nGenre: ${this.#genre}\nYear: ${this.#year}\nFavorite: ${this.#isFavorite}\n==================================================`);
    }
}