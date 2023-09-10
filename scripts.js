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
    remove.innerText = "Remove Book";
    remove.addEventListener("click", () => {
        removeBookFromLibrary(book);
        card.remove();
    });
    card.appendChild(remove);

    let name = document.createElement("h2");
    name.setAttribute("class", "name");
    name.innerText = book.name;
    card.appendChild(name);

    let author = document.createElement("h3");
    author.setAttribute("class", "author");
    author.innerText = book.author;
    card.appendChild(author);

    let pages = document.createElement("p");
    pages.setAttribute("class", "pages");
    pages.innerText = book.pages;
    card.appendChild(pages);

    let finished = document.createElement("button");
    finished.setAttribute("class", "finished");
    if (book.finished) {
        finished.innerText = "Finished";
    } else {
        finished.innerText = "Not Finished";
    }
    card.appendChild(finished);
    
    library.appendChild(card);
}

function removeBookFromLibrary(book) {
    books.splice(books.indexOf(book), 1);
}

function CreatePromptElement() {
    let popup = document.createElement("div");
    popup.setAttribute("class", "popup");
    createFormElement(popup);
    body.appendChild(popup);
}

function createFormElement(popup) {
    let form = document.createElement("div");
    form.setAttribute("class", "form");

    createCancelElement(form, popup);

    let fieldset = document.createElement("fieldset");
    fieldset.innerText = "New Book";
    form.appendChild(fieldset);

    let name = createNameElement(fieldset);
    let author = createAuthorElement(fieldset);
    let pages = createPagesElement(fieldset);

    let submit = document.createElement("button");
    submit.innerText = "Add Book";
    submit.addEventListener("click", () => {
        let book = new Book(name.value, author.value, pages.value, false);
        addBookToLibrary(book);
        popup.remove();
    });
    form.appendChild(submit);

    popup.appendChild(form);
}

function createCancelElement(form, popup) {
    let cancel = document.createElement("button");
    cancel.setAttribute("class", "cancel");
    cancel.innerText = "Cancel";
    cancel.addEventListener("click", () => {
        popup.remove();
    });
    form.append(cancel);
}

function createNameElement(fieldset) {
    let nameLabel = document.createElement("label");
    nameLabel.setAttribute("for", "name");
    nameLabel.innerText = "name";
    let name = document.createElement("input");
    name.setAttribute("type", "text");
    name.setAttribute("id", "name");
    name.setAttribute("name", "name");
    fieldset.appendChild(nameLabel);
    fieldset.appendChild(name);
    return name;
}

function createAuthorElement(fieldset) {
    let authorLabel = document.createElement("label");
    authorLabel.setAttribute("for", "author");
    authorLabel.innerText = "author";
    let author = document.createElement("input");
    author.setAttribute("type", "text");
    author.setAttribute("id", "author");
    author.setAttribute("name", "author");
    fieldset.appendChild(authorLabel);
    fieldset.appendChild(author);
    return author;
}

function createPagesElement(fieldset) {
    let pagesLabel = document.createElement("label");
    pagesLabel.setAttribute("for", "pages");
    pagesLabel.innerText = "pages";
    let pages = document.createElement("input");
    pages.setAttribute("type", "number");
    pages.setAttribute("id", "pages");
    pages.setAttribute("name", "pages");
    fieldset.appendChild(pagesLabel);
    fieldset.appendChild(pages);
    return pages;
}

add.addEventListener("click", event => {
    CreatePromptElement();
    console.log(books);
    console.log(body);
});

const cat = new Book("The Cat in the Hat", "Dr Seuss", 61, true);
const eggs = new Book("Green Eggs and Ham", "Dr Seuss", 72, false);

addBookToLibrary(cat);
addBookToLibrary(eggs);