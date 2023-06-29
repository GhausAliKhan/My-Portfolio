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

const contactForm = document.querySelector('#contactForm');
const email = document.querySelector('#email');
const inputList = document.querySelector('#inputList');
const errorMessage = document.createElement('span');
errorMessage.innerHTML = '*Your email should be in lower case';
errorMessage.classList.add('errorMessage');
contactForm.addEventListener('submit', (event) => {
  if (email.value.toLowerCase() !== email.value) {
    event.preventDefault();
    inputList.appendChild(errorMessage);
  }
});

const fullName = document.querySelector('#fullName');
const messageBox = document.querySelector('#messageBox');
const geitInTouch = document.querySelector('#geitInTouch');

const saveFormData = () => {
  const formData = {
    name: fullName.value,
    mail: email.value,
    message: messageBox.value,
  };
  localStorage.setItem('myFormData', JSON.stringify(formData));
};

fullName.addEventListener('input', saveFormData);
email.addEventListener('input', saveFormData);
messageBox.addEventListener('input', saveFormData);
geitInTouch.addEventListener('click', saveFormData);

const dataStored = localStorage.getItem('myFormData');
if (dataStored) {
  const { name, mail, message } = JSON.parse(dataStored);
  fullName.value = name;
  email.value = mail;
  messageBox.value = message;
}