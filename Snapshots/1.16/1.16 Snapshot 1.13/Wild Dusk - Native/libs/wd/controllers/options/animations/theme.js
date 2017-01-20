$$('input[name="color-radio"]').on('change', function () {
  if (this.checked) {
    $$('.view').removeClass('theme-pink theme-blue theme-red theme-black theme-gray theme-orange theme-yellow theme-lightblue theme-green');
    $$('.view').addClass('theme-' + $$(this).val());
  }
});
$$('input[name="layout-radio"]').on('change', function () {
  if (this.checked) {
    $$('.view').removeClass('layout-dark layout-white');
    $$('.view').addClass(this.value);
  }
});

var send =
  '<div class="popup">' +
  '<div class="list-block" id="app-settings-theme">' +
  '<ul>' +
  '<li>' +
  '<label class="label-radio item-content">' +
  '<input type="radio" name="color-radio" value="blue" checked="" />' +
  '<div class="item-inner">' +
  '<div class="item-title">Blue</div>' +
  '</div>' +
  '</label>' +
  '</li>' +
  '<li>' +
  '<label class="label-radio item-content">' +
  '<input type="radio" name="color-radio" value="gray">' +
  '<div class="item-inner">' +
  '<div class="item-title">Gray</div>' +
  '</div>' +
  '</label>' +
  '</li>' +
  '<li>' +
  '<label class="label-radio item-content">' +
  '<input type="radio" name="color-radio" value="black">' +
  '<div class="item-inner">' +
  '<div class="item-title">Black</div>' +
  '</div>' +
  '</label>' +
  '</li>' +
  '<li>' +
  '<label class="label-radio item-content">' +
  '<input type="radio" name="color-radio" value="lightblue">' +
  '<div class="item-inner">' +
  '<div class="item-title">Light Blue</div>' +
  '</div>' +
  '</label>' +
  '</li>' +
  '<li>' +
  '<label class="label-radio item-content">' +
  '<input type="radio" name="color-radio" value="yellow">' +
  '<div class="item-inner">' +
  '<div class="item-title">Yellow</div>' +
  '</div>' +
  '</label>' +
  '</li>' +
  '<li>' +
  '<label class="label-radio item-content">' +
  '<input type="radio" name="color-radio" value="orange">' +
  '<div class="item-inner">' +
  '<div class="item-title">Orange</div>' +
  '</div>' +
  '</label>' +
  '</li>' +
  '<li>' +
  '<label class="label-radio item-content">' +
  '<input type="radio" name="color-radio" value="pink">' +
  '<div class="item-inner">' +
  '<div class="item-title">Pink</div>' +
  '</div>' +
  '</label>' +
  '</li>' +
  '<li>' +
  '<label class="label-radio item-content">' +
  '<input type="radio" name="color-radio" value="green">' +
  '<div class="item-inner">' +
  '<div class="item-title">Green</div>' +
  '</div>' +
  '</label>' +
  '</li>' +
  '<li>' +
  '<label class="label-radio item-content">' +
  '<input type="radio" name="color-radio" value="red">' +
  '<div class="item-inner">' +
  '<div class="item-title">Red</div>' +
  '</div>' +
  '</label>' +
  '</li>' +
  '</ul>' +
  '</div>' +
  '</div>';