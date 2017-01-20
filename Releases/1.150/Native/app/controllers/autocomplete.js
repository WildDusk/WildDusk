var autocompleteDropdownAjax = wd.autocomplete({
  input: '#app-user-name-value',
  openIn: 'dropdown',
  preloader: true, //enable preloader
  valueProperty: 'id', //object's "value" property name
  textProperty: 'name', //object's "text" property name
  limit: 10, //limit to 20 results
  dropdownPlaceholderText: 'Username',
  expandInput: true, // expand input
  source: function (autocomplete, query, render) {
    var results = [];
    if (query.length === 0) {
      render(results);
      return;
    }
    // Show Preloader
    autocomplete.showPreloader();
    // Do Ajax request to Autocomplete data
    $$.ajax({
      url: './app/controllers/userlist.json',
      method: 'GET',
      dataType: 'json',
      //send "query" to server. Useful in case you generate response dynamically
      data: {
        query: query
      },
      success: function (data) {
        // Find matched items
        for (var i = 0; i < data.length; i++) {
          if (data[i].name.toLowerCase().indexOf(query.toLowerCase()) >= 0) results.push(data[i]);
        }
        // Hide Preoloader
        autocomplete.hidePreloader();
        // Render items by passing array with result items
        render(results);
      }
    });
  }
});