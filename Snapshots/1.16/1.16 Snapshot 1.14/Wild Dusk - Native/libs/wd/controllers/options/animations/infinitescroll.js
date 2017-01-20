'use strict';

var loading = false;
var lastIndex = $$('.list-block li').length;
var maxItems = 20;
var itemsPerLoad = 5;
$$('.infinite-scroll').on('infinite', function () {
  if (loading) return;
  loading = true;
  setTimeout(function () {
    loading = false;

    if (lastIndex >= maxItems) {
      wd.detachInfiniteScroll($$('.infinite-scroll'));
      $$('.infinite-scroll-preloader').remove();
      return;
    }
    var html = '';
    for (var i = lastIndex + 1; i <= lastIndex + itemsPerLoad; i++) {
      html += '<li class="item-content"><div class="item-inner"><div class="item-title">Item ' + i + '</div></div></li>';
    }
    $$('.list-block ul').append(html);
    lastIndex = $$('.list-block li').length;
  }, 1000);
});