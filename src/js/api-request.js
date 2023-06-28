import axios from 'axios';

export async function getCategories() {
    const response = await axios.get(
      `https://books-backend.p.goit.global/books/category-list `
    );
    return response;
  }
  
export async function getBooksByCategory(selectedCategory) {
    const response = await axios.get(
      `https://books-backend.p.goit.global/books/category`,
      {
        params: {
          category: selectedCategory,
        },
      }
    );
    return response;
  }