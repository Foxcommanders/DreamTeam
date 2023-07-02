import axios from 'axios';

export async function getCategories() {
  const response = await axios.get(
    `https://books-backend.p.goit.global/books/category-list `
  );
  return response;
}

export async function getBooksByCategory(selectedCategory) {
  const response = axios.get(
    `https://books-backend.p.goit.global/books/category`,
    {
      params: {
        category: selectedCategory,
      },
    }
  );
  return await checkResponse(response)
}

function checkResponse (promise){
return new Promise((resolve, reject)=>{
setTimeout(()=>{
reject("TimeoutError")
}, 1500)
promise.then((resp)=>{
resolve(resp)
})
})
}

export async function loadTopBooks() {
  try {
    const data = await axios.get(
      'https://books-backend.p.goit.global/books/top-books'
    );
    return data;
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
