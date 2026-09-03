import { Book } from "../model/book.js";
import { bookList } from "./data.js";

const mainObject = document.querySelector('main');

const btnAdd = document.querySelector('.bookAdd form button');
const inTitle = document.querySelector('#title');   
const inAuthor = document.querySelector('#author');   
const inGenre = document.querySelector('#genre');   
const inYear = document.querySelector('#year');   

const crearCard = (libro)=>{
    const card = document.createElement('div');
    card.classList.add('card');
    card.innerHTML = `
        <div>
            <h3>${libro.getTitle()}</h3>
            <p><strong>Autor:</strong> ${libro.getAuthor()}</p>
            <p><strong>Género:</strong> ${libro.getGenre()}</p>
            <p><strong>Año:</strong> ${libro.getYear()}</p>
        </div>
        <div class="botonera">
            <button class="btnSubmit btnSubmitEditar" id="${libro.getId()}">Editar</button>
            <button class="btnSubmit btnSubmitEliminar" id="${libro.getId()}">Eliminar</button>
        </div>
        `;
    mainObject.appendChild(card);
}

export const poblarLibros = ()=>{
    for(let book of bookList){
        crearCard(book);
    }
}

export const agregarLibro = ()=>{
    btnAdd.addEventListener('click',(e)=>{
        e.preventDefault();

        if(inTitle.value!==''&
        inAuthor.value!==''&
        inGenre.value!==''&
        inYear.value!==''){
            let libro = new Book(
            inTitle.value,
            inAuthor.value,
            inGenre.value,
            inYear.value,)

            bookList.push(libro);

            crearCard(libro);

            inTitle.value='';
            inAuthor.value='';
            inGenre.value='';
            inYear.value='';
        }
    })
}

export const eliminarLibro = ()=>{
    mainObject.addEventListener('click',(e)=>{
        if(e.target.classList.contains('btnSubmitEliminar')){
            const respuesta = confirm("Esta seguro que desea eliminarlo");
            if(respuesta){
                let libroIndex = (Number(e.target.id));
                bookList.splice(libroIndex,1);

                const cardDeleted = e.target.closest('.card');
                    if (cardDeleted) {
                        cardDeleted.remove();
                    }
                }   
        }
    })
}

export const editarLibro = ()=>{
    mainObject.addEventListener('click',(e)=>{
        if(e.target.classList.contains('btnSubmitEditar')){
                const modalForm = document.querySelector('section.modal');
                modalForm.style.display = 'flex';

                let libroIndex = Number(e.target.id);
                const libroSeleccionado = bookList[libroIndex];
                
                const modalTitle = document.querySelector('#modal-title');
                const modalAuthor = document.querySelector('#modal-author');
                const modalGenre = document.querySelector('#modal-genre');
                const modalYear = document.querySelector('#modal-year');

                modalTitle.value = libroSeleccionado.getTitle();
                modalAuthor.value = libroSeleccionado.getAuthor();
                modalGenre.value = libroSeleccionado.getGenre();
                modalYear.value = libroSeleccionado.getYear();
        }

        const btnFinalEdit = document.querySelector('.btnSumbitModal');
        
        btnFinalEdit.addEventListener('click',(e)=>{
            e.preventDefault();
        })
        

    })
}


