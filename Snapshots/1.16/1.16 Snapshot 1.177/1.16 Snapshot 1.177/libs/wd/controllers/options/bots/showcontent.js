'use strict';

function showContent(id, timeout) {
  setTimeout(function () {
    document.getElementById(id).style.display = 'block';
  }, timeout);
}