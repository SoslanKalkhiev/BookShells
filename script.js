
const titleinput = document.getElementById('title');
const header = document.getElementById('header');
const catalog = document.getElementById('catalog');
        

const book1 = {
    id:"book1",
    name:"Мцыри",
    image:"images/Mziry.png",
    author:"М.Ю. Лермонтов",
    genre:"Поэзия",
    rating:"4.8"
}
const book2 = {
    id:"book2",
    name:"Хэллоуин",
    image:"images/pumpkin.png",
    author:"Элизабет Афтон",
    genre:"Хоррор",
    rating:"3.7"
}

const allbooks = [book1, book2];
const prosebooks = [book2];
const classicbooks = [book1];


function renderBooks(books){
    books.forEach(book => {
        const card = document.createElement('div');
        card.className = 'book';
        card.id = book.id;
        card.innerHTML = `
        ${book.image !='' ?`<img id=${book.id} class="img-book" src="${book.image}">`:''}
        <p id=${book.id} class="name">${book.name}</p>
        <p id=${book.id} class="author">${book.author}</p>
        <label id=${book.id} class="genre">${book.genre}</label>
        <div id=${book.id} class="rating">⭐${book.rating}</div>
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
            card.id = book.id;
            card.innerHTML = `
            ${book.image !='' ?`<img id=${book.id} class="img-book" src="${book.image}">`:''}
            <p id=${book.id} class="name">${book.name}</p>
            <p id=${book.id} class="author">${book.author}</p>
            <label id=${book.id} class="genre">${book.genre}</label>
            <div id=${book.id} class="rating">⭐${book.rating}</div>
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
        const item = allbooks.find((book)=> book.id == event.target.id);
        localStorage.setItem("book", JSON.stringify(item));
        window.location.href = `book.html`;
    }
});
renderBooks(allbooks);
