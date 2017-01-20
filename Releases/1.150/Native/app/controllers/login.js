setInterval(function () {
  var UserData = {
    name: document.getElementById('app-user-name-value').value,
    password: document.getElementById('app-user-password-value').value,
    canceled: false
  }
  if (Cache.User.Data.hasEverLogedIn == false) {
    document.getElementById('app-user-btn-login').style.display = 'block';
    document.getElementById('app-user-btn-logout').style.display = 'none';
    if (Cache.User.Session.logScreen.hasOpenLogScreen == true) {
      if (UserData.name == '' && UserData.password == '') {
        Cache.User.Session.logScreen.hasTypedIn = false;
      } else {
        Cache.User.Session.logScreen.hasTypedIn = true;
      }
    }
  } else if (Cache.User.Data.hasEverLogedIn == true) {
    document.getElementById('app-user-btn-login').style.display = 'none';
    document.getElementById('app-user-btn-logout').style.display = 'block';
  }
  validateLog();
}, 1000);

function validateLog() {
  var Screen = document.getElementById('app-page-loginscreen').style.display;
  var Name = document.getElementById('app-user-name-value').value;
  if (Screen == 'block') {
    if (Cache.User.Session.logScreen.isDefaultClosed == true) {
      Cache.User.Session.logScreen.hasOpenLogScreen = true;
      Cache.User.Session.logScreen.isDefaultClosed = false;
    }
  } else if (Screen == 'none') {
    if (Cache.User.Session.logScreen.isDefaultClosed == false) {
      if (Cache.User.Data.hasEverLogedIn == true) {
        Cache.User.Credentials.verifiedInLogScreen = true;
      } else if (Cache.User.Data.hasEverLogedIn == false) {
        Cache.User.Credentials.verifiedInLogScreen = false;
        Cache.User.Data.account.username = null;
        Cache.User.Data.account.password = null;
        Cache.User.Data.account.rk = 0;
        Cache.User.Data.account.status = null;
        Cache.User.Data.account.options = [0, 0, 0, 0, 0, 0, 0];
        Cache.User.Credentials.verifiedInLogScreen = false;
      }
    } else if (Cache.User.Session.logScreen.isDefaultClosed == true) {
      Cache.User.Data.hasEverLogedIn = false;
      Cache.User.Data.account.username = null;
      Cache.User.Data.account.password = null;
      Cache.User.Data.account.rk = 0;
      Cache.User.Data.account.status = null;
      Cache.User.Data.account.options = [0, 0, 0, 0, 0, 0, 0];
      Cache.User.Credentials.verifiedInLogScreen = false;
    }
  }
  switch (Cache.User.Session.logScreen.hasTypedIn) {
    case true:
      // catchUser();
      break;
    case false:
      Cache.User.Data.account.username = null;
      Cache.User.Data.account.password = null;
      Cache.User.Data.account.rk = 0;
      Cache.User.Data.account.status = null;
      Cache.User.Data.account.options = [0, 0, 0, 0, 0, 0, 0];
      Cache.User.Credentials.verifiedInLogScreen = false;
      break;
  }
}


class Verify {
  constructor(username) {
    this.vrfy = {
      user: username.user,
      hastyped: false,
      openLogScreen: false,
      closeLog: false,
      hadErrors: [0, 0, 0],
      CErrors: 0
    };
  }
  Credentials() {
    this.vrfy.hastyped = Cache.User.Session.logScreen.hasTypedIn;
    this.vrfy.closeLog = Cache.User.Session.logScreen.hasClosedLogScreen;
    this.vrfy.CErrors = Cache.User.Credentials.Errors.Counter;
    this.vrfy.openLogScreen = Cache.User.Session.hasOpenLogScreen;

    if (Cache.User.Credentials.Errors.Counter != 0) {
      if (Cache.User.Credentials.Errors.passwordError == true) {
        this.vrfy.hadErrors[0] = 1;
      }
      if (Cache.User.Credentials.Errors.usernameError == true) {
        this.vrfy.hadErrors[1] = 1;
      }
      if (Cache.User.Credentials.Errors.validateError == true) {
        this.vrfy.hadErrors[2] = 1;
      }
    }
    console.log(this.vrfy);
  }
}


function val() {
  if (Cache.User.Data.hasEverLogedIn) {
    wd.showTab('app-page-ui')
  } else {
    wd.loginScreen();
  }
}

