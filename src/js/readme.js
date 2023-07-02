// Підключення бібліотеки TUI Pagination
<script src="https://uicdn.toast.com/tui.pagination/latest/tui-pagination.min.js"></script>

// Отримання даних із Local Storage
const data = JSON.parse(localStorage.getItem('data'));

// Кількість елементів на одній сторінці
const itemsPerPage = 10;

// Створення екземпляру TUI Pagination
const pagination = new tui.Pagination('pagination', {
  totalItems: data.length,
  itemsPerPage: itemsPerPage,
  visiblePages: 5,
  page: 1,
  centerAlign: true,
});

// Відображення поточної сторінки даних
function displayCurrentPage() {
  const currentPage = pagination.getCurrentPage();

  const start = (currentPage - 1) * itemsPerPage;
  const end = start + itemsPerPage;

  const currentPageData = data.slice(start, end);

  // Виведення даних на сторінку
  // Наприклад, використовуючи document.getElementById або innerHTML
}

// Додаткові налаштування і обробники подій
pagination.on('beforeMove', function (eventData) {
  // Зробити додаткові дії перед переходом на іншу сторінку
  // Наприклад, зберегти зміни у Local Storage

  return true; // Повернути true, щоб продовжити перехід на іншу сторінку
});

pagination.on('afterMove', function (eventData) {
  // Виконати дії після переходу на іншу сторінку
  // Наприклад, оновити вміст сторінки

  displayCurrentPage();
});

// Виклик функції для відображення поточної сторінки даних
displayCurrentPage();