$(document).ready(function() {
    $('#show-more').on('click', function() {
        if ($(this).text() === 'Show More') {
            $('.card-container-ex').slideDown('slow');
            $(this).text('Show Less');
        } else {
            $('.card-container-ex').slideUp('slow');
            $(this).text('Show More');
        }
    });
});