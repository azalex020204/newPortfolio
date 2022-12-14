// =======================open/close menu circkle========================

let menu = document.querySelector('.menu');
let toggle = document.querySelector('.toggle');

menu.addEventListener('click', function (e) {
  menu.classList.toggle('active')
})
document.addEventListener('click', function (event) {
  if (event.target !== menu && event.target !== toggle) {
    menu.classList.remove('active')
  }
})
// =======================/open/close menu circkle========================
// =======================select themes========================
let themes = document.getElementsByClassName('color__theme');
for (let i = 0; i < themes.length; i++) {
  themes[i].addEventListener('click', function () {
    document.documentElement.classList.remove('theme1', 'theme2', 'theme3', 'theme4', 'theme5', 'theme6', 'theme7', 'theme8');
    document.documentElement.classList.add(themes[i].id);
    console.log(document.documentElement.classList.add(themes[i].id))
  })
};
// =======================select themes========================
// =======================typing animation========================
var typed = new Typed('.typing', {
  strings: ['', 'web developer', 'programmer', 'T-shaped', 'rehabilitation specialist', 'just a good person;)', 'web developer'],
  typeSpeed: 100,
  BackSpeed: 1000,
  loop: true,
})



// =======================/typing animation========================
// =======================aside========================
const nav = document.querySelector('.nav')
const allSection = document.querySelectorAll('.section')
const totalSection = allSection.length
const navList = nav.querySelectorAll('p')
const totalNavList = navList.length;
console.log(totalNavList)

for (let i = 0; i < totalNavList; i++) {
  console.log(navList[i])

  const a = navList[i].querySelector('a');
  console.log(a)

  a.addEventListener('click', function () {
    console.log(this)

    for (let j = 0; j < totalNavList; j++) {
      navList[j].querySelector('a').classList.remove('active')
    }
    this.classList.add('active')
    showSection(this)
  })
}
function showSection(element) {
  for (let i = 0; i < totalSection; i++) {
    allSection[i].classList.remove('show')
  }
  console.log(element.getAttribute('href').split('#'))
  const href = element.getAttribute('href').split('#')
  const target = href[1];
  console.log(target)
  document.querySelector('#' + target).classList.add('show')
}
// =======================/aside========================
const navTogglerBtn = document.querySelector(".nav-toggler");
const aside = document.querySelector(".aside");
navTogglerBtn.addEventListener("click", () => {
  asideSectionTogglerBtn();
})
function asideSectionTogglerBtn() {
  aside.classList.toggle("open");
}