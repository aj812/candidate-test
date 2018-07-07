$(document).ready(function(){
    'use strict';

    // Button onClick function, redirects to True North Inc site
    $('#button').on('click', function() {
        updateClickCounter();
        document.location.href = "http://truenorthinc.com";
    })

    // Use localStorage to save & update a counter value, that persists even after you leave the page on redirect
      // ( Clearing your cache will remove this data )
    let counterValue = localStorage.getItem('clickCounter')
    // If counter already exists in storage, use that value
    if (localStorage.getItem('clickCounter')) {
      $('.click-counter').text(counterValue);
    // If no counter already exists, create one and set to 0
    } else {
      localStorage.setItem('clickCounter', 0);
      $('.click-counter').text('0');
    }

    // Updates click counter by incrementing current value by 1 and setting new value
    const updateClickCounter = () => {
      let origCounterValue = localStorage.getItem('clickCounter')
      let newCounterValue = parseInt(origCounterValue) + 1;
      localStorage.setItem('clickCounter', newCounterValue);
    }

});
