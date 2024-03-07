(function ($) {

    $(document).ready(function () {


        $(".container-port-img").hover(function () {

            $(this).children('.port-img').show('slow');
            $(this).children('.text').slideToggle('slow');

        }, function () {
            $(this).children("img").fadeTo(200, 1)
                .end().children(".port-text").hide();
            $(this).children('.port-img').hide('slow');
            //.end().children(".hover").slideToggle("slow");

        });
    });

})(jQuery);