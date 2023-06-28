import { loadTopBooks } from './api-request';
import { renderTopBooks, renderMarkupBook } from './render';
const allBooks = document.querySelector('.all-books-area');

loadTopBooks();

allBooks.addEventListener('click', handlerClickLoad);
function handlerClickLoad(event) {
  console.log(event.currentTarget);
}
