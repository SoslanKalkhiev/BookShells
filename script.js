
const titleinput = document.getElementById('title');
const header = document.getElementById('header');
const catalog = document.getElementById('catalog');
        

const book1 = {
    name:"Мцыри",
    image:"images/Mziry.png",
    author:"М.Ю. Лермонтов",
    genre:"Поэзия",
    rating:"4.8"
}
const book2 = {
    name:"Хэллоуин",
    image:"images/pumpkin.png",
    author:"Элизабет Афтон",
    genre:"Хоррор",
    rating:"3.7"
}



// let allbooks = /* JSON.parse(localStorage.getItem('books')) ||*/ [];
const allbooks = [book1, book2];
const prosebooks = [book2];
const classicbooks = [book1];
// allbooks.push(book);

// function SaveLocalStorage(){
//     localStorage.setItem('books',JSON.stringify(allbooks))
// }
function renderBooks(books){
    books.forEach(book => {
        const card = document.createElement('div');
        card.className = 'book';
        card.id = 'book1';
        card.innerHTML = `
        ${book.image !='' ?`<img class="img-book" src="${book.image}">`:''}
        <p class="name">${book.name}</p>
        <p class="author">${book.author}</p>
        <label class="genre">${book.genre}</label>
        <div class="rating">⭐${book.rating}</div>
        `
        catalog.appendChild(card);
    });
}
function searchBooks(title){
    allbooks.forEach(book => {
        if(book.name == title)
        {
            const card = document.createElement('div');
            card.className = 'book';
            card.innerHTML = `
            ${book.image !='' ?`<img class="img-book" src="${book.image}">`:''}
            <p class="name">${book.name}</p>
            <p class="author">${book.author}</p>
            <label class="genre">${book.genre}</label>
            <div class="rating">⭐${book.rating}</div>
            `
            catalog.appendChild(card);
            return;
        };
    });
}

header.addEventListener('click',(event)=>{
    event.preventDefault();
    if(event.target.classList.contains("all")){
        catalog.innerHTML = '';
        renderBooks(allbooks);
    }
    if(event.target.classList.contains("fantasy")){
        catalog.innerHTML = '';
        renderBooks(prosebooks);
    }
    if(event.target.classList.contains("classic")){
        catalog.innerHTML = '';
        renderBooks(classicbooks);
    }
    if(event.target.classList.contains("search-btn")){
        catalog.innerHTML = '';
        searchBooks(titleinput.value);
    }
});

catalog.addEventListener('click',(event)=>{
    if(event.target.classList!="catalog"){
        window.location.href = `book.html`;
    }
});
// list.addEventListener('click',(event)=>{
//     if(event.target.classList.contains("details-btn")){
//         const id = event.target.dataset.id;
//         window.location.href = `recipe.html?id=${id}`;
//         return;
//     }
//     if(event.target.classList.contains="delete-btn"){
//         const id = Number(event.target.dataset.id);
//         recipes = recipes.filter((r)=> r.id !== id);
//         SaveLocalStorage();
//         renderRecipes();
//     }
// });
renderBooks(allbooks);
