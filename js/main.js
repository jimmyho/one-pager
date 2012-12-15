
$(document).ready(function($) {
    // scroll to for all '.nav a'
    $('.nav a').click(function(event){
        event.preventDefault(); 

        var to_elem = $(this).attr('href')
        if (to_elem && $(to_elem).length == 1 ) {
            $.scrollTo($(to_elem), 800)
        } else {
            console.log('Cannot scroll to: '+ to_elem);
        }
    });

});