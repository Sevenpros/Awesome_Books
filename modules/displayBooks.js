import Storage from './storeData.js';

export default class DisplayBook {
  static display() {
    const displayBook = document.querySelector('.display-Books');
    const allBooks = Storage.getData();
    if (allBooks) {
      displayBook.innerHTML = '<h1>All Awesome Books</h1>';
      let index = 1;
      allBooks.forEach((book) => {
        displayBook.insertAdjacentHTML(
          'beforeend',
          `<div class='d-flex justify-content-between p-1 ${index % 2 === 0 ? '' : 'bg-secondary text-white'} border border-dark border-2'><div class='d-flex'><h3>${book.title}
            </h3> &nbsp; &nbsp; <h3>by</h3> &nbsp; &nbsp; <h3>${book.author}</h3></div>
            <button type='button' class='removeBtn btn btn-danger' id=${book.id} title= '${book.title}'>Remove</button></div>`,
        );
        index += 1;
      });
    }
  }
}
