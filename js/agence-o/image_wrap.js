(function ($) {

    $(document).ready(function () {
        $("#zone2  .list-articles:nth-child(2) .cxp-pagination article > a > img").wrap("<div class='wrappedimage'></div>");
$(".sr-group .sr-item-img img").wrap("<div class='wrappedimage'></div>");
$(".page-rubric .minimalist-articles.list-minimalist .gla-item a img").wrap("<div class='wrappedimage'></div>");
$(".article_list #zone2 .cxp-pagination .la-item a img").wrap("<div class='wrappedimage'></div>");
        $("#zone2 > div:nth-child(2) > div > div.main-title-with-link > a").appendTo($("#zone2 .list-articles:nth-of-type(2)"));
    });


})(jQuery);