function userPerform(username, password) {
  var dbo = LocalDb.Users;
  var me = new Verify({
    user: username
  });
  if (username == '' || password == '') {
    wd.addNotification({
      title: 'Error',
      subtitle: 'Los campos no pueden estar vacios.'
    });
  } else if (username == ' ' || password == ' ') {
    wd.addNotification({
      title: 'Error',
      subtitle: 'Los parametros son incorrectos.'
    });
  } else if (dbo[username]) {
    if (dbo[username].username == username) {
      if (dbo[username].username == LocalDb.getType[dbo[username].temp]) {
        if (dbo[username].password == password) {
          Cache.User.Data.account.username = dbo[username].username;
          Cache.User.Data.account.password = dbo[username].password;
          Cache.User.Data.account.rk = dbo[username].rk;
          Cache.User.Data.account.status = 'Verified';
          Cache.User.Data.hasEverLogedIn = true;
          wd.addNotification({
            title: 'Bienvenido',
            subtitle: 'Has iniciado sesion.'
          });
          Cache.User.Session.attempToLog = true;
          me.Credentials();
          generateUserView();
          wd.closeModal();
        } else if (dbo[username].password != password) {
          Cache.User.Data.account.username = null;
          Cache.User.Data.account.password = null,
            Cache.User.Data.account.rk = 0;
          Cache.User.Data.account.status = 'passwordError';
          Cache.User.Data.hasEverLogedIn = true;
          if (Cache.User.Credentials.Errors.Counter > 3) {
            wd.addNotification({
              title: 'Error',
              subtitle: 'Demasidos intentos.'
            });
            Cache.User.Credentials.banned = true;
          } else {
            wd.addNotification({
              title: 'Error',
              subtitle: 'Las contraseñas no coinciden.'
            });
          }
          Cache.User.Session.attempToLog = true;
          Cache.User.Credentials.Errors.passwordError = true;
          Cache.User.Credentials.Errors.Counter++;
        }
      } else if (dbo[username].username != LocalDb.getType[dbo[username].temp]) {
        Cache.User.Data.account.username = null;
        Cache.User.Data.account.password = null,
          Cache.User.Data.account.rk = 0;
        Cache.User.Data.account.status = 'validateError';
        Cache.User.Data.hasEverLogedIn = true;
        if (Cache.User.Credentials.Errors.Counter > 3) {
          wd.addNotification({
            title: 'Error',
            subtitle: 'Demasiados intentos'
          });
          Cache.User.Credentials.banned = true;
        } else {
          wd.addNotification({
            title: 'Error',
            subtitle: 'No se ha podido validar la cuenta.'
          });
          Cache.User.Session.attempToLog = true;
          Cache.User.Credentials.Errors.validateError = true;
          Cache.User.Credentials.Errors.Counter++;
        }
      }
    } else if (dbo[username].username != username) {
      Cache.User.Data.account.username = null;
      Cache.User.Data.account.password = null;
      Cache.User.Data.account.rk = 0;
      Cache.User.Data.account.status = 'usernameError';
      Cache.User.Data.hasEverLogedIn = true;
      if (Cache.User.Credentials.Errors.Counter > 3) {
        wd.addNotification({
          title: 'Error',
          subtitle: 'Demasiados intentos.'
        });
        Cache.User.Credentials.banned = true;
      } else {
        wd.addNotification({
          title: 'Error',
          subtitle: 'No se ha podido encontrar el usuario.'
        });
        Cache.User.Session.attempToLog = true;
        Cache.User.Credentials.Errors.usernameError = true;
        Cache.User.Credentials.Errors.Counter++;
      }
    }
  } else if (!dbo[username]) {
    Cache.User.Data.account.username = null;
    Cache.User.Data.account.password = null;
    Cache.User.Data.account.rk = 0;
    Cache.User.Data.account.status = 'usernameError';
    Cache.User.Data.hasEverLogIn = true;
    if (Cache.User.Credentials.Errors.Counter > 3) {
      wd.addNotification({
        title: 'Error',
        subtitle: 'Demasiados intentos.'
      });
      Cache.User.Credentials.banned = true;
    } else {
      wd.addNotification({
        title: 'Error',
        subtitle: 'No se ha encontrado el usuario.'
      });
      Cache.User.Session.attempToLog = true;
      Cache.User.Credentials.Errors.usernameError = true;
      Cache.User.Credentials.Errors.Counter++;
    }
  }
}





function logIn() {
  wd.loginScreen();
}

function logOut(){
  
}

function getData(form) {
  var data = wd.formToData(form);
  alert(JSON.stringify(data));
}
