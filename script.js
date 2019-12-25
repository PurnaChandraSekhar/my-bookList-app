// BOOK CLASS 
class Book {
    constructor(title,author, isbn) {
      this.title = title;
      this.author = author;
      this.isbn = isbn;
    }
}

// UI CLASS FOR HANDLING UI EVENTS
class UI {
 static displaybooks() {
  const storedBooks = [
    {
      title: "Book one",
      author: "John Doe",
      isbn: "12344"
    },
    {
      title: "Book one",
      author: "John Doe",
      isbn: "12344"
    }
  ]

  const books = storedBooks;

  books.forEach(book => UI.addBookList(book))
 }

 static addBookList(book) {
   const list = document.querySelector('#book-list');
   
   const row = document.createElement('tr');

   row.innerHTML = `
   <td>${book.title}</td>
   <td>${book.author}</td>
   <td>${book.isbn}</td>
   <td><a href="#" class="btn btn-danger delete">X</a></td>
   `;

   list.appendChild(row)
 }

 static deleteBook(e) {
   if(e.classList.contains('delete')) {
     e.parentElement.parentElement.remove();
   }
 }

 static showAlertMessage(message, className) {
   const div = document.createElement('div');
   div.classList = `sam ${className}`;
   div.appendChild(document.createTextNode(message));
   const header = document.querySelector("#book-form");
   const container = document.querySelector(".btn");
   header.insertBefore(div, container); 

   setTimeout( () => {
     document.querySelector(".sam").remove()
   } , 3000)
 }

 static clearFields() {
   document.querySelector('#title').value = " ";
   document.querySelector('#author').value = " ";
   document.querySelector('#isbn').value = " ";
 }
}

// EVENT: DISPLAY BOOK
document.addEventListener('DOMContentLoaded', UI.displaybooks);

// Event: Add a Book
document.querySelector('#book-form').addEventListener('submit', (e) => {
  e.preventDefault();

  //get form values
  const title = document.querySelector('#title').value;
  const author = document.querySelector('#author').value;
  const isbn = document.querySelector('#isbn').value;


  if(title === "" || author === "" || isbn === "") {
    UI.showAlertMessage("Please fill all the fields", "danger");
  }else {
    //Instatiate book
    const book = new Book(title, author, isbn);
      
    //Add Book to List
    UI.addBookList(book);

    UI.showAlertMessage("Book Added Successfully", "success");

    //Clear Fields
    UI.clearFields();
  }

})

  //Delete a book
  document.querySelector("#book-list").addEventListener('click', (e) => {
    UI.deleteBook(e.target);

    UI.showAlertMessage("Book Removed Successfully", "success");
  })