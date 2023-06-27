import axios from "axios";

const refs = {
    categoryList: document.querySelector(".js-category-list")
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

