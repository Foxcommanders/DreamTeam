export function createCategoriesMarkup(arr) {
    return arr
      .map(({ list_name }) => {
        return (markup = `<li class="category-list-item" data-id="${list_name}">${list_name}</li>`);
      })
      .join('');
  }

 export function renderBooks (arr){
    return arr.map(({book_image, book_image_width, title, author, _id}) => {
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
    })
    }