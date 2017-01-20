'use strict';
var index = $$('.ptr-content-index.pull-to-refresh-content');
var user = $$('.ptr-content-user.pull-to-refresh-content');
var info = $$('.ptr-content-info.pull-to-refresh-content');
var other = $$('.ptr-content-other.pull-to-refresh-content');
var userview = $$('.ptr-content-userview.pull-to-refresh-content');


index.on('ptr:pullend', function (e) {
  setTimeout(function () {
    var i = Math.floor(Math.random() * 5);
    var timer = i * 1000;
    var loaded = "";
    wd.pullToRefreshDone();
  }, 2000);
});

user.on('ptr:pullend', function (e) {
  setTimeout(function () {
    var i = Math.floor(Math.random() * 5);
    var timer = i * 1000;
    var loaded = "";
    wd.pullToRefreshDone();
  }, 2000);
});

info.on('ptr:pullend', function (e) {
  setTimeout(function () {
    var i = Math.floor(Math.random() * 5);
    var timer = i * 1000;
    var loaded = "";
    wd.pullToRefreshDone();
  }, 2000);
});

other.on('ptr:pullend', function (e) {
  setTimeout(function () {
    var i = Math.floor(Math.random() * 5);
    var timer = i * 1000;
    var loaded = "";
    wd.pullToRefreshDone();
  }, 2000);
});

userview.on('ptr:pullend', function (e) {
  setTimeout(function () {
    var i = Math.floor(Math.random() * 5);
    var timer = i * 1000;
    var loaded = "";
    wd.pullToRefreshDone();
  }, 2000);
});