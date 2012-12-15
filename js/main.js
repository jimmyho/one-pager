
$(document).ready(function($) {

    $('.nav a').click(function(event){
        event.preventDefault(); 

        var to_elem = $(this).attr('href')
        if (to_elem && $(to_elem).length == 1 ) {
            $.scrollTo($(to_elem), 800)
        } else {
            console.log('Element not found: '+ to_elem);
        }
    });

});