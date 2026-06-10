const myLibrary = [];
function Book(title, author,numpages,readStatus,Id) {
 if(!new.target){
        throw new Error("Book must be called with new");
 }    
    this.title = title;
    this.author = author;
    this.numpages = numpages;
    this.readStatus = readStatus;
    this.Id = crypto.randomUUID;
    this.info = function() {
        return `${this.title} by ${this.author},${this.numpages} pages,${this.readStatus}`;
    };
}
function addBookToLibrary(title, author,numpages,readStatus,Id) {
    const newBook = new Book(title, author, numpages, readStatus, Id);
    myLibrary.push(newBook);
}
function removeBookFromLibrary(Id) {
    const index = myLibrary.findIndex(book => book.Id === Id);
    if (index !== -1) {
        myLibrary.splice(index, 1);
    }
}
function toggleReadStatus(Id) {
    const book = myLibrary.find(book => book.Id === Id);
    if (book) {
        book.readStatus = !book.readStatus;
    }
}
const newBook = document.querySelector(".addBookButton");
const addChild = document.querySelector(".row");
newBook.addEventListener("click", () => {
    const title = window.prompt("Enter the book title:");
    const author = window.prompt("Enter the book author:");
    const description = window.prompt("Enter the book description:");
    const numpages = window.prompt("Enter the number of pages:");
    const imageUrl=window.prompt("Enter the image URL:");
    const readStatus = confirm("Have you read this book?");
    addBookToLibrary(title, author, numpages, readStatus);
    const bookCard = document.createElement("div");
    bookCard.classList.add("col-md-4", "mb-4");
    bookCard.innerHTML = `
        <div class="card h-100">
            <img src="${imageUrl}" class="card-img-top" alt="${title}">
            <div class="card-body">
                <h5 class="card-title">${title}</h5>
                <p class="card-text">Book description: ${description}</p>
                <a href="#" class="btn btn-primary">View Details</a>
            </div>
        </div>
    `;
    addChild.appendChild(bookCard);
});