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

export async function loadTopBooks() {
  try {
    const data = await axios.get(
      'https://books-backend.p.goit.global/books/top-books'
    );
    renderTopBooks(data.data);
  } catch {
    error => console.log(error);
  }
}