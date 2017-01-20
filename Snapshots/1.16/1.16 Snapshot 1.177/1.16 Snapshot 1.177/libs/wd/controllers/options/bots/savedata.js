'use strict';

$$('.form-to-data').on('click', function () {
  var loginData = wd.formToData('#wd-login');
  console.debug(JSON.stringify(loginData));
  wd.formStoreData('wd-login', loginData);
});