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
  console.log(123);
  const res = await fetch(URL).then(res => {
    console.log(123);
    return res.json()
  });
  console.log(res);
  return res;
}
