$(document).ready(function() {
    $('#see-more').on('click', function() {
        $('.card-container-ex').slideDown('slow');
        $(this).hide();
    });
});