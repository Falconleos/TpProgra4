export class Book{

    static #idCounter = 0;

    #id;
    #title;
    #author;
    #genre;
    #year;

    constructor(title,author,genre,year){
        this.#id = Book.#idCounter++;
        this.#title = title;
        this.#author = author;
        this.#genre = genre;
        this.#year = year;
    }

    getId(){
        return this.#id;
    }
    getTitle(){
        return this.#title;
    }
    getAuthor(){
        return this.#author;
    }
    getGenre(){
        return this.#genre;
    }
    getYear(){
        return this.#year;
    }

    setTitle(title){
        this.#title = title;
    }
    setAtuhor(author){
        this.#author = author;
    }
    setGenre(genre){
        this.#genre = genre;
    }
    setYear(year){
        this.#year = year;
    }

    imprimir(){
        console.log(`Book: \nId: ${this.#id}\nTitle: ${this.#title}\nAuthor: ${this.#author}\nGenre: ${this.#genre}\nYear: ${this.#year}<hr>`);
    }
}