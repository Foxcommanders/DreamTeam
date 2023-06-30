import './support.js';
//import './render.js';
import './api-request.js';
import './menu.js';
import './scrollUp.js';

import { shoppingEmptyMarkup } from './render.js';
//import symbol from '../images/shopping-svg/symbol-defs.svg';
import amazon from '../images/shopping-svg/amazon.png';
import iShop from '../images/shopping-svg/i-shop.png';
import bookShop from '../images/shopping-svg/book-shop.png';
import svg from '../images/shopping-svg/trash.svg';
//import emptyBooks from '../images/shopping-svg/empty-books.webp'

const refs = {
  emptyList: document.querySelector('.shopping-empty-list'),
  bookList: document.querySelector('.shopping-book-list'),  
  shoppingSupport: document.querySelector('.container-support')
};
document.body.classList.add('is-hidden');
refs.emptyList.classList.add('display');
refs.bookList.classList.add('display');
const books = [
  {
    _id: '643282b1e85766588626a080',
    list_name: 'Advice How-To and Miscellaneous',
    date: '2023-04-01T00:00:00.000Z',
    age_group: '',
    amazon_product_url:
      'https://www.amazon.com/Atomic-Habits-Proven-Build-Break/dp/0735211299?tag=NYTBSREV-20',
    article_chapter_link: '',
    author: 'James Clear',
    book_image:
      'https://storage.googleapis.com/du-prd/books/images/9780735211292.jpg',
    book_image_width: 328,
    book_image_height: 495,
    book_review_link: '',
    book_uri: 'nyt://book/0398a355-c032-534e-a0af-647b06f0840d',
    contributor: 'by James Clear',
    contributor_note: '',
    created_date: '2023-04-05 22:05:27',
    description:
      'test test test test test test test test test test test test test test test test test test test test test test test test test test test test test test test test test test test test test test test test test test test test test test test test test test test test test test ',
    first_chapter_link: '',
    price: '0.00',
    primary_isbn10: '0735211299',
    primary_isbn13: '9780735211292',
    publisher: 'Avery',
    rank: 1,
    rank_last_week: 1,
    sunday_review_link: '',
    title: 'ATOMIC HABITS',
    updated_date: '2023-04-05 22:10:16',
    weeks_on_list: 175,
    buy_links: [
      {
        name: 'Amazon',
        url: 'https://www.amazon.com/Atomic-Habits-Proven-Build-Break/dp/0735211299?tag=NYTBSREV-20',
      },
      {
        name: 'Apple Books',
        url: 'https://goto.applebooks.apple/9780735211292?at=10lIEQ',
      },
      {
        name: 'Barnes and Noble',
        url: 'https://www.anrdoezrs.net/click-7990613-11819508?url=https%3A%2F%2Fwww.barnesandnoble.com%2Fw%2F%3Fean%3D9780735211292',
      },
      {
        name: 'Books-A-Million',
        url: 'https://du-gae-books-dot-nyt-du-prd.appspot.com/redirect?url1=https%3A%2F%2Fwww.anrdoezrs.net%2Fclick-7990613-35140%3Furl%3Dhttps%253A%252F%252Fwww.booksamillion.com%252Fp%252FATOMIC%252BHABITS%252FJames%252BClear%252F9780735211292&url2=https%3A%2F%2Fwww.anrdoezrs.net%2Fclick-7990613-35140%3Furl%3Dhttps%253A%252F%252Fwww.booksamillion.com%252Fsearch%253Fquery%253DATOMIC%252BHABITS%252BJames%252BClear',
      },
      {
        name: 'Bookshop',
        url: 'https://du-gae-books-dot-nyt-du-prd.appspot.com/redirect?url1=https%3A%2F%2Fbookshop.org%2Fa%2F3546%2F9780735211292&url2=https%3A%2F%2Fbookshop.org%2Fbooks%3Faffiliate%3D3546%26keywords%3DATOMIC%2BHABITS',
      },
      {
        name: 'IndieBound',
        url: 'https://du-gae-books-dot-nyt-du-prd.appspot.com/redirect?url1=https%3A%2F%2Fwww.indiebound.org%2Fbook%2F9780735211292%3Faff%3DNYT&url2=https%3A%2F%2Fwww.indiebound.org%2Fsearch%2Fbook%3Fkeys%3DATOMIC%2BHABITS%2BJames%2BClear%26aff%3DNYT',
      },
    ],
    __v: 0,
  },
  {
    _id: '643282b1e85766588626a0ba',
    list_name: 'Advice How-To and Miscellaneous',
    date: '2023-04-09T09:28:38.643Z',
    age_group: '',
    amazon_product_url: 'https://www.amazon.com/dp/0063226057?tag=NYTBSREV-20',
    article_chapter_link: '',
    author: 'Shannon Bream',
    book_image:
      'https://storage.googleapis.com/du-prd/books/images/9780063226050.jpg',
    book_image_width: 329,
    book_image_height: 500,
    book_review_link: '',
    book_uri: 'nyt://book/dc28bfbb-6ba7-54c6-a60b-272a327604ab',
    contributor: 'by Shannon Bream',
    contributor_note: '',
    created_date: '2023-04-05 22:05:27',
    description: '',
    first_chapter_link: '',
    price: '0.00',
    primary_isbn10: '0063226057',
    primary_isbn13: '9780063226050',
    publisher: 'Broadside',
    rank: 2,
    rank_last_week: 0,
    sunday_review_link: '',
    title: 'THE LOVE STORIES OF THE BIBLE SPEAK',
    updated_date: '2023-04-05 22:10:17',
    weeks_on_list: 1,
    buy_links: [
      {
        name: 'Amazon',
        url: 'https://www.amazon.com/dp/0063226057?tag=NYTBSREV-20',
      },
      {
        name: 'Apple Books',
        url: 'https://goto.applebooks.apple/9780063226050?at=10lIEQ',
      },
      {
        name: 'Barnes and Noble',
        url: 'https://www.anrdoezrs.net/click-7990613-11819508?url=https%3A%2F%2Fwww.barnesandnoble.com%2Fw%2F%3Fean%3D9780063226050',
      },
      {
        name: 'Books-A-Million',
        url: 'https://du-gae-books-dot-nyt-du-prd.appspot.com/redirect?url1=https%3A%2F%2Fwww.anrdoezrs.net%2Fclick-7990613-35140%3Furl%3Dhttps%253A%252F%252Fwww.booksamillion.com%252Fp%252FTHE%252BLOVE%252BSTORIES%252BOF%252BTHE%252BBIBLE%252BSPEAK%252FShannon%252BBream%252F9780063226050&url2=https%3A%2F%2Fwww.anrdoezrs.net%2Fclick-7990613-35140%3Furl%3Dhttps%253A%252F%252Fwww.booksamillion.com%252Fsearch%253Fquery%253DTHE%252BLOVE%252BSTORIES%252BOF%252BTHE%252BBIBLE%252BSPEAK%252BShannon%252BBream',
      },
      {
        name: 'Bookshop',
        url: 'https://du-gae-books-dot-nyt-du-prd.appspot.com/redirect?url1=https%3A%2F%2Fbookshop.org%2Fa%2F3546%2F9780063226050&url2=https%3A%2F%2Fbookshop.org%2Fbooks%3Faffiliate%3D3546%26keywords%3DTHE%2BLOVE%2BSTORIES%2BOF%2BTHE%2BBIBLE%2BSPEAK',
      },
      {
        name: 'IndieBound',
        url: 'https://du-gae-books-dot-nyt-du-prd.appspot.com/redirect?url1=https%3A%2F%2Fwww.indiebound.org%2Fbook%2F9780063226050%3Faff%3DNYT&url2=https%3A%2F%2Fwww.indiebound.org%2Fsearch%2Fbook%3Fkeys%3DTHE%2BLOVE%2BSTORIES%2BOF%2BTHE%2BBIBLE%2BSPEAK%2BShannon%2BBream%26aff%3DNYT',
      },
    ],
    __v: 0,
  },
  {
    _id: '643282b1e85766588626a0dc',
    list_name: 'Advice How-To and Miscellaneous',
    date: '2023-04-09T09:28:38.946Z',
    age_group: '',
    amazon_product_url: 'https://www.amazon.com/dp/1984826395?tag=NYTBSREV-20',
    article_chapter_link: '',
    author: 'Alison Roman',
    book_image:
      'https://storage.googleapis.com/du-prd/books/images/9781984826398.jpg',
    book_image_width: 402,
    book_image_height: 500,
    book_review_link: '',
    book_uri: 'nyt://book/aab1d8fe-9383-5fa0-bbf9-80321e07a3d8',
    contributor: 'by Alison Roman',
    contributor_note: '',
    created_date: '2023-04-05 22:05:27',
    description: '',
    first_chapter_link: '',
    price: '0.00',
    primary_isbn10: '1984826395',
    primary_isbn13: '9781984826398',
    publisher: 'Clarkson Potter',
    rank: 3,
    rank_last_week: 0,
    sunday_review_link: '',
    title: 'SWEET ENOUGH',
    updated_date: '2023-04-05 22:10:17',
    weeks_on_list: 1,
    buy_links: [
      {
        name: 'Amazon',
        url: 'https://www.amazon.com/dp/1984826395?tag=NYTBSREV-20',
      },
      {
        name: 'Apple Books',
        url: 'https://goto.applebooks.apple/9781984826398?at=10lIEQ',
      },
      {
        name: 'Barnes and Noble',
        url: 'https://www.anrdoezrs.net/click-7990613-11819508?url=https%3A%2F%2Fwww.barnesandnoble.com%2Fw%2F%3Fean%3D9781984826398',
      },
      {
        name: 'Books-A-Million',
        url: 'https://du-gae-books-dot-nyt-du-prd.appspot.com/redirect?url1=https%3A%2F%2Fwww.anrdoezrs.net%2Fclick-7990613-35140%3Furl%3Dhttps%253A%252F%252Fwww.booksamillion.com%252Fp%252FSWEET%252BENOUGH%252FAlison%252BRoman%252F9781984826398&url2=https%3A%2F%2Fwww.anrdoezrs.net%2Fclick-7990613-35140%3Furl%3Dhttps%253A%252F%252Fwww.booksamillion.com%252Fsearch%253Fquery%253DSWEET%252BENOUGH%252BAlison%252BRoman',
      },
      {
        name: 'Bookshop',
        url: 'https://du-gae-books-dot-nyt-du-prd.appspot.com/redirect?url1=https%3A%2F%2Fbookshop.org%2Fa%2F3546%2F9781984826398&url2=https%3A%2F%2Fbookshop.org%2Fbooks%3Faffiliate%3D3546%26keywords%3DSWEET%2BENOUGH',
      },
      {
        name: 'IndieBound',
        url: 'https://du-gae-books-dot-nyt-du-prd.appspot.com/redirect?url1=https%3A%2F%2Fwww.indiebound.org%2Fbook%2F9781984826398%3Faff%3DNYT&url2=https%3A%2F%2Fwww.indiebound.org%2Fsearch%2Fbook%3Fkeys%3DSWEET%2BENOUGH%2BAlison%2BRoman%26aff%3DNYT',
      },
    ],
    __v: 0,
  },
];

