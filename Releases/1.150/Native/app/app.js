var app = {
  version: 1.15
}


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
  popupCloseByOutside: false,
  modalUsernamePlaceholder: 'Usuario',
  modalPasswordPlaceholder: 'Contraseña',
  modalStack: true,
  smartSelectOpenIn: 'popup',
  smartSelectBackText: 'Aceptar',
  smartSelectPopupCloseText: 'Aceptar',
  smartSelectPickerCloseText: 'Listo',
  smartSelectSearchbar: true,
  notificationTitle: 'Wild Dusk',
  notificationHold: 2700
});

var $$ = Dom7;

var viewMain = wd.addView('.view-main');

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