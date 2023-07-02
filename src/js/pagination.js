import Pagination from 'tui-pagination';
import {getBookById} from './api-request.js';
import {allBooksInfo} from './shopping.js'
import { markUp } from './shopping';
import amazon from '../images/shopping-svg/amazon.png';
import iShop from '../images/shopping-svg/i-shop.png';
import bookShop from '../images/shopping-svg/book-shop.png';
import svg from '../images/shopping-svg/trash.svg';

const defaultBookData = {
    bookTitle: 'Book title',
    genres: 'Genres',
    description:
    'Lorem ipsum dolor sit amet, consectetur adipisicing elit. Fuga fugiat, dolorem repudiandae aspernatur iste minima dolore recusandae incidunt veritatis debitis nam quis maxime atque nulla voluptates quasi necessitatibus! Sunt, rem.',
   author: 'Author',
  }

const paginationContainer = document.getElementById('tui-pagination-container');
const paginationOptions = {
    totalItems: 40,
    itemsPerPage: 3,
    visiblePages: 3,
    centerAlign: true,
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

const instance = new Pagination(paginationContainer, paginationOptions);
const booksLocalStorage = JSON.parse(localStorage.getItem('books') || '[]');

allBooksInfo(booksLocalStorage)