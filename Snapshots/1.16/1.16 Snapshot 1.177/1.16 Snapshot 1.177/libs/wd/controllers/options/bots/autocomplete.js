'use strict';

var autocomplete = wd.autocomplete({
    input: '#wd-login-username',
    openIn: 'dropdown',
    preloader: true,
    valueProperty: 'id',
    textProperty: 'name',
    limit: 5,
    dropdownPlaceholderText: 'Username',
    expandInput: false,
    source: function(autocomplete, query, render) {
        var results = [];
        if (query.length === 0) {
            render(results);
            return;
        }
        autocomplete.showPreloader();
        $$.ajax({
            url: './libs/wd/controllers/bots/users.json',
            method: 'GET',
            dataType: 'json',
            data: {
                query: query
            },
            success: function(data) {
                for (var i = 0; i < data.length; i++) {
                    if (data[i].name.toLowerCase().indexOf(query.toLowerCase()) >= 0) results.push(data[i]);
                }
                autocomplete.hidePreloader();
                render(results);
            }
        });
    }
});