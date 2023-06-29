import Notiflix from 'notiflix';
import { createCategoriesMarkup } from './render';
import { renderBooks } from './render';
import { getBooksByCategory } from './api-request';
import { getCategories } from './api-request';


Notiflix.Notify.init({
  width: '500px',
  position: 'center-center',
  fontSize: '20px',
  timeout: 1000,
  clickToClose: true,
  failure: {
    background:
      'radial-gradient(189.32% 190.93% at 59.76% -23.42%, #4F2EE8 18.03%, #FFF 100%)',
    notiflixIconColor: '#fff',
  },
});

const refs = {
  categoryList: document.querySelector('.js-category-list'),
  general: document.querySelector('li[data-id="allCategories"]'),
  homeContainer: document.querySelector('.all-books-area'),
};

getCategories().then(({ data }) => {
  refs.categoryList.insertAdjacentHTML(
    'beforeend',
    createCategoriesMarkup(data)
  );
  });

refs.categoryList.addEventListener('click', categoryPicker);

async function categoryPicker(evt) {
  if (evt.target === evt.currentTarget) {
    return;
  }
  if (!evt.target.classList.contains('active-category')) {
    const currentActiveCategory = document.querySelector('.active-category');
    currentActiveCategory.classList.remove('active-category');
    evt.target.classList.add('active-category');
    try {
      const booksByCategory = await getBooksByCategory(evt.target.dataset.id);
      if (!booksByCategory.data) {
        throw new Error();
      }
      refs.homeContainer.innerHTML = renderBooks(booksByCategory.data);
    } catch (error) {
      Notiflix.Notify.failure('Sorry, no books match this category');
    }
  }
}

