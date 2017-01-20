var wd = new Framework7({
  cache: true,
  cacheDuration: 1000 * 60 * 5,
  fastClicks: true,
  fastClicksDelayBetweenClicks: 50,
  fastClicksDistanceThresHold: 10,
  activeState: true,
  tapHold: true,
  tapHoldDelay: 750,
  tapHoldPreventClicks: true,
  router: true,
  dynamicPageUrl: 'content-{{index}}',
  uniqueHistory: true,
  externalLinks: '.external',
  animatedNavBackIcon: true,
  animatePages: true,
  swipeBack: true,
  sortable: false,
  swipePanel: true,
  swipePanelCloseOpposite: true,
  swipePanelOnlyClose: true,
  swipePanelActiveArea: 5,
  modalTitle: 'Modal',
  modalButtonOk: 'Aceptar',
  modalButtonCancel: 'Cancelar',
  modalPreloaderTitle: 'Cargando',
  modalCloseByOutside: false,
  actionsCloseByOutside: true,
  popupCloseByOutside: true,
  modalUsernamePlaceholder: 'Usuario',
  modalPasswordPlaceholder: 'Contraseña',
  modalStack: true,
  smartSelectOpenIn: 'popup',
  smartSelectBackText: 'Aceptar',
  smartSelectPopupCloseText: 'Aceptar',
  smartSelectPickerCloseText: 'Listo',
  smartSelectSearchbar: true,
  notificationTitle: 'Wild Dusk',
  notificationMedia: 'icon.ico',
  notificationHold: 2700,
  preprocess: function (content, url, next) {
    if (url == 'user.html') {
      var template = Template7.compile(content);
      var resultContent = template({
        title: getUserName()
      })
    }
  }
});

var $$ = Dom7;

var viewMain = wd.addView('.view-main');

var user = {
  data: {
    local: {
      username: null,
      password: null,
      session: null,
      hasEverLoged: false
    }
  }
}

function openDefaultPopup(popup_name) {
  wd.popup(popup_name);
}

function openPage(page_name) {
  wd.showTab(page_name);
}

//Open photo browser on click
function openCarousel() {
  var myPhotoBrowserStandalone = wd.photoBrowser({
    photos: [
      'http://lorempixel.com/1024/1024/sports/1/',
      'http://lorempixel.com/1024/1024/sports/2/',
      'http://lorempixel.com/1024/1024/sports/3/',
    ]
  });
  myPhotoBrowserStandalone.open();
}

setInterval(function () {
  var UserData = {
    name: document.getElementById('app-user-name-value').value,
    password: document.getElementById('app-user-password-value').value,
    canceled: false
  }
  if (UserData.name == '' && user.data.local.hasEverLoged == false) {
    user.data.local.session = null;
    user.data.local.username = null;
  }
  if (UserData.name != '' || UserData.password != '') {
    console.debug('Attempting to log in');
  }
  if (UserData.password == '' && user.data.local.hasEverLoged == false) {
    user.data.local.session = null;
    user.data.local.password = null;
  }
  if (user.data.local.hasEverLoged == false) {
    switch (UserData.name) {
      case '':
        if (document.getElementById('app-page-loginscreen').style.display != 'block') {
          console.debug('No attemtps to log in detected.');
        } else {
          console.debug('Login screen has been opened');
        }
        break;
      case ' ':
        console.debug('Username is not correct');
        break;
    }
  }
}, 1000);

var cancel = document.getElementById('app-login-cancel');

cancel.onclick = userCanceled();

function userCanceled(bool) {
  if (bool == true) {
    console.log('User has canceled login');
  }
}

$$('#app-login-perform').on('click', function () {
  userPerform(document.getElementById('app-user-name-value').value, document.getElementById('app-user-password-value').value);
});

function userPerform(username, password) {
  var dbo = LocalDb.Users;
  if (dbo[username]) {
    console.log('User exists. Attempting to log in');

    if (dbo[username].password == password) {
      console.log('User successfully loged in');
      wd.closeModal();
      user.data.local.hasEverLoged = true;
    } else if (dbo[username].password != password) {
      console.log('Password incorrect');
    }
  } else if (!dbo[username]) {
    console.log('User does not exists');
  }
}

function openLogScreen() {
  wd.loginScreen();
}

function getData(form) {
  var data = wd.formToData(form);
  alert(JSON.stringify(data));
}

setInterval(function () {
  if (user.data.local.hasEverLoged == false) {
    document.getElementById('app-page-ui-title').innerHTML = 'Usuario Temporal';
    document.getElementById('app-user-btn-logout').style.display = 'none';
    document.getElementById('app-user-btn-login').style.display = 'block';
  } else {
    document.getElementById('app-page-ui-title').innerHTML = user.data.local.username;
    document.getElementById('app-user-btn-logout').style.display = 'block';
    document.getElementById('app-user-btn-login').style.display = 'none';
  }
}, 1000);