const bookTitle = 'Book title';
const genres = 'Genres';
let description =
  'Lorem ipsum dolor sit amet, consectetur adipisicing elit. Fuga fugiat, dolorem repudiandae aspernatur iste minima dolore recusandae incidunt veritatis debitis nam quis maxime atque nulla voluptates quasi necessitatibus! Sunt, rem.';
const author = 'Author';

const screenWidth = window.screen.width;

function containerSupport(screenWidth) {
  if (screenWidth < 1440) {
    refs.shoppingSupport.classList.add('display');
  } else {
    refs.shoppingSupport.classList.remove('display');
  }
  return;
}
containerSupport(screenWidth);

function cutDescription(screenWidth) {
  if (screenWidth < 768) {
    description = description.split('').splice(0, 85).join('') + '...';    
  } else if (screenWidth >= 768 && screenWidth < 1440) {
    description =
      'Lorem ipsum dolor sit amet, consectetur adipisicing elit. Fuga fugiat, dolorem repudiandae aspernatur iste minima dolore recusandae incidunt veritatis debitis nam quis maxime atque nulla voluptates quasi necessitatibus! Sunt, rem.';
    description = description.split('').splice(0, 248).join('') + '...';    
  } else {
    description = description;   
  }
  return;
}

// function singleMarkUp(el) {
//   //console.log(el.title);
//   // const markUp =
//   return `<li class="shopping-book-item">
//      <div class="shopping-book-img">
//         <img class="shopping-book-poster" src="${el.book_image}" alt="${
//           el.title ? el.title : bookTitle
//         }" loading="lazy" />
//   </div>
//   <div class="shopping-book-text">
//     <h2 class="shopping-book-title">${el.title ? elTitle : bookTitle}</h2>
//     <p class="shopping-book-genres"></p>
//     <p class="shopping-book-description"></p>

