var uiTitle = document.getElementById('app-page-ui-title');
var basicInfo = {
  username: document.getElementById('ui-show-username'),
  status: document.getElementById('ui-show-status')
};
var getInfo = {
  username: document.getElementById('ui-show-validate'),
  rank: {
    rk: document.getElementById('ui-show-rank'),
    popup: document.getElementById('pop-rank-def'),
    popupText: document.getElementById('ui-show-rank-info')
  },
  version: document.getElementById('ui-show-version'),
  uuid: document.getElementById('ui-show-uuid')
}

function generateUserView() {
  uiTitle.innerHTML = String(Cache.User.Data.account.username);
  basicInfo.username.innerHTML = String(Cache.User.Data.account.username);
  basicInfo.status.innerHTML = String(Cache.User.Data.account.status);
  getInfo.username.innerHTML = String(Cache.User.Data.account.username);
  getInfo.rank.rk.innerHTML = String(Cache.User.Data.account.rk);
  getInfo.version.innerHTML = String(app.version);
  getInfo.uuid.innerHTML = String(LocalDb.Users[Cache.User.Data.account.username].genKey.uuid);
}

function generateUserControl() {
  if (Cache.User.Data.account.username != null) {
    var userInfo =
      '<div class="popup">' +
      '<div class="navbar">' +
      '<div class="navbar-inner">' +
      '<div class="left sliding"><a class="cursor link back" onclick="wd.closeModal()">Aceptar</a></div>' +
      '<div class="center sliding" id="app-page-gen-updates-title">' + Cache.User.Data.account.username + '</div>' +
      '</div>' +
      '</div>' +
      '<div class="content-block-title">' +
      'Informacion de Usuario' +
      '</div>' +
      '<div class="list-block">' +
      '<ul>' +
      '<li class="item-content">' +
      '<div class="item-media">' +
      '<i class="icon fa fa-user-circle-o"></i>' +
      '</div>' +
      '<div class="item-inner">' +
      '<div class="item-title">Username</div>' +
      '<div class="item-after">' + Cache.User.Data.account.username + '</div>' +
      '</div>' +
      '</li>' +
      '<li class="item-content">' +
      '<div class="item-media">' +
      '<i class="icon fa fa-archive"></i>' +
      '</div>' +
      '<div class= "item-inner">' +
      '<div class= "item-title">Rango</div>' +
      '<div class="item-after">' + Cache.User.Data.account.rk + '</div>' +
      '</div>' +
      '</li>' +
      '<li class="item-content">' +
      '<div class="item-media">' +
      '<i class="icon fa fa-barcode"></i>' +
      '</div>' +
      '<div class= "item-inner">' +
      '<div class= "item-title">ID</div>' +
      '<div class="item-after">' + LocalDb.Users[Cache.User.Data.account.username].genKey.uuid + '</div>' +
      '</div>' +
      '</li>' +
      '<li class="item-content">' +
      '<div class="item-media">' +
      '<i class="icon fa fa-book"></i>' +
      '</div>' +
      '<div class= "item-inner">' +
      '<div class= "item-title">En libreria</div>' +
      '<div class="item-after">Libro ' + LocalDb.Users[Cache.User.Data.account.username].temp + '</div>' +
      '</div>' +
      '</li>' +
      '</ul>' +
      '</div>' +
      '<div class="content-block-title">Informacion Avanzada</div>' +
      '<div class="list-block accordion-list">' +
      '<ul>' +
      '<li class="accordion-item">' +
      '<a href="#" class="item-content item-link">' +
      '<div class="item-inner">' +
      '<div class="item-title">{{item}pass(about[i])}</div>' +
      '</div>' +
      '</a>' +
      '<div class="accordion-item-content">' +
      '<div class="content-block">' +
      '<p>{{parse}pass(this.content.dbo.select[table.user].info)}</p>' +
      '</div>' +
      '</div>' +
      '</li>' +
      '<li class="accordion-item">' +
      '<a href="#" class="item-content item-link">' +
      '<div class="item-inner">' +
      '<div class="item-title">{{item}pass(about[i++])}</div>' +
      '</div>' +
      '</a>' +
      '<div class="accordion-item-content">' +
      '<div class="content-block">' +
      '<p>{{parse}pass(this.content.dbo.select[table.user].info)}</p>' +
      '</div>' +
      '</div>' +
      '</li>' +
      '</ul>' +
      '</div>' +
      '</div>';

    wd.popup(userInfo);
  } else {
    wd.addNotification({
      title: 'Error',
      subtitle: 'Para ejecutar esta accion debes iniciar sesion!'
    });
  }
}