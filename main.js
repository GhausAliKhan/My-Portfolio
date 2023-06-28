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
const X = document.querySelector('.X');
const page = document.querySelector('.page');

document.querySelectorAll('.seeProject').forEach((n) => n.addEventListener('click', () => {
  popupSection.style.display = 'block';
  page.style.filter = 'blur(5px)';
}));

function disappear() {
  popupSection.style.display = 'none';
  page.style.filter = 'blur(0px)';
}
X.addEventListener('click', disappear);

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

// const works = document.querySelector('.works');
console.log(projects);
const worksCard = document.createElement('div');
worksCard.classList.add('works-card');

// works.innerHTML = `
// <div class="works_content">
//   <h3>My Recent Works</h3>
//   <img src="Assets/Indicator.png" alt="Indicator">
// </div>
// `;

// works.appendChild(worksCard);

// let techList = "";

// for (let i = 0; i < projects.length; i++) {
//   techList = "";
//   projects[i].technology.forEach((tech) => {
//     techList += `<li>${tech}</li>`;
//   });
//   worksCard.innerHTML += `
//   <div class="card">
//     <div class="card_image">
//         <img src="${projects[i].image}" alt="Image placeholder">
//     </div>
//     <div class="card_content">
//         <h3>${projects[i].name}</h3>
//         <ul>
//             ${techList}
//         </ul>
//         <button class="seeProject">See Project</button>
//     </div>
// </div>

//   `;
// }
