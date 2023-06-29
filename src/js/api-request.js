import axios from 'axios';
import { renderTopBooks } from './render';

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
export async function getBookById(id) {
  const baseUrl = 'https://books-backend.p.goit.global';
  const endPoint = `/books/${id}`;
  const URL = baseUrl + endPoint;
  const res = await axios.get(URL);
  return res.data;
}
