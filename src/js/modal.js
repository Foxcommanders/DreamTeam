
import {getBookById} from './api-request.js';

const backDrop = document.querySelector('.backdrop');
const modal = document.querySelector('.modal');
document.body.classList.add('is-hidden')

backDrop.addEventListener('click', onBackDropClick);

function createMarkup(book) {
  let textForeBtn = 'remove from the shopping list';
  let classForP = '';
  let books = getShoppingList();
  const defaultText = 'lorem lorem lorem lorem lorem lorem lorem lorem lorem lorem lorem lorem lorem lorem orem lorem lorem lorem lorem lorem lorem lorem lorem lorem lorem lorem lorem lorem'
  if (!books.includes(book._id)) {
    textForeBtn = 'add to shopping list';
    classForP = 'hidden'
  }
  const { buy_links } = book;
    const markup = 
     `
    <button class="js-modal-btn modal-close-btn">
      <svg class="modal-close-icon" width="28" height="28">
        <use href=${require('../images/modal-icons/symbol-defs.svg')}#icon-close1></use>
      </svg>
    </button>
    <div class="modal-container">
    <img src="${book.book_image}" alt="" class="js-elem" width="192" heigth="280">
    <div class="modal-text-container">
        <h2 class="modal-title">${book.title}</h2>
        <p class="modal-silver-text">${book.author}</p>
        <p class="modal-history-text">${book.description || defaultText}</p>
        <ul class="modal-list">
        ${buy_links[0]?`<li class="modal-item">
            <a href="${buy_links[0].url}" class="">
              <svg class="modal-img" width="62" height="20">
                <use href=${require('../images/modal-icons/symbol-defs.svg')}#Amazon_logo></use>
              </svg>
            </a>
          </li>`: ''}
        ${buy_links[1]?`<li class="modal-item">
            <a href="${buy_links[1].url}" class="">
             <svg class="modal-img" width="33" height="32">
                <use href=${require('../images/modal-icons/symbol-defs.svg')}#open-book></use>
              </svg>
            </a>
          </li>`: ''}
        ${buy_links[4] ?`<li class="modal-item">
            <a href="${buy_links[4].url}" class="">
              <svg class="modal-img " width="38" height="36">
                <use href=${require('../images/modal-icons//symbol-defs.svg')}#book-shop></use>
              </svg>
            </a> 
          </li>`:''}
        </ul>
      </div>
    </div>
    <button class="modal-sub-btn js-modal-addbtn" data-id="${book._id}">${textForeBtn}</button>
    <p class="modal-check-text ${classForP}">Congratulations! You have added the book to the shopping list. To delete, press the
        button"
        Remove from the shopping
        list".</p>` 
    modal.innerHTML = markup;
};




export async function showModal(bookId) {
  const book = await getBookById(bookId);
  createMarkup(book);
   document.body.classList.remove('is-hidden')
  addListener()
}

function hideModal() {
  document.body.classList.add('is-hidden')
  window.removeEventListener('keydown', onModalClose);
}

function addListener() {
  const modalBtn = modal.querySelector('.js-modal-btn');
  modalBtn.addEventListener('click', hideModal);
  window.addEventListener('keydown', onModalClose);
  const addBtn = document.querySelector('.js-modal-addbtn');
  addBtn.addEventListener('click', onAddBtn);
}

function onAddBtn(e) {
  const id = e.currentTarget.dataset['id'];
  let books = getShoppingList();
  if (books.includes(id)) {
    e.currentTarget.textContent = 'add to shopping list';
    e.currentTarget.nextElementSibling.classList.add('hidden')

    books = books.filter(el=>el !== id)
  } else {
    e.currentTarget.textContent = 'remove from the shopping list';
    e.currentTarget.nextElementSibling.classList.remove('hidden')
    books.push(id);
  }
  localStorage.setItem('books', JSON.stringify(books));
}

function onBackDropClick(e) {
  if (e.target !== e.currentTarget)
    return;
  hideModal()
}


function onModalClose(e) {
  if (e.key === 'Escape')
   hideModal() 
}
function getShoppingList() {
  
  const books = JSON.parse(localStorage.getItem('books') || '[]');
  return books;
}


const container = document.querySelector('.all-books-area');

container.addEventListener('click', onBookClick);

function onBookClick(e) {
 
  const targetElem = e.target.closest('.home-book-item');
  if (!targetElem) return;
  const id = targetElem.dataset.id;
  showModal(id);
}


