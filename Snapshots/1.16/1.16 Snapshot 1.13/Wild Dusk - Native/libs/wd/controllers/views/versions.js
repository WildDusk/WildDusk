'use strict';

function versionPage(vName) {
  var show = "";

  progressbar();
  if (LocalDb.Version.get[vName]) {
    var gen = {
      version: LocalDb.Version.get[vName].vParse,
      name: LocalDb.Version.get[vName].vName,
      date: LocalDb.Version.get[vName].getDay(),
      feat: LocalDb.Version.get[vName].features.join("<br />- "),
      changes: LocalDb.Version.get[vName].changes.join("<br />- "),
      info: LocalDb.Version.get[vName].info.join("<br />- "),
      api: LocalDb.Version.get[vName].vValue.Minor
    }
    send();
    preloader();
  } else if (LocalDb.Version.get.all[vName]) {
    var gen = {
      version: LocalDb.Version.get[LocalDb.Version.get.all[vName]].vParse,
      name: LocalDb.Version.get[LocalDb.Version.get.all[vName]].vName,
      date: LocalDb.Version.get[LocalDb.Version.get.all[vName]].getDay(),
      feat: LocalDb.Version.get[LocalDb.Version.get.all[vName]].features.join("<br />- "),
      changes: LocalDb.Version.get[LocalDb.Version.get.all[vName]].changes.join("<br />- "),
      info: LocalDb.Version.get[LocalDb.Version.get.all[vName]].info.join("<br />- "),
      api: LocalDb.Version.get[LocalDb.Version.get.all[vName]].vValue.Minor
    }
    send();
    preloader();
  } else {
    wd.addNotification({
      title: 'Error',
      subtitle: 'No se ha encontrado la version.'
    });
    return console.error("ERROR: La base de datos no ha regresado ninguna informacion.");
  }

  function send() {

    var show =
      '<div class="popup popup-versions-unique">' +
      '<div class="navbar">' +
      '<div class="navbar-inner">' +
      '<div class="left"><a href="" class="link back" onclick="wd.hidePreloader();wd.closeModal(' + "'.popup-versions-unique'" + ');"><i class="icon icon-back"></i>Aceptar</a></div>' +
      '<div class="center">' + gen.name + '</div>' +
      '<div class="right">' + gen.version + '</div>' +
      '</div>' +
      '</div>' +
      '<div class="timeline" id="app-versions-unique">' +
      '<div class="timeline-item">' +
      '<div class="timeline-item-date">' + gen.version + '</div>' +
      '<div class="timeline-item-divider"></div>' +
      '<div class="timeline-item-content card">' +
      '<div class="card-header">' + gen.name + '</div>' +
      '<div class="card-content">' +
      '<div class="card-content-inner">' + gen.feat + '</div>' +
      '</div>' +
      '<div class="card-footer">Updated ' + gen.date + '</div>' +
      '</div>' +
      '</div>' +
      '<div class="timeline-item">' +
      '<div class="timeline-item-date">Logs</div>' +
      '<div class="timeline-item-divider"></div>' +
      '<div class="timeline-item-content">' +
      '<div class="timeline-item-inner">' +
      '<div class="timeline-item-title"><b>Cambios</b></div>' +
      '<div class="timeline-item-subtitle">' + gen.changes + '</div>' +
      '<div class="timeline-item-text">' + '</div>' +
      '</div>' +
      '<div class="timeline-item-inner">' +
      '<div class="timeline-item-title">' + gen.name + '</div>' +
      '<div class="timeline-item-subtitle">' + gen.info + '</div>' +
      '<div class="timeline-item-text">' + '</div>' +
      '</div>' +
      '</div>' +
      '</div>' +
      '</div>' +
      '</div>';

    wd.popup(show, true);
    showContent('app-versions-unique', 1700);
    return show;
  }
}

