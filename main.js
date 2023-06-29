const hamburger = document.querySelector('.hamburger');
const toolbarMenu = document.querySelector('.toolbar-menu');

hamburger.addEventListener('click', () => {
  hamburger.classList.toggle('active');
  toolbarMenu.classList.toggle('active');
});

document.querySelectorAll('.menu-link').forEach((n) => n.addEventListener('click', () => {
  hamburger.classList.remove('active');
  toolbarMenu.classList.remove('active');
}));

const popupSection = document.querySelector('.popupSection');
const x = document.querySelector('.X');
const page = document.querySelector('.page');

document.querySelectorAll('.seeProject').forEach((n) => n.addEventListener('click', () => {
  popupSection.style.display = 'block';
  page.style.filter = 'blur(5px)';
}));

function disappear() {
  popupSection.style.display = 'none';
  page.style.filter = 'blur(0px)';
}
x.addEventListener('click', disappear);

function disappearPage(event) {
  if (event.target.className === 'popupSection') {
    popupSection.style.display = 'none';
    page.style.filter = 'blur(0px)';
  }
}
popupSection.addEventListener('click', disappearPage);

const projects = [
  {
    id: 0,
    name: 'Multi-Post Stories <br> Gain+Glory',
    description: 'Some description',
    image: 'Assets/Img Plaholder.png',
    technology: ['Ruby', 'CSS', 'JavaScript', 'HTML'],
    source: '',
    live: '',
  },
  {
    id: 1,
    name: 'Title 2',
    description: 'Some description',
    image: 'Assets/Img Plaholder.png',
    technology: ['Ruby', 'CSS', 'JavaScript', 'HTML'],
    source: '',
    live: '',
  },
  {
    id: 2,
    name: 'Multi-Post Stories <br> Gain+Glory',
    description: 'Some description',
    image: 'Assets/Img Plaholder.png',
    technology: ['Ruby', 'CSS', 'JavaScript', 'HTML'],
    source: '',
    live: '',
  },
  {
    id: 3,
    name: 'Multi-Post Stories <br> Gain+Glory',
    description: 'Some description',
    image: 'Assets/Img Plaholder.png',
    technology: ['Ruby', 'CSS', 'JavaScript', 'HTML'],
    source: '',
    live: '',
  },
  {
    id: 4,
    name: 'Multi-Post Stories <br> Gain+Glory',
    description: 'Some description',
    image: 'Assets/Img Plaholder.png',
    technology: ['Ruby', 'CSS', 'JavaScript', 'HTML'],
    source: '',
    live: '',
  },
  {
    id: 5,
    name: 'Multi-Post Stories <br> Gain+Glory',
    description: 'Some description',
    image: 'Assets/Img Plaholder.png',
    technology: ['Ruby', 'CSS', 'JavaScript', 'HTML'],
    source: '',
    live: '',
  },
  {
    id: 6,
    name: 'Multi-Post Stories <br> Gain+Glory',
    description: 'Some description',
    image: 'Assets/Img Plaholder.png',
    technology: ['Ruby', 'CSS', 'JavaScript', 'HTML'],
    source: '',
    live: '',
  },
];

console.log(projects);
const worksCard = document.createElement('div');
worksCard.classList.add('works-card');
