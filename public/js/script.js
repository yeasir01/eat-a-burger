"use strict";

$(document).ready(function () {

    function renderAll() {
        $.ajax({
            url: '/api/burgers',
            method: 'GET'
        }).then(data => {
            var left = $('.burgerQ');
            var right = $('.burgerD');
            left.empty();
            right.empty();

            for (let i = 0; i < data.length; i++) {
                if (data[i].devoured === false) {
                    $(`<li>${data[i].burger}<button class="devour-btn btn" id="${data[i].id}">Devour</button></li>`).appendTo(left);
                } else {
                    $(`<li>${data[i].burger}<button class="remove-btn btn" id="${data[i].id}">Remove</button></li>`).appendTo(right);
                }
            };
        });
    };

    renderAll();

    $('#submit').on('click', () => {
        event.preventDefault();
        const input = $('#burger-txt').val().trim();

        if (input === "" || input === null) {
            alert("nothing to save!")
        } else {
            $.ajax({
                url: "/api/burgers",
                method: "POST",
                data: ({
                    burger: input,
                    devoured: false
                })
            }).then(() => {
                renderAll()
                $('#burger-txt').val("")
            })
        }

    });

    $(document).on('click', '.devour-btn' , (event) => {
        
        let selected = event.target.id
        
        $.ajax({
            url: "/api/burgers/",
            method: "PUT",
            data: ({id: selected, devoured: true})
        }).then(()=>{
            renderAll();
        })

    });

    $(document).on('click', '.remove-btn' , (event) => {
        
        let selected = event.target.id
        
        $.ajax({
            url: `/api/burgers/${selected}`,
            method: "DELETE"
        }).then(()=>{
            renderAll();
        })

    });

}); //Document Ready End Tag