function showAllVersion() {
  progressbar();
  preloader();
  var page =
    '<div class="popup popup-versions-all">' +
    '<div class="navbar">' +
    '<div class="navbar-inner">' +
    '<div class="left"><a href="" class="link back" onclick="wd.hidePreloader();wd.closeModal(' + "'.popup-versions-all'" + ');"><i class="icon icon-back"></i>Aceptar</a></div>' +
    '<div class="center">Wild Dusk</div>' +
    '<div class="right">Versions</div>' +
    '</div>' +
    '</div>' +
    '<div class="list-block media-list" id="app-versions-all">' +
    '<ul>' +
    '<li>' +
    '<a class="item-content item-link" onclick="versionPage(0);">' +
    '<div class="item-media">' +
    '<img src="./libs/wd/icon/vrs/' + LocalDb.Version.get.Submarine.vName + '/icon.128.png" width="44">' +
    '</div>' +
    '<div class="item-inner">' +
    '<div class="item-title-row">' +
    '<div class="item-title">' + LocalDb.Version.get.Submarine.vName + '</div>' +
    '</div>' +
    '<div class="link version-name">Version ' + LocalDb.Version.get.Submarine.vParse + '</div>' +
    '</div>' +
    '</a>' +
    '</li>' +
    '<li>' +
    '<a class="item-content item-link" onclick="versionPage(1);">' +
    '<div class="item-media">' +
    '<img src="./libs/wd/icon/vrs/' + LocalDb.Version.get.Feather.vName + '/icon.128.png" width="44">' +
    '</div>' +
    '<div class="item-inner">' +
    '<div class="item-title-row">' +
    '<div class="item-title">' + LocalDb.Version.get.Feather.vName + '</div>' +
    '</div>' +
    '<div class="link version-name">Version ' + LocalDb.Version.get.Feather.vParse + '</div>' +
    '</div>' +
    '</a>' +
    '</li>' +
    '<li>' +
    '<a class="item-content item-link" onclick="versionPage(2);">' +
    '<div class="item-media">' +
    '<img src="./libs/wd/icon/vrs/' + LocalDb.Version.get.Marble.vName + '/icon.128.png" width="44">' +
    '</div>' +
    '<div class="item-inner">' +
    '<div class="item-title-row">' +
    '<div class="item-title">' + LocalDb.Version.get.Marble.vName + '</div>' +
    '</div>' +
    '<div class="link version-name">Version ' + LocalDb.Version.get.Marble.vParse + '</div>' +
    '</div>' +
    '</a>' +
    '</li>' +
    '<li>' +
    '<a class="item-content item-link" onclick="versionPage(3);">' +
    '<div class="item-media">' +
    '<img src="./libs/wd/icon/vrs/' + LocalDb.Version.get.Bucket.vName + '/icon.128.png" width="44">' +
    '</div>' +
    '<div class="item-inner">' +
    '<div class="item-title-row">' +
    '<div class="item-title">' + LocalDb.Version.get.Bucket.vName + '</div>' +
    '</div>' +
    '<div class="link version-name">Version ' + LocalDb.Version.get.Bucket.vParse + '</div>' +
    '</div>' +
    '</a>' +
    '</li>' +
    '<li>' +
    '<a class="item-content item-link" onclick="versionPage(4);">' +
    '<div class="item-media">' +
    '<img src="./libs/wd/icon/vrs/' + LocalDb.Version.get.Core.vName + '/icon.128.png" width="44">' +
    '</div>' +
    '<div class="item-inner">' +
    '<div class="item-title-row">' +
    '<div class="item-title">' + LocalDb.Version.get.Core.vName + '</div>' +
    '</div>' +
    '<div class="link version-name">Version' + LocalDb.Version.get.Core.vParse + '</div>' +
    '</div>' +
    '</a>' +
    '</li>' +
    '</ul>' +
    '</div>' +
    '</div>';
  wd.popup(page, true);
  showContent('app-versions-all', 1700);
  return page;
}