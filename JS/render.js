(()=>{
    const list = bookList();

    for(let book of list){
        const card = document.createElement('div');
        card.classList.add('card');

        card.innerHTML = `
            <h3>${book.name}</h3>
            <p><strong>Autor:</strong> ${book.author}</p>
            <p><strong>Género:</strong> ${book.genre}</p>
            <p><strong>Año:</strong> ${book.year}</p>
        `;

        mainObject.appendChild(card);
    }
})();

