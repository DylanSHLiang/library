const books = [];
const add = document.querySelector(".add");
const library = document.querySelector(".library");

function Book(name, author, pages, finished) {
    this.name = name;
    this.author = author;
    this.pages = pages;
    this.finished = finished;
}

function addBookToLibrary(book) {
    books.push(book);
    createBookElement(book);
}

function createBookElement(book) {
    let card = document.createElement("div");
    card.setAttribute("class", "book");

    let remove = document.createElement("button");
    remove.setAttribute("class", "remove");
    remove.innerHTML = "Remove Book";
    remove.addEventListener("click", () => {
        card.remove();
    })
    card.appendChild(remove);

    let name = document.createElement("h2");
    name.setAttribute("class", "name");
    name.innerHTML = book.name;
    card.appendChild(name);

    let author = document.createElement("h3");
    author.setAttribute("class", "author");
    author.innerHTML = book.author;
    card.appendChild(author);

    let pages = document.createElement("p");
    pages.setAttribute("class", "pages");
    pages.innerHTML = book.pages;
    card.appendChild(pages);

    let finished = document.createElement("button");
    finished.setAttribute("class", "finished");
    if (book.finished) {
        finished.innerHTML = "Finished";
    } else {
        finished.innerHTML = "Not Finished";
    }
    card.appendChild(finished);
    
    library.appendChild(card);
}

add.addEventListener("click", event => {
    let book = new Book("Book name", "Author", books.length, false);
    addBookToLibrary(book);
    console.log(books);
});

const cat = new Book("The Cat in the Hat", "Dr Seuss", 61, true);
const eggs = new Book("Green Eggs and Ham", "Dr Seuss", 72, false);

addBookToLibrary(cat);
addBookToLibrary(eggs);