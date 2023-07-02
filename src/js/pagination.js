import Pagination from 'tui-pagination';
import {getBookById} from './api-request.js';
import {allBooksInfo} from './shopping.js'

const paginationContainer = document.getElementById('tui-pagination-container');
const paginationOptions = {
    totalItems: 40,
    itemsPerPage: 3,
    visiblePages: 3,
    centerAlign: true,
    firstItemClassName: 'tui-first-child',
  lastItemClassName: 'tui-last-child',
    page: 1,
    template: { page: '<a href="#" class="tui-page-btn">{{page}}</a>',
    currentPage: '<strong class="tui-page-btn tui-is-selected">{{page}}</strong>',
    moveButton:
      '<a href="#" class="tui-page-btn tui-{{type}}">' +
        '<span class="tui-ico-{{type}}">{{type}}</span>' +
      '</a>',
    disabledMoveButton:
      '<span class="tui-page-btn tui-is-disabled tui-{{type}}">' +
        '<span class="tui-ico-{{type}}">{{type}}</span>' +
      '</span>',
    moreButton:
      '<a href="#" class="tui-page-btn tui-{{type}}-is-ellip">' +
        '<span class="tui-ico-ellip">...</span>' +
      '</a>'},
  }

if (document.documentElement.clientWidth < 768){
        paginationOptions.itemsPerPage = 4;
        paginationOptions.visiblePages = 2;
    }

const booksPerPage = 4;
const page = 1;
const shoppingList = document.querySelector(".shopping-book-list")

const pagination = new Pagination(paginationContainer, paginationOptions);
const booksLocalStorage = JSON.parse(localStorage.getItem('books') || '[]');

function paginationFromStorage(page, booksPerPage){
const paginatedLocalStorageBooks = booksLocalStorage.slice(page, booksPerPage)
return paginatedLocalStorageBooks
}

allBooksInfo(paginationFromStorage(page, booksPerPage))

// allBooksInfo(booksLocalStorage)
 

pagination.on('afterMove', (event) => {
  const currentPage = event.page
  console.log(currentPage);
  allBooksInfo(paginationFromStorage(event.page, booksPerPage))
});