//     <div class="shopping-book-item-footer">
//       <p class="shopping-book-author"></p>
//       <ul class="shopping-book-shops">
//         <li>
//           <a class="shopping-shop-link" href="" target="_blank" rel="noreferrer noopener">
//           <img class="shopping-svg-amazon" src="">
//           </a>
//         </li>
//         <li>
//           <a class="shopping-shop-link" href="" target="_blank" rel="noreferrer noopener">
//           <img class="shopping-svg-open-book" src="">  
//           </a>
//         </li>
//         <li>
//           <a class="shopping-shop-link" href="" target="_blank" rel="noreferrer noopener">
//           <img class="shopping-svg-book-shop" src="">
//           </a>
//         </li>
//       </ul>
//     </div>
//     <button class="shopping-btn-delete">
//       <svg class="svg-trash" width="16" height="16">
//         <use class="svg" href="#trash"></use>
//       </svg>
//     </button>
//   </div>
// </li>`;
//         //console.log(markUp);
//         // return markUp
// }

//console.log(singleMarkUp());
// function shoppingEmptyMarkup(){
//   return `<p class="shopping-empty-text">
//   This page is empty, add some books and proceed to order.
// </p>
// <img
//   class="shopping-empty-img"
//   src="${emptyBooks}"
//   alt="books"
// />`
// }



