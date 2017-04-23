/**
 * Main JS file for Casper behaviours
 */

/* globals jQuery, document */
(function ($, undefined) {
    "use strict";

    var $document = $(document);
    var $preImg = $(".posts-link");

    $document.ready(function () {

        var $postContent = $(".post-content");
        $postContent.fitVids();

        // $(".scroll-down").arctic_scroll();

        // $(".menu-button, .nav-cover, .nav-close").on("click", function(e){
        //     e.preventDefault();
        //     $("body").toggleClass("nav-opened nav-closed");
        // });
        change_imgHeight();
        
        $(window).resize(function() {
        	change_imgHeight();
        })

        $preImg.hover( 
            /* MouseOn*/
            function() {
                var $image = $(this).children(".link-img");
                var $view_more = $(this).children(".view-more");

                $image.css({
                    "-moz-transition": "all 0.4s ease-in-out",
                    "-webkit-transition": "all 0.4s ease-in-out",
                    "transition": "all 0.4s ease-in-out",
                    "-webkit-filter": "blur(2px)",
                    "-moz-filter": "blur(2px)",
                    "-ms-filter": "blur(2px)",
                    "-o-filter": "blur(2px)",
                    "filter": "blur(2px)",
                    "background-color": "rgba(0,0,0,0.8)"
                });

                $view_more.css({
                    "display": "inline-block"
                });

            /* MouseOut */
            }, function() {
                var $image = $(this).children(".link-img");
                var $view_more = $(this).children(".view-more");

                $image.css({
                    "-webkit-filter": "blur(0px)",
                    "-moz-filter": "blur(0px)",
                    "-ms-filter": "blur(0px)",
                    "-o-filter": "blur(0px)",
                    "filter": "blur(0px)",
                    "background-color": "rgba(0,0,0,0.1)"
                });

                $view_more.css({
                    "display": "none"
                });
        });
    });


	function change_imgHeight() {
    	var parentWidth = $preImg.parent(".post").width();
        var height = parentWidth * 0.65;
        $preImg.css({"height": height});
    }

    // Arctic Scroll by Paul Adam Davis
    // https://github.com/PaulAdamDavis/Arctic-Scroll
    // $.fn.arctic_scroll = function (options) {

    //     var defaults = {
    //         elem: $(this),
    //         speed: 500
    //     },

    //     allOptions = $.extend(defaults, options);

    //     allOptions.elem.click(function (event) {
    //         event.preventDefault();
    //         var $this = $(this),
    //             $htmlBody = $('html, body'),
    //             offset = ($this.attr('data-offset')) ? $this.attr('data-offset') : false,
    //             position = ($this.attr('data-position')) ? $this.attr('data-position') : false,
    //             toMove;

    //         if (offset) {
    //             toMove = parseInt(offset);
    //             $htmlBody.stop(true, false).animate({scrollTop: ($(this.hash).offset().top + toMove) }, allOptions.speed);
    //         } else if (position) {
    //             toMove = parseInt(position);
    //             $htmlBody.stop(true, false).animate({scrollTop: toMove }, allOptions.speed);
    //         } else {
    //             $htmlBody.stop(true, false).animate({scrollTop: ($(this.hash).offset().top) }, allOptions.speed);
    //         }
    //     });

    // };
})(jQuery);


