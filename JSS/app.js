import { bookList } from "./data.js";

const mainObject = document.querySelector('main');
const editModal = document.querySelector('.modal');

const titleEditInput = editModal.querySelector('#titleEdit');
const authorEditInput = editModal.querySelector('#authorEdit');
const genreEditInput = editModal.querySelector('#genreEdit');
const yearEditInput = editModal.querySelector('#yearEdit');
const btnConfirmar = editModal.querySelector('.btnConfirm');

let activeBook = null;
let activeCardDiv = null;

export const crearCards = () => {
    mainObject.innerHTML = ''; // Limpiamos por si se llama varias veces

    bookList.forEach((book) => {
        const nuevoDiv = document.createElement('div');
        nuevoDiv.classList.add('card');
        
        nuevoDiv.innerHTML = `
            <div class="card-info">
                <h2>${book.getTitle()}</h2>
                <h3>Autor: ${book.getAuthor()}</h3> 
                <p>genre: ${book.getGenre()}</p>
                <p>year: ${book.getYear()}</p>
            </div>
            <button id="btn-edit${book.getId()}">Editar</button>`;

        const btnEditar = nuevoDiv.querySelector(`#btn-edit${book.getId()}`);

        btnEditar.addEventListener('click', () => {
            editModal.style.display = 'flex';
            
            
            activeBook = book;
            activeCardDiv = nuevoDiv;

            titleEditInput.value = book.getTitle();
            authorEditInput.value = book.getAuthor();
            genreEditInput.value = book.getGenre();
            yearEditInput.value = book.getYear();
        });

        mainObject.appendChild(nuevoDiv);
    });
}; 

btnConfirmar.addEventListener('click', () => {
    if (!activeBook) return;

    activeBook.setTitle(titleEditInput.value);
    activeBook.setAuthor(authorEditInput.value);
    activeBook.setGenre(genreEditInput.value);
    activeBook.setYear(yearEditInput.value);

    activeCardDiv.querySelector('.card-info').innerHTML = `
    <h2>${activeBook.getTitle()}</h2>
    <h3>Autor: ${activeBook.getAuthor()}</h3>
    <p>genre: ${activeBook.getGenre()}</p>
    <p>year: ${activeBook.getYear()}</p>
`;
    editModal.style.display = 'none';
    activeBook = null;
    activeCardDiv = null;
});