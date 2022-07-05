/* eslint-disable import/prefer-default-export */
import Storage from './storeData.js';

export default class Book {
  constructor(title, author, id) {
    this.id = id;
    this.title = title;
    this.author = author;
  }

  addBook() {
    let books = Storage.getData();
    if (!books) books = [];
    const id = books.length + 1;
    books.push(new Book(this.title, this.author, id));
    const newStorage = new Storage(books);
    newStorage.storedData();
  }

  static removeBook(id) {
    const books = Storage.getData();
    const remainingBooks = books.filter((book) => book.id !== +id);
    const remainingStorage = new Storage(remainingBooks);
    remainingStorage.storedData();
  }
}
