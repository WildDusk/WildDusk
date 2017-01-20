'use strict';

function progressbar() {
  var container = $$('body');
  if (container.children('.progressbar, .progressbar-infinite').length) return;
  wd.showProgressbar(container, 0);

  var progress = 0;

  function simulateLoading() {
    setTimeout(function () {
      var progressBefore = progress;
      progress += Math.random() * 20;
      wd.setProgressbar(container, progress);
      if (progressBefore < 100) {
        simulateLoading();
      } else {
        wd.hideProgressbar(container);
      }
    }, Math.random() * 200 + 200);
  }
  simulateLoading();
}