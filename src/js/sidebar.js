import axios from "axios";
import Notiflix from 'notiflix';

Notiflix.Notify.init({
    width: '500px',
    position: 'center-center',
    fontSize: '20px',
    timeout: 1000,
    clickToClose: true,
    failure: {
      background:  "radial-gradient(189.32% 190.93% at 59.76% -23.42%, #4F2EE8 18.03%, #FFF 100%)",
      notiflixIconColor: '#fff',
    },
  });

const refs = {
    categoryList: document.querySelector(".js-category-list"),
    general: document.querySelector('li[data-id="allCategories"]'),
}

async function getCategories(){
   const response = await axios.get(`https://books-backend.p.goit.global/books/category-list `);
      return response;
    }

    async function getBooksByCategory (selectedCategory){
        const response = await axios.get(`https://books-backend.p.goit.global/books/category`, {
             params: {
                category: selectedCategory
             }
           });
           return response;
         }

getCategories().then(({data}) => {
    refs.categoryList.insertAdjacentHTML('beforeend',createCategoriesMarkup(data))})

function createCategoriesMarkup(arr){
    return arr.map(({list_name}) => {
        return markup = `<li class="category-list-item" data-id="${list_name}">${list_name}</li>`
        }).join("")
}

refs.categoryList.addEventListener("click", categoryPicker)

async function categoryPicker (evt){
    if(evt.target === evt.currentTarget){
        return
    }
    if (!evt.target.classList.contains("active-category")){
        const currentActiveCategory = document.querySelector(".active-category");
        currentActiveCategory.classList.remove("active-category");
        evt.target.classList.add("active-category");
        try {
            const booksByCategory = await getBooksByCategory(evt.target.dataset.id);
            console.log(booksByCategory);
            if (!booksByCategory.data) {
              throw new Error();
            }
            // books.gallery.innerHTML = renderBooks(booksByCategory.data);
            // book_image, book_image_width, title, author, id
          } catch (error) {
            Notiflix.Notify.failure(
              'Sorry, no books match this category'
            );
          }
    }
    }