function markUp(arr) {
  return arr
    .map(el => {
      cutDescription(screenWidth);      

      let elDescription = el.description;
      let elTitle = el.title;

      if (screenWidth < 768) {
        elDescription = elDescription.split('').splice(0, 85).join('') + '...';        
        if(elTitle.length > 16){
        elTitle = elTitle.split('').splice(0, 16).join('') + '...';
      }       
        
      } else if (screenWidth >= 768 && screenWidth < 1440) {
        elDescription = el.description;
        elDescription = elDescription.split('').splice(0, 248).join('') + '...';
      } else {
        elDescription = el.description;
      }
    
      return `<li class="shopping-book-item">
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
            el.description ? elDescription : description
          }</p>

          <div class="shopping-book-item-footer">
            <p class="shopping-book-author">${
              el.author ? el.author : author
            }</p>
            <ul class="shopping-book-shops">
              <li>
                <a class="shopping-shop-link" href="${el.buy_links[0].url}" target="_blank" rel="noreferrer noopener">
                <img class="shopping-svg-amazon" src="${amazon}">
                </a>
              </li>
              <li>
                <a class="shopping-shop-link" href="${el.buy_links[2].url}" target="_blank" rel="noreferrer noopener">
                <img class="shopping-svg-open-book" src="${iShop}">  
                </a>
              </li>
              <li>
                <a class="shopping-shop-link" href="${el.buy_links[5].url}" target="_blank" rel="noreferrer noopener">
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

function checkLocalStorage(arr) {
  if (!books.length) {
    shoppingEmptyMarkup();
    refs.emptyList.insertAdjacentHTML('afterbegin', shoppingEmptyMarkup());
    refs.emptyList.classList.remove('display');
    refs.bookList.classList.add('display');
    console.log('empty');
  } else {
    markUp(arr);
    refs.bookList.insertAdjacentHTML('afterbegin', markUp(books));
    refs.emptyList.classList.add('display');
    refs.bookList.classList.remove('display');
    //return
  }
  return;
}

checkLocalStorage(books);

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
    const bookItem = document.querySelector('.shopping-book-item');
    //removeItem(key); 
    bookItem.remove();
    return;
  } 
 