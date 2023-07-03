import Pagination from 'tui-pagination';
import {allBooksInfo} from './shopping.js';
const booksLocalStorage = JSON.parse(localStorage.getItem('books') || '[]');
const paginationContainer = document.getElementById('tui-pagination-container');
let booksPerPage = 3;
let visiblePages = 3;
const page = 0;
function checkDeviceWidth(){
  if (window.innerWidth < 768) {
    booksPerPage = 4;
    visiblePages = 2;
    }}
    checkDeviceWidth()
allBooksInfo(paginationFromStorage(page, booksPerPage))
function paginationFromStorage(page, booksPerPage){
  const paginatedLocalStorageBooks = booksLocalStorage.slice(page, booksPerPage)
  return paginatedLocalStorageBooks
  }
const paginationOptions = {
    totalItems: booksLocalStorage.length,
    itemsPerPage: booksPerPage,
    visiblePages: visiblePages,
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
      '</a>'
    },
  }
  // emptyList: document.querySelector('.shopping-empty-list')
  // bookList: document.querySelector('.shopping-book-list')
  function checkLocalStoragePaginated(arr) {
    if (!arr.length) {
      document.getElementById('tui-pagination-container').setAttribute('hidden', 'true');
      document.querySelector('.shopping-empty-list').insertAdjacentHTML('afterbegin', shoppingEmptyMarkup());////if (!arr.length) {
      document.querySelector('.shopping-empty-list').classList.remove('display');
      document.querySelector('.shopping-book-list').classList.add('display');
    } else {
      document.querySelector('.shopping-empty-list').classList.add('display');
      document.querySelector('.shopping-book-list').classList.remove('display');
      allBooksInfo(arr);
    }
    return;
  }
const pagination = new Pagination(paginationContainer, paginationOptions);
function displayCurrentPage() {
  const currentPage = pagination.getCurrentPage();
  const start = (currentPage - 1) * booksPerPage;
  const end = start + booksPerPage;
  const currentPageData = booksLocalStorage.slice(start, end);
  checkLocalStoragePaginated(currentPageData)
  // allBooksInfo(currentPageData)
  }
  pagination.on('afterMove', function (eventData) {
  displayCurrentPage();
  });