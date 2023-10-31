'use strict';

// Burger

const body = document.querySelector("body");
const header = document.querySelector("header");
const menu = document.getElementById('header__burger-menu');
const nav_menu = document.getElementById('header__nav');
const logo_text = document.getElementById('header__logo-text');

const handleClick = (e) => {
  e.stopPropagation();
  if (e.target.nodeName === "NAV") return;
  header.classList.toggle('open');
  menu.classList.toggle('open');
  if (menu.innerText === 'Главное меню') {
    menu.innerText = 'Меню';
  } else {
    menu.innerText = 'Главное меню';
  }
  nav_menu.classList.toggle('open');
  logo_text.classList.toggle('open');
  body.classList.toggle('lock');
}

menu.addEventListener('click', handleClick);
nav_menu.addEventListener('click', handleClick)


// Change the header background on scroll

const handlerScroll = () => {
  const toTopIcon = document.getElementById("to-top__wrap");
  const scrollPosition = window.scrollY;
  const scrollThreshold = 5;

  if (scrollPosition > scrollThreshold) {
    header.style.backgroundColor = "#0f6865";
    toTopIcon.style.display = "block";
  } else {
    header.style.backgroundColor = "";
    toTopIcon.style.display = "none";
  }
}

window.addEventListener("scroll", handlerScroll);

// Carousel

$(document).ready(function(){
  $('.feedback__list').slick({
    centerMode: true,
    centerPadding: '60px',
    slidesToShow: 3,
    responsive: [
      {
        breakpoint: 1280,
        settings: {
          arrows: true,
          centerMode: true,
          centerPadding: '40px',
          slidesToShow: 2
        }
      },
      {
        breakpoint: 768,
        settings: {
          arrows: true,
          centerMode: true,
          centerPadding: '40px',
          slidesToShow: 1
        }
      }
    ]
  });
});

// Modal

const modal = document.getElementById("imgModal");
const feedbackList = document.getElementById("feedback__list");
const modalImg = document.getElementById("img01");
const closeBtn = document.querySelector(".modal__close");

const clickHandler = (e) => { 
  if (e.target.nodeName !== 'IMG') return;
  modal.style.display = "block";
  modalImg.src = e.target.src;
}

feedbackList.addEventListener("click", clickHandler)

closeBtn.onclick = function() {
  modal.style.display = "none";
}

// When the user clicks anywhere outside of the modal, close it
const eventsArray = ["click","touchstart", "touchend"];

eventsArray.forEach( function(event) { 
    window.addEventListener(event, function(e) {
      if (e.target === modal) {
          modal.style.display = "none";
      }
    }, false);
});
