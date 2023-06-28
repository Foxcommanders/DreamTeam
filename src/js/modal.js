
import axios from 'axios';

const backDrop = document.querySelector('.backdrop');
const modal = document.querySelector('.modal');

backDrop.addEventListener('click', onBackDropClick);


function createMarkup(book) {
    const markup = 
     `
    <button class="js-modal-btn modal-close-btn">
      <svg class="modal-close-icon" width="28" height="28">
        <use href=${require('../images/modal-icons/symbol-defs.svg')}#icon-close1></use>
      </svg>
    </button>
    <div class="modal-container">
      <img src="${book.book_image}" alt="title" class="js-elem" width="192" heigth="280">
      <div class="modal-text-container">
        <h2 class="modal-title">${book.title}</h2>
        <p class="modal-silver-text">${book.author}</p>
        <p class="modal-history-text">${book.description}</p>
        <ul class="modal-list">
          <li class="modal-item">
            <a href="https://www.amazon.com/Atomic-Habits-Proven-Build-Break/dp/0735211299?tag=NYTBSREV-20" class="">
              <svg class="modal-img" width="62" height="19">
                <use href=${require('../images/modal-icons/modal-img.svg')}#icon-amazon></use>
              </svg>
            </a>
          </li>
          <li class="modal-item">
            <a href="https://goto.applebooks.apple/9780735211292?at=10lIEQ" class="">
              <svg class="modal-img" width="33" height="32">
                <use href=${require('../images/modal-icons/modal-img.svg')}#icon-apple></use>
              </svg>
            </a>
          </li>
          <li class="modal-item">
            <a href="https://du-gae-books-dot-nyt-du-prd.appspot.com/redirect?url1=https%3A%2F%2Fbookshop.org%2Fa%2F3546%2F9780735211292&url2=https%3A%2F%2Fbookshop.org%2Fbooks%3Faffiliate%3D3546%26keywords%3DATOMIC%2BHABITS" class="">
              <svg class="modal-img" width="38" height="36">
                <use href=${require('../images/modal-icons/modal-img.svg')}#icon-book_shop></use>
              </svg>
            </a>
          </li>
        </ul>
      </div>
    </div>
    <button class="modal-sub-btn js-modal-addbtn" data-id="${book._id}">remove from the shopping list</button>
    <p class="modal-check-text">Congratulations! You have added the book to the shopping list. To delete, press the
        button"
        Remove from the shopping
        list".</p>` 
    modal.innerHTML = markup;
};


async function getBook(id) {
  const baseUrl = 'https://books-backend.p.goit.global'
  const endPoint = `/books/${id}`
  const URL = baseUrl + endPoint
  const res = await axios.get(URL);
  return res.data;
}

async function showModal(bookId) {
  const book = await getBook(bookId);
  createMarkup(book);
  backDrop.classList.add('is-hidden')
  addListener()
}

function hideModal() {
  backDrop.classList.remove('is-hidden')
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
    books = books.filter(el=>el !== id)
  } else {
    books.push(id);
  }
  localStorage.setItem('books', JSON.stringify(books));
}

function onBackDropClick(e) {
  if (e.target !== e.currentTarget)
    return;
  hideModal()
}

showModal('643282b1e85766588626a080')

function onModalClose(e) {
  if (e.key === 'Escape')
   hideModal() 
}
function getShoppingList() {
  const books = JSON.parse(localStorage.getItem('books') || '[]');
  return books;
}

getShoppingList()