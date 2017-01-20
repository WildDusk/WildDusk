'use strict';

var pages = {
  index: $$('.ptr-content-index.pull-to-refresh-content'),
  user: $$('.ptr-content-user.pull-to-refresh-content'),
  info: $$('.ptr-content-info.pull-to-refresh-content'),
  other: $$('.ptr-content-other.pull-to-refresh-content'),
  userview: $$('.ptr-content-userview.pull-to-refresh-content'),
  settings: $$('.prt-content-settings.pull-to-refresh-content')
};


pages.index.on('ptr:pullend', function (e) {
  setTimeout(function () {
    loadSettings();
    wd.pullToRefreshDone();
  }, 2000);
});

pages.user.on('ptr:pullend', function (e) {
  setTimeout(function () {
    loadSettings();
    wd.pullToRefreshDone();
  }, 2000);
});

pages.info.on('ptr:pullend', function (e) {
  setTimeout(function () {
    loadSettings();
    wd.pullToRefreshDone();
  }, 2000);
});

pages.other.on('ptr:pullend', function (e) {
  setTimeout(function () {
    loadSettings();
    wd.pullToRefreshDone();
  }, 2000);
});

pages.userview.on('ptr:pullend', function (e) {
  setTimeout(function () {
    loadSettings();
    wd.pullToRefreshDone();
  }, 2000);
});

pages.settings.on('ptr:pullend', function (e) {
  setTimeout(function () {
    loadSettings();
    wd.pullToRefreshDone();
  }, 2000);
});