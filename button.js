$(document).ready(function(){
    'use strict';

    // Button onClick function, redirects to True North Inc site
    $('#button').on('click', function() {
        document.location.href = "http://truenorthinc.com";
    })

    // Use localStorage to save & update a counter value, that persists even after you leave the page on redirect
    localStorage.setItem('clickCounter', 1);
    let counterValue = localStorage.getItem('clickCounter')

    $('.click-counter').text(counterValue)

});
