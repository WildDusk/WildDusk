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
  version: document.getElementById('ui-show-version')
}

function generateUserView() {
  uiTitle.innerHTML = String(Cache.User.Data.account.username);
  basicInfo.username.innerHTML = String(Cache.User.Data.account.username);
  basicInfo.status.innerHTML = String(Cache.User.Data.account.status);
  getInfo.username.innerHTML = String(Cache.User.Data.account.username);
  getInfo.rank.rk.innerHTML = String(Cache.User.Data.account.rk);
  getInfo.version.innerHTML = String(app.version);

  switch (Cache.User.Data.account.rk) {
    case 0:
      getInfo.rank.popup.innerHTML = "Usuario";
      getInfo.rank.popupText.innerHTML = "Permisos basicos de usuario.<br />Vease los permisos en opciones.";
      break;
    case 1:
      getInfo.rank.popup.innerHTML = "Usuario+"
      getInfo.rank.popupText.innerHTML = "Permisos especiales en esta version de Usuario.<br />Vease los permisos en opciones.";
      break;
    case 2:
      getInfo.rank.popup.innerHTML = "Moderador";
      getInfo.rank.popupText.innerHTML = "Permisos Sub-OP.<br />Vease todos los permisos en opciones.";
      break;
    case 3:
      getInfo.rank.popup.innerHTML = "Administrador";
      getInfo.rank.popupText.innerHTML = "Permisos semi OP + opciones avanzadas.<br />Vease todos los permisos en opciones.";
      break;
    case 4:
      getInfo.rank.popup.innerHTML = "OP";
      getInfo.rank.popupText.innerHTML = "Permisos OP.<br />Vease todos los permisos en opciones.";
      break;
    default:
      getInfo.rank.popup.innerHTML = "Inicia Sesion";
      getInfo.rank.popupText.innerHTML = "Inicia Sesion para ver informacion de tu rango.";
      break;
  }
}