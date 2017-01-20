'use strict';

function loadSettings() {
  loadStyle();
  loadUserAccount();
}

function loadStyle() {
  setStyle();
}

function loadUserAccount() {
  var loginData = wd.formGetData('wd-login');
  wd.formFromData('#wd-login', loginData);
}