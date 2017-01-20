'use strict';

var color = {
  blue: document.getElementById('wd-color-blue'),
  gray: document.getElementById('wd-color-gray'),
  black: document.getElementById('wd-color-black'),
  lightblue: document.getElementById('wd-color-lightblue'),
  yellow: document.getElementById('wd-color-yellow'),
  orange: document.getElementById('wd-color-orange'),
  green: document.getElementById('wd-color-green'),
  pink: document.getElementById('wd-color-pink'),
  red: document.getElementById('wd-color-red')
};
var theme = {
  dark: document.getElementById('wd-theme-dark'),
  white: document.getElementById('wd-theme-white')
};

function setStyle() {
  function setColor() {
    if (color.blue.selected) {
      $$('.view').removeClass('theme-pink theme-blue theme-red theme-black theme-gray theme-orange theme-yellow theme-lightblue theme-green');
      $$('.view').addClass('theme-blue');
    } else if (color.gray.selected) {
      $$('.view').removeClass('theme-pink theme-blue theme-red theme-black theme-gray theme-orange theme-yellow theme-lightblue theme-green');
      $$('.view').addClass('theme-gray');
    } else if (color.black.selected) {
      $$('.view').removeClass('theme-pink theme-blue theme-red theme-black theme-gray theme-orange theme-yellow theme-lightblue theme-green');
      $$('.view').addClass('theme-black');
    } else if (color.lightblue.selected) {
      $$('.view').removeClass('theme-pink theme-blue theme-red theme-black theme-gray theme-orange theme-yellow theme-lightblue theme-green');
      $$('.view').addClass('theme-lightblue');
    } else if (color.yellow.selected) {
      $$('.view').removeClass('theme-pink theme-blue theme-red theme-black theme-gray theme-orange theme-yellow theme-lightblue theme-green');
      $$('.view').addClass('theme-yellow');
    } else if (color.orange.selected) {
      $$('.view').removeClass('theme-pink theme-blue theme-red theme-black theme-gray theme-orange theme-yellow theme-lightblue theme-green');
      $$('.view').addClass('theme-orange');
    } else if (color.green.selected) {
      $$('.view').removeClass('theme-pink theme-blue theme-red theme-black theme-gray theme-orange theme-yellow theme-lightblue theme-green');
      $$('.view').addClass('theme-green');
    } else if (color.pink.selected) {
      $$('.view').removeClass('theme-pink theme-blue theme-red theme-black theme-gray theme-orange theme-yellow theme-lightblue theme-green');
      $$('.view').addClass('theme-pink');
    } else if (color.red.selected) {
      $$('.view').removeClass('theme-pink theme-blue theme-red theme-black theme-gray theme-orange theme-yellow theme-lightblue theme-green');
      $$('.view').addClass('theme-red');
    }
  }

  function setTheme() {
    if (theme.dark.selected) {
      $$('.view').removeClass('layout-dark layout-white');
      $$('.view').addClass('layout-dark');
      $$('.toolbar').removeClass('layout-dark layout-white');
      $$('.toolbar').addClass('layout-dark');
      $$('.popup').removeClass('layout-dark layout-white');
      $$('.popup').addClass('layout-dark');
    } else if (theme.white.selected) {
      $$('.view').removeClass('layout-dark layout-white');
      $$('.view').addClass('layout-white');
      $$('.toolbar').removeClass('layout-dark layout-white');
      $$('.toolbar').addClass('layout-white');
      $$('.popup').removeClass('layout-dark layout-white');
      $$('.popup').addClass('layout-dark');
    } else {
      $$('.view').removeClass('layout-dark layout-white');
      $$('.toolbar').removeClass('layout-dark layout-white');
      $$('.popup').removeClass('layout-dark layout-white');
    }
  }

  setColor();
  setTheme();
}