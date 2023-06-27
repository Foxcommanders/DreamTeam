const Fonds = [
  {
    title: 'Save the Children',
    url: 'https://www.savethechildren.net/what-we-do/emergencies/ukraine-crisis',
    img: './Fondu/savechildren@2x.png',
  },
  {
    title: 'Project HOPE',
    url: 'https://www.projecthope.org/country/ukraine/',
    img: './Fondu/hope@2x.png',
  },
  {
    title: 'UNITED24',
    url: 'https://u24.gov.ua/uk',
    img: './Fondu/united@2x.png',
  },
  {
    title: 'International Medical Corps',
    url: 'https://internationalmedicalcorps.org/country/ukraine/',
    img: './Fondu/hunger@2x.png',
  },
  {
    title: 'Medicins Sans Frontieres',
    url: 'https://www.msf.org/ukraine',
    img: './Fondu/medecins@2x.png',
  },
  {
    title: 'RAZOM',
    url: 'https://www.razomforukraine.org/',
    img: './Fondu/razom@2x.png',
  },
  {
    title: 'Action against hunger',
    url: 'https://www.actionagainsthunger.org/location/europe/ukraine/',
    img: './Fondu/hunger@2x.png',
  },
  {
    title: 'World vision',
    url: 'https://www.wvi.org/emergencies/ukraine',
    img: './Fondu/world.@2x.png',
  },
  {
    title: 'Serhiy Prytula Charity Foundation',
    url: 'https://prytulafoundation.org/en',
    img: '../images/logo.png',
  },
];

const refs = {
  list: document.querySelector('.js-list'),
};

function createMarkup(arr) {
  const markup = arr
      .map(({ title, url, img }) => {
      return `<li class="list-item">
        <a href="${url}">
            <img src="${img}" alt="${title}" width="300">
            </li>`;
    })
      .join('');
  return markup;
}
createMarkup(Fonds);
refs.list.insertAdjacentHTML('afterbegin', createMarkup(Fonds));
