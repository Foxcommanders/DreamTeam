import { loadTopBooks } from './api-request';
import { renderTopBooks } from './render';
import 'lazysizes';
import 'lazysizes/plugins/parent-fit/ls.parent-fit';

const allBooks = document.querySelector('.all-books-area');

loadTopBooks().then(data => {
  allBooks.innerHTML = renderTopBooks(data.data);
});

allBooks.addEventListener('click', handlerClickLoad);
async function handlerClickLoad(event) {
  if (event.target.nodeName !== 'BUTTON') return;
  else {
    try {
      const categoryName =
        event.target.closest('div').firstElementChild.textContent;
      const booksLoadMore = await getBooksByCategory(categoryName);
      renderBooks(booksLoadMore);
    } catch (error) {
      console.log(error);
    }
  }
}
