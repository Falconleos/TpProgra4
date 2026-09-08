import { Book } from "../Model/Book.js";
import { bookList } from "./data.js";

const mainObject = document.querySelector('main');
const editModal = document.querySelector('.modal');

const titleEditInput = editModal.querySelector('#titleEdit');
const authorEditInput = editModal.querySelector('#authorEdit');
const genreEditInput = editModal.querySelector('#genreEdit');
const yearEditInput = editModal.querySelector('#yearEdit');
const btnConfirmar = editModal.querySelector('.btnConfirm');
const addForm = document.querySelector('.addMenu');
const inputNewTitle = document.querySelector('#addTitle');
const inputNewAuthor = document.querySelector('#addAuthor');
const inputNewGenre = document.querySelector('#addGenre');
const inputNewYear = document.querySelector('#addYear');
const filter = document.querySelector('#inputFilter');
const selectFilter = document.querySelector('#filter-select');

let dashboardCount = document.querySelector('.dashboard h2');
let shownBookCount = document.querySelector('.book-showed');

let activeBook = null;
let activeCardDiv = null;

export const crearCards = (lista = bookList) => {
    mainObject.innerHTML = '';

    lista.forEach((book) => {
        const nuevoDiv = document.createElement('div');
        nuevoDiv.classList.add('card');
        
        nuevoDiv.innerHTML = `
            <div class="card-info">
                <h2>${book.getTitle()}</h2>
                <h3>Autor: ${book.getAuthor()}</h3> 
                <p>genre: ${book.getGenre()}</p>
                <p>year: ${book.getYear()}</p>

                <label class="fav-label">
                <!-- ternario para indicar si la card debe aparecer marcada o no como favorita -->
                    <input type="checkbox" id="chk-fav${book.getId()}" ${book.getIsFavorite() ? 'checked' : ''}>
                    Favorito
                </label>
                
                <!-- ternario para indicar si la card debe aparecer marcada o no como prestada -->
                <label class="fav-label">            
                    <input type="checkbox" id="chk-borr${book.getId()}" ${book.getIsBorrowed() ? 'checked' : ''}>
                    Prestado
                </label>

            </div>
            <div class="btn-options">
                <button id="btn-edit${book.getId()}">Editar</button>
                <button id="btn-eliminar${book.getId()}">Eliminar</button>
            </div>`;

        // Evento para cambiar el estado de favorito
        const chkFav = nuevoDiv.querySelector(`#chk-fav${book.getId()}`);
        chkFav.addEventListener('change', (e) => {
            book.setIsFavorite(e.target.checked);

            if (selectFilter.value === 'favoriteSelect') {
                filter.dispatchEvent(new Event('input'));
            }
        });
        // Evento para cambiar el estado de prestado
        const chkBorr = nuevoDiv.querySelector(`#chk-borr${book.getId()}`);
        chkBorr.addEventListener('change', (e) => {
            book.setIsBorrowed(e.target.checked);

            if (selectFilter.value === 'borrowedSelect') {
                filter.dispatchEvent(new Event('input'));
            }
        });

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

        const btnEliminar = nuevoDiv.querySelector(`#btn-eliminar${book.getId()}`);
        btnEliminar.addEventListener('click', () => {
            if (confirm(`Seguro desea eliminar ${book.getTitle()}?`)) {
                const index = bookList.findIndex(b => b.getId() === book.getId());
                if (index !== -1) {
                    bookList.splice(index, 1);
                }
                nuevoDiv.remove();
            }
            shownBookCount.textContent = mainObject.children.length;
            dashboardCount.textContent = bookList.length;
        });

        mainObject.appendChild(nuevoDiv);
    });

    shownBookCount.textContent = mainObject.children.length;
}; 

btnConfirmar.addEventListener('click', () => {
    if (!activeBook) return;

    activeBook.setTitle(titleEditInput.value);
    activeBook.setAuthor(authorEditInput.value);
    activeBook.setGenre(genreEditInput.value);
    activeBook.setYear(Number(yearEditInput.value));

    activeCardDiv.querySelector('.card-info').innerHTML = `
        <h2>${activeBook.getTitle()}</h2>
        <h3>Autor: ${activeBook.getAuthor()}</h3>
        <p>genre: ${activeBook.getGenre()}</p>
        <p>year: ${activeBook.getYear()}</p>

        <label class="fav-label">
            <input type="checkbox" id="chk-fav${activeBook.getId()}" ${activeBook.getIsFavorite() ? 'checked' : ''}>
            Favorito
        </label>

        <label class="fav-label">            
            <input type="checkbox" id="chk-borr${activeBook.getId()}" ${activeBook.getIsBorrowed() ? 'checked' : ''}>
            Prestado
        </label>
    `;

    const chkFav = activeCardDiv.querySelector(`#chk-fav${activeBook.getId()}`);
    chkFav.addEventListener('change', (e) => {
        activeBook.setIsFavorite(e.target.checked);
        if (selectFilter.value === 'favoriteSelect') {
            filter.dispatchEvent(new Event('input'));
        }
    });

    const chkBorr = activeCardDiv.querySelector(`#chk-borr${activeBook.getId()}`);
    chkBorr.addEventListener('change', (e) => {
        activeBook.setIsBorrowed(e.target.checked);
        if (selectFilter.value === 'borrowedSelect') {
            filter.dispatchEvent(new Event('input'));
        }
    });

    editModal.style.display = 'none';
    activeBook = null;
    activeCardDiv = null;
});

addForm.addEventListener('submit', (e) => {
    e.preventDefault();
    
    if (addForm.checkValidity()) {
        const newBook = new Book(
            inputNewTitle.value.trim(),
            inputNewAuthor.value.trim(),
            inputNewGenre.value.trim(),
            Number(inputNewYear.value.trim())
        );

        bookList.push(newBook);
        addForm.reset();
        
        filter.dispatchEvent(new Event('input'));
        dashboardCount.textContent = bookList.length;
    } else {
        addForm.reportValidity();
    }
});

filter.addEventListener('input', () => {
    const query = filter.value.toLowerCase().trim();
    const criterio = selectFilter.value;

    const bookListFiltered = bookList.filter((book) => {
        if (criterio === 'favoriteSelect') {
            const esFavorito = book.getIsFavorite();
            if (query !== '') {
                const coincideTexto = book.getTitle().toLowerCase().includes(query) || 
                                     book.getAuthor().toLowerCase().includes(query);
                return esFavorito && coincideTexto;
            }
            return esFavorito;
        }

        if (criterio === 'borrowedSelect') {
            const esBorrowed = book.getIsBorrowed();
            if (query !== '') {
                const coincideTexto = book.getTitle().toLowerCase().includes(query) || 
                                     book.getAuthor().toLowerCase().includes(query);
                return esBorrowed && coincideTexto;
            }
            return esBorrowed;
        }

        let valorCampo = '';
        if (criterio === 'titleSelect') valorCampo = book.getTitle();
        else if (criterio === 'authorSelect') valorCampo = book.getAuthor();
        else if (criterio === 'genreSelect') valorCampo = book.getGenre();
        else if (criterio === 'yearSelect') valorCampo = String(book.getYear());

        return valorCampo.toString().toLowerCase().includes(query);
    });

    crearCards(bookListFiltered);
    shownBookCount.textContent = bookListFiltered.length;
});

selectFilter.addEventListener('change', () => {
    filter.dispatchEvent(new Event('input'));
});

dashboardCount.textContent = bookList.length;