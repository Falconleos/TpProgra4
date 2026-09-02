export const mainObject = document.querySelector('main');

const btnAdd = document.querySelector('.bookAdd form button');
    const inTitle = document.querySelector('#title');   
    const inAuthor = document.querySelector('#author');   
    const inGenre = document.querySelector('#genre');   
    const inYear = document.querySelector('#year');   


btnAdd.addEventListener('click',(e)=>{
    e.preventDefault();

    const title = inTitle.value;
    const author = inAuthor.value;
    const genre = inGenre.value;
    const year = inYear.value;
})
