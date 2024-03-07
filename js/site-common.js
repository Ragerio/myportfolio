$( document ).ready(function() {
    
   function animatethis(targetElement, speed) {
        $(targetElement).animate({ marginLeft: "-=10px"},
        {
            duration: speed,
            complete: function ()
            {
                targetElement.animate({ marginLeft: "+=10px" },
                {
                    duration: speed,
                    complete: function ()
                    {
                        animatethis(targetElement, speed);
                    }
                });
            }
        });
    };

//    animatethis($('#knight'), 1000);

});