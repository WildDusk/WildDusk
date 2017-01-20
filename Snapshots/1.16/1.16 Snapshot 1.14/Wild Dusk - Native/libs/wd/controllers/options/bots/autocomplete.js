'use strict';

bot.autocomplete = wd.autocomplete({
  input: '#wd-login-user',
  openIn: 'dropdown',
  dropdownPlaceholderText: 'Usuario',
  source: function (autocomplete, query, render) {
    var results = [];
    if (query.length === 0) {
      render(results);
      return;
    }
    // Find matched items
    for (var i = 0; i < LocalDb.Users.Located.all.length; i++) {
      if (LocalDb.Users.get[i].toLowerCase().indexOf(query.toLowerCase()) >= 0) results.push(LocalDb.Users.Located.all[i]);
    }
    // Render items by passing array with result items
    render(results);
  }
});
