import Navigation from './modules/navigation.js';
import Book from './modules/manageBook.js';
import DisplayBook from './modules/displayBooks.js';
import { DateTime } from './modules/luxon.js';

const form = document.querySelector('form');
const nav = document.querySelector('.navbar');
const displayBook = document.querySelector('.display-Books');
const timeArea = document.querySelector('.time');

const now = DateTime.now();
timeArea.textContent = now.toLocaleString(DateTime.DATETIME_MED);
nav.addEventListener('click', (e) => {
  e.preventDefault();
  const navigation = new Navigation(e.target.id, e.target.target);
  navigation.showNavigation();
});

form.addEventListener('submit', (e) => {
  e.preventDefault();
  const title = document.querySelector('#title').value;
  const author = document.querySelector('#author').value;
  const newBook = new Book(title, author);
  newBook.addBook();
  DisplayBook.display();
  document.querySelector('#title').value = '';
  document.querySelector('#author').value = '';
});

displayBook.addEventListener('click', (e) => {
  if (e.target.classList.contains('removeBtn')) {
    const { id } = e.target;
    Book.removeBook(id);
    DisplayBook.display();
  }
});

window.addEventListener('load', DisplayBook.display());