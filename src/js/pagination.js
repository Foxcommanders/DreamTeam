import Pagination from 'tui-pagination';


const paginationContainer = document.getElementById('tui-pagination-container');
const paginationOptions = {
    totalItems: 40,
    itemsPerPage: 3,
    visiblePages: 3,
    centerAlign: true,
    template: { page: '<a href="#" class="tui-page-btn">{{page}}</a>',
    currentPage: '<strong class="tui-page-btn tui-is-selected">{{page}}</strong>',
    moveButton:
      '<a href="#" class="tui-page-btn tui-{{type}}">' +
        '<span class="tui-ico-{{type}}">{{type}}</span>' +
      '</a>',
    disabledMoveButton:
      '<span class="tui-page-btn tui-is-disabled tui-{{type}}">' +
        '<span class="tui-ico-{{type}}">{{type}}</span>' +
      '</span>',
    moreButton:
      '<a href="#" class="tui-page-btn tui-{{type}}-is-ellip">' +
        '<span class="tui-ico-ellip">...</span>' +
      '</a>'},
  }

if (document.documentElement.clientWidth < 768){
        paginationOptions.itemsPerPage = 4;
        paginationOptions.visiblePages = 2;
    }
  
  const instance = new Pagination(paginationContainer, paginationOptions);
// const basketBooks = JSON.parse(localStorage.getItem("books")) || {};