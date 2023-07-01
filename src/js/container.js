import { loadTopBooks, getBooksByCategory } from './api-request';
import { renderTopBooks, renderBooks } from './render';
import 'lazysizes';
import 'lazysizes/plugins/parent-fit/ls.parent-fit';

const allBooks = document.querySelector('.all-books-area');
const titlePage = document.querySelector('.home-title');

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
  const arrOfName = categoryName.split(' ');
  titlePage.textContent = arrOfName.slice(0, arrOfName.length - 1).join(' ');
  titlePage.insertAdjacentHTML(
    'beforeend',
    ` <span class="home-title-accent">${arrOfName[arrOfName.length - 1]}</span>`
  );
}

export function clipBookTitle(title) {
  let clippedTitle = '';
  if (window.screen.width < 768) {
    let maxLength = 33;
    title.length > maxLength
      ? (clippedTitle = title.slice(0, maxLength - 1) + '...')
      : (clippedTitle = title);
  } else if (window.screen.width >= 768 && window.screen.width < 1440) {
    let maxLength = 21;
    title.length > maxLength
      ? (clippedTitle = title.slice(0, maxLength - 1) + '...')
      : (clippedTitle = title);
  } else {
    let maxLength = 18;
    title.length > maxLength
      ? (clippedTitle = title.slice(0, maxLength - 1) + '...')
      : (clippedTitle = title);
  }
  return clippedTitle;
}
