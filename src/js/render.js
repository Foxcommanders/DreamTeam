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
    
 export function createMarkupSupport(arr) {
   const markup = arr
     .map(({ title, url, img }) => {
       return `<li class="list-item">
        <a href="${url}">
            <img src="${img}" alt="${title}" width="300">
            </li>`;
     })
     .join('');
   return markup;
 }

 
//  export function markUp(arr) {
//   return arr
//     .map(el => {
//       cutDescription(screenWidth);
//       containerSupport(screenWidth);

//       let elDescription = el.description;
//       let elTitle = el.title;
            
//       if (screenWidth < 768) {
//         elDescription = elDescription.split('').splice(0, 85).join('') + '...';
//         // description = description.split('').splice(0, 85).join('') + '...';
//         if(elTitle.length > 16){
//         elTitle = elTitle.split('').splice(0, 16).join('') + '...';
//       }
//         //console.log('bookLorem:', elDescription.length);
//         console.log(elTitle);
//       } else if (screenWidth >= 768 && screenWidth < 1440) {
//         elDescription = el.description;
//         elDescription = elDescription.split('').splice(0, 248).join('') + '...';
//         //  description = 'Lorem ipsum dolor sit amet, consectetur adipisicing elit. Fuga fugiat, dolorem repudiandae aspernatur iste minima dolore recusandae incidunt veritatis debitis nam quis maxime atque nulla voluptates quasi necessitatibus! Sunt, rem.'
//         //   description = description.split('').splice(0, 248).join('') + '...';
//         //console.log('bookLorem:', elDescription.length);
//       } else {
//         elDescription = el.description;
//         //description = description;
//         //console.log('bookLorem:', elDescription.length);
//       }
//       return `<li class="shopping-book-item">
//         <div class="shopping-book-img">
//           <img class="shopping-book-poster" src="${el.book_image}" alt="book-title '${el.title ? el.title : bookTitle}'" loading="lazy" />
//         </div>
//         <div class="shopping-book-text">
//           <h2 class="shopping-book-title">${el.title ? elTitle : bookTitle}</h2>
//           <p class="shopping-book-genres">${el.genres ? el.genres : genres}</p>
//           <p class="shopping-book-description">${el.description ? elDescription : description}</p>

//           <div class="shopping-book-item-footer">
//             <p class="shopping-book-author">${el.author ? el.author : author}</p>
//             <ul class="shopping-book-shops">
//               <li>
//                 <a href="${el.buy_links[0].url}" target="_blank" rel="noreferrer noopener">
//                   <svg width="32" height="11">
//                     <use
//                       href="${amazon}#Amazon_logo"
//                     ></use>                        
//                   </svg>
//                 </a>
//               </li>
//               <li>
//                 <a href="${el.buy_links[2].url}" target="_blank" rel="noreferrer noopener">
//                   <svg width="16" height="16">
//                     <use
//                       href="./images/shopping-svg/open-book.svg#open-book"
//                     ></use>
//                   </svg>
//                 </a>
//               </li>
//               <li>
//                 <a href="${el.buy_links[5].url}" target="_blank" rel="noreferrer noopener">
//                   <svg width="16" height="16">
//                     <use
//                       href="./images/shopping-svg/book-shop.svg#book-shop"
//                     ></use>
//                   </svg>
//                 </a>
//               </li>
//             </ul>
//           </div>
//           <button class="shopping-btn-delete">
//             <svg class="svg-trash" width="16" height="16">
//               <use class="svg" href="${svg}#trash"></use>
//             </svg>
//           </button>
//         </div>
//       </li>`;
//     })
//     .join('');
// }
