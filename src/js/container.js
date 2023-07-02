import { loadTopBooks, getBooksByCategory } from './api-request';
import { renderTopBooks, renderBooks } from './render';
import 'lazysizes';
import 'lazysizes/plugins/parent-fit/ls.parent-fit';

const allBooks = document.querySelector('.all-books-area');
const titlePage = document.querySelector('.home-title');
const allCategories = document.querySelector('.js-category-list');

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
      makeNameCategoryAccent(categoryName);
      allBooks.innerHTML = renderBooks(booksLoadMore.data);
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

function makeNameCategoryAccent(categoryName) {
  allCategories
    .querySelector('.active-category')
    .classList.remove('active-category');

  for (let i = 0; i < allCategories.children.length; i += 1) {
    if (allCategories.children[i].textContent === categoryName) {
      allCategories.children[i].classList.add('active-category');
      allCategories.children[i].scrollIntoView({
        behavior: 'auto',
        block: 'center',
      });
    }
  }

  if (window.screen.width < 768) {
    setTimeout(
      () =>
        window.scrollTo({
          top: 768,
          left: 0,
          behavior: 'smooth',
        }),
      500
    );
  } else if (window.screen.width >= 768 && window.screen.width < 1440) {
    setTimeout(
      () =>
        window.scrollTo({
          top: 685,
          left: 0,
          behavior: 'smooth',
        }),
      700
    );
  } else {
    setTimeout(
      () =>
        window.scrollTo({
          top: 0,
          left: 0,
          behavior: 'smooth',
        }),
      100
    );
  }
}
