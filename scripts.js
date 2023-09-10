const books = [];
const add = document.querySelector(".add");
const library = document.querySelector(".library");
const body = document.querySelector("body");

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
        removeBookFromLibrary(book);
        card.remove();
    });
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

function removeBookFromLibrary(book) {
    books.splice(books.indexOf(book), 1);
}

function prompt() {
    let popup = document.createElement("div");
    popup.setAttribute("class", "popup");
    form(popup);
    body.appendChild(popup);
}

function form(popup) {
    let form = document.createElement("form");

    let cancel = document.createElement("button");
    cancel.setAttribute("class", "cancel");
    cancel.innerHTML = "X";
    form.append(cancel);

    let fieldset = document.createElement("fieldset");
    fieldset.innerHTML = "New Book";
    form.appendChild(fieldset);

    let name = document.createElement("input");
    fieldset.appendChild(name);

    let author = document.createElement("input");
    fieldset.appendChild(author);

    let pages = document.createElement("input");
    fieldset.appendChild(pages);

    let finished = document.createElement("input");
    fieldset.appendChild(finished);

    let submit = document.createElement("button");
    form.appendChild(submit);

    popup.appendChild(form);
}

add.addEventListener("click", event => {
    prompt();
    let book = new Book("Book name", "Author", books.length, false);
    addBookToLibrary(book);
    console.log(books);
    console.log(body);
});

const cat = new Book("The Cat in the Hat", "Dr Seuss", 61, true);
const eggs = new Book("Green Eggs and Ham", "Dr Seuss", 72, false);

addBookToLibrary(cat);
addBookToLibrary(eggs);