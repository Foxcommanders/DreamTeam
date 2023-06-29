import emptyBooks from '../images/shopping-svg/empty-books.webp'
export function createCategoriesMarkup(arr) {
  return arr
    .map(({ list_name }) => {
      return (markup = `<li class="category-list-item" data-id="${list_name}">${list_name}</li>`);
    })
    .join('');
}

export function renderBooks(arr) {
  return arr.map(({ book_image, book_image_width, title, author, _id }) => {
    const markup = ` <li data-id="${_id}"><img
    src="${book_image}"
   alt="${title}"
    width="${book_image_width}"
    class="book-photo"
    loading="lazy"
    />
    <h3 class="book-name">${title}</h3>
    <p class="book-author">${author}</p>
    </li>`;
    return markup;
  });
}

export function renderTopBooks(arr) {
  if (document.documentElement.clientWidth < 768) {
    let markTopBooks = arr
      .map(({ books: [{ _id, title, author, book_image }], list_name }) => {
        return `<div class="home-books-field">
          <h2 class="home-category-title">${list_name}</h2>

          <ul class="home-book-list">
          <li class="home-book-item" data-id="${_id}">
              <img src="${book_image}"
                alt="${title}"
                width="335"
                height="485"
                class="home-book-photo"
                loading="lazy">
              <h3 class="home-book-name">${title}</h3>
              <p class="home-book-author">${author}</p>
            </li>
          </ul>
          
          <button class="btn load-more">see more</button>
        </div>`;
      })
      .join('');
    allBooks.innerHTML = markTopBooks;
  }

  if (document.documentElement.clientWidth >= 768) {
    let markupTopBooks = arr
      .map(({ books, list_name }) => {
        let markItem = renderMarkupBook(books);
        return `<div class="home-books-field">
     <h2 class="home-category-title">${list_name}</h2>
     <ul class="home-book-list">${markItem}</ul><button class="btn load-more">see more</button>
     </div>`;
      })
      .join('');
    allBooks.innerHTML = markupTopBooks;
  }
}

export function renderMarkupBook(books) {
  let markItem = '';
  for (let i = 0; i < 3; i += 1) {
    markItem += `<li class="home-book-item" data-id="${books[i]._id}">
              <img src="${books[i].book_image}"
                alt="${books[i].title}"
                width="218"
                heigth="316"
                class="home-book-photo"
                loading="lazy">
              <h3 class="home-book-name">${books[i].title}</h3>
              <p class="home-book-author">${books[i].author}</p>
            </li>`;
  }
  return markItem;
}

export function createMarkupSupport(arr) {
  const markup = arr
    .map(({ title, url, img }, idx) => {
      return `<li class="list-item"><span class="number" >0${idx + 1}</span>
        <a  href="${url}">
            <img class="normalize-img" src="${img}" alt="${title} height="35">
            </a>
            </li>`;
     })
     .join('');
   return markup;
 }


 export function shoppingEmptyMarkup(){
  return `<p class="shopping-empty-text">
  This page is empty, add some books and proceed to order.
</p>
<img
  class="shopping-empty-img"
  src="${emptyBooks}"
  alt="books"
/>`
}
 
