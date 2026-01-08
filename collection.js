const params = new URLSearchParams(window.location.search);
const Id = Number(params.get('id'))-1;

let collection = JSON.parse(localStorage.getItem("chosecollection"));
const catalog = document.getElementById("chose-collection");

let p = document.getElementById("about-collection");


function renderBooks(collection){
    catalog.innerHTML=``;
        collection.books.forEach(book=>{
        const card = document.createElement('div');
        card.className = 'book-card';
        card.id = book.id;
        card.innerHTML = `
        <img class="img-book-mini" src=${book.image}>
        <div class="book-desc">
            <p class="name">${book.name}</p>
            <p class="author">${book.author}</p>
            <p class="begin">Начато: ${""}</p>
            <p class="end">Завершено: ${""}</p>

            <div class="genre-rating">
                <label class="genre">${book.genre}</label>
                <div class="rating">Ваша оценка: ${book.rating}</div>
                <button class="delete" id=${book.id}>X</button>
            </div>
                
        </div>
        `
        catalog.appendChild(card);
});
}
renderBooks(collection);

catalog.addEventListener('click',(event)=>{
    if(event.target.classList.contains="delete"){
        const id = event.target.id;
        collection.books = collection.books.filter((book)=> book.id !== id);
        collection.cnt--;
        localStorage.setItem("chosecollection",JSON.stringify(collection));

        let defaultcollections = JSON.parse(localStorage.getItem("defaultcollections"));
        defaultcollections[Id]=collection;
        localStorage.setItem("defaultcollections",JSON.stringify(defaultcollections));

        renderBooks(JSON.parse(localStorage.getItem("chosecollection")));
    }
});