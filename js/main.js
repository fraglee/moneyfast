/*
 * ATTENTION: The "eval" devtool has been used (maybe by default in mode: "development").
 * This devtool is neither made for production nor for readable output files.
 * It uses "eval()" calls to create a separate source file in the browser devtools.
 * If you are trying to read the output file, select a different devtool (https://webpack.js.org/configuration/devtool/)
 * or disable the default devtool with "devtool: false".
 * If you are looking for production-ready output files, see mode: "production" (https://webpack.js.org/configuration/mode/).
 */
/******/ (function() { // webpackBootstrap
/******/ 	var __webpack_modules__ = ({

/***/ "./src/js/main.js":
/*!************************!*\
  !*** ./src/js/main.js ***!
  \************************/
/***/ (function() {

eval("const navButton = document.querySelector('.page-header__nav-button')\nconst mainNav = document.querySelector('.page-header__nav-wrapper')\n\nnavButton.onclick = function (evt) {\n  evt.preventDefault()\n  navButton.classList.toggle('nav-button--open')\n  mainNav.classList.toggle('show-navigation')\n}\n\nlet swiper\n\nif (window.innerWidth < 700) {\n  swiper = new Swiper('.swiper', {\n    direction: 'horizontal',\n    loop: true,\n    autoHeight: false,\n\n    pagination: {\n      el: '.swiper-pagination',\n    },\n  })\n} else {\n  // Деактивировать и удалить Swiper на экранах меньше 700px\n  if (swiper) {\n    swiper.destroy()\n    swiper = null // Очистить ссылку на Swiper\n  }\n}\n\nconst swiperMain = new Swiper('#swiper-main', {\n  direction: 'horizontal',\n  loop: true,\n  autoHeight: true,\n  navigation: {\n    nextEl: '.swiper-button-next',\n    prevEl: '.swiper-button-prev',\n  },\n\n  pagination: {\n    el: '.swiper-pagination',\n  },\n})\n\ndocument.addEventListener('DOMContentLoaded', () => {\n  const footerBlock = document.querySelector('.footer__button')\n\n  if (footerBlock) {\n    footerBlock.addEventListener('click', () => {\n      window.scrollTo({\n        top: 0,\n        behavior: 'smooth',\n      })\n    })\n  }\n})\n\nif (window.innerWidth < 700) {\n  document.addEventListener('DOMContentLoaded', () => {\n    const slides = document.querySelectorAll('.swiper-slide__reviews')\n    const button = document.querySelector('.reviews__button')\n    let currentIndex = 0\n\n    const showSlide = (index) => {\n      slides.forEach((slide, i) => {\n        slide.style.display = i <= index ? 'block' : 'none'\n      })\n    }\n\n    const showNextSlide = () => {\n      currentIndex = (currentIndex + 1) % slides.length\n      showSlide(currentIndex)\n    }\n\n    showSlide(currentIndex)\n\n    if (button) {\n      button.addEventListener('click', () => {\n        showNextSlide()\n      })\n    }\n  })\n}\n\nconst coursesNewbie = document.querySelectorAll('.courses-versus__link')\nconst coursesVersusText = document.querySelectorAll('.courses-versus__mid')\n\ncoursesNewbie.forEach((el, i) => {\n  el.addEventListener('click', (evt) => {\n    evt.preventDefault()\n\n    // Убираем класс 'block' со всех элементов coursesVersusText\n    coursesVersusText.forEach((textElement, index) => {\n      if (index === i) {\n        textElement.classList.add('block')\n      } else {\n        textElement.classList.remove('block')\n      }\n    })\n  })\n})\n\n\n//# sourceURL=webpack://template/./src/js/main.js?");

/***/ })

/******/ 	});
/************************************************************************/
/******/ 	
/******/ 	// startup
/******/ 	// Load entry module and return exports
/******/ 	// This entry module can't be inlined because the eval devtool is used.
/******/ 	var __webpack_exports__ = {};
/******/ 	__webpack_modules__["./src/js/main.js"]();
/******/ 	
/******/ })()
;