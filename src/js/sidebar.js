import axios from "axios";

const refs = {
    categoryList: document.querySelector(".js-category-list"),
    general: document.querySelector('li[data-id="allCategories"]'),
}

export async function getCategories(){
   const response = await axios.get(`https://books-backend.p.goit.global/books/category-list `);
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

function categoryPicker (evt){
    if(evt.target === evt.currentTarget){
        return
    }
    if (!evt.target.classList.contains("active-category")){
        const currentActiveCategory = document.querySelector(".active-category");
        currentActiveCategory.classList.remove("active-category")
        evt.target.classList.add("active-category")
    }
}


