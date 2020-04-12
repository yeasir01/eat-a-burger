"use strict";

function renderData() {
    $.ajax({
        url: '/api/burgers',
        method: 'GET'
    }).then(data => {
        var left = $('.burgerQ');
        var right = $('.burgerD');
        left.empty();
        right.empty();

        for (let i = 0; i < data.length; i++) {
            if (data[i].devoured === true) {
                $(`<li>${data[i].burger}<button class="devour-btn" id="${data[i].id}">Devour</button></li>`).appendTo(left);
            } else {
                $(`<li>${data[i].burger}<button class="remove-btn" id="${data[i].id}">Remove</button></li>`).appendTo(right);
            }
        };
    });
}

renderData();