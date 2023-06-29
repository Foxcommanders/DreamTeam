import { loadTopBooks } from './api-request';

const allBooks = document.querySelector('.all-books-area');

loadTopBooks();

allBooks.addEventListener('click', handlerClickLoad);
function handlerClickLoad(event) {
  console.log(event.currentTarget);
}
