import './support.js';
//import './render.js';
//import './api-request.js';
import './menu.js';
import './scrollUp.js';
import './pagination.js';
import './loader.js';
import './theme-swich.js';

import { shoppingEmptyMarkup } from './render.js';
import {getBookById} from './api-request.js';
import axios, { all } from 'axios';
//import symbol from '../images/shopping-svg/symbol-defs.svg';
import amazon from '../images/shopping-svg/amazon.png';
import iShop from '../images/shopping-svg/i-shop.png';
import bookShop from '../images/shopping-svg/book-shop.png';
import svg from '../images/shopping-svg/trash.svg';
//import emptyBooks from '../images/shopping-svg/empty-books.webp'

const refs = {
  emptyList: document.querySelector('.shopping-empty-list'),
  bookList: document.querySelector('.shopping-book-list'),
  shoppingSupport: document.querySelector('.container-support'),
};
document.body.classList.add('is-hidden');
refs.emptyList.classList.add('display');
refs.bookList.classList.add('display');


const booksLocalStorage = JSON.parse(localStorage.getItem('books') || '[]');
const screenWidth = window.screen.width;

const defaultBookData = {
  bookTitle: 'Book title',
  genres: 'Genres',
  description:
  'Lorem ipsum dolor sit amet, consectetur adipisicing elit. Fuga fugiat, dolorem repudiandae aspernatur iste minima dolore recusandae incidunt veritatis debitis nam quis maxime atque nulla voluptates quasi necessitatibus! Sunt, rem.',
 author: 'Author',
}

function containerSupport(screenWidth) {
  if (screenWidth < 1440) {
    refs.shoppingSupport.classList.add('display');
  } else {
    refs.shoppingSupport.classList.remove('display');
  }
  return;
}
containerSupport(screenWidth);

export function markUp(arr, {bookTitle, genres, description, author}) {
  return arr
    .map(el => {
      let elDescription = el.description;
      let elTitle = el.title;

      if (window.screen.width < 768) {
        description = description.split('').splice(0, 85).join('') + '...';
        elDescription = elDescription.split('').splice(0, 85).join('') + '...';
        if (elTitle.length > 16) {
          elTitle = elTitle.split('').splice(0, 16).join('') + '...';
        }
      } else if (window.screen.width >= 768 && window.screen.width < 1440) {
        description =
          'Lorem ipsum dolor sit amet, consectetur adipisicing elit. Fuga fugiat, dolorem repudiandae aspernatur iste minima dolore recusandae incidunt veritatis debitis nam quis maxime atque nulla voluptates quasi necessitatibus! Sunt, rem.';
        description = description.split('').splice(0, 248).join('') + '...';
        elDescription = el.description;
        elDescription = elDescription.split('').splice(0, 248).join('') + '...';
      } else {
        description = description;
        elDescription = el.description;
      }

      return `<li class="shopping-book-item" data-id="${el._id}">
        <div class="shopping-book-img">
          <img class="shopping-book-poster" src="${
            el.book_image
          }" alt="book-title '${
        el.title ? el.title : bookTitle
      }'" loading="lazy" />
        </div>
        <div class="shopping-book-text">
          <h2 class="shopping-book-title">${el.title ? elTitle : bookTitle}</h2>
          <p class="shopping-book-genres">${el.genres ? el.genres : genres}</p>
          <p class="shopping-book-description">${
            el.description ?  elDescription : description
          }</p>

          <div class="shopping-book-item-footer">
            <p class="shopping-book-author">${
              el.author ? el.author : author
            }</p>
            <ul class="shopping-book-shops">
              <li>
                <a class="shopping-shop-link" href="${
                  el.buy_links[0].url
                }" target="_blank" rel="noreferrer noopener">
                <img class="shopping-svg-amazon" src="${amazon}">
                </a>
              </li>
              <li>
                <a class="shopping-shop-link" href="${
                  el.buy_links[2].url
                }" target="_blank" rel="noreferrer noopener">
                <img class="shopping-svg-open-book" src="${iShop}">  
                </a>
              </li>
              <li>
                <a class="shopping-shop-link" href="${
                  el.buy_links[5].url
                }" target="_blank" rel="noreferrer noopener">
                <img class="shopping-svg-book-shop" src="${bookShop}">
                </a>
              </li>
            </ul>
          </div>
          <button class="shopping-btn-delete">
            <svg class="svg-trash" width="16" height="16">
              <use class="svg" href="${svg}#trash"></use>
            </svg>
          </button>
        </div>
      </li>`;
    })
    .join('');
}

async function allBooksInfo (arr){   
  const booksArrPromises = arr.map(async id=>{
    const eachBook = await getBookById(id);
    //console.log('eachBook', eachBook);
    return eachBook;
  }) 

  const booksArrOfObjects = await Promise.all(booksArrPromises)
  //console.log('ready', booksArrOfObjects);
  refs.bookList.insertAdjacentHTML('afterbegin', markUp(booksArrOfObjects, defaultBookData))  
}

function checkLocalStorage(arr) {
  if (!books.length) {
    document.getElementById('tui-pagination-container').setAttribute('hidden', 'true');
    refs.emptyList.insertAdjacentHTML('afterbegin', shoppingEmptyMarkup());////if (!arr.length) {
    refs.emptyList.classList.remove('display');
    refs.bookList.classList.add('display');
    console.log('empty');
  } else {
    allBooksInfo(arr);
    //refs.bookList.insertAdjacentHTML('afterbegin', markUp(books, defaultBookData));
    refs.emptyList.classList.add('display');
    refs.bookList.classList.remove('display');    
  }
  return;
}

refs.bookList.addEventListener('click', handlerDeleteBook);

function handlerDeleteBook(evt) {
  if (
    evt.target.nodeName !== 'BUTTON' &&
    evt.target.nodeName !== 'svg' &&
    evt.target.nodeName !== 'use'
  ) {
    console.log('error');
    return;
  }
  let newLocalStorage = booksLocalStorage;
  const bookItem = document.querySelector('.shopping-book-item');  
  // const arr = Array.from(evt.currentTarget.children);
  // console.log(arr);
  const deleteBook = evt.target.parentNode.parentNode
  // || evt.target.parentNode.parentNode.parentNode || evt.target.parentNode.parentNode.parentNode.parentNode
  console.log("Батько:", evt.target.parentNode.parentNode);
  console.log('Де клік:', evt.target);
  const onId = deleteBook.dataset['id'];
  //console.log(onId);
  const deleteIndex = newLocalStorage.indexOf(onId);
  //console.log(newLocalStorage.indexOf(onId)); 
  const newLocal = newLocalStorage.splice(deleteIndex, 1);
  console.log(newLocalStorage);
  localStorage.setItem('books', JSON.stringify(newLocalStorage));
  const renewLocal = JSON.parse(localStorage.getItem('books'));
  console.log(renewLocal.length);
  refs.bookList.innerHTML = allBooksInfo(renewLocal)
  if(!renewLocal.length){
    console.log(222);
    refs.emptyList.insertAdjacentHTML('afterbegin', shoppingEmptyMarkup());
    //refs.emptyList.innerHTML = shoppingEmptyMarkup();
    refs.emptyList.classList.remove('display');
    refs.bookList.classList.add('display')
    //refs.emptyList.inneinsertAdjacentHTML('afterbegin', shoppingEmptyMarkup());
  }

  if(bookItem.dataset['id']){
    console.log(123);
    //bookItem.remove();
  }  

  //const findId = local.find(id=>id === onId);
  //console.log(findId);  
  return;
}

checkLocalStorage(booksLocalStorage);