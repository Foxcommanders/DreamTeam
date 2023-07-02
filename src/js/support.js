import savechildren from '../Fondu/savechildren.png';
import savechildren2 from '../Fondu/savechildren@2x.png';
import hope from '../Fondu/hope.png';
import hope2 from '../Fondu/hope@2x.png';
import united from '../Fondu/united.png';
import united2 from '../Fondu/united@2x.png';
import intmedcorps from '../Fondu/intmedgr.png';
import intmedcorps2 from '../Fondu/intmedgr@2x.png';
import medicins from '../Fondu/medecins.png';
import medicins2 from '../Fondu/medecins@2x.png';
import razom from '../Fondu/razom.png';
import razom2 from '../Fondu/razom@2x.png';
import hunger from '../Fondu/hunger.png';
import hunger2 from '../Fondu/hunger@2x.png';
import emergencies from '../Fondu/emergencies.png';
import emergencies2 from '../Fondu/emergencies@2x.png';
import prytula from '../Fondu/prytula.png';
import prytula2 from '../Fondu/prytula@2x.png';
import { createMarkupSupport } from './render.js';

const Fonds = [
  {
    title: 'Save the Children',
    url: 'https://www.savethechildren.net/what-we-do/emergencies/ukraine-crisis',
    img: savechildren,
    img2: savechildren2,
  },
  {
    title: 'Project HOPE',
    url: 'https://www.projecthope.org/country/ukraine/',
    img: hope,
    img2: hope2,
  },
  {
    title: 'International Medical Corps',
    url: 'https://internationalmedicalcorps.org/country/ukraine/',
    img: intmedcorps,
    img2: intmedcorps2,
  },
  {
    title: 'RAZOM',
    url: 'https://www.razomforukraine.org/',
    img: razom,
    img2: razom2,
  },
  {
    title: 'Action against hunger',
    url: 'https://www.actionagainsthunger.org/location/europe/ukraine/',
    img: hunger,
    img2: hunger2,
  },
  {
    title: 'Serhiy Prytula Charity Foundation',
    url: 'https://prytulafoundation.org/en',
    img: prytula,
    img2: prytula2,
  },
  {
    title: 'UNITED24',
    url: 'https://u24.gov.ua/uk',
    img: united,
    img2: united2,
  },
  {
    title: 'Medicins Sans Frontieres',
    url: 'https://www.msf.org/ukraine',
    img: medicins,
    img2: medicins2,
  },
  {
    title: 'World vision',
    url: 'https://www.wvi.org/emergencies/ukraine',
    img: emergencies,
    img2: emergencies2,
  },
];

const refs = {
  list: document.querySelector('.js-list'),
  btn: document.querySelector('.show-more'),
};

createMarkupSupport(Fonds);

refs.list.insertAdjacentHTML('afterbegin', createMarkupSupport(Fonds));

const swiper = new Swiper('.mySwiper', {
  direction: 'vertical',
  loop: true,
  slidesPerView: 4,
  spaceBetween: 23,
  centeredSlides: true,
  height: 170,
  autoplay: {
    delay: 1500,
    disableOnInteraction: false,
  },

  navigation: {
    nextEl: '.swiper-button-next',
  },
});

refs.btn.addEventListener('click', () => {
  swiper.slideNext(1000, false);
});

console.log(11);
