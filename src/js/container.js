import { loadTopBooks, getBooksByCategory } from './api-request';
import { renderTopBooks, renderBooks } from './render';
import 'lazysizes';
import 'lazysizes/plugins/parent-fit/ls.parent-fit';
const allBooks = document.querySelector('.all-books-area');
// const titlePage = document.querySelector('.home-title');
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
      makeTitleAccent(categoryName);
      allBooks.innerHTML = renderBooks(booksLoadMore.data);
      window.scrollTo(0, 0);
    } catch (error) {
      console.log(error);
    }
  }
}
export function makeTitleAccent(categoryName) {
  console.log(categoryName);
  const arrOfName = categoryName.split(' ');
  document.querySelector('.home-title').textContent = arrOfName.slice(0, arrOfName.length - 1).join(' ');
  document.querySelector('.home-title').insertAdjacentHTML(
    'beforeend',
    ` <span class="home-title-accent">${arrOfName[arrOfName.length - 1]}</span>`
  );
}