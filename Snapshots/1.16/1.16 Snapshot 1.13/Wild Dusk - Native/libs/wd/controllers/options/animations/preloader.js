'use strict';

function preloader() {
  wd.showPreloader();
  setTimeout(function () {
    wd.hidePreloader();
  }, 1900);
}